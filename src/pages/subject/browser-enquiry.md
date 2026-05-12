---
layout: ../../layouts/Documentation.astro
title: Subject Browser - Enquiry
permalink: /subject/browser-enquiry
---

Enquiry mode is the read-only mode of Subject Browser.

Use it when you want to browse the namespace, inspect a Subject, and open related enquiries without changing the structure.

## What Enquiry mode is for

Enquiry mode is designed for:

- finding customers, suppliers, staff, and departments
- checking where a Subject sits in the namespace
- opening related enquiries
- using Subject Browser as a safe navigation and lookup tool

## Available enquiry actions

When a suitable Subject is selected, Enquiry mode provides:

- `Invoices`
- `Payments`
- `Statement`

Structural Subjects do not expose these enquiry actions.

## How it works

Select a Subject in the tree and then choose the enquiry you want.

On desktop:

- the enquiry opens in the details area

On mobile:

- the enquiry opens in the mobile details flow

This lets you move from the namespace directly into the related enquiry without leaving Subject Browser.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-enquiry-desktop.png"
    alt="Subject Browser desktop view in Enquiry mode showing enquiry actions"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Using Enquiry mode effectively

A common pattern is:

- filter the namespace
- select the required Subject
- confirm the namespace path and Subject details
- open the related enquiry

This is especially useful when the same organisation or person can appear in more than one namespace.

## Why namespace still matters in Enquiry mode

Even in read-only use, namespace helps you understand context.

For example, the same Subject may appear in different structures because Trade Control uses relationships rather than a fixed contact tree.

That means namespace can help answer questions such as:

- which branch of the business am I looking at
- which department or team does this person belong to here
- which path was used to reach this organisation

## Common outcomes

### No enquiry actions shown

This usually means one of the following:

- no Subject is selected
- the selected Subject is structural
- the selected Subject does not support the enquiry action in the current context

### Different path, same Subject

You may reach the same Subject through more than one namespace. This is expected in the DAG model.

## Related pages

- [Subject Browser overview](/subject/browser)
- [Getting around Subject Browser](/subject/browser-getting-around)
- [Subject Browser reference](/subject/browser-reference)
