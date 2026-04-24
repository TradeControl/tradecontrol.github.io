---
layout: ../../layouts/Documentation.astro
title: Self‑Assessment Integration Guide (MTD ITSA)
permalink: /tax/self-assessment-map
---

This guide documents the canonical field sets used for UK Self-Employment under MTD ITSA.

It covers the two tax sources used by the configurator:

- `UK-ITSA-SE-QU`
- `UK-ITSA-SE-EOPS`

These field sets are seeded by `App.proc_Template_ST_SOLE_CUR_MIN_2026` and are presented in the Tax Configurator as canonical tag names.

## Scope

This document covers:

- Quarterly Update fields
- Annual End-of-Period Statement fields
- adjustments
- losses
- basis period items
- capital allowances

It does **not** cover:

- capital introduced
- drawings
- SA100 aggregation
- property income

Capital introduced and drawings are balance-sheet movements and are handled separately.

## Source codes

| TaxSourceCode | Purpose | Notes |
|---|---|---|
| `UK-ITSA-SE-QU` | Quarterly Update | Totals only |
| `UK-ITSA-SE-EOPS` | End-of-Period Statement | Annual return layer with adjustments and allowances |

## Tag class behaviour

The configurator uses tag classes to distinguish field behaviour:

- `Component` tags are mappable
- `Derived` tags are read-only
- `Rollup` tags are read-only

That keeps the totals, adjustments, and final profit items separated clearly.

## Deliverable A: Quarterly Update field set

These are the canonical QU fields used by `UK-ITSA-SE-QU`.

| FieldName | Meaning |
|---|---|
| `turnover` | Total sales, takings, or receipts for the period |
| `otherIncome` | Other business income not included in turnover |
| `costOfGoods` | Cost of goods bought for resale or used in providing services |
| `constructionCosts` | Payments to subcontractors and other construction-related costs |
| `wagesSalaries` | Staff wages, salaries, bonuses, and employer pension contributions |
| `carVanExpenses` | Motor expenses such as fuel, repairs, insurance, and servicing |
| `travelExpenses` | Travel costs not covered by motor expenses |
| `premisesRunningCosts` | Rent, utilities, repairs, and maintenance of business premises |
| `maintenanceCosts` | General repairs and maintenance not tied to premises |
| `adminCosts` | Office and administration expenses such as postage, stationery, phone, and software |
| `advertisingMarketing` | Advertising, marketing, website, and promotion |
| `interestOnLoans` | Interest on business loans |
| `financialCharges` | Bank charges and similar financial costs |
| `badDebts` | Allowable bad debt write-offs |
| `professionalFees` | Accountancy, legal, and consultancy fees |
| `depreciation` | Depreciation shown for completeness as a derived presentation field |
| `otherExpenses` | Any allowable business expenses not covered above |

## Notes on the QU set

- The list is vendor-canonical but aligned to the SA103F quarterly presentation.
- `depreciation` is shown for completeness and should be treated as a derived presentation field rather than a cash mapping target.
- QU values are totals only.

## Deliverable B: EOPS field set

### Chunk 1: Accounts totals + adjustments

| FieldName | Meaning | Notes |
|---|---|---|
| `turnover` | Total business income for the year | Reused from QU |
| `otherIncome` | Other business income not in turnover | Reused from QU |
| `costOfGoods` | Cost of goods bought for resale or used in services | Reused |
| `constructionCosts` | CIS subcontractor costs | Reused |
| `wagesSalaries` | Staff wages, salaries, and pensions | Reused |
| `carVanExpenses` | Motor expenses | Reused |
| `travelExpenses` | Travel costs | Reused |
| `premisesRunningCosts` | Rent, utilities, and premises repairs | Reused |
| `maintenanceCosts` | General repairs not tied to premises | Reused |
| `adminCosts` | Office and administration expenses | Reused |
| `advertisingMarketing` | Advertising, marketing, and promotion | Reused |
| `interestOnLoans` | Interest on business loans | Reused |
| `financialCharges` | Bank charges and similar costs | Reused |
| `badDebts` | Allowable bad debts | Reused |
| `professionalFees` | Accountancy, legal, and consultancy | Reused |
| `depreciation` | Depreciation charged in accounts | Disallowed later |
| `otherExpenses` | Any allowable expenses not listed | Reused |
| `goodsForOwnUse` | Value of goods taken from the business for personal use | Required for annual adjustments |
| `disallowableCostOfGoods` | Non-allowable portion of `costOfGoods` | Vendor-canonical |
| `disallowableWages` | Non-allowable portion of `wagesSalaries` | Vendor-canonical |
| `disallowableMotor` | Non-allowable portion of `carVanExpenses` | Vendor-canonical |
| `disallowableTravel` | Non-allowable portion of `travelExpenses` | Vendor-canonical |
| `disallowablePremises` | Non-allowable portion of `premisesRunningCosts` | Vendor-canonical |
| `disallowableMaintenance` | Non-allowable portion of `maintenanceCosts` | Vendor-canonical |
| `disallowableAdmin` | Non-allowable portion of `adminCosts` | Vendor-canonical |
| `disallowableAdvertising` | Non-allowable portion of `advertisingMarketing` | Vendor-canonical |
| `disallowableInterest` | Non-allowable portion of `interestOnLoans` | Vendor-canonical |
| `disallowableFinancial` | Non-allowable portion of `financialCharges` | Vendor-canonical |
| `disallowableBadDebts` | Non-allowable portion of `badDebts` | Vendor-canonical |
| `disallowableProfessional` | Non-allowable portion of `professionalFees` | Vendor-canonical |
| `disallowableOther` | Non-allowable portion of `otherExpenses` | Vendor-canonical |
| `accountingProfit` | Profit per accounts before adjustments | SA103F concept |
| `totalDisallowables` | Sum of all disallowable expenses | Derived |
| `adjustedProfit` | Profit after disallowables and goods for own use adjustments | Feeds losses and capital allowances |

### Chunk 2: Losses + basis period + overlap items

| FieldName | Meaning | Notes |
|---|---|---|
| `lossBroughtForward` | Loss from earlier years brought into this year | SA103F equivalent |
| `lossUsedAgainstProfit` | Loss used to reduce this year’s adjusted profit | Vendor-canonical |
| `lossCarriedForward` | Remaining loss carried forward to future years | SA103F equivalent |
| `lossUsedAgainstOtherIncome` | Loss set against other income | Only if applicable |
| `lossUsedAgainstCapitalGains` | Loss set against capital gains | Vendor-canonical |
| `postCessationReceipts` | Receipts after the business ceased | SA103F concept |
| `postCessationExpenses` | Allowable expenses after cessation | SA103F concept |
| `basisPeriodStart` | Start date of the basis period for the tax year | Required for EOPS |
| `basisPeriodEnd` | End date of the basis period for the tax year | Required for EOPS |
| `basisPeriodAdjustedProfit` | Profit allocated to the basis period after adjustments | Feeds final tax computation |
| `basisPeriodDisallowables` | Total disallowable expenses for the basis period | Derived |
| `overlapProfit` | Overlap profit carried from earlier years | SA103F equivalent |
| `overlapReliefUsed` | Overlap relief used in the tax year | Required for basis period reform |
| `transitionalProfit` | Transitional profit arising from basis period reform | Basis period reform item |
| `transitionalRelief` | Relief applied to transitional profit | Vendor-canonical |
| `transitionalProfitSpread` | Amount of transitional profit spread over future years | 5-year spreading rule |
| `adjustedProfitForTax` | Final profit after overlap relief and transitional adjustments | Feeds capital allowances and losses |

### Chunk 3: Capital allowances

| FieldName | Meaning | Notes |
|---|---|---|
| `capitalAllowancesClaimed` | Total capital allowances claimed for the year | High-level summary |
| `annualInvestmentAllowance` | Annual Investment Allowance claimed on qualifying plant and machinery | SA103F concept |
| `writingDownAllowanceMainPool` | Writing Down Allowance for the main pool | Based on remaining pool value |
| `writingDownAllowanceSpecialRate` | Writing Down Allowance for the special rate pool | Vendor-canonical |
| `writingDownAllowanceSingleAsset` | Writing Down Allowance for single asset pools | Vendor-canonical |
| `smallPoolsAllowance` | Small pools allowance | SA103F concept |
| `balancingChargeMainPool` | Balancing charge for main pool disposals | Increases taxable profit |
| `balancingChargeSpecialRate` | Balancing charge for special rate pool disposals | Vendor-canonical |
| `balancingChargeSingleAsset` | Balancing charge for single asset pool disposals | Vendor-canonical |
| `balancingAllowanceMainPool` | Balancing allowance for main pool | Reduces taxable profit |
| `balancingAllowanceSpecialRate` | Balancing allowance for special rate pool | Vendor-canonical |
| `balancingAllowanceSingleAsset` | Balancing allowance for single asset pools | Vendor-canonical |
| `privateUseAdjustment` | Adjustment for private use of assets | Required for annual treatment |
| `carMainRateAllowance` | Allowance for cars qualifying for the main rate | CO₂-based rules |
| `carSpecialRateAllowance` | Allowance for cars qualifying for the special rate | CO₂-based rules |
| `carBalancingCharge` | Balancing charge for car disposals | Vendor-canonical |
| `carBalancingAllowance` | Balancing allowance for car disposals | Vendor-canonical |
| `enhancedCapitalAllowance` | Enhanced Capital Allowance | If applicable |
| `superDeductionAllowance` | Super-deduction allowance | Only for relevant years |
| `fullExpensingAllowance` | Full expensing allowance | Vendor-canonical |
| `specialRateFirstYearAllowance` | Special rate first-year allowance | Vendor-canonical |
| `poolOpeningValueMainPool` | Opening written-down value of the main pool | Needed for computation |
| `poolOpeningValueSpecialRate` | Opening written-down value of the special rate pool | Vendor-canonical |
| `poolOpeningValueSingleAsset` | Opening written-down value of single asset pools | Vendor-canonical |
| `poolClosingValueMainPool` | Closing written-down value of the main pool | Derived |
| `poolClosingValueSpecialRate` | Closing written-down value of the special rate pool | Derived |
| `poolClosingValueSingleAsset` | Closing written-down value of single asset pools | Derived |
| `capitalAllowancesTotal` | Sum of all allowances after private use adjustments | Feeds adjusted profit |

## Notes

- HMRC does not publish a formal JSON schema for EOPS, so these names are vendor-canonical.
- The EOPS set is aligned to SA103F annual semantics and basis period reform rules.
- Capital introduced and drawings are not included because they are balance-sheet movements, not tax return fields.

## Implementation notes

- The configurator seeds `UK-ITSA-SE-QU` and `UK-ITSA-SE-EOPS`.
- The annual source is the place where adjustments, losses, basis period items, and capital allowances are applied.
- QU remains totals only.
