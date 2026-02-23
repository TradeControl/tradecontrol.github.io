---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Financial Periods
permalink: /admin/admin-manager-periods
---

The Financial Periods module is where you define your accounting calendar and control how Trade Control closes each month.

Financial Periods provide the “time structure” needed to measure business performance over defined accounting periods. They do not structure the data, since Trade Control stores transactions as atomic postings.

A business system could operate without period ends. However, in most societies, period-based accounting is not optional in practice. It is central to how owners, lenders, auditors, and governments evaluate a business.

## Why period ends matter

Period ends are vitally important for:

### 1) How much money can be extracted from the business

Owners typically extract value from a business based on performance over an accounting period.

Period ends support:

- Measuring whether the business increased in value over a given period
- Identifying how much capital (profit) is available for distribution or reinvestment
- Producing comparable month-by-month and year-by-year results

### 2) Corporation Tax (annual)

Corporation Tax is calculated on profits earned over the business’s accounting year.

A clear financial year structure and stable period closes help ensure:

- Annual profit can be reported consistently
- Adjustments to historic transactions are controlled and auditable

### 3) VAT (quarterly)

VAT is typically assessed over quarterly periods.

Financial periods provide the date boundaries required to reliably determine:

- How much VAT was collected on sales in the quarter
- How much VAT was incurred on purchases in the quarter
- The net VAT payable (or reclaimable) for that period

## Access

Open:

- **System > Admin Manager**
- In the tree: **Tax > Financial Periods**

On desktop, Financial Periods opens in the right-hand pane. On mobile it opens as a full page.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-periods-tree.png"
      alt="Admin Manager tree showing Tax > Financial Periods"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Key concepts

### Financial year

A financial year defines the official 12‑month reporting cycle for the business.

This is the year used to produce annual accounts and corporate tax reporting.

### Monthly periods and boundaries

Each year is split into monthly periods.

A monthly period has a **start date**. It does not have to be the 1st.

This lets you align period boundaries to real operational close-down schedules (for example, after stock take or other month-end routines).

## Financial Periods (Index page)

The Index page shows:

- The current **Active period**
- A list of financial years in the system
- Administrator actions for close and rebuild

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-periods-index.png"
      alt="Financial Periods (Index) showing Active period, action buttons, and financial years list"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

### Period End (close the month)

Use **Period End** to close the current Active period and advance to the next month.

Why this exists:

- Month end creates stable reporting results for that period.
- Without a close-down concept, historic results can change every time someone edits an older transaction.

Expected outcome:

- The Active period updates to the next month.
- A success message is shown.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-periods-flash-success.png"
      alt="Financial Periods success message after Period End or rebuild actions"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

### Rebuild Periods (accept changes to closed history)

Use **Rebuild Periods** if historic transactions have been changed in a period that has already been closed and you want reporting totals to reflect those changes.

This is the explicit “accept the change into closed reporting” action.

Expected outcome:

- A success message is shown.
- Reports that rely on closed period ends reflect the revised history.

### Rebuild System (repair)

Use **Rebuild System** only when you suspect the system’s period/reporting state is inconsistent or corrupted.

Expected outcome:

- A success message is shown, or
- A failure message is shown with a link to Event Logs

## Configure month boundaries to match your close-down schedule

Use this workflow to align Trade Control period boundaries to your business month-end routines.

1. Open **Financial Periods**
2. Select **Edit** on the financial year you want to adjust
3. In the month list, open the month you want to change
4. Update the period **Start date**
5. Select **Update**
6. If the edited month is already closed and you want reports to reflect the change, run **Rebuild Periods**

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-periods-edit-year.png"
      alt="Edit Financial Year page showing the month list"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-periods-edit-period.png"
      alt="Edit Period page showing the Start date control"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Event Logs

If an action fails, the page provides a link to **Event Logs**.

From Admin Manager on desktop, Event Logs opens outside the embedded pane and includes a **Back** button to return to Admin Manager with Financial Periods selected.
