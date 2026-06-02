---
layout: ../../layouts/Documentation.astro
title: Cash Manager - Reference
permalink: /cash/manager-reference
---

Use this page as a quick reference for the main Cash Manager terms and behaviours.

## Core terms

### Statement

The main working view in Cash Manager.

It shows the selected cash account together with posted and unposted activity, running balance, and provisional balance.

### Namespace

The business path used to give a Subject the correct context.

Where the same Subject appears in more than one namespace, the selected path affects which activity is shown.

### Posted

Committed cash history.

Posted rows form part of the settled account record.

### Unposted

Activity that is still in the spool.

Unposted rows can be reviewed before they are committed.

### Provisional balance

The visible result of posted and unposted activity combined in the current view.

### Cash code

The code used to classify the cash activity.

The Statement can be filtered by cash code.

## Account types

### Cash

Supports statement, payments, transfers, and account maintenance.

### Asset

Supports statement, asset workflows, and account maintenance.

### Dummy

Supports statement, payments, and account maintenance.

## Common behaviours

### Statement-first workflow

Cash Manager is designed so that users review the Statement first, then open the relevant correction or entry workflow.

### Namespace-aware activity

Where namespace context matters, the selected namespace path determines the scope of activity shown by the module.

### Lightweight posting

Posting is not a large standalone workflow in Cash Manager.

In practice, it is a spool action used to commit unposted activity, especially where account history or asset activity needs to move into posted state.

### Closed-period overwrite

If a correction touches a closed or archived period, only an Administrator can confirm the overwrite.

Where required, the workflow also requests the necessary rebuild action.

## Quick guide by task

- review balances — [Statement](/cash/manager-statement)
- correct a payment — [Payments](/cash/manager-payments)
- move money between accounts — [Transfers](/cash/manager-transfers)
- work with asset-account activity — [Assets](/cash/manager-assets)
- review account setup — [Cash Accounts](/cash/manager-cash-accounts)

## Related pages

- [Cash Manager overview](/cash/manager-overview)
- [Statement](/cash/manager-statement)
- [Payments](/cash/manager-payments)
- [Transfers](/cash/manager-transfers)
- [Assets](/cash/manager-assets)
- [Cash Accounts](/cash/manager-cash-accounts)
