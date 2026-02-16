---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Setup
permalink: /admin/admin-manager-setup
---

Setup in Admin Manager is used to (re)initialise the business node after tutorials, trial runs, or when you intentionally need a clean configuration baseline.

## Access

Open:

- **System > Business Manager > Setup**

## Business Initialisation (destructive)

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-setup-warning.png"
      alt="Business Initialisation Warning"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

The Business Initialisation page is a destructive operation.

It will:

- Wipe existing organisations and transactions.
- Recreate a blank node ready for configuration.

Safety controls:

- Access is restricted to the `Administrators` role.
- You must confirm the warning checkbox before proceeding.

## Business Setup (configuration form)

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-setup-config.png"
      alt="Business Initialisation Configuration"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

After confirming the warning, you will be taken to the Business Setup form.

For detailed guidance on how the form works and how to choose templates and financial year settings, see:

- [Node Initialisation](/admin/admin-manager-init)

## Embedded behavior

On desktop, the Setup pages open inside the Admin Manager right-hand pane (embedded mode).

On mobile devices, Setup opens as a full page.
