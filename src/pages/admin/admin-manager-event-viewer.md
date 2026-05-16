---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Event Viewer
permalink: /admin/admin-manager-event-viewer
---

Event Viewer is the diagnostics module inside Admin Manager.

Use it to review application events, inspect full error messages, submit support requests for selected errors, and archive older entries where you have permission.

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
        src="/images/admin-manager/event-viewer.png"
        alt="Event Viewer"
        style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Access

Open:

- **System > Admin Manager**
- expand **Diagnostics**
- select **Event Viewer**

On desktop, Event Viewer opens in the right-hand pane with a split list-and-detail layout. On mobile, it opens as a full-screen view with separate list and detail screens.

## What the module shows

The Event Viewer panel includes:

- a **Type** filter
- a **Rows** selector
- a **Refresh** action
- a paged event list
- a full detail pane for the selected entry

Available event type filters are:

- **All**
- **Error**
- **Warning**
- **Information**

## Working with the event list

Use the event list to:

- review the most recent entries first
- move through pages using **Previous** and **Next**
- select an entry to inspect the full message
- change the row count to 10, 50, or 100 items per page

Each row shows:

- event type
- logged date and time
- a short message summary
- the user who inserted the event

## Reviewing an entry

When you select an event, the detail pane shows:

- the event type
- the event timestamp
- the log code
- the inserted by user
- the full event message

## Submit a support request

If the selected entry is an **Error**, and support email delivery is configured, Event Viewer can submit that error as a support request.

You can optionally add extra notes before submitting.

For support submission to work, the following must already be configured:

- an active Mail Host
- a Support Request system template

See:

- [Admin Manager – Mail Host](/admin/admin-manager-mail-host)
- [Admin Manager – HTML Templates](/admin/admin-manager-html-templates)

## Archive older entries

Administrators can archive older event log entries from the selected point in time.

Use **Archive older entries** when you want to keep the current log focused on recent activity while preserving a controlled archive boundary.

## Common uses

Use Event Viewer to:

- inspect failed configuration actions
- review test email outcomes from Mail Host
- investigate dataset execution failures
- confirm whether background or administrative actions completed successfully