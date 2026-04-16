---
layout: ../../layouts/Documentation.astro
title: Cash Statement Examples (How to Read It)
permalink: /cash/cash-statement-examples
---

This page is for decision makers and finance owners who want to generate the Cash Statement and understand what it is showing.

It also provides a minimal example illustrating how the same invoice activity can produce different statements depending on the Category Tree.

## Screenshots (synthetic dataset)

This documentation uses a [synthetic dataset](/technical/synthetic-dataset) so screenshots are publishable.

The screenshots correspond to the Excel output produced by the Cash Statement generator.

## Cash Flow sheet: Trade example

<div style="max-width: 1800px; margin: 1rem 0; text-align: left; padding-left: 1rem;">
  <img src="/images/cash-flow-totals.png" alt="Cash Flow Statement Trade section"
       style="width: 100%; height: auto; display: inline-block; border-radius: 8px;" />
</div>

## Cash Flow sheet: Summary example

<div style="max-width: 1800px; margin: 1rem 0; text-align: left; padding-left: 1rem;">
  <img src="/images/cash-flow-summary.png" alt="Cash Flow Statement Summary block"
       style="width: 100%; height: auto; display: inline-block; border-radius: 8px;" />
</div>

## Cash Flow sheet: VAT totals example

<div style="max-width: 1800px; margin: 1rem 0; text-align: left; padding-left: 1rem;">
  <img src="/images/cash-flow-vat-totals.png" alt="Cash Flow Statement Tax totals block"
       style="width: 100%; height: auto; display: inline-block; border-radius: 8px;" />
</div>

## Cash Flow sheet: Bank balances example

<div style="max-width: 1800px; margin: 1rem 0; text-align: left; padding-left: 1rem;">
  <img src="/images/cash-flow-bank-balances.png" alt="Cash Flow Statement bank balances section"
       style="width: 100%; height: auto; display: inline-block; border-radius: 8px;" />
</div>

## Cash Flow sheet: Balance sheet example

<div style="max-width: 1800px; margin: 1rem 0; text-align: left; padding-left: 1rem;">
  <img src="/images/cash-flow-balance-sheet.png" alt="Cash Flow Statement balance sheet section (including capital row)"
       style="width: 100%; height: auto; display: inline-block; border-radius: 8px;" />
</div>

## Reconciliation sheet example

<div style="max-width: 1800px; margin: 1rem 0; text-align: left; padding-left: 1rem;">
  <img src="/images/cash-flow-reconciliation.png" alt="Reconciliation worksheet showing tolerance, overall status, and per-year PASS/WARN/FAIL"
       style="width: 100%; height: auto; display: inline-block; border-radius: 8px;" />
</div>

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
- Reconciliation (optional).
  Submission confidence checks (`PASS/WARN/FAIL`) that validate the annual equity bridge.

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
- Include Reconciliation.
  Adds the Reconciliation worksheet where you can confirm the statement adds up before submission.

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
- Use the Reconciliation workbook page before submission to confirm the statement adds up.
- If numbers look “wrong”, do not edit transactions first.
  Check category mapping and rollups first, because the structure controls interpretation.

## Fixing past periods (why periods are closed)

The Cash Statement is designed to be trustworthy over time. For that reason, financial periods are “closed” after period-end.

A closed period protects your reporting history:

- It keeps past months stable once they have been reviewed.
- It prevents accidental changes to earlier results when you are working in the current month.
- It makes it easier to reconcile your reports with bank activity, tax totals, and supporting documents.

Mistakes still happen, and you will usually notice them first in the Cash Statement.

Common causes:

- An invoice has the wrong date, so it appears in the wrong month.
- A payment has the wrong date (including cases where the system generates an invoice from a payment).
- Asset or depreciation entries were posted incorrectly.
- A cash code or category mapping was changed after documents were posted.

When you correct underlying data that affects a closed period, the statement may need a rebuild so the corrected values are reflected in the right month.

Suggested workflow:

- Use the Cash Statement to identify the line and period(s) affected.
- Correct the underlying data.
- Run a rebuild to refresh totals.
- Re-run the Cash Statement to confirm the corrected periods now match expectation.

Rebuild options:

- If the issue is limited to one customer or supplier, use the Rebuild option from that organisation’s maintenance screen.
- If the issue affects multiple areas or results look inconsistent, use System Rebuild from Admin > Periods.

## Next

- [Cash Statement Overview](/cash/cash-statement-overview)
- [Cash Statement Configuration](/cash/cash-statement-configuration)
