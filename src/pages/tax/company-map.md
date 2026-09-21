---
layout: ../../layouts/Documentation.astro
title: Company Statutory Mapping
permalink: /tax/company-map
---

This guide explains how a UK micro-entity company's Trade Control accounting data is projected for statutory accounts and Corporation Tax.

The supplied company templates install working mappings. You normally need to change them only after customizing the [Category Tree](/cash/category-tree-getting-around) or adding Cash Codes.

## Separate statutory outputs

Tax Hub keeps three projections separate:

| Projection | Purpose |
|---|---|
| Company Accounts | Current and comparative statutory accounts information |
| Corporation Tax | Accounting result, reviewed tax adjustments and computation results |
| CT600 Return | Company Tax Return values and package declarations |

Companies House accounts and the HMRC Company Tax Return are separate filings. They use different contracts, validation, credentials and acknowledgements. Acceptance by one authority would not imply acceptance by the other.

## Company Accounts

The default mapping supplies the accounting components that can be obtained deterministically from the Category Tree:

| Statutory area | Default accounting source |
|---|---|
| Turnover | Turnover category |
| Other income | Other-income category |
| Cost of sales | Cost-of-sales category |
| Administrative expenses | Staff-cost and overhead totals |
| Fixed assets | Asset and accumulated-depreciation categories |
| Creditors due after more than one year | Long-term-liability category |

Tax Hub derives statement totals such as profit or loss, net current assets and net assets from their underlying evidence. Current assets, short-term creditors, capital and reserves, and similar balance-sheet values may also be obtained from account balances rather than configurable Tax Tag mappings.

Company identity, reporting periods, approval, accounting policies, average employees and conditional disclosures come from business configuration or the accounts-review workflow. They are not transaction classifications.

## Corporation Tax computation

The accounting profit or loss is the starting point, not the taxable result.

The default configurable accounting component is book depreciation, which is supplied as evidence for a reviewed add-back. Other add-backs, deductions, capital allowances, gains, reliefs and loss claims require their proper reviewed source.

Accounting depreciation and capital allowances are different concepts. Do not map one directly to the other.

Tax Hub derives taxable total profits, Corporation Tax chargeable and tax payable from the approved computation inputs. The configured Corporation Tax rate applies to the relevant financial periods; historical differences should be represented by adjustments rather than by rewriting accounting history.

## CT600 Return

The default direct Category Tree mapping supplies turnover. Company identity, the UTR and return period come from statutory configuration and period context. Profit before tax, taxable total profits, Corporation Tax chargeable and tax payable are reconciled results from the accounts and computation.

Attachment choices, supplementary pages and the declaration are filing-workflow information. They are not Cash Code mappings.

## Customize a mapping

Use **Tax Configurator** to map a component field to a category or, where a narrower distinction is required, a Cash Code.

A mapping is appropriate only when the selected accounting source has the same statutory meaning. Similar wording is not enough. Calculated, contextual and workflow fields remain read-only.

After a change, validate every affected source and review the result in both [Tax Hub Accounts](/tax/tax-hub-accounts) and [Tax Hub Business Tax](/tax/tax-hub-business-tax).

For a task-oriented explanation of the mapping chain and validation checks, see [Company Mapping Process](/tax/company-map-process).

