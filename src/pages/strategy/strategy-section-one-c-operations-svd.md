---
layout: ../../layouts/Documentation.astro
title: Strategy 1 - Supply versus Demand
permalink: /strategy/strategy-section-one-c-operations-svd
---

Trade Control models supply and demand not as static records, but as recursive declarations [embedded in the schema](strategy-schema-native). Inspired by manufacturing scheduling algorithms, it treats financial flow as a dynamic allocation problem—where invoices declare demand, payments fulfil supply, and balances emerge from polarity-aware traversal.

## Declarative Logic

Each transaction is a declaration:

- Invoices declare intent—**Demand**  
- Payments fulfil obligation—**Supply**  
- Opening balances set the initial state

These declarations are sequenced, polarised, and aggregated to form a live financial narrative. There is no need for journals, double-entry logic, or legacy constructs. Trade Control simply adds things up[^1].

## Recursive Traversal

The system traverses the transaction stream[^2] to:

- Merge invoices and payments into a unified flow  
- Apply polarity to calculate directional charges  
- Sequence transactions per account  
- Backfill opening balances  
- Derive running balances through aggregation

This traversal gives you:

- Closing balance  
- Debtors and creditors  
- Liquidity position  
- Fulfilment status

All calculated in milliseconds. Because computers are very good at adding up.

## Schema-Native Insight

Trade Control reframes supply and demand:

> Supply is not stock—it is capacity.  
> Demand is not prediction—it is intent.

By modelling these as declarations, not possessions, the system enables:

- Just-in-time orchestration  
- Zero-inventory workflows  
- Recursive fulfilment logic across distributed networks

This logic is not abstract—it is operational. It renders the financial interface with the same clarity as a manufacturing schedule.

## Summary

Trade Control treats supply and demand as schema-native declarations. It models financial flow as a recursive traversal, where polarity drives fulfilment and balance emerges from structure. This enables real-time liquidity modelling, fulfilment tracking, and operational clarity—without relying on legacy accounting logic.

---
[^1]: [Tax Calculation](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwBalanceSheetTax.sql)
[^2]: [Company Statement](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwStatementBase.sql)