---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Users
permalink: /admin/admin-manager-users
---

Users is where Administrators process registration requests and manage access.

Use it to:

- create internal user records for confirmed registrants
- assign roles such as Administrator and Manager
- delete registrations or users safely

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/admin-manager/users.png"
    alt="User maintenance module"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Access

Open:

- **System > Admin Manager**
- select **Users**

On desktop, Users opens in the right-hand pane. On mobile, it opens as a full-screen view.

## What the module shows

The Users area combines:

- a registration workflow summary
- readiness checks for registration email dependencies
- a stage filter for registrations
- the working list of users and registrations

## Understand the user states

The list uses two important flags:

- **Confirmed**: the user confirmed their email address
- **Registered**: the internal Trade Control profile exists

These states are explained in:

- [Users - Registration process](/admin/admin-manager-user-registration)

## Process a new registration

The normal flow is:

1. find a user with confirmed email
2. select **Create**
3. enter the internal profile details
4. save the profile

Expected outcome:

- the `Usr.tbUser` record is created
- the user becomes registered
- role assignment can proceed

## Assign roles

1. Locate the registered user
2. select **Roles**
3. assign the required roles
4. save the changes

## Delete a registration or user

Delete is intended for:

- mistaken registrations
- access removal
- test-data cleanup

1. Select **Delete**
2. review the confirmation
3. confirm deletion

## Notes

- on mobile, **Back** returns to the previous Manager node
- if a deletion fails because of references, inspect **Event Viewer** for details