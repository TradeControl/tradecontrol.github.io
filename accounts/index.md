---
layout: page
title: Company Accounts
permalink: /accounts
---

#### Free entry-level cash book and Company Accounts for Office 365 Business.

## Documentation

- [Single User Installation]({{ site.url }}/tutorials/installing-local)
- [Accounts Tutorial]({{ site.url }}/tutorials/cash-book)

## Accountancy

Although there is no legal obligation, traditionally businesses are serviced by accountants; to advise on tax and present their accounts to government. The reason is twofold:

1. tax law for corporations and employees is both complicated and constantly evolving.
2. accounts are derived from a recording system that is arcane and involved.

Whilst this situation is unlikely to change for large companies, start-ups and SMEs spend a disproportionate percentage of their turnover on accountancy fees.  For example, a charge of 1K GBP per annum in a business that makes 10 percent profit would take around 10K GBP of their turnover to cover costs. That is a lot of money and work, especially for a start-up, or a business struggling through hard times. Fortunately, things have moved on and this expense is no longer necessary.

To estimate the amount of work you must generate to pay for your accountant and accounts package, apply the following formula: 

> (AccountsCost + SoftwareSubscription) / ((NetProfit + AccountsCost + SoftwareSubscription) / Turnover) * YearsTrading

It may take a bit of effort on your part to understand what is required, but if you are self-employed, whether through a limited company or sole trader, think upon this: once you know what is needed to submit your accounts to government, you will never need to pay for accountants, or their accounting software for the rest of your life. Replace the YearsTrading with that number and see what you can save.

### Tax Law

In recent years, HMRC have made great strides in their Make Tax Digital (MTD) initiative. Each business is provided with a key to their government gateway, and from the portal you can register for various services. The three relevant services for your accounts are VAT, PAYE and the Corporation Tax Return. After registering, the Inland Revenue post the activation keys and you can interact with these services in a very intuitive way. Therefore, you do not need to read up on the latest tax law, because it is reflected live in the portal interfaces. Unlike times of yore, the best tax advisor is now the taxman. 

Here is a sample home screen:

![Government Gateway]( {{ site.url}}/images/accounts_hmrc.png)

#### PAYE

In the past, to process PAYE it was necessary either to buy payroll software or pay an accountant. Today, the government provide simple PAYE Tools that run locally, sending wage submissions to the HMRC payroll service. The service calculates your employer and employee NI and Income Tax obligations. It shows outstanding amounts in the PAYE section of your business portal and updates your employees personal NI records.

#### VAT

Vat is automatically calculated from VAT Codes and presented in the [Invoice Register]({{ site.url }}/tutorials/cash-book#invoice-register). Prior to 2019, a business could enter this information directly into the VAT section of the portal. For some reason, the legislation was changed such that entry could only be made by MTD approved third party private software. Trade Control uses a low-cost [CSV import website]({{ site.url }}/tutorials/digital-tax) to address the issue. At some point this will be replaced with its own access if the law is not repealed.

#### Corporation Tax Return

By far the most difficult accounting service to replace is the Corporation Tax Return, because of two things:

1. how the corporation tax is calculated.
2. the legal obligation to communicate the asset value of your business.

Trade Control solves these problems by replacing the asset-based recording system of double-entry book-keeping (DEBK) with a system based on supply and demand (SvD). This is more intuitive to traders and can be very easily checked for correctness. Corporation tax is calculated at transaction level, whereby any change to the current state instantly updates the Corporation Tax Statement. Capital is calculated directly from these transactions by applying an asset charge algorithm that always balances. 

Accounts are available monthly in the Trade Statement presented below. These figures are entered into the government portal when completing your annual Corporation Tax Return and filing your Company Accounts at Companies House. What you can claim and must declare are communicated during the completion process. That may involve retrospectively re-classifying income and expenses, but it will still demonstrably balance.

### Error Checking

DEBK records transactions in terms of their effect on business asset value. Each transaction is double entered into different ledgers so that asset charge is maintained. Accountants check the ledgers by producing a Trial Balance, ensuring that the double-entry system is without errors. Accountancy skills are mandatory.

Trade Control replaces this approach with an SvD model from manufacturing. To error check the accuracy of accounts using this method only requires two things:

- The cash account balance is the same as your current bank balance
- Current debtors and creditors are correct

The first is very easy to check with online banking (Bitcoin Wallets are automatically synchronised and do not need checking). Secondly, every business knows who owes them money and how much they owe. Yet this will validate all previous period end accounts from first to last transaction. That is because Trade Control calculates VAT, Corporation Tax, Balances, Debtors and Creditors from the genesis transaction in real time. Modifying any payment or invoice in the past would instantaneously throw out balances, taxes, debtors and creditors from that point onward. This would be reflected in incorrect balances and outstanding payments. Not only is this instantly apparent, making it easy to spot errors, it is also fraud-resistant.

## Trade Statement

Company Accounts can be obtained from the [Trade Statement]({{ site.url }}/docs/tc_balance_sheet.xlsx) (an Excel [VSTO template]({{ site.url }}/tutorials/installing-vsto)).

The first section shows trading performance, irrespective of assets. This information is obtained from [payment entries]({{ site.url }}/tutorials/cash-book#payment-entry), or the invoicing of [workflows]({{ site.url }}/tutorials/manufacturing#workflow) (tasks/jobs/projects) if you are using [the MIS]({{ site.url }}/mis):

![summary]({{ site.url}}/images/app_statement_summary.png)

The next section adds asset movement, such as stock. Since changes in asset value impact capital, movement must be added to the trading totals for a legally compliant P&L:

![Profit and Loss]({{ site.url }}/images/app_profit_and_loss.png)

And finally, the [balance sheet]({{ site.url }}/tutorials/balance-sheet):

![Balance Sheet]({{ site.url }}/images/app_balance_sheet.png)


