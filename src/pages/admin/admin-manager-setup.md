---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Setup
permalink: /admin/admin-manager-setup
---

Setup is used to initialise or re-initialise the business node when you need a clean configuration baseline.

## Access

Open:

- **System > Admin Manager**
- select **Setup**

On desktop, Setup opens in the right-hand pane. On mobile, it opens as a full-screen view.

## Business Initialisation

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/setup-warning.png"
      alt="Business Initialisation Warning"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Business Initialisation is a destructive action.

It will:

- remove existing organisations and transactions
- recreate a blank node ready for configuration

Safety controls:

- access is restricted to the `Administrators` role
- you must confirm the warning before continuing

## Business Setup form

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/setup-config.png"
      alt="Business Initialisation Configuration"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

After confirming the warning, the Business Setup form opens.

Use it to define:

- the initialisation template
- the financial year structure
- the business identity
- tax and registration details
- default banking details

For detailed guidance on the setup fields, see:

- [Node Initialisation](/admin/admin-manager-init)

## Typical uses

Use Setup when you need to:

- prepare a new business node
- reset a trial or tutorial environment
- intentionally rebuild the accounting baseline

## Mobile notes

On mobile, the **Back** action returns to the previous Admin Manager node.