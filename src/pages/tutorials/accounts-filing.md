---
layout: ../../layouts/Documentation.astro
title: Filing Company Accounts
permalink: /tutorials/accounts-filing
---

Describing how to file your company accounts without an accountant.

## Index

- [Make Tax Digital service](#make-tax-digital)
- [Government Gateway](#government-gateway)
- [Creating a submission](#company-tax-return)
- [Company Accounts](#company-accounts)
- [Corporation Tax Computation](#corporation-tax)

## Requirements

The following walk-through presents the accounts generated from these two tutorials:

- [Accounts Tutorial](/tutorials/cash-book-web)
- [Balance Sheet](/tutorials/balance-sheet-web)

You can replicate the process using the [P&L and Balance Sheet](/tutorials/balance-sheet-web#review-5) on your phone, or by [generating a Trade Statement](/docs/tc_accounts_hmrc.xlsx) using Office 365.

## Make Tax Digital

VAT registered UK businesses are legally obliged to post their Vat Returns through a privately owned MTD gateway. The free [Trade Control MTD service](https://github.com/TradeControl/hmrc_mtd) is currently in progress. In the meantime, there is an easy work around available using a [basic intermediary](/tutorials/digital-tax).

## Government Gateway

For this submission, we are going to use the tax account of Trade Control Ltd, whose period end is 31st March. Obviously, we are not going to post this, because it is fictitious, but the process for entering factual data is identical. 

### Companies House

Every company in the UK is registered with Companies House. Each year you must complete an Annual Return, describing the structure of the company. You also present company accounts, to communicate the financial position in terms of capital.  You can submit the accounts to Companies House directly, but you do not need to do that anymore. Instead, you should use the Government Gateway.

### Tax Services

In addition to Companies House, a limited company registers for access to the government portal or gateway. Your home page shows the services you have added and activated. 

![Government Gateway]( /images/filing_hmrc_services.png)

The key schemes are [PAYE](/accounts#paye), VAT (if registered) and corporation tax. Here, we focus on the latter.

## Company Tax Return

A new submission requires both the Companies House accounts and an HMRC tax return. The accounts consist of a balance sheet and P&L. The tax return consists of the tax calculation itself and various ad hoc data collected by the government during the entry process. Because we used the HMRC template to work through the tutorial, we just enter each amount using the corresponding code. If you use your own cash codes and categories, you may need to add specific totals to satisfy the government's data-collection needs. 

Firstly, create a new submission:

 ![create submission](/images/filing_01_create_submission.png) 

Then answer the standard questions and make sure you select the option below:

![filing type](/images/filing_02_filing_type.png)

## Company Accounts

![companies house](/images/filing_03_companies_house.png)

If you can answer yes to the questions below, you are eligible for micro-accounts, which just means you can communicate less information to Companies House. 

![about the company](/images/filing_04_micro_accounts.png)

The tutorial qualifies, so for brevity we are going to select that.

![accounts type](/images/filing_05_accounts_type.png)

Now you can enter the Profit and Loss values, which correspond to the [P&L on your phone](/tutorials/balance-sheet-web#profit-and-loss-account) or [Trade Statement](/accounts#365).

> A few things to note - there is context sensitive help for every single entry; the portal is bang up to date with the latest requirements (Covid); and you can contact HMRC directly with any codes you are uncertain about. 

![profit and loss](/images/filing_06_profit_and_loss.png)

Because we are presenting micro-accounts, we need to aggregate [the full balance sheet](/docs/tc_accounts_hmrc.xlsx). You just take out fixed assets and share capital and add up the remaining values to obtain current assets:

![balance sheet](/images/filing_07_balance_sheet.png)

Finally, you approve your accounts, and HMRC generate a PDF document that they send to Companies House after submission.

![accounts approval](/images/filing_08_accounts_approval.png)

## Corporation Tax

To enter the values associated with the tax computation, use the codes that begin with **CP**. From the web app, scroll to the [company tax totals](/tutorials/balance-sheet-web#company-tax-totals) and select details to view the full listing. To simplify the entry, we have moved the Assets - Net Profit category (**TC-ASSETNP**) from Total Expenses (**CP40**) into the Cost of Sales (**CP8**). Otherwise we would need to split out depreciation from the asset account balance.

![start computations](/images/filing_09_start_computations.png)

Work through the screens entering in the **CP** values.

![general expenses](/images/filing_10_expenses.png)

Make sure the detailed P&L profit figure matches that presented to Companies House.

![profit and loss](/images/filing_11_profit_and_loss.png)

### Losses Carried Forward

Because Trade Control algorithms are based on Supply v Demand, losses are automatically carried forward on the [Company Tax Statement](/tutorials/balance-sheet-web#company-tax). However, because accounting is based on calculating increases in asset value over financial periods, this is not the case in traditional accounting practice. You therefore must make a separate claim against tax on profits by carrying forward losses. The **Losses C/F** button will inform you how much loss, if any, you can offset against profits made during the financial year. 

![losses carried forward](/images/filing_12_losses_carried_forward.png)

## Submission

Your submission is saved in the government portal, and you can work on it over the nine-month window until it is ready to submit. There are various sections that we have not covered, but they are all self-explanatory and consistently updated to reflect current tax law.   

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

