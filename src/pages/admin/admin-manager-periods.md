---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Financial Periods
permalink: /admin/admin-manager-periods
---

The Financial Periods module defines the accounting calendar and controls how Trade Control closes each month.

Financial periods provide the date structure used for reporting, corporation tax, and VAT.

## Access

Open:

- **System > Admin Manager**
- in the tree: **Tax > Financial Periods**

On desktop, Financial Periods opens in the right-hand pane. On mobile, it opens as a full-screen view.

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/financial-periods.png"
      alt="Admin Manager tree showing Tax > Financial Periods"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Why period ends matter

Period ends are important for:

- measuring performance over stable reporting periods
- determining how much value can be extracted from the business
- preparing corporation tax reporting over the accounting year
- calculating VAT over the correct quarter boundaries

## Key concepts

### Financial year

A financial year defines the official 12-month reporting cycle for the business.

### Monthly periods and boundaries

Each year is split into monthly periods.

A period has a **start date**, and that start date does not need to be the first day of the month.

## Financial Periods index

The main panel shows:

- the active period
- the financial years in the system
- actions to close or rebuild periods

### Period End

Use **Period End** to close the current active period and advance to the next month.

### Rebuild Periods

Use **Rebuild Periods** when historic transactions have changed and you want closed reporting to reflect those changes.

### Rebuild System

Use **Rebuild System** only when you suspect period state is inconsistent.

## Configure month boundaries

1. Open **Financial Periods**
2. select **Edit** for the financial year
3. open the month you want to change
4. update the **Start date**
5. select **Update**
6. if the month is already closed and you want closed reporting to reflect the change, run **Rebuild Periods**

## Diagnostics

If an action fails, use **Event Viewer** from Admin Manager to inspect the error.

See:

- [Event Viewer](/admin/admin-manager-event-viewer)