---
layout: ../../layouts/Documentation.astro
title: Cash Manager - Transfers
permalink: /cash/manager-transfers
---

Use the Transfers workspace to plan and manage transfers between cash accounts.

In Cash Manager, transfers are handled as planned transfer accruals first, then committed into account history when posted.

## What transfers are for

Use transfers to:

- plan movement of money between cash accounts
- record transfer accruals before the money is formally posted
- manage reserve movements, such as moving money out of a current account into a reserve account
- review the effect on cash flow in the Statement

Transfers are part of the normal cash workflow, not a separate module.

## Transfer accruals

Transfer accruals are unposted transfer payment entries.

They are useful when a business wants to plan cash movement before committing it.

For example, a company may plan to move money from its current account into a reserve account. The transfer can be entered first as planned activity, then posted later.

This matters because planned transfers affect cash flow in the company statement.

That forward-looking behaviour is part of the cash-flow view represented by the statement model.

## When transfers are available

Transfers are intended for `Cash` accounts.

If the selected account type does not support transfers, the Transfers workspace will not be shown.

## Creating a transfer

A typical planned transfer includes:

- source account
- destination account
- paid on date
- amount
- reference
- transfer pay out code
- transfer pay in code

Cash Manager creates the paired planned transfer entries from the selected source account.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/cash-manager/cm-transfers-desktop.png"
    alt="Cash Manager transfers workspace"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Posting visible transfers

The Transfers workspace includes a posting action for the visible planned transfers.

Use this when you are ready to commit the current planned transfer accruals into the posted account history.

In day-to-day use, this is a lightweight spool action rather than a major end-of-period process.

## Checking the result

After entering or posting a transfer, return to the Statement to confirm:

- the planned or posted movement appears in the expected account
- the running balance looks correct
- the movement appears in the correct period and scope

## Common outcomes

### I cannot see the Transfers workspace

This usually means the selected account type does not support transfers.

### The transfer does not appear where I expected

Check:

- the selected source account
- the selected year and period
- whether the row is still unposted
- whether you are reviewing the correct account side of the transfer

### I expected a reserve movement but cannot see it in the Statement

Check whether the transfer is still a planned accrual and has not yet been posted.

## Related pages

- [Cash Manager overview](/cash/manager-overview)
- [Statement](/cash/manager-statement)
- [Cash Accounts](/cash/manager-cash-accounts)
- [Reference](/cash/manager-reference)