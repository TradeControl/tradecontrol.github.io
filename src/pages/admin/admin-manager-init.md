---
layout: ../../layouts/Documentation.astro
title: Node Initialisation
permalink: /admin/admin-manager-init
---

Node initialisation configures the Trade Control business entity node and creates the baseline configuration required to use the application.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-config.png"
      alt="Configuration Screenshot"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

## When this page appears

On first connection to a new (empty) database, Trade Control automatically redirects to the Business Setup form from `TradeControl.Web.Pages.IndexModel.OnGetAsync()`.

This is expected during deployment and first-run setup.

## What the form does

When you submit the form, Trade Control runs the node configuration and baseline setup procedures using the values you provide.

The most important choices are the **Initialisation Template**, which controls what configuration is installed, and your **Period End** date. All other settings are easily modified later, but these two settings determine the initial configuration of the business node and how the accounting model will interpret transactions.

The template you select determines how the business is configured. For example:

- **HMRC templates** map cash transactions to tax return codes, simplifying account submission.
- If you're following a tutorial, select the associated template and set the year end to the **previous month** to simulate a year-end.
- Otherwise, choose the **start month** you registered with HMRC.

For more information, consult:

- [Initialisation Templates](/admin/admin-manager-init-templates)

## Form sections

### Template

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-template.png"
      alt="Business Template and Unit of Account"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

Use this section to select the template rule set, Unit of Account and financial year start month.

### Business and Primary Contact

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-business.png"
      alt="Business Identity"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

Use this section to define the business identity (account code, name, and address), business owner/administrator contact details.

### Registration & Tax

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-registration-tax.png"
      alt="Registration and Tax"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

Use this section to record optional company and VAT identifiers and confirm the default government/tax authority entity name.

### Banking

<div style="max-width: 800px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-banking.png"
      alt="Bank Details"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

Use this section to set the default current and reserve account details used by the accounting model. If you do not have a reserve account, you can leave these fields blank. Additional reserve accounts can be added later.

> **Important**: Sole Traders cannot use their own personal bank account because the system reconciles business and bank transaction balances. If your business does not have a current account, create a new account with your bank and use those details here. It will also reduce your dependency on receipts to near zero.

## Tips

Although every setting can be retrospectively modified, it's best to enter correct values from the outset to avoid unnecessary reconfiguration later.

- If you are unsure which start month to choose, use the financial year start you registered with HMRC (or your official accounting year start).
- Treat initialisation as a foundational step; review template and financial year values carefully before submitting.
