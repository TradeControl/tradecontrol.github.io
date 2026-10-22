---
layout: ../../layouts/Documentation.astro
title: Invoice Register - Submission
permalink: /invoice/register-submission
---

The Submission workspace is used to generate, review, and deliver invoice documents to external recipients.

Use it to preview invoice documents, select recipients, choose document templates, and submit invoices once they are ready for distribution.

## What the Submission workspace does

Submission converts invoice information into a formatted document suitable for delivery to customers and other external recipients.

The generated document is based on:

* the invoice record
* associated subject information
* the selected document template

This allows invoice documents to be reviewed before they leave the organisation.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-submission-desktop.png"
    alt="Invoice Register submission workspace on desktop"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Reviewing invoice information

Before submitting an invoice, review the information displayed in the Submission workspace.

This includes:

* invoice number
* invoice type
* invoice date
* recipient subject
* invoice values
* current submission status

Confirm that the invoice accurately reflects the business transaction before proceeding.

## Selecting a recipient

Invoice documents are delivered to recipients associated with the selected subject.

Recipients are maintained within the subject namespace and can include default and named contact addresses.

Select the appropriate recipient before submitting the invoice.

### Missing recipient information

If no email address is available for the selected subject, the Submission workspace displays a warning message.

Use the Subject link to open the associated namespace in a new browser tab and maintain the available recipient addresses.

Once a valid recipient has been added, return to the Submission workspace and continue the submission process.

## Choosing a template

Templates control the appearance and structure of generated invoice documents.

Examples may include:

* sales invoices
* credit notes
* branded customer documents
* organisation-specific layouts

Select the template that best matches the intended document presentation.

Invoice templates can be customised to meet business branding and document requirements.

## Previewing invoice documents

Use **Preview** to generate a document before submission.

The preview displays the invoice exactly as it will be generated using the selected template.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-submission-preview.png"
    alt="Invoice document preview"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

Review the generated document carefully and confirm:

* recipient information
* invoice values
* addresses and references
* notes and supporting information
* branding and presentation

Previewing documents helps identify issues before distribution.

## Submitting invoices

When the invoice has been reviewed and a valid recipient has been selected, use **Submit** to deliver the document.

Submission records that the invoice has been issued and provides a consistent process for distributing invoice documents.

Only invoices intended for external recipients should be submitted.

## Marking invoices as sent

The **Mark As Sent** action is available when an invoice has been delivered through an alternative process outside the Submission workspace.

Examples include:

* external email systems
* printed documents
* third-party delivery services

Marking an invoice as sent updates the operational status of the invoice without generating a new submission.

## Finding unsent invoices

Invoice Register includes filters that help identify invoices that have not yet been distributed.

Select **Unsent Invoices** from the Invoice Status filter to display invoices that still require submission.

This provides a simple way to review outstanding invoice deliveries and ensure no invoices are overlooked.

## Template-driven documents

Invoice documents are generated from templates.

Templates separate invoice data from document presentation, allowing businesses to customise document appearance without changing invoice information.

This flexibility makes it possible to maintain consistent branding and presentation standards across all generated invoice documents.

## Mobile

On mobile devices, Submission follows the same workflow while using a single-column layout.

Invoice information, recipients, templates, and document previews remain available through the mobile navigation flow.

<div style="max-width: 600px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-submission-mobile.png"
    alt="Invoice Register submission workspace on mobile"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Common outcomes

### I cannot submit an invoice

* Check that a valid recipient has been selected and that the subject contains at least one available email address.
* The system-managed email route is unavailable, or a configured [Mail Host](/admin/admin-manager-mail-host) override is not working.
* [Document Templates](/admin/admin-manager-html-templates) not assigned.

### The wrong recipient is available

Open the subject namespace and review the configured recipient addresses.

### I want to see the invoice before sending it

Use **Preview** to generate the invoice document and review it before submission.

### The invoice has already been sent outside the system

Use **Mark As Sent** to record the delivery without generating a new submission.

### How do I find invoices that still need sending?

Filter the Invoice Register using **Unsent Invoices** to display invoices awaiting distribution.

## Related pages

* [Invoice Register overview](/invoice/register-overview)
* [Data Grid](/invoice/register-grid)
* [Raise](/invoice/register-raise)
* [Edit](/invoice/register-edit)
* [Reference](/invoice/register-reference)
