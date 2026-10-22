---
layout: ../../layouts/Documentation.astro
title: Admin Manager – Mail Host
permalink: /admin/admin-manager-mail-host
---

Mail Host shows the email delivery route used by Trade Control and lets a business optionally supply its own SMTP host.

This module is intended for **Administrators**.

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/mail-host.png"
      alt="Admin Manager Mail Host"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Access

Open:

- **System > Admin Manager**
- select **Mail Host**

On desktop, Mail Host opens in the right-hand pane. On mobile, it opens as a full-screen view.

## What this module manages

Use Mail Host to:

- confirm that system-managed email is available
- send a test email using the active delivery route
- optionally create and maintain business-specific SMTP overrides
- select the active business-specific override
- configure SMTP authentication
- rotate encryption keys used for stored override passwords

## System-managed email

In a hosted Trade Control environment, email is normally **System managed**. The hosting service supplies the sender and keeps its credentials outside the business database.

The blue banner confirms when this route is available. If no tenant override is configured, **Active Email Route** shows **System managed**. No action is required from the business Administrator.

System-managed email sends account and registration messages and acts as the default route for business documents and support notifications.

## Business-specific override

A business may add its own SMTP host when messages must be sent from an address or service that it controls. This is optional in a hosted environment.

Only one tenant override is active at a time. When an override is active, business documents and support notifications use it. Account and registration messages remain system managed.

1. Select a host from the tenant override list
2. select **Set Active**

Expected outcome:

- the selected host becomes the active tenant override
- business email uses that host while platform account email remains system managed

## Add a new host

1. Select **New Override**
2. enter:
   - **Host Desc.**
   - **Email Address**
   - **Use SMTP Auth**
   - **Password** when authentication is enabled
   - **Host Name**
   - **Port**
3. select **Create**

Expected outcome:

- the host is stored and appears in the list

## Edit an existing host

1. Select the edit action
2. update the required values
3. select **Update**

If **Use SMTP Auth** is cleared, the stored password is cleared.

## Delete a host

1. Select the delete action
2. confirm deletion

Expected outcome:

- the host is removed
- if the deleted host was active, Trade Control selects another host where possible

## Test Email

Use **Test Email** to verify the active email route. With no tenant override, this tests system-managed email. With an active override, it tests that override.

1. Select **Test Email**
2. Trade Control sends a test message to the signed-in user's Identity email address

Expected outcome:

- a confirmation message is shown
- the send result is written to Event Viewer

## Encryption key rotation

Tenant-host passwords are stored encrypted. The platform email credential is managed by the hosting service and is not held in the business database.

Use **Rotate Keys** if you need to replace the encryption key material for tenant-host passwords. This action is unavailable when the business has no tenant overrides.

1. Select **Rotate Keys**
2. confirm you have a database backup
3. select **Rotate Keys and Re-encrypt Host Passwords**

Expected outcome:

- a new symmetric key and IV are generated
- stored mail passwords are re-encrypted where possible
- results are written to Event Viewer

## Gmail notes

If you use Gmail SMTP:

- enable Google 2-Step Verification
- create a Google App Password
- use the App Password as the SMTP password

Recommended settings:

- host: `smtp.gmail.com`
- port: `587`
- use SMTP auth: enabled
