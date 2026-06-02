---
layout: ../../layouts/Documentation.astro
title: Cash Manager - Assets
permalink: /cash/manager-assets
---

Use the Assets workspace when you are working with asset-account activity in Cash Manager.

This workspace exists because asset accounts are not handled in the same way as ordinary cash or dummy accounts.

## What the Assets workspace is for

Use it to:

- enter asset-related cash activity
- review unposted and posted asset movement
- work with accrual-style behaviour where posting matters
- record reversals
- manage depreciation-related activity in the correct account context

Asset workflows are more structured than ordinary payment entry.

## Asset modes

The Assets workspace supports several working modes.

These include:

- freehand entry
- entry from payment
- reversal series

This lets users work with both direct asset activity and structured follow-on adjustments.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/cash-manager/cm-assets-desktop.png"
    alt="Cash Manager assets workspace"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Reversals

Reversals are an important part of the asset workflow.

Use reversals when the business needs to record posted or unposted depreciation adjustments against assets.

In practical terms, this is how users can manage depreciation-related reversal activity inside Cash Manager rather than through a separate asset screen.

The reversal series mode supports this structured workflow.

## Why posting matters more for assets

Posting is lightweight in most of Cash Manager, but it matters more in asset workflows.

That is because asset activity often depends on the transition from unposted spool activity into posted account history.

In practical terms:

- you can review asset activity before it is posted
- posting commits that activity into the account history
- this supports accrual-style handling without needing a separate posting module

## Statement and assets together

A useful pattern is:

- use the Statement to review current account position
- use the Assets workspace to enter, reverse, or correct asset activity
- return to the Statement to confirm the result

This is one reason the Statement remains the main landing view.

## Working with care

Asset-account activity often has a stronger reporting impact than ordinary ad hoc cash movement.

A safe working pattern is:

- confirm the selected asset account first
- review visible balances
- choose the correct asset mode
- enter or reverse the activity
- check the resulting Statement before finishing

## Common outcomes

### I cannot see the Assets workspace

This usually means the selected account is not an asset account.

### I need to record depreciation

Use the asset workflow that matches the required entry pattern, including reversal series where depreciation reversals are required.

### The Statement and asset activity do not yet match

This may mean unposted asset activity is still visible in the spool and has not yet been committed into posted history.

## Related pages

- [Cash Manager overview](/cash/manager-overview)
- [Statement](/cash/manager-statement)
- [Cash Accounts](/cash/manager-cash-accounts)
- [Reference](/cash/manager-reference)