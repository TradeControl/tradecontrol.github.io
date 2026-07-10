---
layout: ../../layouts/Documentation.astro
title: Invoice Register - Edit
permalink: /invoice/register-edit
---

The Edit workspace is used to review and maintain invoices that have been posted to the Invoice Register.

Use it to update invoice information, maintain invoice content, correct business information, and review the current position of an invoice throughout its lifecycle.

## What the Edit workspace does

The Edit workspace provides access to invoice information after it has been posted from the Raise workspace.

Posted invoices remain available for review and maintenance, allowing invoice records to remain aligned with the underlying business activity they represent.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-edit-desktop.png"
    alt="Invoice Register edit workspace on desktop"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Invoice header

The invoice header contains the primary information associated with an invoice.

Depending on configuration, this may include:

* invoice type
* invoice dates
* payment terms
* expected payment dates
* notes
* delivery information
* customer references
* operational information

Header information provides the context for the invoice and can be reviewed and updated when required.

## Invoice items

Invoice items define the content and value of the invoice.

Each item may contain:

* descriptions
* quantities
* values
* tax information
* cash-code allocation
* supporting references

Invoice items can be added, reviewed, amended, or removed as business requirements change.

## Correcting business information

The Edit workspace is used to ensure invoice information accurately reflects the underlying business activity.

Examples include:

* correcting invoice values
* updating customer information
* amending invoice references
* adjusting payment allocation
* updating operational information

Corrections should reflect the actual business transaction being recorded.

Maintaining accurate business information helps ensure reporting and account balances remain consistent with operational reality.

## Invoice status

Invoice status reflects the current business position of an invoice.

Status information is derived from invoice activity and related transactions rather than maintained independently.

Examples include:

* unpaid
* partially paid
* paid
* cancelled

As business activity occurs, invoice status updates automatically to reflect the resulting position.

This helps ensure that reporting and operational views remain aligned with the underlying transaction history.

## Reviewing invoice history

Invoices may progress through several stages during their lifecycle.

The Edit workspace provides a central location for reviewing invoice information and understanding the current position of an invoice.

This allows users to investigate discrepancies, review operational notes, and confirm that invoice records remain accurate over time.

## Financial impact of changes

Invoice Register maintains a live view of invoice activity.

Because reporting, balances, and operational views are derived from invoice information, changes made to an invoice may affect the resulting business position.

Review amendments carefully and ensure they accurately represent the underlying transaction before saving changes.

## Returning to the Data Grid

When editing is complete, return to the Data Grid to continue working.

The Grid preserves the current working context, allowing invoices to be reviewed and maintained without losing place in the active result set.

## Mobile

On mobile devices, Edit uses a single-column workflow.

Invoice information remains available while navigation follows the mobile detail flow.

<div style="max-width: 600px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-edit-mobile.png"
    alt="Invoice Register edit workspace on mobile"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Common outcomes

### I need to correct invoice information

Open the invoice in Edit and update the information so that it accurately reflects the underlying business activity.

### I need to add additional costs or charges

Create or amend invoice items and review the resulting invoice values before continuing.

### The invoice status appears incorrect

Invoice status reflects related business activity and transactions.

Review recent activity associated with the invoice to confirm the current position.

### Reporting changed after editing an invoice

Reporting reflects the current state of invoice information.

Review recent amendments to confirm that the invoice now represents the intended business outcome.

## Related pages

* [Invoice Register overview](/invoice/register-overview)
* [Data Grid](/invoice/register-grid)
* [Raise](/invoice/register-raise)
* [Submission](/invoice/register-submission)
* [Reference](/invoice/register-reference)
