---
layout: ../../layouts/Documentation.astro
title: Cash Statement Proofs (DEBK Invariants)
permalink: /technical/cash-statement-proof
---

Published on 25 March 2026

## Abstract

Trade Control is a [**production system**](/articles/tc_production), not a traditional journal-ledger-first DEBK system.

Rather than persisting financial statements as primary artifacts, Trade Control derives statutory-style accounting views **dynamically** from a genesis transaction model, using [**Supply vs Demand**](/strategy/strategy-section-one-c-operations-svd) and [**Cash Polarity**](/strategy/strategy-section-one-c-operations-cash) as the organizing principles. Double-entry concepts are present where required (notably for capital assets and balance-sheet snapshots), but the system’s primary architecture is a flow model: a business is treated as a [**Node**](https://github.com/TradeControl/network/blob/HEAD/docs/overview.md) whose inputs and outputs are determined by cash polarity and whose realized state is constrained by external cash (e.g., bank) reality.

This architecture provides several properties that are directly relevant to assurance:

- Transaction-grained balance sheet: balance sheet snapshots can be derived at a fine time resolution because they are computed from underlying transactions rather than pre-aggregated journals.
- Gestalt costing and instant “what-if” analysis: complex order book or project structures can be introduced and their impact on cash flow and capital immediately evaluated, enabling schedule/plan optimization.
- Fraud resistance by cash constraint: post-genesis manipulation of transactions tends to break reconciliation against external bank reality; inconsistencies propagate into the derived statements and become detectable.
- Wallet compatibility (including crypto wallets): a commercial wallet can be treated as a cash source/sink under the same polarity model without changing the accounting derivation.
- ERP seed model: the Node-based polarity architecture generalizes to ERP-level modelling (inputs/outputs and transformations), with accounting views as a verifiable projection of the production graph.

Despite not being implemented as a conventional DEBK ledger, Trade Control produces reporting outputs that satisfy **DEBK-style invariants**. This document provides machine-checkable proofs (identities) demonstrating that the published Cash Statement reconciliation is mathematically consistent and that residuals are rounding-only.

The proofs in this paper are reproducible by executing the following script against the synthetic dataset:

- [`Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql)

For a technical description of how the synthetic dataset is constructed, see:

- [`/technical/synthetic-dataset`](/technical/synthetic-dataset)

### Sole Trader Accounts

For readers modelling sole trader accounts, a companion document is available.
It explains how the Cash Statement Proof applies unchanged when Corporation Tax is replaced by Business Tax (personal tax on profit):

[See the Sole Trader Addendum →](/technical/sole-trader-addendum)

## Scope and audience

This proof is written for professional review (e.g., business owners, chartered accountants), not end users.

It covers:

- [`Cash.vwEquityReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwEquityReconciliationByYear.sql) (annual equity bridge)
- [`Cash.vwFlowReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwFlowReconcilationByYear.sql) (annual reconciliation lines derived from the bridge)
- [`Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql) (machine-checkable invariants)

### What this proof does (and does not) claim

This paper proves **internal mathematical consistency** of the published annual reconciliation views:

- that the balance sheet delta, P&L, tax expense, and equity bridge components agree by definitional identity, and
- that the reconciliation residual is within rounding tolerance.

It does **not** claim that annual profit can be reconstructed from balance sheet deltas alone without classification, because equity movements (owner funding, drawings/dividends, loan movements, opening seed positions, and other financing flows) must be identified or represented as explicit bridge terms.

## Definitions and notation

Let:

- `t` be time periods.
- For annual reporting, `t` corresponds to [`App.tbYear.YearNumber`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Tables/tbYear.sql) and year-end snapshots per [`App.tbYearPeriod`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Tables/tbYearPeriod.sql).
- `BS(t)` denotes a balance sheet snapshot at the year-end boundary used by [`Cash.vwBalanceSheet`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwBalanceSheet.sql).
- `Capital(t)` denotes total equity / capital at `BS(t)`.

From `Cash.vwEquityReconciliationByYear`, per `YearNumber` we define:

- `OpeningCapital` = `Capital(t-1)` (first year uses `Cash.vwBalanceSheet` at the first active period)
- `ClosingCapital` = `Capital(t)`
- `CapitalDelta` = `ClosingCapital - OpeningCapital`
- `Profit` = annual profit per `Cash.vwProfitAndLossByYear`
- `BusinessTax` = annual business tax **expense** used in the equity bridge (company: corporation tax; sole trader: tax on profit)
- `ProfitAfterTax` = `Profit - BusinessTax`
- `CapitalMovement` = net capital movement for the year required to reconcile the bridge after profit/tax and opening adjustments (see below)
- `OpeningPosition` = one-off opening balance correction applied only in the first year (subject opening balances)
- `OpeningAccountPosition` = one-off opening balance term applied only in the first year (cash/bank opening balances)
- `Variance` = residual of the reconciliation (should be zero except rounding)

Additionally, for business tax carry mechanics (loss regime), the view exposes:

- `TaxCarry` = statement-driven tax carry (not used in the equity bridge)
- `OpeningLossesCarriedForward`, `ClosingLossesCarriedForward`, `LossesCarriedForwardDelta` = statement-driven loss pool expressed as a non-negative balance

All monetary amounts are ultimately presented rounded to 2dp.

## DEBK invariant #1: Balance sheet identity

The core DEBK balance sheet identity is:

> **Assets − Liabilities − Equity = 0**

In the system, `Cash.vwBalanceSheet` provides a snapshot of balances derived from the underlying ledger postings. Provided all postings are balanced, the balance sheet identity must hold at each snapshot date by construction of the double-entry system.

This document does not re-prove that base postings are double-entry balanced; instead it proves that the cash statement reconciliation is consistent with the balance sheet snapshot implied by those postings.

## DEBK invariant #2: Equity movement identity (annual bridge)

For each year `t`, the equity bridge identity is:

> **CapitalDelta(t) = ProfitAfterTax(t) + CapitalMovement(t) + OpeningPosition(t) + OpeningAccountPosition(t) + Variance(t)**

Where:

- `OpeningPosition(t)` is non-zero only for the first year, representing the initial position brought forward into the new ledger from subject opening balances.
- `OpeningAccountPosition(t)` is non-zero only for the first year, representing any cash/bank opening balances present at the start of the dataset.
- `Variance(t)` is the residual rounding term. For a correct implementation and clean rounding, it should be within pennies, and ideally 0.00 in most cases.

### Proof (by construction of `Variance`)

In `Cash.vwEquityReconciliationByYear`:

- `CapitalDelta` is computed as `ClosingCapital - OpeningCapital`.
- `ProfitAfterTax` is computed as `Profit - BusinessTax`.
- `CapitalMovement` is computed as:

> `CapitalMovement = CapitalDelta - (ProfitAfterTax + OpeningPosition + OpeningAccountPosition)`

- `Variance` is computed as:

> `Variance = CapitalDelta - (ProfitAfterTax + CapitalMovement + OpeningPosition + OpeningAccountPosition)`

Rearranging:

> `CapitalDelta = ProfitAfterTax + CapitalMovement + OpeningPosition + OpeningAccountPosition + Variance`

This is an identity, not an approximation: it holds exactly given the definitions in the view, modulo the rounding applied at output.

### Interpretation

- If classification and period-windowing are correct, `Variance` becomes a rounding-only term.
- Any systematic non-zero `Variance` indicates either:
  - an unaccounted equity movement not expressed in the bridge terms, or
  - a timing boundary mismatch between the balance sheet snapshot and the P&L / tax windows.

## Business tax treatment: expense vs carry (loss regimes)

### Issue addressed

In loss scenarios, tax computations at the statement level may produce negative “tax due” and negative running balances. Interpreting negative values as a current-year tax **expense** would incorrectly increase equity and break the bridge.

### System rule

- `BusinessTax` in `Cash.vwEquityReconciliationByYear` is **expense-only** for the equity bridge and is constrained to non-negative expense in loss regimes.
- `TaxCarry` is **statement-derived** and may be negative in loss regimes; it is explanatory and used for tax proofing, not for the equity bridge.

This separation ensures:

- Equity movement is not distorted by tax carry mechanics.
- Loss carry-forward is still visible and provable against the tax statement.

### Losses carried forward measure

Loss carry-forward is derived from the tax statement running balance and the period’s `BusinessTaxRate`, expressed as a **non-negative** loss pool:

- A negative tax balance implies accumulated losses.
- `ClosingLossesCarriedForward` is monotonic (non-decreasing) in consecutive loss years, and decreases when profits consume losses.

This supports multi-year rolling loss positions without corrupting tax expense.

## Capital movement definition (unified bridge term)

Trade Control supports both companies and sole traders using the same reconciliation identity.

In practice, a single deterministic classification of “capital injection” cash codes is not always stable across datasets, especially where polarity and timing produce bidirectional usage (e.g., drawings vs capital introduced, loan injections vs repayments).

Accordingly, the annual bridge reports `CapitalMovement` as the **net capital movement required** to reconcile the annual capital delta after profit/tax and explicit opening adjustments have been accounted for:

> `CapitalMovement = CapitalDelta - (ProfitAfterTax + OpeningPosition + OpeningAccountPosition)`

This definition makes the bridge stable across:

- company and sole trader datasets,
- bidirectional capital cash codes (polarity),
- varied template configurations.

## `Cash.vwFlowReconciliationByYear` (presentation proof)

`Cash.vwFlowReconciliationByYear` is a line-oriented projection of `Cash.vwEquityReconciliationByYear`. It does not introduce new arithmetic; all reported `Amount` values are projections or sums of the base view’s columns. Therefore:

- If `Cash.vwEquityReconciliationByYear` satisfies the equity movement identity, then `Cash.vwFlowReconciliationByYear` is consistent by derivation.

Line `BRIDGE` is explicitly:

> `ProfitAfterTax + CapitalMovement + OpeningPosition + OpeningAccountPosition`

Line `VAR` is explicitly:

> `Variance`

Therefore reviewers can see the bridge total and residual directly without recomputation.

## Empirical verification (synthetic scenario matrix)

A synthetic test script runs four scenarios (VAT on/off; profit/loss) and populates a temp table from `Cash.vwEquityReconciliationByYear`.

Observed results (March 2026 run):

- Profit scenarios reconcile exactly or to pennies.
- Loss scenarios reconcile (no “tax credit” distortion).

This demonstrates:

1. Loss years do not introduce spurious tax expense into the equity bridge.
2. VAT registration affects penny-level rounding only and does not break DEBK identities.
3. The reconciliation is stable across profit and loss regimes.

## What a reviewer can independently validate

For each year in `Cash.vwEquityReconciliationByYear`:

1. Compute (to 2dp):

   - `CapitalDelta = ClosingCapital - OpeningCapital`

2. Compute:

   - `ProfitAfterTax = Profit - BusinessTax`

3. Compute bridge:

   - `Bridge = ProfitAfterTax + CapitalMovement + OpeningPosition + OpeningAccountPosition`

4. Confirm:

   - `Variance = CapitalDelta - Bridge`

All terms are directly available in the same row, so the proof is self-contained.

For loss carry-forward:

- Confirm `TaxCarry` and the loss-c/f columns trace to the business tax statement balance windows and rate, and that loss balances behave consistently over time.

## Limitations and boundary conditions

- The equity bridge is annual; the cash statement is monthly. The purpose of the reconciliation is to prove annual consistency between P&L, owner/financing movements (as a net bridge term), opening position terms, and the balance sheet capital delta.
- Any new equity movement types requiring separate disclosure (e.g., dividends, share buybacks, material loan classifications) can be represented as additional bridge lines; otherwise they will be absorbed into `CapitalMovement`.
- Rounding: this proof treats penny-level residuals as acceptable and expected under 2dp presentation, especially where upstream calculations use higher precision rates.

## Machine-checkable proof script (recommended audit procedure)

The identities described in this paper are encoded as executable assertions in:

- [`PROOF_CashStatementReconciliation.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql)

### Expected output (reference run)

When executed against the synthetic dataset scenarios used to validate this paper, `PROOF_CashStatementReconciliation.sql` is expected to return:

- A summary row with `Status = PASS`.
- No rows in the “Detailed offenders” result set.
- A final row-shape check with `Status = PASS` (13 lines per year in `Cash.vwFlowReconciliationByYear`).

A typical PASS summary shows:

- `Variance_MaxAbs <= 0.10` (often small rounding noise),
- no negative losses carried forward, and
- definition identities (`CapitalDelta`, `ProfitAfterTax`, and `Variance`) consistent within tolerance.

### What the script proves

The script queries `Cash.vwEquityReconciliationByYear` and verifies, for each `YearNumber`, the following identities (subject to 2dp presentation and an allowed tolerance):

- **Capital delta definition**

  `CapitalDelta = ClosingCapital - OpeningCapital`

- **Profit after tax definition**

  `ProfitAfterTax = Profit - BusinessTax`

- **Equity bridge identity**

  `Variance = CapitalDelta - (ProfitAfterTax + CapitalMovement + OpeningPosition + OpeningAccountPosition)`

It also performs shape/sanity checks on the derived line-report view:

- `Cash.vwFlowReconciliationByYear` has exactly **13 lines per year** (one row per defined reconciliation line).

### PASS / FAIL interpretation

- `PASS` means:
  - all definition identities hold within tolerance, and
  - the reconciliation residual (`Variance`) is within tolerance (rounding-only), and
  - the loss carry-forward deltas are arithmetically consistent, and
  - the flow reconciliation view has the expected row shape.

- `FAIL` indicates a definitional break (a true inconsistency), such as:
  - boundary mismatches (year-end vs pay-date windows),
  - incorrect tax expense vs carry handling,
  - cash polarity mismatches causing statement distortions.

### Tolerance

The script uses a configurable tolerance (default `0.10`) to accommodate penny-level rounding effects that arise when:

- underlying computations are performed at higher precision, and
- reporting is presented at 2 decimal places.

Reviewers may set the tolerance to `0.01` if the dataset and rounding model are expected to be strictly penny-perfect.

## Relevant objects

- [`Cash.vwEquityReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwEquityReconciliationByYear.sql)
- [`Cash.vwFlowReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwFlowReconcilationByYear.sql)
- [`Cash.vwProfitAndLossByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwProfitAndLossByYear.sql)
- `Cash.vwBalanceSheet`
- [`Cash.tbPayment`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Tables/tbPayment.sql), `Cash.tbCode`, `Cash.tbCategory`
- `Subject.tbAccount`
- `App.tbYear`, `App.tbYearPeriod`

## Appendix A: Reference execution script (synthetic scenarios)

This paper’s reference run uses the scenario runner script:

- [`EXEC_DatasetSyntheticMIS.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/EXEC_DatasetSyntheticMIS.sql)

The script executes four scenarios (profit/loss; VAT on/off) by running [`App.proc_DatasetSyntheticMIS`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS.sql) with configurable settings, including:

- `@IsCompany` (set to either company or sole trader scenarios)
- `@PriceRatio` (profit vs loss scenarios)
- `@IsVatRegistered` (VAT on/off scenarios)
- Major generation modules enabled/disabled

For full source, see [`EXEC_DatasetSyntheticMIS.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/EXEC_DatasetSyntheticMIS.sql).

## Appendix B: Proof output (reference run)

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
