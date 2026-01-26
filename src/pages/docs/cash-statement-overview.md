---
layout: ../../layouts/Documentation.astro
title: Cash Statement Overview
permalink: /docs/cash-statement-overview
---

## What the Cash Statement is

The **Cash Statement** is a configurable financial statement generated from your operational data (invoices and projects) and a **user-defined Category Tree**. It is designed to show:

- **Where money is coming from and going to** (by meaningful categories you define)
- **How those flows change over time** (by accounting periods)
- **A transparent bridge between “what happened” and “what’s expected”**, using optional forecasting features

The Cash Statement outputs to a **spreadsheet** with a consistent layout regardless of file format.

---

## Why this is not a traditional cashflow or P&L report

Traditional finance reporting typically treats the **Profit & Loss** and **Balance Sheet** as primary, and then produces cash views as secondary summaries.

The Cash Statement is built from a different viewpoint:

- It treats economic activity as **flows** (what the organization produces, buys, pays, and accrues).
- The statement’s structure is not fixed: it is **driven by your Category Tree**, not by a predefined chart of accounts.

This has two practical consequences:

1. **Two organizations (or two users) can generate different Cash Statements from identical invoice data**, because their Category Tree expresses different priorities and structure.
2. The statement can serve both as:
   - a **statutory-oriented** view (what is posted/closed), and
   - a **decision-support forecast** (what is expected), depending on the options selected.

> Background: This is aligned with the “Production Layer” approach described in the product—production is treated as primary, and legacy artifacts can be derived for compatibility.

---

## Core concepts (plain language)

### Cash Code

A **Cash Code** is the code assigned to invoice lines (or to a project that produces invoice lines). It identifies *what the line is about* from the Cash Statement’s perspective (e.g., a revenue stream, a cost type, a tax-related flow).

Cash Codes are the atomic units the statement sums up.

### Cash Statement Category

A **Cash Statement Category** is a line/group in the statement defined by the Category Tree. Categories are used to *organize* Cash Codes into readable sections.

Categories have:

- a **Cash Type** (e.g., Trade / Tax / Bank)
- a **Polarity** (how the direction of money is interpreted)
- a **Display Order** (the narrative order in the statement)

### Polarity (direction)

Each Category has a **polarity**:

- **Expense**: outflows (costs)
- **Income**: inflows (revenues)
- **Neutral**: neither strictly income nor expense

Polarity is one of the key mechanisms that allows the statement to be driven by *meaning*, not by fixed “sales vs purchases” document types.

---

## How the Category Tree drives the statement

The Category Tree is the configuration layer that turns raw operational data into a readable statement.

At a high level, it provides:

- **Semantic grouping**: Cash Codes are grouped into Categories that reflect how you want to explain your business.
- **Ordering**: Categories are displayed in a specific order to form a narrative (not an arbitrary alphabetical dump).
- **Rollups**: Certain sections (Totals, Expressions, and tax-related rollups) derive their values from **hierarchies of Category Codes**, allowing structured aggregation.

The result is a statement that reads like “your model of the business”, not like a generic template.

---

## What you can include when generating the Cash Statement

When generating the Cash Statement, you can optionally include features that change what is shown and/or how values are computed.

### Include Active Periods

Includes values from periods that are not fully closed yet (useful for “current position” reporting).

### Include Order Book

Adds forecast values derived from **open projects** (work not yet fully invoiced). The system determines whether items behave like “sales” or “purchases” based on the **Cash Code and polarity rules**, and subtracts parts already invoiced.

### Include Tax Accruals

Adds accrued tax adjustments (e.g., VAT/corporation tax accrual behavior) to support forecasting and forward-looking decision making.

### Include VAT Details

Adds VAT blocks that show VAT-related totals over time.

### Include Bank Balances

Adds bank balance sections for cash-position context.

### Include Balance Sheet

Adds balance sheet-oriented sections (as a point-in-time companion view).

> The statement remains structurally consistent; these options control the presence of specific sections and/or the inclusion of forecast and accrual components.

---

## Who uses what (quick guidance)

### If you configure the Category Tree

Your focus is:

- defining Categories and their order
- defining Total Categories (how rollups work)
- defining Expression Categories (computed lines)
- ensuring Cash Codes are classified correctly

Your work controls what the statement *means*.

### If you are a decision maker

Your focus is:

- selecting options (active periods, order book, accruals)
- reading the statement as “what happened vs what is expected”
- using the category narrative to identify drivers (growth areas, costs, cash pinch points)

Your work uses the statement to make decisions.

---

## Next: Configuring the Category Tree

See: [**Configuring the Category Tree for Cash Statements**](/docs/cash-statement-configuration) for how Categories, Totals, and Expressions shape the final output.
