---
layout: ../../layouts/Documentation.astro
title: Admin Manager – Mail Host
permalink: /admin/admin-manager-mail-host
---

Mail Host is where you configure SMTP settings used by Trade Control to send external communications (for example invoices and orders) or system emails (for example registration notices and support notifications).

This module is intended for **Administrators**.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-mail-host.png"
      alt="Admin Manager Mail Host"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## What this module manages

Use Mail Host to:

- Create and manage one or more SMTP host profiles.
- Select the **active** SMTP host used by the application.
- Configure whether the host requires SMTP authentication (**Use SMTP Auth**).
- Rotate the database encryption keys used to encrypt stored mail passwords.
- Send a **Test Email** to confirm the active host is working, and record results in Event Logs.

## Access

Open:

- **Admin > Manager**
- Select **Mail Host**

On desktop, the module opens in the right-hand pane. On mobile, it opens as a full page.

## Active host

Only one host is active at a time.

1. Select a host from the **Active Host** dropdown.
2. Select **Set Active**.

Expected outcome:

- The selected host becomes the active host.
- System emails will use the selected host.

### Why you might configure multiple hosts

It’s common to create multiple mail hosts for redundancy.

If the active SMTP host fails (provider outage, credentials revoked, rate limits, firewall changes), an Administrator can quickly switch to another **pre-configured** host by selecting it as the active host, without needing to create new settings under time pressure.

## Add a new host

1. Select **New Host**.
2. Enter:
   - **Host Desc.**: A friendly description (for example `Gmail (app password)`).
   - **Email Address**: The SMTP mailbox address used as the sender.
   - **Use SMTP Auth**: Enable if the SMTP server requires authentication.
   - **Password**: Required when **Use SMTP Auth** is enabled.
   - **Host Name**: SMTP server DNS name (for example `smtp.gmail.com`).
   - **Port**: SMTP port (common values: `587` for STARTTLS, `465` for SSL).
3. Select **Create**.

Expected outcome:

- The host is stored and appears in the host list.

## Edit an existing host

1. Select the pencil icon for the host.
2. Update values as required.
3. Select **Update**.

Notes:

- If **Use SMTP Auth** is cleared, the password field is disabled and the stored password is cleared.

## Delete a host

1. Select the trash icon for the host.
2. Confirm by selecting **Delete**.

Expected outcome:

- The host is removed.
- If the deleted host was active, Trade Control attempts to select another available host (or clears the active host if none remain).

## Test Email

Use **Test Email** to verify SMTP connectivity/authentication using the current active host.

1. Select **Test Email**.
2. Trade Control will send a test message to the **current signed-in user** (their Identity email address).

Expected outcome:

- A confirmation message is shown.
- A log entry is written recording what was sent, from/to, and the outcome.
- Use the **Event Logs** link in the confirmation message for details.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-mail-host-test-email.png"
      alt="Admin Manager - Host Test Email"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Encryption key rotation (Rotate Keys)

Mail host passwords are stored encrypted. If you think encryption keys may be compromised, rotate them.

1. Select **Rotate Keys**.
2. Confirm that you have a database backup.
3. Select **Rotate Keys and Re-encrypt Host Passwords**.

Expected outcome:

- A new symmetric key/IV is generated in the database.
- Stored mail passwords are decrypted with the old key and re-encrypted with the new key where possible.
- Results are recorded in Event Logs.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-mail-host-rotate-keys.png"
      alt="Admin Manager - Rotate Encryption Keys"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Gmail notes (modern requirement)

An ordinary Gmail account is an easy way to get started. However, Google no longer supports “Less secure app access” for SMTP.

If you use Gmail SMTP, configure:

- Enable Google **2‑Step Verification**
- Create a Google **App password**
- Use the **App password** as the SMTP password

Recommended settings:

- Host: `smtp.gmail.com`
- Port: `587`
- Use SMTP Auth: enabled

## Production guidance (recommended)

For production deployments, consider using a dedicated email delivery provider rather than a personal mailbox SMTP server.

Reasons:

- Better reliability and deliverability (SPF/DKIM alignment, reputation management)
- Delivery tracking (accepted, delivered, bounced, blocked)
- Rate limiting controls and clearer failure reporting
- Easier credential rotation and safer operational practices

Common options:

- SendGrid
- Mailjet
- Mailgun
- Amazon SES

If using a provider that supports authenticated SMTP, configure it as a Mail Host in the same way (host, port, username, password, **Use SMTP Auth** enabled), then use **Test Email** to verify the configuration.
