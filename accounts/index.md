---
layout: page
title: Company Accounts
permalink: /accounts
---

#### Free cash-book and accounts for SMEs

## Documentation

- [How to file your Company Accounts]({{ site.url }}/tutorials/accounts-filing)
- [Accounts Tutorial]({{ site.url }}/tutorials/cash-book)
- [ASP.NET Core Web App Setup]({{ site.url }}/tutorials/installing-web)
- [Single User 365 Installation]({{ site.url }}/tutorials/installing-local)

## Accountancy

Although there is no legal obligation, traditionally businesses are serviced by accountants; to advise on tax and present their accounts to government. The reason is twofold:

1. tax law for corporations and employees is both complicated and constantly evolving.
2. accounts are derived from a recording system that is arcane and involved.

Whilst this situation is unlikely to change for large companies, start-ups and SMEs spend a disproportionate percentage of their turnover on accountancy fees.  For example, a charge of 1K GBP per annum in a business that makes 10 percent profit would take around 10K GBP of their turnover to cover costs. That is a lot of money and work, especially for a start-up, or a business struggling through hard times. Fortunately, things have moved on and this expense is no longer necessary.

To estimate the amount of work you must generate to pay for your accountant and accounts package, apply the following formula: 

> (AccountsCost + SoftwareSubscription) / ((NetProfit + AccountsCost + SoftwareSubscription) / Turnover) * YearsTrading

If you run this calculation, you will see just how much turnover you need to finance your accounts.

### Tax Law

In recent years, HMRC have made great strides in their Make Tax Digital (MTD) initiative and [Government Gateway]({{ site.url }}/tutorials/accounts-filing#government-gateway) service. Each business is provided with a key to their government gateway, and from the portal you can register for various services. The three relevant services for your accounts are VAT, PAYE and the Corporation Tax Return. After registering, the Inland Revenue post the activation keys and you can interact with these services in a very intuitive way. Therefore, you do not need to read up on the latest tax law, because it is reflected live in the portal interfaces. Unlike times of yore, the best tax advisor is now the taxman. 

#### PAYE

In the past, to process PAYE it was necessary either to buy payroll software or pay an accountant. Today, the government provide simple PAYE Tools that run locally, sending wage submissions to the HMRC payroll service. The service calculates your employer and employee NI and Income Tax obligations. It shows outstanding amounts in the PAYE section of your business portal and updates your employee's personal NI records.

#### VAT

Vat is automatically calculated from VAT Codes and presented in the [Invoice Statement]({{ site.url }}/tutorials/balance-sheet-web#vat). Prior to 2019, a business could enter this information directly into the VAT section of the portal. For some reason, [the legislation was changed]({{ site.url }}/tutorials/accounts-filing#make-tax-digital) such that subscribers with turnover above the VAT Threshold must enter their VAT return by MTD approved third party private software. Trade Control currently uses a low-cost [CSV import website]({{ site.url }}/tutorials/digital-tax) to work around the issue.

#### Company Tax Return

By far the most difficult accounting service to replace is the Company Tax Return, because of two things:

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

## Trade Statements

### Web

Balance Sheets are available by month. They derive capital algorithmically from the set of all transactions that describe assets and liabilities at each month end.

![Balance Sheet Web]({{ site.url }}/images/app_balance_sheet_web.png)

Profit and loss is set by a formal month-end closedown procedure, but can be retrospectively modified by simply moving transaction dates between periods. 

![Profit and Loss Web]({{ site.url }}/images/app_profit_and_loss_web.png)

Except for capital and tax, none of the categories in the accounts are hard coded. Instead, they are constructed from a combination of user-specified cash accounts (bank and assets) and [cash codes]({{ site.url }}/tutorials/cash-codes). Here we are using an HMRC template, so the codes identify required values for [filing your company annual return]({{ site.url }}/tutorials/accounts-filing).

### 365

Company Accounts can be obtained from the [Trade Statement]({{ site.url }}/docs/tc_accounts_hmrc.xlsx) (an Excel [VSTO template]({{ site.url }}/tutorials/installing-vsto)).

The first section shows trading performance, irrespective of assets. This information is obtained from [payment entries]({{ site.url }}/tutorials/cash-book#payment-entry), or the invoicing of [workflows]({{ site.url }}/tutorials/manufacturing#workflow) (tasks/jobs/projects) if you are using [the MIS]({{ site.url }}/mis):

![summary]({{ site.url}}/images/app_statement_summary.png)

The next section adds asset movement, such as stock. Since changes in asset value impact capital, movement must be added to the trading totals for a legally compliant P&L:

![Profit and Loss]({{ site.url }}/images/app_profit_and_loss.png)

And finally, the [balance sheet]({{ site.url }}/tutorials/balance-sheet):

![Balance Sheet]({{ site.url }}/images/app_balance_sheet.png)


