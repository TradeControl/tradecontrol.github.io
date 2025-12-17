---
layout: ../../layouts/Documentation.astro
title: Strategy 1 - Cash
permalink: /strategy/strategy-section-one-c-operations-cash
---

Trade Control models cash not as a passive ledger entry, but as a directional signal embedded in the schema[^1]. Every transaction carries a polarity[^2]—positive, negative, or neutral—which determines its operational role. This polarity replaces conventional constructs like customer/supplier roles, document types, and invoice logic.

- **Positive polarity (POS)** implies incoming money—e.g. from a customer or prospect  
- **Negative polarity (NEG)** implies outgoing money—e.g. to a supplier  
- **Neutral polarity (OFF)** is used for entities like government, where no direct exchange occurs

This inversion means that the system doesn’t need to define customers, suppliers, or document types explicitly—they are inferred from the direction of cash.

## Cash Codes and Categories

Every transaction is tagged with a Cash Code, which defines:

- What the transaction is  
- Its tax status  
- Its polarity

These Cash Codes are grouped into Categories, which form recursive hierarchies. A Category can contain:

- A set of Cash Codes  
- Other Categories  
- Expressions (e.g. profit %, tax totals)

This structure enables schema-native reporting without hard-coded logic. Crucially:

> There is no innate thing called Net Profit, Gross Profit, or Indirect Costs.

These are constructed by the user, who defines which Category represents Net Profit.

Trade Control models this in the Production Layer, which has no conception of what Net Profit is. It simply models transactions. The user defines meaning through Category structure. A recursive function collects all Cash Codes connected to the Category tree—and adds them up.

Because computers are very good at adding up, this process is lightning fast. Net Profit can be calculated in milliseconds from the Genesis Transaction, without needing to traverse external ledgers or interpret legacy constructs.

## Types of Categories

Trade Control supports three primary types of Category[^3]:

- **TRADE** – affects company balance via exchange  
- **MONEY** – internal financial movement, no balance impact  
- **EXTERNAL** – taxes or obligations that affect balance without exchange

Tax types (VAT, income tax, corporation tax) are assigned at the Cash Code level, and misclassification (e.g. salary as zero VAT) can corrupt reporting. Because tax is embedded at the schema level, Trade Control enables:

- Real-time VAT and duty calculation  
- Jurisdictional logic across borders  
- Schema-native audit and submission

## Expressions and Reporting

Cash Expressions use Excel-style formulas, referencing Category names instead of cell ranges. This allows dynamic reporting and future accrual modelling. Examples include:

- Net Profit  
- VAT totals  
- Profit margin percentages  
- Liquidity forecasts

Because polarity drives everything, nodes can be connected into trading networks without needing explicit customer/supplier definitions. Order book profit and current balance are calculated by summing live tasks and payments. Business intelligence is transaction-grained and schema-native.

## Summary

Trade Control treats cash as a directional signal that drives operational logic. By embedding polarity, tax, and category structure into the schema, it enables recursive modelling of profit, compliance, and liquidity—without relying on conventional constructs like invoices or account codes.

Cash is not abstract. It is embedded, directional, and operational. Trade Control treats it as a signal—not a possession.

---
[^1]: [Cash Classification](/articles/tc_cash_codes)
[^2]: [Cash Polarity](/articles/tc_production#cash-polarity)
[^3]: [Cash Categories](/docs/cash-configuration)