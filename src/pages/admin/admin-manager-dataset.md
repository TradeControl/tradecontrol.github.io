---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Synthetic Datasets
permalink: /admin/admin-manager-dataset
---

The Synthetic Datasets module replaces the current business data with a prepared demonstration dataset so you can explore Trade Control with realistic sample activity.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/dataset-warning.png"
      alt="Synthetic dataset destructive action warning"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Purpose

Use this module to:

- rebuild a business node with demonstration data
- install a dataset that matches a selected template
- choose a VAT-compatible scenario
- monitor execution progress while the dataset is installed in the background

> **Important**: This is a destructive action. It re-initialises the business and replaces the current data with synthetic demo data.

## Access

Open:

- **System > Admin Manager**
- select **Synthetic Demo Data**

On desktop, the module opens in the right-hand pane. On mobile, it opens as a full-screen view.

## Before you start

Use this module only when you are certain the current business data can be overwritten.

This process is intended for:

- demonstrations
- training
- test environments
- tutorial resets

It is not intended for live production data.

## Step 1: Confirm the destructive action

The first screen is a confirmation step. You must explicitly confirm that the current business data will be permanently replaced before you can continue.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/dataset-warning.png"
      alt="Synthetic dataset confirmation screen"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## Step 2: Choose the dataset setup

The setup screen lets you choose the configuration that will be used to rebuild the node.

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/dataset-config.png"
      alt="Synthetic dataset setup screen"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Set:

- the configuration template
- the VAT registered option
- the synthetic dataset scenario

The available scenarios depend on the selected template and VAT setting.

## Step 3: Queue the synthetic dataset

Select **Queue synthetic dataset** to start the process.

Trade Control creates an execution record and shows the status view so you can monitor progress.

## Step 4: Monitor execution status

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/dataset-status.png"
      alt="Synthetic dataset execution status screen"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

The status view shows:

- execution status
- progress message
- execution code
- execution type
- queued time
- start time
- completion time
- error details if the execution fails

## Tips

- review the warning carefully before proceeding
- if no scenarios are available, check the selected template and VAT setting
- wait for the status to show completion before continuing with other work
- use **Queue another dataset** if you want to run a different scenario afterwards

## Related documentation

- [Admin Manager - Overview](/admin/admin-manager-overview)
- [Node Initialisation](/admin/admin-manager-init)
- [Initialisation Templates](/admin/admin-manager-init-templates)
- [Event Viewer](/admin/admin-manager-event-viewer)