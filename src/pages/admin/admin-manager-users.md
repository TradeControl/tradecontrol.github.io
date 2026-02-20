---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Users
permalink: /admin/admin-manager-users
---

Users is where Administrators process registration requests and manage access.

Use it to:

- Create internal user records (`Usr.tbUser`) for confirmed registrants.
- Assign roles (e.g. Administrator, Manager).
- Delete registrations/users safely.

## Access

Open:

- **Admin > Manager**
- Select **Users**

On desktop, the module opens in the right-hand pane (embedded mode). On mobile devices, it opens as a full page.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-users-tree.png"
      alt="Admin Manager with Users selected"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Understand the user states

The list displays two key flags:

- **Confirmed**: the user confirmed their email in Identity.
- **Registered**: the internal user record exists (`Usr.tbUser`).

These states are explained here:

- [Users - Registration process](/admin/admin-manager-user-registration)

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-users-index.png"
      alt="User registrations list showing confirmed and registered state"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Process a new registration (Confirmed = Yes, Registered = No)

This is the normal state after the user confirms their email address.

1. Find the user in the list.
2. Select **Create**.
3. Enter the internal user details.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-users-create.png"
      alt="Create user form"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Expected outcome:

- A `Usr.tbUser` record is created.
- The user becomes **Registered**.
- The user can then be assigned roles.

### User ID generation

When you enter a Name, Trade Control suggests a default **User ID** based on the name and makes it unique.

You can override the suggestion by typing a different User ID.

## Assign roles (Confirmed = Yes, Registered = Yes)

1. Locate the user.
2. Select **Roles**.
3. Assign roles as required.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-users-roles.png"
      alt="Assign roles"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Expected outcome:

- The user has access appropriate to their role.
- Administrative modules remain restricted to Admins.

## Delete a registration / user

Delete is intended for:

- Mistaken registrations.
- Users who should no longer have access.
- Cleanup after testing.

1. Select **Delete** for the user.
2. Confirm deletion.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-users-delete.png"
      alt="Delete registration confirmation"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

### Deletion consequences and constraints

Trade Control attempts to delete both:

- The Identity user (authentication/login)
- The internal user (`Usr.tbUser`)

If `Usr.tbUser` cannot be deleted due to references (foreign key constraints), deletion is blocked and an event is written explaining what must be removed first.
