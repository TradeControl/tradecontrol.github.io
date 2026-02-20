---
layout: ../../layouts/Documentation.astro
title: Users - Registration process
permalink: /admin/admin-manager-user-registration
---

User registration is a two-stage workflow:

1. The user proves ownership of their email address (Identity confirmation).
2. An Administrator provisions the user inside Trade Control (`Usr.tbUser`) and assigns roles.

This page is written for end-users, support/Admins, and for an AI-agent to troubleshoot registration states.

## Prerequisites

Normal registration depends on email sending.

Before users can register, an Administrator must configure and activate an SMTP profile:

- [Admin Manager – Mail Host](/admin/admin-manager-mail-host)

## Process overview (state diagram)

~~~mermaid
stateDiagram-v2
    direction LR

    [*] --> RegisteredIdentity : User registers (Identity user created)

    RegisteredIdentity --> EmailSent : Confirmation email sent
    EmailSent --> Confirmed : User clicks confirm link<br/>(Identity EmailConfirmed = true)

    Confirmed --> AdminReview : Admins notified<br/>(New registration request)
    AdminReview --> Registered : Admin creates Usr.tbUser<br/>(Registered = true)
    Registered --> RolesAssigned : Admin assigns roles<br/>(Administrators / Managers)
    RolesAssigned --> Active : User can sign in<br/>(RequireConfirmedAccount)

    RegisteredIdentity --> Deleted : Admin deletes registration
    Confirmed --> Deleted : Admin deletes registration
    Registered --> Deleted : Admin deletes user
~~~

## Step-by-step: end-user journey

### 1) Register

The user registers using their email address and password.

<div style="max-width: 600px; margin: 1rem 0;">
    <img
      src="/images/user-registration-register.png"
      alt="Register page"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Expected outcome:

- The Identity user is created.
- A confirmation email is sent.
- The user is prompted to check their inbox.

### 2) Confirm email

The user opens the confirmation email and selects **Confirm email address**.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/user-registration-confirm-email.png"
      alt="Confirmation email (Outlook)"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Expected outcome:

- The user is taken to the home page page.
- Their Identity email is marked confirmed.

### 3) Admins are notified

After email confirmation succeeds, Trade Control notifies Administrators that a registration is awaiting processing.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/user-registration-admin-notify-email.png"
      alt="Admin notification - new registration request"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Expected outcome:

- Admins receive a “New registration request” email.
- In **Admin Manager > Users**, the entry appears as:

  - Confirmed: Yes
  - Registered: No

## Admin provisioning step

Email confirmation proves email ownership. It does not create the internal user record.

An Administrator must:

- Create the user in `Usr.tbUser`.
- Assign roles.

See:

- [Admin Manager - Users](/admin/admin-manager-users)

## Common issues

### No confirmation email received

Common causes:

- No active Mail Host is configured.
- SMTP settings are incorrect (host/port/auth/password).
- The email is in junk/quarantine.

Actions:

- Validate SMTP using **Mail Host > Test Email**.
- Check **Event Logs** for mail send errors.

### Confirmed user cannot sign in

Cause:

- Confirmed is complete, but Registered is not complete (`Usr.tbUser` has not been created yet).

Action:

- In **Admin Manager > Users**, select **Create** for the registrant.

### Confirmation button not visible in Outlook

Cause:

- Outlook can ignore CSS classes and some modern HTML email styling.

Action:

- The email template should use an Outlook-safe (table + inline styles) button and include the raw URL as a fallback.
