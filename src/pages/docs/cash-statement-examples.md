---
layout: ../../layouts/Documentation.astro
title: Cash Statement Examples (How to Read It)
permalink: /docs/cash-statement-examples
---

This page is for decision makers and finance owners who want to generate the Cash Statement and understand what it is showing.

It also provides a minimal example illustrating how the same invoice activity can produce different statements depending on the Category Tree.

## 1) How to read the Cash Statement (practical)

The Cash Statement is laid out as a set of sections (for example Trade, Tax, Bank), with period columns.

Use it by reading in two directions.

### Read vertically (meaning)

Read down the statement to answer:

- What are the main drivers of income?
- What are the main drivers of cost?
- Which categories dominate month-to-month movement?

Totals and optional analysis lines (Expressions) help summarize the lower-level items.

### Read horizontally (time)

Read across the period columns to answer:

- Is a driver stable, seasonal, or trending?
- Are changes regular (operational) or irregular (one-offs)?
- Where do negative values appear, and are they expected?

If you include forecast features, you are reading “current view plus expected additions”, not only closed/history.

## 2) What the sections mean

Your Category Tree determines the structure, but most statements will include:

- Trade.
  Operational flows (sales, direct costs, overheads) based on your Cash Codes.
- Tax.
  VAT and corporation tax groupings and totals, driven by category rollups.
- Bank and Balance Sheet (optional).
  Cash position and point-in-time balances that provide context.

## 3) The generation options (what changes when you toggle things)

When generating the statement, these options change what is included.

- Include Active Periods.
  Shows values for periods that are not fully “closed” yet, giving a more current picture.
- Include VAT Details.
  Adds VAT breakdown blocks (more detail, same underlying classification).
- Include Bank Balances.
  Adds bank account balance rows and company totals.
- Include Balance Sheet.
  Adds balance sheet sections as point-in-time values.
- Include Tax Accruals.
  Adds accrued tax adjustments to support forecasting.
- Include Order Book.
  Adds expected values from open projects, deducting amounts already invoiced.

Note.

Some options may be present but produce no additional figures until the corresponding dataset is populated in your deployment.

## 4) Minimal example

This example is intentionally small. It demonstrates the key idea:

The Cash Statement is not a fixed template. It is the result of your Category Tree.

### Example cash codes

Assume you have these Cash Codes:

- `S001` "Sales"
- `C001` "Direct Costs"
- `O001` "Overheads"

### Example invoice activity (one month)

Assume invoice totals for a period are:

- `S001` = 100,000
- `C001` = 60,000
- `O001` = 25,000

### Example Category Tree (Version A)

Categories:

- Sales includes `S001`
- Direct Costs includes `C001`
- Overheads includes `O001`

Total Categories:

- Gross Profit = Sales minus Direct Costs
- Net Profit = Gross Profit minus Overheads

Outcome.

The statement presents a clear flow:

Sales → Direct Costs → Gross Profit → Overheads → Net Profit

### Same data, different tree (Version B)

Change only the Category Tree:

- Move `O001` into Direct Costs.

Outcome.

Gross Profit changes (because the category membership changed), even though the invoice data did not.

This is the core configuration power:

The tree determines how the business is explained and summarized.

## 5) Reading for decisions (a simple workflow)

A practical way to use the Cash Statement:

- Generate the statement with conservative options (closed/history only).
- Identify the top 3 positive and top 3 negative categories.
- Re-generate with forecasting options (active periods, accruals, order book) to see the likely near-future position.
- If numbers look “wrong”, do not edit transactions first.
  Check category mapping and rollups first, because the structure controls interpretation.

## Next

- [Cash Statement Overview](/docs/cash-statement-overview)
- [Cash Statement Configuration](/docs/cash-statement-configuration)

