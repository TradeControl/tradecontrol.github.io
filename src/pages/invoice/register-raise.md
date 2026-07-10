---
layout: ../../layouts/Documentation.astro
title: Invoice Register - Raise
permalink: /invoice/register-raise
---

The Raise workspace is used to prepare invoice content before it is published to the live Invoice Register.

Use it to create, review, and organise invoice activity in a private working area before posting invoices into the operational system.

## What the Raise workspace does

The Raise workspace supports the preparation stage of the invoice lifecycle.

Invoices can be created, reviewed, and amended without affecting the live Invoice Register.

This allows invoice content to be assembled and verified before it becomes part of operational reporting and customer-facing workflows.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-raise-desktop.png"
    alt="Invoice Register raise workspace on desktop"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Draft and Posted invoices

Invoice preparation takes place in two stages.

### Draft

Draft invoices are still under preparation.

They can be reviewed, amended, organised, and validated without affecting the live Invoice Register.

Draft invoices may originate from manual entry, imported data, or other business processes depending on how Trade Control is configured.

### Posted

Posting publishes invoice activity to the live Invoice Register.

Once posted, invoices become available for:

* enquiry
* editing
* document generation
* submission
* operational reporting

Posting represents the transition from preparation to operational use.

## Preparing invoice content

The Raise workspace provides the information required to prepare invoice content.

Depending on configuration and business process, this may include:

* customer information
* invoice references
* invoice dates
* invoice line items
* values and totals
* tax information
* namespace context

The objective is to produce complete and accurate invoice content before posting.

## Reviewing pending invoices

Pending invoices remain available for review while they are in draft status.

This allows invoice batches to be assembled over time and checked before publication.

Common review activities include:

* checking customer details
* confirming invoice values
* reviewing invoice content
* validating tax calculations
* verifying namespace allocation

This review stage helps reduce errors before invoices enter the live register.

## Posting invoices

Posting transfers invoice activity into the live Invoice Register.

Depending on the task being performed, invoices may be posted:

* individually
* as a group
* by account
* by user

Once posted, invoice activity becomes available throughout Invoice Register and participates in reporting and submission workflows.

## Namespace context

Invoice preparation is namespace-aware.

Where the same Subject participates in multiple business activities, the selected namespace determines the organisational context in which invoice activity is prepared and managed.

This helps ensure invoice information remains aligned with the correct business process.

## Lifecycle progression

The Raise workspace is the beginning of the invoice lifecycle.

A typical progression is:

* prepare invoice content
* review draft invoices
* post invoices
* edit if required
* generate documents
* submit invoices to customers

The same invoice may pass through several stages before it reaches its final submitted state.

## Mobile

On mobile devices, Raise uses a single-column workflow.

Invoice preparation activities remain available, while navigation follows the mobile detail flow.

<div style="max-width: 600px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-raise-mobile.png"
    alt="Invoice Register raise workspace on mobile"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Common outcomes

### I cannot find a draft invoice

Check:

* the selected period
* namespace filters
* whether the invoice has already been posted

### An invoice is not available in the Data Grid

Only posted invoices appear in the live Invoice Register.

Review whether the invoice is still in draft status.

### The invoice values are incorrect

Review:

* invoice content
* line values
* tax information
* namespace allocation

before posting.

## Related pages

* [Invoice Register overview](/invoice/register-overview)
* [Data Grid](/invoice/register-grid)
* [Edit](/invoice/register-edit)
* [Submission](/invoice/register-submission)
* [Reference](/invoice/register-reference)
