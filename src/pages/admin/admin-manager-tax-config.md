---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Tax Configuration
permalink: /admin/admin-manager-tax-config
---

Tax Configuration is where you define how Trade Control calculates and reports tax.

This module is intended for **Administrators** (and some actions are available to Managers, depending on role).

It covers three areas:

- Tax Settings (how tax periods are defined and when tax becomes due).
- Tax Codes (VAT codes and rounding behavior used on invoices, orders, and postings).
- Rates & Adjustments (corporation tax rates over time and windowed adjustments for VAT and corporation tax).

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-config-tree.png"
    alt="Admin Manager tree showing Tax Settings, Tax Codes, and Tax Rates & Adjustments"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Access

Open:

- **System > Admin Manager**
- In the tree: **Tax**
  - **Tax Settings**
  - **Tax Codes**
  - **Tax Rates & Adjustments**

On desktop, modules open in the right-hand pane (embedded). On mobile devices, modules open as full pages.

---

## 1) Tax Settings

Tax Settings defines the scheduling rules for each tax type (for example: when VAT is due, or how corporation tax periods align to the financial year).

Open:

- In the tree: **Tax > Tax Settings**

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-settings-index.png"
    alt="Tax Settings index showing configured tax types and actions"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### View settings (Details)

1. Select **Details** for a tax type.
2. Review:
   - Posting behavior (cash code / description)
   - Recurrence rules (e.g., quarterly VAT)
   - Due month and offset days
   - Default subject (where applicable)

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-settings-details.png"
    alt="Tax Settings details page"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Edit settings (Administrator)

1. Select **Edit**.
2. Make changes.
3. Select **Update**.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-settings-edit.png"
    alt="Tax Settings edit page"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

---

## 2) Tax Codes

Tax Codes define VAT behaviors (rate/rounding/type) and are referenced by invoices, orders, and other tax-sensitive transactions.

Open:

- In the tree: **Tax > Tax Codes**

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-codes-index.png"
    alt="Tax Codes index page showing tax codes list"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Create a tax code

1. Select **New Tax Code**.
2. Enter a description.
3. Optional: select **Generate** to suggest a code.
4. Enter:
   - Tax type
   - Rounding
   - Tax rate (%)
   - Decimals
5. Select **Create**.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-codes-create.png"
    alt="Create Tax Code page showing editable code, percent tax rate input, and rounding/type selectors"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Edit a tax code (immutability warning)

Tax codes should not be changed retrospectively if they have been used historically.

If a VAT rate changes, you normally create a **new** tax code rather than modifying an old one, since historic tax results can be recalculated from the origin transactions.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-codes-edit-warning.png"
    alt="Edit Tax Code page showing the immutability warning and read-only tax code"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

---

## 3) Tax Rates & Adjustments

Tax Rates & Adjustments is where you maintain:

- Corporation tax rates over time (applied monthly in the system).
- VAT adjustments and corporation tax adjustments, applied per tax period window.

Open:

- In the tree: **Tax > Tax Rates & Adjustments**

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-rates-index.png"
    alt="Tax Rates & Adjustments index with year list and period tiles"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Select a financial year

Use the **Financial Year** selector to filter the list and automatically expand that year.

### Open a period

1. Select a month/period tile.
2. The Period page lets you:
   - Set VAT adjustment for the relevant VAT window
   - Set corporation tax adjustment for the relevant corporation tax window
   - Set the corporation tax rate for that month only

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-rates-period.png"
    alt="Tax period page showing adjustments and monthly corporation tax rate sections"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Set corporation tax rate by date range

Use **Set by date range** to apply a rate across multiple months.

1. From a Period page, select **Set by date range**.
2. Enter Start date and End date.
3. Enter the tax rate as a percentage (for example: 25 for 25%).
4. Select **Set rate**.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-tax-rates-editrate.png"
    alt="Set corporation tax rate by date range page"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>
