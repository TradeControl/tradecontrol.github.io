---
layout: ../../layouts/Documentation.astro
title: Invoice Register - Grid
permalink: /invoice/register-grid
---

The Grid is the main working view in Invoice Register.

Use it to review invoice activity, apply filters, inspect invoice details, and navigate invoice records.

## What the Grid shows

The Grid combines the selected year, period, namespace, and filters into a single working view.

Depending on the selected perspective, it can display:

* invoice headers
* invoice line items
* cash-code activity
* invoice totals
* invoice status information
* linked Subject information

The Grid is the place to review invoice activity before creating, editing, or submitting invoices.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-grid-desktop.png"
    alt="Invoice Register grid workspace on desktop"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Filters and scope

You can narrow the Grid by:

* financial year
* period
* namespace
* cash code
* invoice status

Filters affect only the visible result set and do not change underlying invoice data.

Use namespace filtering when working within a specific business path.

Use cash-code filtering when reviewing a particular revenue stream.

## Grid perspectives

The Grid supports multiple perspectives on the same underlying invoice data.

### Header view

Header view presents one row per invoice.

Use this view when you want to:

* review invoice status
* locate a specific invoice
* inspect customer information
* compare invoice values

### Lines view

Lines view presents individual invoice lines.

Use this view when you want to:

* inspect invoice content
* review line-level values
* search for specific invoice items

### Cash Code view

Cash Code view groups invoice activity by cash code.

Use this view when you want to:

* analyse revenue categories
* review invoice allocation
* focus on a specific cash stream

## Opening invoice details

Invoice details can be opened directly from the Grid.

When an invoice is selected, the Grid preserves the current filter and paging context so that you can return to the same working position afterwards.

This makes it possible to investigate invoice activity without losing your place in the current result set.

## Totals

Summary totals are recalculated from the currently visible rows.

This means totals always reflect the active filters and selected view.

## Mobile

On mobile, the Grid becomes a single-column detail view.

The same information is available, but records are presented as stacked cards and navigation uses the mobile detail flow.

<div style="max-width: 600px; margin: 1rem 0;">
  <img
    src="/images/invoice-register/ir-grid-mobile.png"
    alt="Invoice Register grid workspace on mobile"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Common outcomes

### I cannot see the invoice I expected

Check:

* the selected year and period
* namespace filters
* cash-code filters
* invoice status filters

### The totals do not match my expectation

Totals are calculated from the visible rows only.

Check whether filters are currently active.

### I returned from an invoice and cannot find it

The Grid preserves the active filter and page context when returning from invoice enquiry or editing.

If the invoice is still not visible, review the active filters.

## Related pages

* [Invoice Register overview](/invoice/register-overview)
* [Raise](/invoice/register-raise)
* [Edit](/invoice/register-edit)
* [Submission](/invoice/register-submission)
* [Reference](/invoice/register-reference)
