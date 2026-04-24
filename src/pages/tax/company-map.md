---
layout: ../../layouts/Documentation.astro
title: Company MTD Mapping (CT600)
permalink: /tax/company-map
---

This page explains how Trade Control presents **company account mappings** for the **MTD CT600** interface.

It is written for technical implementers and advanced users who need a clear understanding of how company accounts are surfaced, grouped, and validated for the first micro-accounts release.

The focus is on the **MTD interface**, not the internal template tree. Where the Category Tree is referenced, it is only to explain how a mapping resolves.

Abridged and full account formats will be added in later releases.

## Related technical documents

- [Company mapping process](/tax/company-map-process) - how Trade Control builds the company MTD CT600 micro-accounts mapping from template definitions and live transactions

## Scope

In scope:

- MTD CT600 company mapping interface
- Micro-accounts only
- Canonical reporting groups
- AC-code mapping model
- How mappings resolve into the Category Tree
- Template behaviour (`BASE`, `MICRO_CUR`, `MICRO_CUR_STD`) where relevant
- Validation and configuration notes

Out of scope:

- Abridged or full statutory accounts
- Detailed template internals
- Non-MTD reporting formats
- Future account formats not included in the first release

## 1. Overview of the MTD Company Mapping Interface

<div style="max-width: 900px; margin: 1rem 0;">
  <img src="/images/company-mtd-overview.png" alt="Company MTD Mapping Overview" style="width: 100%; height: auto; display: block; border-radius: 8px;" />
</div>

The Company MTD interface provides a **single, consolidated view** of how a business’s financial activity is mapped into the **CT600 reporting structure**.

The interface presents:

- Canonical reporting groups such as Turnover, Other Income, and Direct Costs
- AC-codes used by HMRC for CT600 micro-entity submissions
- Totals derived from the Category Tree
- Validation indicators for missing or inconsistent mappings

The user does **not** interact with the Category Tree directly.

Instead, the interface shows reporting totals, each backed by a deterministic mapping chain:

`AC-code → Reporting Group → Category → Cash Codes → Transactions`

This page explains how that chain works.

## 2. Canonical Reporting Groups

The micro-accounts CT600 format uses a small, stable set of reporting groups.

These appear directly in the MTD interface.

| Reporting Group | Description |
|---|---|
| Turnover | Sales income from normal trading activity |
| Other Income | Non-trading income, for example grants or sundry income |
| Direct Costs | Costs directly attributable to generating turnover |
| Staff Costs | Wages, salaries, subcontractors, and related staff cost headings |
| Admin Costs | General administrative overheads |
| Premises Costs | Rent, heat, light, and repairs |
| Depreciation | Depreciation charges for plant, vehicles, and fixtures |
| Tax | Corporation tax charge |
| Profit | Profit before tax or after tax, as required by CT600 micro |
| Capital / Balance Sheet | Equipment, adjustments, share capital, and reserves |

These groups are populated automatically using the mapping model described next.

## 3. AC-Codes Used in Micro-Accounts

The following AC-codes are used by the micro-entity CT600 format and are supported by the MTD interface.

| AC Code | Description | Source |
|---|---|---|
| `AC12` | Turnover | `MICRO_CUR_2026` |
| `AC405` | Other income | `MICRO_CUR_2026` |
| `AC410` | Direct costs | `MICRO_CUR_2026` |
| `AC415` | Staff costs | `MICRO_CUR_2026` |
| `AC420` | Depreciation | `MICRO_CUR_2026` / STD override |
| `AC425` | Other charges / admin | `MICRO_CUR_2026` |
| `AC34` | Profit or loss | `MICRO_CUR_2026` |
| `AC435` | Tax on profit | `MICRO_CUR_2026` |
| `CP28` | Additions to equipment | `MICRO_CUR_STD_2026` |
| `CP46` | Depreciation adjustments | `MICRO_CUR_STD_2026` |

These codes are surfaced directly in the MTD interface.

The mapping logic behind them is described below.

## 4. Mapping Model

The MTD interface uses a deterministic mapping chain:

`AC-code → Category → Cash Codes → Transactions`

### 4.1 AC-code assignment

<div style="max-width: 900px; margin: 1rem 0;">
  <img src="/images/company-mtd-micro-map.png" alt="Micro Accounts Mapping Example" style="width: 100%; height: auto; display: block; border-radius: 8px;" />
</div>

Each AC-code is mapped to a Category in the template layer:

- `BASE_MIN_2026` defines the foundational categories
- `MICRO_CUR_2026` assigns AC-codes to those categories
- `MICRO_CUR_STD_2026` refines or overrides mappings, for example depreciation splits

### 4.2 Category → Cash Code resolution

Each Category contains one or more cash codes.

These represent the operational buckets used by the business.

Examples:

- `CA-SALES` → `CC-SALES`
- `CA-SALES` → `CC-SALAB`
- `CA-SALES` → `CC-SAMAT`
- `CA-DIRECT` → `CC-MAT`
- `CA-DIRECT` → `CC-SUB`
- `CA-DIRECT` → `CC-FUEL`
- `CA-DIRECT` → `CC-MTRAV`
- `CA-ASSET` → `CC-DEPRC`
- `CA-ASSET` → `CC-DEPRJ`
- `CA-ASSET` → `CC-DEPPL`
- `CA-ASSET` → `CC-DEPMV`
- `CA-ASSET` → `CC-DEPFX`

### 4.3 Cash Code → Transaction totals

At runtime, the system totals all transactions assigned to the cash codes for a category.

These totals feed the AC-code values shown in the MTD interface.

### 4.4 Template stack behaviour

The template stack is additive:

**`BASE_MIN_2026`**

- Defines the core company tree, including sales, direct costs, staff, admin, premises, depreciation, tax, and capital
- Creates the foundational cash codes and assigns them to those categories
- Provides the minimum depreciation and tax structure used by the micro accounts release

**`MICRO_CUR_2026`**

- Adds the micro-accounts AC-codes
- Maps the reporting groups and categories to those AC-codes
- Provides the first complete micro-entity reporting surface for the MTD interface

**`MICRO_CUR_STD_2026`**

- Adds more granular cash codes for materials, subcontractors, building, and admin
- Splits depreciation into plant, vehicles, and fixtures
- Adds `CP28` and `CP46` mappings
- Overrides `BASE` depreciation behaviour so the STD definitions drive the final totals

The MTD interface always reflects the final resolved mapping after all template layers are applied.

## 5. Micro-Accounts Release

The first release supports:

- Micro-entity CT600 format
- Full AC-code mapping for micro accounts
- Standardised reporting groups
- Deterministic mapping from template to MTD interface
- Automatic validation of missing or unmapped categories

Not included:

- Abridged accounts
- Full accounts
- Director disclosures
- Notes to the accounts
- Multi-format switching

These will be added in later releases.

## 6. How the Category Tree Fits In

The [Category Tree](/cash/category-tree-getting-around) is the internal semantic model used by the platform.

It is not shown directly in the MTD interface.

The tree provides:

- Category definitions
- Cash code membership
- Roll-ups
- Expression categories for profit, tax, and depreciation
- Capital account structure

The MTD interface consumes totals, not the tree itself.

You only need to reference the Category Tree when:

- diagnosing a missing total
- understanding why a value appears under a specific AC-code
- validating template overrides
- extending the template for custom deployments

## 7. Validation and Configuration Notes

The MTD interface performs several checks:

- Unmapped categories  
  Categories without AC-codes are flagged.

- Zero-value categories  
  Shown but not flagged; useful for diagnostics.

- Unexpected totals  
  Indicates a cash code assigned to the wrong category.

- Depreciation override checks  
  Ensures STD depreciation replaces BASE depreciation cleanly.

- Capital account consistency  
  Ensures `CP28` and `CP46` totals match equipment movements.

For implementers, the most common issues arise from:

- custom cash codes not assigned to categories
- category overrides that break roll-ups
- missing STD depreciation splits

