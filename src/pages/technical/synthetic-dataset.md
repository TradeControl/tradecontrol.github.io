---
layout: ../../layouts/Documentation.astro
title: Synthetic Dataset - Technical
permalink: /technical/synthetic-dataset
---

## Purpose

This page describes how Trade Control’s synthetic dataset is constructed for proof and reconciliation work.

It is intentionally technical: it documents the dataset generator as a controlled, repeatable test fixture used to validate accounting derivations (Cash Statement, Balance Sheet snapshots, and annual reconciliation views).

The generator is implemented as discrete stored procedures prefixed `App.proc_DatasetSyntheticMIS_*`, orchestrated by `App.proc_DatasetSyntheticMIS`.

## Entry point procedures

- Orchestrator: [`App.proc_DatasetSyntheticMIS`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS.sql)
- Scenario runner: [`EXEC_DatasetSyntheticMIS.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/EXEC_DatasetSyntheticMIS.sql)

## Scenario runner (how proofs exercise the generator)

`EXEC_DatasetSyntheticMIS.sql` executes four scenarios designed to exercise the reconciliation across profit/loss and VAT modes:

- VAT off + profit (`@PriceRatio = 3.0`)
- VAT on + profit (`@PriceRatio = 3.0`)
- VAT off + loss (`@PriceRatio = 0.5`)
- VAT on + loss (`@PriceRatio = 0.5`)

Each scenario calls `App.proc_DatasetSyntheticMIS` with:

- `@IsCompany = 1`
- `@IsVatRegistered` from the scenario
- `@EnableOpeningBalance = 1`
- all major modules enabled (projects, invoices, payments, payables, wages, expenses, assets, tax, transfers)

The scenario runner then records results from [`Cash.vwEquityReconciliationByYear`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Cash/Views/vwEquityReconciliationByYear.sql) for comparison.

## Orchestration overview (module call order)

`App.proc_DatasetSyntheticMIS` runs the following steps in order.

### 0) Template selection and VAT inference

- Chooses template name based on `@IsCompany`:
  - company: `Minimal Micro Company Accounts 2026`
  - non-company: `Sole Trader Accounts 2026`
- If `@IsVatRegistered` is not provided, it is inferred from `App.tbTemplate.IsVatRegistered`.

### 1) Shared lookup table: `#DatasetCodes`

A temp table `#DatasetCodes` is created once per run and used by all nested procedures to share generated codes (Subjects, Projects, etc.) deterministically.

### 2) Bootstrap (mandatory)

- [`App.proc_DatasetSyntheticMIS_Bootstrap`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_Bootstrap.sql)

Responsibilities (high level):

- Reverse-engineer required node configuration from existing node options and current user context.
- Preserve Identity rows for the current user (so reseeding the node does not break logins).
- Reset the node to a known baseline with `App.proc_NodeDataInit`.
- Recreate the node and install the selected template via `App.proc_NodeBusinessInit` and `App.proc_BasicSetup`.
- Optionally enable/seed opening balance behavior when `@EnableOpeningBalance = 1`.

This step is what makes runs repeatable: every scenario begins from the same baseline.

### 3) Project-side trading lifecycle (conditional)

Executed when `@EnableProjects = 1`:

- [`App.proc_DatasetSyntheticMIS_ProjectInit`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_ProjectInit.sql)
- [`App.proc_DatasetSyntheticMIS_ProjectTemplates`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_ProjectTemplates.sql)
- [`App.proc_DatasetSyntheticMIS_ProjectTran`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_ProjectTran.sql)
- [`App.proc_DatasetSyntheticMIS_ProjectInvoice`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_ProjectInvoice.sql) (conditional: `@EnableInvoices = 1`)
- [`App.proc_DatasetSyntheticMIS_ProjectPay`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_ProjectPay.sql) (conditional: `@EnableProjectPayments = 1`)

These procedures create the trading activity that drives profit/loss and therefore the annual reconciliation.

### 4) Payables side (conditional)

Executed when `@EnablePayables = 1`:

- [`App.proc_DatasetSyntheticMIS_PayInit`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_PayInit.sql)
- [`App.proc_DatasetSyntheticMIS_PayMisc`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_PayMisc.sql) (conditional: `@EnableMiscPayments = 1`)
- [`App.proc_DatasetSyntheticMIS_PayWages`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_PayWages.sql) (conditional: `@EnableWages = 1` and `@IsCompany = 1`)
- [`App.proc_DatasetSyntheticMIS_Expenses`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_Expenses.sql) (conditional: `@EnableExpenses = 1`)

These procedures generate operating cash movements and costs required for non-trivial Cash Statement coverage.

### 5) Company assets (conditional)

Executed when `@IsCompany = 1` and `@EnableAssets = 1`:

- [`App.proc_DatasetSyntheticMIS_Assets`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_Assets.sql)

This provides asset-state behavior for balance sheet snapshotting and capital-related flows.

### 6) VAT (conditional)

Executed when `@IsVatRegistered = 1` and `@EnableTax = 1`:

- [`App.proc_DatasetSyntheticMIS_TaxVat`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_TaxVat.sql)

This enables VAT-on scenarios and is part of proving VAT does not break the annual bridge (penny-level rounding only).

### 7) Transfers / current-to-reserve sweep (conditional)

Executed when `@EnableTransfers = 1`:

- [`App.proc_DatasetSyntheticMIS_Transfers`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_Transfers.sql) (internally uses transfer helpers)

This introduces non-trade cash movements (sweeps) so bank/cash behavior is not trivial.

### 8) Corporation tax on profit (conditional)

Executed when `@IsCompany = 1` and `@EnableTax = 1`:

- [`App.proc_DatasetSyntheticMIS_TaxOnProfit`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_DatasetSyntheticMIS_TaxOnProfit.sql)

This provides corp tax behavior required to prove:

- corp tax is treated as P&L expense in profit years, and
- loss carry mechanics do not create spurious “tax credits” in loss years.

### 9) Final rebuild (mandatory)

- [`App.proc_SystemRebuild`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/App/Stored%20Procedures/proc_SystemRebuild.sql)

This ensures downstream reporting surfaces (views/materializations that depend on rebuild logic) are coherent for the scenario outputs and proof script.

## Relationship to the proof paper

The proof paper [`/technical/cash-statement-proof`](/technical/cash-statement-proof) references:

- the proof assertions script [`PROOF_CashStatementReconciliation.sql`](https://github.com/TradeControl/tradecontrol.web/blob/HEAD/src/Schema/tcNodeDb4/Scripts/PROOF_CashStatementReconciliation.sql), and
- annual reconciliation views.

This synthetic dataset exists specifically to provide controlled coverage of the reconciliation under:

- profit vs loss regimes,
- VAT enabled/disabled,
- non-trivial payables/expenses/wages,
- assets,
- transfers,
- opening balance positioning.

The dataset can then be used as a reliable foundation for tutorials and guides.
