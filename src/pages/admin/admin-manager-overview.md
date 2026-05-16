---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Overview
permalink: /admin/admin-manager-overview
---

Admin Manager is the central workspace for configuring the business node.

It is intended for **Administrators** and delegated users responsible for system setup and maintenance.

<div style="max-width: 1200px; margin: 1rem 0;">
    <a href="/admin/admin-manager-overview#modules" title="Admin Manager — click to explore">
        <img
          src="/images/admin-manager/overview.png"
          alt="Admin Manager Overview"
          style="width: 100%; height: auto; display: block; border-radius: 8px;"
        />
    </a>
</div>

## Purpose

Use Admin Manager to:

- configure the business node and core accounting settings
- work through administration modules in a consistent tree-and-details workspace
- move quickly between related configuration areas
- review operational and diagnostic information in one place

## How it works

On desktop, Admin Manager uses a split layout:

- left pane: configuration tree
- right pane: selected module

On mobile devices, modules open as full-screen views with a **Back** action to return to the tree.

## Modules

- [Setup](/admin/admin-manager-setup)
  - Configure the baseline business node setup.
  - Re-initialise the business node with new settings when required.
- [Synthetic Datasets](/admin/admin-manager-dataset)
  - Replace the current business data with a synthetic demonstration dataset.
  - Choose a template, VAT setting, and scenario.
  - Monitor background installation status until complete.
- [File Transfer](/admin/admin-manager-file-transfer)
  - Browse registered files by content type.
  - Sync the database with the server file system.
  - Upload, download, inspect, and delete files.
- [HTML Templates](/admin/admin-manager-html-templates)
  - Manage invoice templates and system templates.
  - Assign documents, images, and related resources.
  - Parse templates to validate output rendering.
- [Mail Host](/admin/admin-manager-mail-host)
  - Manage SMTP host profiles and select the active sender.
  - Send a test email and review the result in Event Viewer.
  - Rotate encryption keys used for stored mail passwords.
- [Users - Registration process](/admin/admin-manager-user-registration)
  - Understand registration states and the end-to-end workflow.
  - Troubleshoot missing emails and pending approval.
- [Users](/admin/admin-manager-users)
  - Process confirmed registrations by creating `Usr.tbUser`.
  - Assign roles and delete users safely.
- [Financial Periods](/admin/admin-manager-periods)
  - Set the financial year and monthly boundaries.
  - Close months and rebuild closed periods after historic changes.
- [Tax Configuration](/admin/admin-manager-tax-config)
  - Tax Settings: due rules and scheduling per tax type.
  - Tax Codes: VAT codes and rounding rules used in transactions.
  - Tax Rates & Adjustments: corporation tax rates over time and windowed adjustments.
- [Classifications](/admin/admin-manager-classifications)
  - Invoice Settings: set the next document numbers per invoice type.
  - Subject Types: classify organizations using cash polarity.
- [Event Viewer](/admin/admin-manager-event-viewer)
  - Review errors, warnings, and information events.
  - Inspect full event messages and submit selected errors to support.

## Related deployment documentation

- [Node Initialisation](/admin/admin-manager-init)
- [Initialisation Templates](/admin/admin-manager-init-templates)