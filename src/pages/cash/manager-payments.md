---
layout: ../../layouts/Documentation.astro
title: Cash Manager - Payments
permalink: /cash/manager-payments
---

Use the Payments workspace to add and manage payments for the selected cash account.

This is the main entry workspace for ordinary payment activity in Cash Manager.

## What the Payments workspace is for

Use it to:

- add new payments
- choose the organisation in the correct namespace context
- enter references, values, cash codes, and tax codes
- review the current unposted payment list for the selected account
- correct or remove draft entries before they are posted

Cash Manager keeps payment entry and payment review together so that you can see what is already in the spool while adding more activity.

## Adding a payment

In most cases, the Payments workspace is where users start.

A typical payment entry includes:

- user
- paid on date
- organisation
- reference
- paid out or paid in value
- cash code
- tax code

The organisation is selected through the namespace-aware Subject selector, so the payment is entered in the correct business context.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/cash-manager/cm-payments-desktop.png"
    alt="Cash Manager payments workspace showing draft payment entry"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Namespace context

Payments are namespace-aware.

That means the payment is not just linked to a Subject. It is also linked to the namespace context in which that Subject was used.

This matters when the same organisation appears in more than one namespace.

The namespace selector helps make sure the payment is attached to the correct path.

## Unposted transactions

The Payments workspace also shows the current unposted transactions for the selected account.

This helps you:

- confirm what has already been entered
- check whether a payment is still in draft form
- review values before posting
- remove or adjust unwanted draft rows

## Reviewing and correcting payments

Although Payments is mainly an entry workspace, it also supports review of the current draft list.

This means you can:

- add a payment
- inspect the current unposted entries
- correct mistakes before they are posted

More extensive correction of posted payments is usually done from the Statement workspace.

## Working safely

A good pattern is:

- select the correct cash account
- choose the organisation in the correct namespace
- enter the payment details
- confirm the draft row appears as expected
- review the Statement when needed

## Common outcomes

### I cannot find the organisation I want

Check the namespace path first. The same organisation may exist in more than one namespace context.

### I cannot select a tax code

This usually means a cash code has not yet been selected.

### I added the payment but cannot see it where I expected

Check:

- the selected cash account
- the namespace context
- whether the row is still unposted
- the selected year and period in the Statement

## Related pages

- [Cash Manager overview](/cash/manager-overview)
- [Statement](/cash/manager-statement)
- [Cash Accounts](/cash/manager-cash-accounts)
- [Reference](/cash/manager-reference)