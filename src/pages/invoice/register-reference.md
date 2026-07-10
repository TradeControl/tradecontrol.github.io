---
layout: ../../layouts/Documentation.astro
title: Invoice Register - Reference
permalink: /invoice/register-reference
---

The Invoice Register provides a central location for managing invoice activity throughout its lifecycle.

This reference page explains the key concepts and terminology used throughout the Invoice Register guide.

## Invoice lifecycle

Invoices progress through a series of stages as they move through the business process.

> Raise → Post → Submit → Allocate → Paid

The lifecycle begins when an invoice is raised and posted to the Invoice Register.

Once submitted to the recipient, the invoice remains available for review and maintenance while payments and other business activities are processed.

Invoice status updates automatically as activity occurs.

## Invoice types

Invoice types determine the purpose and behaviour of an invoice.

Common examples include:

* Sales Invoice
* Purchase Invoice
* Credit Note
* Debit Note

The available invoice types depend on system configuration and business requirements.

Different invoice types may use different document templates and submission processes.

## Invoice status

Invoice status reflects the current business position of an invoice.

Examples include:

* Unpaid
* Partially Paid
* Paid

Status information is derived from invoice activity and related business transactions.

As payments and other activities occur, invoice status updates automatically to reflect the resulting position.

## Communication status

Communication status records whether an invoice document has been distributed.

Examples include:

* Unsent
* Sent

Communication status is independent of invoice payment status.

For example, an invoice may be marked as sent but remain unpaid, or it may be fully paid while still requiring communication activity to be recorded.

Use the Invoice Status filter in the Data Grid to identify invoices that still require submission.

## Templates

Templates control the appearance and structure of generated invoice documents.

Templates are used during the Submission process to create invoice documents suitable for delivery to external recipients.

Templates can be customised to reflect:

* business branding
* document layout requirements
* organisation-specific presentation standards

The selected template determines how invoice information is presented but does not change the underlying invoice data.

## Related topics

The Invoice Register forms part of a wider financial management system.

Additional information is available in the following guides:

* [Cash Codes](/cash/cash-configuration)
* [Subjects](/subject/browser)
* [Document Templates](/admin/admin-manager-html-templates)
* [Mail Host](/admin/admin-manager-mail-host)

Refer to the relevant documentation for detailed information on these topics.

## Related pages

* [Invoice Register overview](/invoice/register-overview)
* [Data Grid](/invoice/register-grid)
* [Raise](/invoice/register-raise)
* [Edit](/invoice/register-edit)
* [Submission](/invoice/register-submission)
