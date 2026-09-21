---
layout: ../../layouts/Documentation.astro
title: Sole-Trader MTD Income Tax Mapping
permalink: /tax/self-assessment-map
---

This guide explains how a sole trader's Trade Control accounting categories are projected into the cumulative MTD Income Tax view used by Tax Hub.

The supplied MIN and STD templates install working mappings. You normally need to change them only if you customize the [Category Tree](/cash/category-tree-getting-around), add Cash Codes or want a different valid grouping of your accounting activity.

## What the projection contains

Each MTD update reports cumulative values from the beginning of the tax year to the end of the selected update period. It is not a return for that quarter alone, and the fourth update is not the annual tax return.

The supported accounting projection contains:

- turnover;
- other business income; and
- either consolidated or detailed business expenses, depending on the selected accounting profile.

The projection does not recreate the retired SA100, SA103F or End of Period Statement structures.

## MIN and STD profiles

Both profiles report the same business activity, but at different levels of detail.

### MIN

The MIN profile maps:

| Tax Hub field | Default accounting source |
|---|---|
| Turnover | Turnover category |
| Other business income | Other-income category |
| Consolidated expenses | Cumulative-expenses total |

Use MIN when the business accounting structure does not distinguish all of the detailed statutory expense types. Tax Hub does not invent a split by estimating portions of a consolidated amount.

### STD

The STD profile maps turnover and other business income, then reports supported detailed expenses:

| Tax Hub field | Typical accounting content |
|---|---|
| Cost of goods | Goods bought for resale or used in providing services |
| Payments to subcontractors | Construction-industry and other supported subcontractor costs |
| Wages and staff costs | Wages, salaries and other staff costs |
| Car, van and travel expenses | Motor and travel categories |
| Premises running costs | Rent, rates, power and similar premises costs |
| Maintenance costs | Repairs and maintenance |
| Administration costs | Office and administration costs |
| Advertising costs | Advertising and promotion |
| Business entertainment costs | Business entertainment |
| Interest on bank and other loans | Business-loan interest |
| Finance charges | Bank, card and other financial charges |
| Professional fees | Accountancy, legal and other professional fees |
| Other expenses | Supported expenses not classified above |

Some current API properties, such as irrecoverable debts and depreciation, may be present in the statutory vocabulary without having a default STD mapping. An absent mapping is not automatically a zero and should not be populated from a merely similar accounting label.

## Values that are not Category Tree mappings

Not every value needed by an MTD workflow comes from a Cash Code or category. Examples include:

- the tax year and update-period dates;
- the taxpayer and business identifiers;
- adjustments requiring review;
- capital allowances;
- loss claims and elections; and
- final personal Income Tax and National Insurance liability.

Tax Hub obtains these from configuration, calculations, later workflow input or an authoritative external result as appropriate. Accounting depreciation must not be mapped to a capital allowance merely to fill a field.

Expected annual profit is used only to estimate an Income Tax and National Insurance planning rate for cash-flow forecasting. It is not part of the cumulative accounting projection or an HMRC calculation.

## Customize a mapping

Open **Tax Configurator**, select the MTD Income Tax source, then select a component field. You can map a complete category or, where a narrower distinction is necessary, an individual Cash Code.

Before saving a change:

1. confirm that the accounting source has the same meaning as the Tax Hub field;
2. check that parent and child mappings do not count the same transaction twice;
3. inspect MIN and STD independently;
4. leave a distinction unsupported when the accounting data cannot supply it reliably; and
5. validate the complete source after the change.

Calculated totals and contextual fields are read-only and cannot be mapped.

See [Tax Configurator](/tax/tax-configurator) for the controls and validation workflow, and [Tax Hub Business Tax](/tax/tax-hub-business-tax) for reviewing the resulting cumulative figures.
