---
layout: ../../layouts/Documentation.astro
title: Company MTD Mapping Process (CT600)
permalink: /tax/company-map-process
---

This page explains, step by step, how Trade Control builds the company MTD CT600 micro-accounts mapping from template definitions and live transactions.

It is aimed at technical implementers and advanced users who need to understand the mapping pipeline rather than the user interface.

This document focuses on:

- the mapping chain from transactions to AC-codes
- how categories and cash codes are resolved
- how the template stack (`BASE_MIN_2026`, `MICRO_CUR_2026`, `MICRO_CUR_STD_2026`) contributes to the final result
- how the mapping is validated and where it can fail

For an overview of what the MTD interface shows, see `company-map.md`.

## 1. High-level mapping chain

At a high level, the mapping process is:

- Transactions are posted to cash codes.
- Cash codes belong to categories in the Category Tree.
- Categories roll up into reporting groups.
- Reporting groups are mapped to AC-codes for CT600 micro-accounts.
- The resolved AC-code totals are exposed in the MTD CT600 interface.

In shorthand:

`Transactions → Cash Codes → Categories → Reporting Groups → AC-codes → MTD CT600`

Each stage is deterministic and defined by the template stack.

## 2. From transactions to cash codes

### 2.1 Posting transactions

Operational activity is recorded as transactions, for example sales, purchases, or wages.

Each transaction is posted to a cash code.

Cash codes represent the smallest operational buckets, for example sales, materials, subcontractors, rent, or bank charges.

The choice of cash code is a configuration decision in the company’s chart of accounts.

The mapping process assumes:

- every transaction has a valid cash code
- cash codes are correctly assigned to categories in the template layer

If a transaction uses a cash code that is not mapped to a category in the Profit Root, it will not contribute to any AC-code total.

## 3. From cash codes to categories

### 3.1 Category membership

Each cash code is assigned to exactly one category in the Category Tree.

Examples, names illustrative and not exhaustive:

- `CC-SALES`, `CC-SALEM` → `CA-SALES`
- `CC-MATRL`, `CC-SUBCN`, `CC-FUEL`, `CC-MOTRV` → `CA-DIRECT`
- `CC-SALRY` → `CA-STAFF`
- `CC-BUILD`, `CC-RENT`, `CC-HEAT` → `CA-BUILD`
- `CC-ADMIN`, `CC-PHONE`, `CC-ADVTG`, `CC-BANKF` → `CA-ADMIN`
- Depreciation codes → `CA-DEPRC` and related categories

This assignment is defined in the template SQL:

- `BASE_MIN_2026` defines the core categories and initial cash codes.
- `MICRO_CUR_2026` and `MICRO_CUR_STD_2026` add and refine cash codes for micro accounts.

### 3.2 Category totals

For each category, the system totals all transactions posted to its cash codes.

- debit/credit logic is handled at the accounting layer
- the result is a category total for the period

These category totals are the primary inputs to the reporting groups and AC-codes.

## 4. From categories to reporting groups

### 4.1 Reporting group assignment

Categories are grouped into reporting groups that correspond to the micro-accounts structure, for example Turnover, Other Income, Direct Costs, Staff Costs, Admin, Premises, Depreciation, and Tax.

Examples:

- `CA-SALES` → Turnover
- `CA-OTHER` → Other income
- `CA-DIRECT` → Direct costs
- `CA-STAFF` → Staff costs
- `CA-ADMIN`, `CA-BUILD` → Admin / Premises, depending on configuration
- `CA-DEPRC` and related → Depreciation
- Tax categories → Tax on profit

The reporting group assignment is defined in the template layer and is stable for the micro-accounts format.

### 4.2 Reporting group totals

For each reporting group, the system sums the totals of all categories assigned to that group.

These reporting group totals are then mapped to AC-codes.

## 5. From reporting groups to AC-codes

### 5.1 AC-code mapping

The micro-accounts CT600 format uses a small set of AC-codes.

The mapping from reporting groups, and sometimes specific categories, to AC-codes is defined in `MICRO_CUR_2026` and refined in `MICRO_CUR_STD_2026`.

Typical examples:

- Turnover → `AC12`
- Other income → `AC405`
- Direct costs → `AC410`
- Staff costs → `AC415`
- Depreciation → `AC420`
- Other charges / admin → `AC425`
- Profit or loss → `AC34`
- Tax on profit → `AC435`

Additional codes such as `CP28` and `CP46` are used for capital and depreciation movements and are populated from specific categories and cash codes defined in the STD template.

### 5.2 AC-code totals

For each AC-code, the system:

- identifies the reporting groups and/or categories mapped to that AC-code
- sums their totals
- applies any required sign conventions or adjustments

The result is the resolved AC-code value used by the MTD CT600 interface.

## 6. Template layering and its effect on the mapping

The mapping process is driven by a template stack.

Each template contributes definitions and overrides.

### 6.1 `BASE_MIN_2026`

`BASE_MIN_2026` provides the foundation:

- defines core categories such as sales, direct costs, staff, admin, premises, depreciation, tax, and capital
- defines initial cash codes and assigns them to categories
- sets up basic capital accounts and minimal depreciation logic
- does not fully define micro-accounts AC-code mappings

If only `BASE_MIN_2026` were applied, the system would have a coherent Category Tree but no complete CT600 micro mapping.

### 6.2 `MICRO_CUR_2026`

`MICRO_CUR_2026` adds the micro-accounts layer:

- introduces the micro-accounts AC-codes
- maps reporting groups and categories to those AC-codes
- ensures that all required micro-accounts lines have a defined source
- may add or adjust categories to align with micro reporting needs

After `MICRO_CUR_2026`, the system can produce a valid micro-accounts CT600 mapping, but with relatively coarse-grained categories and cash codes.

### 6.3 `MICRO_CUR_STD_2026`

`MICRO_CUR_STD_2026` refines the mapping for standard micro deployments:

- adds more granular cash codes, for example materials vs subcontractors, building vs general admin
- splits depreciation into separate categories, for example plant/tools, motor vehicles, and fixtures
- maps capital movements and depreciation adjustments to codes such as `CP28` and `CP46`
- overrides `BASE_MIN_2026` depreciation behaviour so that only the STD definitions drive the final totals

The final resolved mapping is the result of all three templates applied in order, with later templates overriding earlier ones where they define the same structures.

## 7. Validation and common failure cases

The mapping process includes validation to catch configuration and template issues before they surface as incorrect CT600 values.

### 7.1 Unmapped cash codes

**Symptom:**  
Transactions appear in the ledger but do not contribute to any AC-code total.

**Cause:**  
A cash code is not assigned to any category in the template layer.

**Resolution:**

- assign the cash code to the correct category
- re-run the mapping and confirm the category and AC-code totals update

### 7.2 Unmapped categories

**Symptom:**  
A category total is non-zero, but no AC-code shows the expected movement.

**Cause:**  
The category is not mapped to any reporting group or AC-code in `MICRO_CUR_2026` / `MICRO_CUR_STD_2026`.

**Resolution:**

- add or correct the category-to-reporting-group / AC-code mapping in the template
- ensure the change is consistent with the micro-accounts format

### 7.3 Conflicting template definitions

**Symptom:**  
Totals appear duplicated or missing after a template change.

**Cause:**

- a category or cash code is defined in multiple templates with inconsistent assignments
- an override in `MICRO_CUR_STD_2026` does not fully replace the `BASE_MIN_2026` behaviour

**Resolution:**

- review the relevant definitions in `BASE_MIN_2026` and `MICRO_CUR_STD_2026`
- ensure that the STD template provides a complete replacement where intended
- avoid partial overrides that leave orphaned or duplicated mappings

### 7.4 Depreciation and capital mismatches

**Symptom:**

- `CP28` / `CP46` values do not reconcile with equipment movements
- depreciation totals do not match expectations

**Cause:**

- capital cash codes not assigned correctly to equipment categories
- depreciation cash codes not aligned with the STD depreciation categories
- manual adjustments posted to unmapped codes

**Resolution:**

- verify that all equipment and depreciation cash codes are mapped to the correct categories
- confirm that `MICRO_CUR_STD_2026` definitions are in effect and not partially overridden

## 8. How the MTD CT600 interface uses the resolved mapping

Once the mapping chain has been resolved and validated:

- the system holds a complete set of AC-code totals for the period
- these totals are exposed to the MTD CT600 interface as read-only values
- the interface groups them into the micro-accounts structure, for example Turnover, Other income, and Direct costs
- any validation warnings, for example unmapped categories, are surfaced as configuration issues, not as editable CT600 fields

The interface does not recalculate or reinterpret the mapping.

It simply presents the resolved result of the template-driven pipeline described above.
