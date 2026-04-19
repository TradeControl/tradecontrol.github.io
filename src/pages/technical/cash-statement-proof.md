---
layout: ../../layouts/Documentation.astro
title: Cash Statement Proofs (DEBK Invariants)
permalink: /technical/cash-statement-proof
---

A unified DEBK invariant for companies and sole traders

- Published: 25 March 2026
- Revised: 19 April 2026

## Abstract

**Trade Control** is an open‑source accounting engine built on a simple idea:  
that the economic reality of a business is found in its *flows* — the productive transactions that move goods, services, and cash — rather than in static snapshots of assets.

In this model, every financial transaction mirrors a productive one, with quantity and cash expressed as opposite‑signed flows. This [Cash Polarity Principle](/articles/tc_production#cash-polarity) allows Trade Control to operate at the level of individual transactions, independent of arbitrary reporting periods. From this transaction‑grained representation, the engine can algorithmically reconstruct the asset‑based reporting required by conventional accounting.

The invariant presented in this paper is the bridge between these two mentalities. It shows how a dynamic, flow‑based model can be reconciled exactly with the static, asset‑rooted view of traditional bookkeeping. Because this approach rewrites the core computational logic of accounting, it requires a clear, rigorous proof. This document provides that proof, along with the definitions and reasoning that make the invariant operational inside Trade Control.

## 1. Purpose

This paper states and proves a single DEBK invariant that holds for:

- limited companies and sole traders  
- VAT‑registered and non‑registered businesses  
- any chart of accounts that respects a simple balance‑constraint flag

The invariant is expressed entirely in terms of:

- balance‑sheet snapshots  
- capital‑account deltas  
- tax and loss‑carry mechanics  
- opening balances  

Annual profit after tax is reconstructible from balance‑sheet deltas alone, up to a small, well‑understood rounding residual (typically pennies, and 1p in Year 1 for VAT‑registered businesses).

There are no classification‑dependent bridge terms, no hand‑coded “equity movements”, and no tautological definitions. Capital movement is measured directly from the balance sheet.

## 2. Core definitions

### 2.1 Balance constraint code

Each account carries a `BalanceConstraintCode`:

- **0 Neutral:** ordinary bank / asset accounts (can be positive or negative)  
- **1 No Negatives:** assets that cannot go below zero (e.g. cash)  
- **2 No Positives:** capital / financing accounts (equity pool)

The invariant uses only accounts with `BalanceConstraintCode = 2` to define capital.

### 2.2 Capital position and capital movement

 <div> For each year \( y \): </div>

-  <div> CapitalPosition\(_y\): </div>
  the sum of balances of all accounts with `BalanceConstraintCode = 2` at the year‑end balance‑sheet date.

-  <div> CapitalMovement\(_y\): </div>

<div>
$$
\text{CapitalMovement}_y
=
\text{CapitalPosition}_y
-
\text{CapitalPosition}_{y-1}
$$
</div>

This is implemented via `LAG` over the capital position by year. It is:

- classification‑free  
- derived purely from balance‑sheet snapshots  
- valid for companies and sole traders  
- the only capital movement term used in the bridge

### 2.3 Opening terms

Year 1 has no prior year. Instead, we treat:

- <div>\( \text{OpeningCapital}_1 = 0 \) </div> 
- **OpeningPosition:**  
  the net of opening balances on subjects (customers, suppliers, etc.), with sign convention chosen so that a positive value increases the equity bridge.

- **OpeningAccountPosition:**  
  the net of opening balances on cash/bank accounts (or other designated account type), again with sign convention chosen to align with the equity bridge.

For year \( y > 1 \):

- <div> \( \text{OpeningCapital}_y = \text{ClosingCapital}_{y-1} \) </div> 

### 2.4 Profit and tax

For each year \( y \):

-  <div> Profit\(_y\): profit before business tax. </div>  
-  <div> BusinessTaxExpense\(_y\): business tax charged for the year.   </div>

Then:

<div> 
$$
\text{ProfitAfterTax}_y
=
\text{Profit}_y
-
\text{BusinessTaxExpense}_y
$$
</div> 

### 2.5 Losses carried forward

Losses carried forward are derived from the tax balance and tax rate:

- <div> LossesCarriedForward\(_y\) </div>
- <div> OpeningLossesCarriedForward\(_y\) </div>
- <div> ClosingLossesCarriedForward\(_y\) </div>
- <div> LossesCarriedForwardDelta\(_y\) </div>

These are used for analysis and disclosure but do not appear directly in the core equity bridge identity.

## 3. Year‑1 treatment

Year 1 is special because there is no prior year capital snapshot.

We enforce:

- <div> \( \text{OpeningCapital}_1 = 0 \)  </div> 
- <div> \( \text{CapitalDelta}_1 = \text{ClosingCapital}_1 \) </div> 

The entire initial state of the business is represented by:

- <div> OpeningPosition\(_1\) </div>
- <div> OpeningAccountPosition\(_1\) </div>

For \( y > 1 \):

- <div> \( \text{OpeningCapital}_y = \text{ClosingCapital}_{y-1} \)  </div> 
- <div> \( \text{CapitalDelta}_y = \text{ClosingCapital}_y - \text{OpeningCapital}_y \) </div> 

## 4. The equity bridge

For each year \( y \), define:

- <div>CapitalDelta\(_y\): </div>

<div> 
$$
\text{CapitalDelta}_y
=
\text{ClosingCapital}_y
-
\text{OpeningCapital}_y
$$
</div> 

- <div> CapitalMovement\(_y\) as in §2.2. </div>  

- <div> OpeningPosition\(_y\) and OpeningAccountPosition\(_y\) as in §2.3.</div>

<div> We then define the Variance\(_y\) as the residual required to make the equity bridge hold: </div>

<div> 
$$
\text{CapitalDelta}_y
=
\text{ProfitAfterTax}_y
+
\text{CapitalMovement}_y
+
\text{OpeningPosition}_y
+
\text{OpeningAccountPosition}_y
+
\text{Variance}_y
$$
</div> 

Rearranging:

<div> 
$$
\text{Variance}_y
=
\text{CapitalDelta}_y
-
\Big(
\text{ProfitAfterTax}_y
+
\text{CapitalMovement}_y
+
\text{OpeningPosition}_y
+
\text{OpeningAccountPosition}_y
\Big)
$$
</div> 

Variance is a pure rounding residual, typically pennies.

## 5. The invariant

Rearranging the equity bridge gives the core invariant:

<div> 
$$
\text{ProfitAfterTax}_y
=
\text{CapitalDelta}_y
-
\text{CapitalMovement}_y
-
\text{OpeningPosition}_y
-
\text{OpeningAccountPosition}_y
-
\text{Variance}_y
$$
</div> 

In words:

> Annual profit after tax is reconstructible from balance‑sheet deltas alone, plus explicit opening terms, up to a small rounding residual.

This holds for:

- companies and sole traders  
- VAT‑registered and non‑registered businesses  
- any chart of accounts that respects the balance constraint flag

## 6. VAT and penny‑level residuals

VAT introduces a three‑stage rounding chain:

1. VAT rounded on individual transactions  
2. Profit computed VAT‑exclusive  
3. Capital balances rounded at 2dp  

In Year 1, this can produce a 1p residual.  
For later years, the effect typically disappears or remains within the same tolerance.

## 7. Unified business tax logic

Trade Control uses a unified business‑tax model:

- a common tax statement view  
- tax due, tax balance, and tax rate  
- losses carried forward inferred from tax balance and rate  
- business tax expense as the positive tax due for the year  

<div> 
This logic feeds into \( \text{ProfitAfterTax}_y \) and losses carried forward but does not alter the structure of the invariant.
</div> 


## 8. Implementation

The invariant is implemented in the open‑source Trade Control codebase.

The SQL definition of the reconciliation view:

[`Cash.vwEquityReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwEquityReconciliationByYear.sql)

computes:

- capital positions  
- capital movements  
- opening terms  
- profit and tax  
- losses carried forward  
- the rounding residual  

…exactly as defined in this paper.

## Conclusion

This paper establishes a single, unified DEBK invariant that holds for companies and sole traders, VAT‑registered and non‑registered businesses, and any chart of accounts that respects a simple balance‑constraint flag.

The benefits of this approach:

- **Determinism:** profit after tax is reconstructible from balance‑sheet deltas alone.  
- **Simplicity:** capital movement is measured directly from the balance sheet.  
- **Robustness:** the invariant is classification‑agnostic and resistant to semantic drift.  
- **Auditability:** the bridge is explicit, testable, and implemented in open‑source SQL.  
- **Unification:** companies and sole traders share the same algebra and tax logic.

Longer term, this provides:

- a foundation for automated accounts  
- a platform for real‑time financial reasoning  
- a model that scales without conceptual fragility  
- a future where accounting becomes computational rather than clerical  

Trade Control is built on this invariant.  
This paper shows why it works — and why it will continue to work as the system grows.

## Appendix A: Relevant Objects & Supporting Material

This paper’s reference run uses the scenario runner script:

- [`EXEC_DatasetSyntheticMIS.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/EXEC_DatasetSyntheticMIS.sql)

The script executes four scenarios (profit/loss; VAT on/off) by running [`App.proc_DatasetSyntheticMIS`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS.sql) with configurable settings, including:

- `@IsCompany` (set to either company or sole trader scenarios)
- `@PriceRatio` (profit vs loss scenarios)
- `@IsVatRegistered` (VAT on/off scenarios)
- Major generation modules enabled/disabled

For full source, see [`EXEC_DatasetSyntheticMIS.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/EXEC_DatasetSyntheticMIS.sql).

### Relevant objects

- [`Cash.vwEquityReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwEquityReconciliationByYear.sql)
- [`Cash.vwFlowReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwFlowReconcilationByYear.sql)
- [`Cash.vwProfitAndLossByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwProfitAndLossByYear.sql)
- [`Cash.vwBalanceSheet`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwBalanceSheet.sql)
- [`Cash.tbPayment`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Tables/tbPayment.sql), `Cash.tbCode`, `Cash.tbCategory`
- `Subject.tbAccount`
- `App.tbYear`, `App.tbYearPeriod`

## Additional Scripts / Diagnostics

To prove all four synthetic scenarios (profit/loss; VAT on/off), use:

- [`PROOF_CashStatementReconciliation.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql)

This script:

- regenerates the synthetic dataset for each scenario, and
- executes the proof checks per scenario, and
- returns a summary row plus any out-of-tolerance offenders.

### Reference output

[Synthetic Scenario Resultset](/technical/proof-reference-output)

## Licence

![Creative Commons](https://i.creativecommons.org/l/by-nd/4.0/88x31.png)

Licenced by Trade Control Ltd under a [Creative Commons Attribution-NoDerivatives 4.0 International License](http://creativecommons.org/licenses/by-nd/4.0/)
