---
layout: ../../layouts/Documentation.astro
title: Subject Browser - Maintenance
permalink: /subject/browser-maintenance
---

Subject mode is where you maintain the selected Subject itself.

Use it to edit details, manage addresses, and delete Subjects where allowed.

## Subject mode actions

Depending on the selected Subject, Subject mode can provide:

- `Edit`
- `Add Address`
- `Delete`

## Editing a Subject

The edit action opens the appropriate editor for the selected Subject class:

- `Real` for people
- `Virtual` for organisations
- `Structural` for structural nodes

Each editor is tailored to that Subject class.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-edit-virtual.png"
    alt="Organisation editor opened from Subject Browser"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## What you can edit

Typical editable fields include:

- name
- status
- billing and terms
- contact details
- class-specific details
- notes for structural Subjects

The Subject Code remains the stable identity and is not changed during normal editing.

## Mobile and desktop behaviour

On desktop:

- editors open in the right-hand workspace

On mobile:

- editors open as full pages
- returning brings you back to the previously selected Subject path

## Delete Subject

Delete is available where the selected Subject can be removed safely.

Deletion uses the namespace rules and may remove:

- only the selected relationship
- a detached Subject
- a detached closure of related Subjects
- a root closure, if the selected Subject is a root and the validation rules pass

A confirmation page shows the expected impact before the delete is allowed.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-delete-subject.png"
    alt="Delete Subject confirmation showing the impact of the deletion"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Root delete

A root Subject is a Subject with no parent namespace relationship.

Deleting a root can cascade through its detached closure. This is useful when you want to remove a top-level business structure without manually deleting every child first.

Deletion is still blocked if the detached closure contains:

- invoices
- payments
- projects
- namespace links from outside the closure

## Good practice

Before editing or deleting:

- confirm the selected namespace path
- confirm the Subject class
- review the impact message carefully for delete operations

## Related pages

- [Subject Browser overview](/subject/browser)
- [Working with namespaces](/subject/browser-namespace)
- [Managing addresses](/subject/browser-addresses)
- [Subject Browser reference](/subject/browser-reference)
