---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Synthetic Datasets
permalink: /admin/admin-manager-dataset
---

The Synthetic Datasets module replaces the current business data with a prepared demonstration dataset so you can explore Trade Control with realistic sample activity.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-dataset-warning.png"
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

## Where to find it

In Admin Manager, open:

- **Setup**
- **Synthetic Demo Data**

On desktop, the module opens in the right-hand details pane.  
On mobile, it opens as a full page.

## Before you start

Use this module only when you are certain the current business data can be overwritten.

This process is intended for:

- demonstrations
- training
- test environments
- clean tutorial resets

It is not intended for live production data.

## Step 1: Confirm the destructive action

The first screen is a confirmation step. You must explicitly confirm that the current business data will be permanently replaced before you can continue.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-dataset-warning.png"
      alt="Synthetic dataset confirmation screen"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

After confirming, select **Proceed to demo data setup**.

## Step 2: Choose the dataset setup

The setup screen lets you choose the configuration that will be used to rebuild the node.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-dataset-config.png"
      alt="Synthetic dataset setup screen"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

### Configuration Template

Choose the template that the synthetic dataset should be based on.

The template controls the accounting structure that will be installed with the dataset.

### VAT Registered

Use the VAT toggle to match the intended VAT setting for the dataset.

The available synthetic scenarios are filtered by this setting. If a scenario is not shown, it may not be valid for the current VAT state.

### Synthetic Dataset Scenario

Choose the dataset scenario to install.

This list is populated from the selected template and filtered by the VAT setting. The notes shown on screen help explain the selected template and scenario.

## Step 3: Queue the synthetic dataset

Select **Queue synthetic dataset** to start the process.

The dataset is installed in the background. Trade Control creates an execution record and opens the status screen so you can monitor progress.

## Step 4: Monitor execution status

The status screen shows the live execution state while the dataset is being installed.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-dataset-status.png"
      alt="Synthetic dataset execution status screen"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

The status page shows:

- execution status
- progress message
- execution code
- execution type
- queued time
- start time
- completion time
- error details if the execution fails

When the process completes successfully, the status changes to **Succeeded**.

## What happens during installation

When you queue a synthetic dataset, Trade Control:

- re-initialises the current business node
- applies the selected template structure
- installs the selected synthetic scenario
- records the execution outcome

Because this rebuilds the business data, other pages may be temporarily unavailable until the process finishes.

## Tips

- Review the warning carefully before proceeding.
- If no scenarios are available, check the selected template and VAT setting.
- Wait for the status screen to show completion before continuing with other work.
- Use **Queue another dataset** if you want to run a different scenario after the current execution finishes.

## Related documentation

- [Admin Manager - Overview](/admin/admin-manager-overview)
- [Node Initialisation](/admin/admin-manager-init)
- [Initialisation Templates](/admin/admin-manager-init-templates)