---
layout: ../../layouts/Documentation.astro
title: Strategy - Money (Accounts)
permalink: /strategy/strategy-section-one-b-concept-money
---

## The Problem with Conventional Accounting

In conventional ERP systems, financial visibility is structured around **accounting periods**. The **Balance Sheet**[^1] is a snapshot of net worth taken at fixed intervals, while the **Profit & Loss (P&L)**[^2] account accumulates trading activity over time to calculate taxable profit. These abstractions serve external stakeholders—shareholders, accountants, and the State—not the productive domain itself.

This model introduces latency, distortion, and conceptual inversion. Capital is treated as a static asset, and profit as a harvest to be extracted. The productive domain is subordinated to the interests of external owners, whose force field—legal, territorial, and financial—flips the polarity of trade.

## Trade Control’s Response

Trade Control reconfigures this logic by modelling **Money**[^3] as a dynamic, transaction-grained projection. It answers two questions in real time:

1. **How much is the business worth?** (Balance Sheet)
2. **How much money can be extracted?** (P&L)

To do this, Trade Control:

- Dispenses with double-entry book-keeping (DEBK)[^4]
- Models capital using the formula: > **Capital = Assets – Liabilities**[^5]
- Implements **Cash Accounts**[^6] with asset polarity to preserve value
- Uses **Organisation Statements**[^7] to track obligations (debtors and creditors)
- Applies the **Asset Charge Algorithm**[^8] to maintain force fields over time
- Constructs the Balance Sheet from five auditable sources: cash, bank, assets, debtors/creditors, and tax

The result is a **live Balance Sheet**, recalculated with every transaction, and **a forward-looking P&L**, available for instantaneous planning. This enables real-time capital extraction logic, without the need for accounting periods or external reconciliation.

## Polarity and Projection

Trade Control models money as a **projection**[^9], not a ledger. Cash Polarity determines whether a transaction is inflow or outflow, and whether it contributes to asset charge or trading profit. This allows the system to:

- Model infinite debts (equity) and finite debts (loans) without DEBK
- Reflect the territorial force field of ownership in the schema itself
- Flip polarity when transitioning from production logic to extraction logic[^10]

In conventional systems, profit is a reward. In Trade Control, it’s a **liability**—a debt owed to the owner or the State. This inversion is modelled explicitly, enabling the system to calculate tax and dividends as part of the productive workflow.

## Summary

Trade Control’s financial logic is not an abstraction layered over production—it is **production**. Money is modelled as a schema-native projection, enabling real-time calculation of net worth and extractable profit. This reconfigures the relationship between business entities, owners, and the State, replacing medieval accounting logic with a recursive, polarity-driven model of economic agency.

[Next](/strategy/strategy-section-one-b-concept-assets)

-----
[^1]: [Balance Sheets](/articles/tc_balance_sheet)
[^2]: [Profit & Loss Accounts](/articles/tc_profit_and_loss)
[^3]: [Money as Projection](/articles/tc_assets#money)
[^4]: [Double-Entry Book-Keeping](/articles/tc_balance_sheet#double-entry-book-keeping)
[^5]: [Capital Formula](/articles/tc_balance_sheet#capital)
[^6]: [Cash Accounts](/articles/tc_balance_sheet#BNK-AND-CASH)
[^7]: [Organisation Statements](/articles/tc_balance_sheet#organisation-statements)
[^8]: [Asset Charge Algorithm](/articles/tc_balance_sheet#asset-charge)
[^9]: [Supply and Demand](/articles/tc_production#supply-and-demand)
[^10]: [Polarity Inversion](/articles/tc_profit_and_loss#polarity-inversion)