---
layout: ../../layouts/Documentation.astro
title: Cash Manager - Cash Accounts
permalink: /cash/manager-cash-accounts
---

Use the Cash Accounts workspace to review, add, and maintain the accounts available to Cash Manager.

Cash Manager changes its available workspaces based on the selected account type, so account selection is the first step in most workflows.

## What a cash account does in Cash Manager

A cash account controls:

- the balance context used by the Statement
- which workspaces are available
- how cash activity is entered and maintained

That is why account selection appears in the left-hand navigation and drives the rest of the module.

## Account types

Cash Manager recognises different account types.

In practical terms:

- `Cash` accounts support payment and transfer workflows
- `Asset` accounts support asset-entry workflows
- `Dummy` accounts support payment workflows without transfer handling

This keeps each account focused on the kind of activity it is intended to model.

## Adding a cash account

Use the Cash Accounts workspace when you want to create a new account.

For example, if the business wants to add a new `Cash Box`, this is where it is done.

The workspace includes a `New account` action so that a manager or administrator can add the required account directly inside Cash Manager.

Typical setup includes:

- organisation
- account type
- account name
- account code
- cash code
- liquidity and related account settings

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/cash-manager/cm-cash-accounts-desktop.png"
    alt="Cash Manager cash accounts workspace"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Reviewing and maintaining accounts

Use the Cash Accounts workspace when you want to:

- check the available accounts
- review account details
- edit the selected account
- maintain account settings
- understand which workflows apply to the selected account

Where permissions allow, the workspace also supports delete for eligible accounts.

## Choosing the right account

Before entering or correcting activity, confirm:

- the account name
- the account type
- the current balance context
- whether the account is the correct destination for the transaction

This avoids making corrections in the wrong place.

## How accounts relate to the Statement

When you change account selection, the Statement changes with it.

That means the Statement is always showing activity for the currently selected account and the currently selected scope.

## Common outcomes

### I cannot see a workspace I expected

Check the selected account type first. Some workspaces are available only for certain account types.

### I need to add a new operational account

Use `New account` in the Cash Accounts workspace.

### I selected the wrong account

Change the account first, then return to the required workspace. The rest of the module will adapt automatically.

## Related pages

- [Cash Manager overview](/cash/manager-overview)
- [Statement](/cash/manager-statement)
- [Payments](/cash/manager-payments)
- [Assets](/cash/manager-assets)
- [Transfers](/cash/manager-transfers)
- [Reference](/cash/manager-reference)