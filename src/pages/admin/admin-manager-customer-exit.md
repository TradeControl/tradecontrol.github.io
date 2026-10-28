---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Customer Exit
permalink: /admin/admin-manager-customer-exit
---

Customer Exit lets a tenant administrator obtain a documented copy of the business's Trade Control data when changing software provider.

The facility supports the HMRC production-credentials requirement that customers can get their data if they switch provider. It does not imply that HMRC endorses or has certified Trade Control.

## Open Customer Exit

1. Sign in with an account in the **Administrators** role.
2. Open **System → Admin Manager**.
3. In the **Company** section, select **Customer Exit**.
4. Read the archive scope, exclusions and security warning.
5. Select **I understand what this archive contains and want to generate it now**.
6. Select **Generate and download archive**.

The download button remains disabled until the acknowledgement is selected. The acknowledgement applies only to that download; it is not stored as a permanent setting.

## What you receive

The browser downloads a ZIP archive containing:

- `manifest.json`, which explains the format, scope, exclusions and paths;
- one UTF-8 JSON file for each supported physical business table;
- tenant-owned documents, images and templates in their original formats; and
- a unique export reference and SHA-256 integrity digest.

The archive is generated in memory and returned directly over the authenticated HTTPS response. Trade Control does not create a reusable public download link or a temporary server-side package.

## Why the business data is JSON

Each table file is a JSON array. Every item in the array represents one record, with named properties matching the columns described in `manifest.json`.

JSON is a documented, widely supported transfer format intended for import, transformation or inspection by another provider. The files are not designed to look like accounting reports when opened directly. The manifest is the starting point for interpreting them.

The export does not promise that another product can import the archive automatically. Supply the complete ZIP to the receiving provider so that it retains the manifest, data files and original tenant documents together.

## Exclusions

Customer Exit does not export:

- passwords or central identity credentials;
- cryptographic private keys or initialisation material;
- infrastructure configuration or host bindings;
- OAuth grants, access tokens, refresh tokens or vendor credentials;
- operational event logs;
- mapped database views that duplicate or derive physical records; or
- information belonging to another tenant.

## Keep the archive secure

The ZIP contains sensitive business and personal data.

- Save it in an access-controlled location.
- Do not send it through an insecure or unintended channel.
- Confirm the identity and transfer arrangements of the receiving provider.
- Retain it only for as long as it is needed.
- Verify its SHA-256 digest if the archive is transferred between systems.

## What the download does not do

Generating an archive does **not**:

- close the Trade Control account;
- cancel the service;
- delete any records;
- migrate data automatically;
- disconnect HMRC authority; or
- prepare, approve or submit a tax filing.

Account closure, service cancellation, deletion and statutory retention are separate processes.

## Audit evidence

A successful generation writes an information event to the tenant's Event Viewer. The event identifies:

- the export reference;
- the administrator who requested it;
- the table and file counts; and
- the archive digest.

To review it, open **Admin Manager → Diagnostics → Event Viewer**.

## Troubleshooting

### The download button is disabled

Read the warning and select the acknowledgement checkbox. It must be selected for each download.

### Access is denied

Only a user in the tenant's **Administrators** role can generate an archive. Ask a tenant administrator to perform the export; do not share an administrator password.

### The archive takes time to appear

Larger tenants take longer to serialise and compress. Leave the Admin Manager page open and wait for the browser download to begin. Do not repeatedly select the button because every completed generation creates a separate audit event.

### A receiving provider asks for a spreadsheet

The authoritative export is the ZIP containing the manifest, JSON data and original files. A receiving provider can transform documented JSON into its preferred import format without losing the source structure.

## Related guides

- [Admin Manager - Overview](/admin/admin-manager-overview)
- [Admin Manager - Event Viewer](/admin/admin-manager-event-viewer)
