---
layout: ../../layouts/Documentation.astro
title: Users - Registration process
permalink: /admin/admin-manager-user-registration
---

User registration is a two-stage workflow:

1. the user proves ownership of their email address
2. an Administrator creates the internal Trade Control profile and assigns roles

This page is intended for end users, support staff, and Administrators.

## Prerequisites

Normal registration depends on email sending.

Before users can register, an Administrator must configure:

- an active mail host
- the user registration confirmation template
- the user registration administrator notification template

See:

- [Admin Manager – Mail Host](/admin/admin-manager-mail-host)
- [Admin Manager – HTML Templates](/admin/admin-manager-html-templates)

## Process overview

The registration flow is:

- user registers an Identity account
- user confirms the email address
- Administrators are notified
- an Administrator creates the internal profile
- roles are assigned

<div class="tc-diagram-scroll">
  <img
    src="/images/admin-manager/user-registration-flow.png"
    alt="Registration process state diagram"
    class="tc-diagram-full"
  />
</div>

<details>
<summary>Mermaid source (for automation/AI)</summary>

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

</details>

## End-user journey

### 1) Register

The user creates an account with email address and password.

Expected outcome:

- the Identity user is created
- a confirmation email is sent
- the user is asked to check the inbox

### 2) Confirm email

The user opens the confirmation email and selects the confirmation link.

Expected outcome:

- the email address becomes confirmed
- the registration is ready for Administrator review

### 3) Administrator notification

After email confirmation, Trade Control notifies Administrators that a registration is awaiting processing.

Expected outcome:

- Administrators receive the notification
- the user appears in **Admin Manager > Users**
- the registration is ready for profile creation

## Administrator provisioning

Email confirmation proves ownership of the email address, but it does not create the internal user record.

An Administrator must:

- create the `Usr.tbUser` profile
- assign one or more roles

See:

- [Admin Manager - Users](/admin/admin-manager-users)

## Common issues

### No confirmation email received

Common causes:

- no active mail host is configured
- SMTP settings are incorrect
- the registration templates are not assigned
- the message was filtered to junk or quarantine

Actions:

- validate SMTP using **Mail Host > Test Email**
- verify **Templates > System** assignments
- inspect **Event Viewer** for mail send errors

### Confirmed user cannot sign in

Cause:

- the user is confirmed, but the internal profile has not yet been created

Action:

- in **Admin Manager > Users**, create the internal profile