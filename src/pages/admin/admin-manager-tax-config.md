---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Tax Configuration
permalink: /admin/admin-manager-tax-config
---

Tax Configuration is where you define how Trade Control calculates and reports tax.

This area covers:

- Tax Settings
- Tax Codes
- Tax Rates & Adjustments

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/admin-manager/tax-config.png"
    alt="Admin Manager tree showing Tax Settings, Tax Codes, and Tax Rates & Adjustments"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Access

Open:

- **System > Admin Manager**
- in the tree:
  - **Tax > Tax Settings**
  - **Tax > Tax Codes**
  - **Tax > Tax Rates & Adjustments**

On desktop, these modules open in the right-hand pane. On mobile, they open as full-screen views.

## Tax Settings

Tax Settings defines the scheduling rules for each tax type.

Use it to review and maintain:

- posting behavior
- recurrence rules
- due month
- offset days
- default subject where applicable

## Tax Codes

Tax Codes define VAT behavior and are referenced by invoices, orders, and other tax-sensitive transactions.

Use this area to:

- create a tax code
- edit an existing tax code where appropriate
- review rate, decimals, type, and rounding

### Important note

If a VAT rate changes, it is normally better to create a new tax code rather than change a historically used code.

## Tax Rates & Adjustments

Tax Rates & Adjustments is where you maintain:

- corporation tax rates over time
- VAT adjustments by period window
- corporation tax adjustments by period window

Use this area to:

- select a financial year
- open a month or period
- set adjustments for that period
- set a corporation tax rate for a date range