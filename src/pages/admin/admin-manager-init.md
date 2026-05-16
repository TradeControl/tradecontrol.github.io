---
layout: ../../layouts/Documentation.astro
title: Node Initialisation
permalink: /admin/admin-manager-init
---

Node initialisation configures the Trade Control business entity node and creates the baseline configuration required to use the application.

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/init-config.png"
      alt="Configuration Screenshot"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## When this page appears

On first connection to a new or empty database, Trade Control redirects to the Business Setup form.

This is expected during deployment and first-run setup.

The same workflow can also be reached later from:

- [Admin Manager - Setup](/admin/admin-manager-setup)

## What the form does

When you submit the form, Trade Control runs the node configuration and baseline setup procedures using the values you provide.

The most important choices are:

- the **Initialisation Template**
- the **financial year structure**

These settings determine the initial business configuration and how the accounting model interprets transactions.

For more information, see:

- [Initialisation Templates](/admin/admin-manager-init-templates)

## Form sections

### Template

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/setup-template.png"
      alt="Business Template and Unit of Account"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Use this section to select:

- the template rule set
- the unit of account
- the financial year start month

### Business and Primary Contact

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/init-business.png"
      alt="Business Identity"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Use this section to define:

- the business identity
- the account code
- the business name and address
- the primary contact details

### Registration & Tax

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/init-registration-tax.png"
      alt="Registration and Tax"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Use this section to record company and VAT identifiers where applicable.

### Banking

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/init-banking.png"
      alt="Bank Details"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Use this section to set the default current and reserve account details used by the accounting model.

## Tips

- if you are unsure which financial year start to use, use the official year start registered for the business
- if you are following a tutorial, choose the matching template and date guidance from that tutorial
- review template and year settings carefully before submitting