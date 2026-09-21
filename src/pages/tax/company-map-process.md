---
layout: ../../layouts/Documentation.astro
title: Company Mapping Process
permalink: /tax/company-map-process
---

This page explains how to review or customize a company's statutory mappings without changing the underlying statutory meaning.

## How values reach Tax Hub

For a configurable accounting component, the chain is:

`Transactions → Cash Codes → Category Tree → statutory component → Tax Hub`

Transactions are recorded against Cash Codes. Each Cash Code belongs to a category, and categories may roll up into totals. A statutory component can use an entire category or a specific Cash Code when a finer distinction is required.

The statutory projection then combines those mapped components with:

- calculated statement or computation totals;
- account balances;
- business identity and registration data;
- reporting-period context; and
- reviewed workflow inputs.

This separation prevents a transaction mapping from being used to manufacture a legal declaration, tax election or calculated result.

## Start with the supplied template

The selected company initialization template creates the accounting Category Tree and installs the current company statutory projection. MIN provides the compact accounting structure; STD adds more detailed operational Cash Codes and asset classifications.

These are starting defaults, not a locked chart of accounts. You may reorganize the Category Tree and mappings to suit the business, provided each statutory component remains complete, deterministic and free from double counting.

## Review a source

Open [Tax Configurator](/tax/tax-configurator), then:

1. select the jurisdiction;
2. select **Company Accounts**, **Corporation Tax** or **CT600 Return**;
3. inspect the component fields and their current mappings;
4. select **Validate** to identify missing, disabled or conflicting mappings; and
5. review the projected result in Tax Hub.

Only component fields can be mapped. Calculated totals and values supplied through configuration or workflow are read-only.

## Choose between a category and Cash Code

Map a category when its complete total has exactly the required statutory meaning. Map a Cash Code when only one part of a broader category belongs in that field.

Avoid mapping both a parent total and one of its contributing children to the same statutory amount. That would count the same activity twice.

## Checks before accepting a change

- The mapping covers the intended accounting activity for both the current and comparative periods.
- Income and expense classifications have not been selected merely because their labels look similar.
- Fixed assets use net carrying values appropriate to the accounts projection.
- Short-term and long-term creditors remain distinguishable.
- Book depreciation feeds the reviewed Corporation Tax add-back, not capital allowances.
- CT600 values derived from the computation are not duplicated by independent mappings.
- An unsupported or inapplicable field remains absent rather than being forced to zero.
- Validation completes without an unexplained error or warning.

## Common problems

### A transaction is missing

Check that it uses the intended Cash Code, that the Cash Code belongs to the correct category and that the relevant component mapping is enabled.

### A value is doubled

Look for overlapping category and Cash Code mappings, or a parent category mapped alongside one of its children.

### Accounts and Corporation Tax differ

Some differences are expected. Accounting profit is adjusted by the reviewed tax computation. Investigate unexplained differences, but do not force the accounts and taxable result to match.

### A statutory field cannot be mapped

It may be calculated, contextual, conditional or owned by the filing workflow. If the accounting data cannot provide a legitimate deterministic source, leave it unmapped and resolve the corresponding readiness or workflow requirement in the appropriate area.

See [Company Statutory Mapping](/tax/company-map) for the default supply boundaries.
