---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Overview
permalink: /admin/admin-manager-overview
---

Admin Manager is the central place to configure the business node.

It is intended for **Administrators** (business owners, directors, or delegated administrators).

<div style="max-width: 900px; margin: 1rem 0;">
    <a href="/admin/admin-manager-overview#modules" title="Admin Manager — click to explore">
    <img
      src="/images/admin-manager-overview.png"
      alt="Admin Manager Overview"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

## Purpose

Use Admin Manager to:

- Configure the business node and core accounting settings.
- Manage configuration modules in a consistent, “tree + details” workspace.
- Return to modules quickly while preserving your place in the configuration tree.

## How it works

On desktop, Admin Manager uses a split layout:

- Left pane: configuration tree
- Right pane: selected module (embedded)

On mobile devices, modules open as full pages.

## Modules

This index will expand as additional modules are integrated.

- [Setup](/admin/admin-manager-setup)
  - Configure the baseline business node setup.
  - Re-initialise the business node with new settings (e.g. after a trial or tutorial).
- [File Transfer](/admin/admin-manager-file-transfer)
  - Browse registered files by content type (Images, Documents, Templates).
  - Sync the database with the server file system.
  - Upload, download, view details, and delete files.
- [HTML Templates](/admin/admin-manager-html-templates)
  - Assign HTML templates per template type.
  - Manage embedded `.tpl` fragments and template images.
  - Parse templates to validate output rendering.
- [Mail Host](/admin/admin-manager-mail-host)
  - Manage SMTP host profiles and select the active sender.
  - Send a test email and review the result in Event Logs.
  - Rotate encryption keys used for stored mail passwords.
- [Users - Registration process](/admin/admin-manager-user-registration)
  - Registration states and the end-to-end workflow.
  - Troubleshoot missing emails and pending approval.
- [Users](/admin/admin-manager-users)
  - Process confirmed registrations by creating `Usr.tbUser`.
  - Assign roles and delete users safely.
- [Financial Periods](/admin/admin-manager-periods)
  - Set the financial year and monthly boundaries.
  - Close months (Period End) and rebuild closed periods after historic changes.

## Related deployment documentation

- [Node Initialisation](/admin/admin-manager-init)
- [Initialisation Templates](/admin/admin-manager-init-templates)