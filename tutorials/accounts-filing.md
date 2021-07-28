---
layout: page
title: Filing Company Accounts
permalink: /tutorials/accounts-filing
---

Describing why and how to file your company accounts.

## Index

- [Why file your own accounts?](#why-file-your-own-accounts)
- [Make Tax Digital service](#make-tax-digital)
- [Instructions](#instructions)
- [Government Gateway](#government-gateway)
- [Creating a submission](#company-tax-return)
- [Company Accounts](#company-accounts)
- [Corporation Tax Computation](#corporation-tax)

## Background

### Why File Your Own Accounts?

It is understandable that those who have spent a great deal of time and effort on building up their business are both conservative and cautious, especially about tax. However, filing your company accounts without the mediation of rented software from banks and accountants is no big deal. It used to be, but [that is no longer the case]({{ site.url }}/accounts#tax-law). Here are a few reasons why adopting this free, open-source system is very low risk.

- Even if you have an accountant, still you must do your books. The application provides meticulous records of all financial transactions in a form from which traditional accounts are easily derived.  Therefore, at last resort, you can always [register an accountant as a user]({{ site.url }}/tutorials/installing-web#registrations), and they will have everything they need to produce accounts in the traditional way.  However, it should never come to that!
- If you use [the HMRC template]({{ site.url }}/tutorials/installing-web#start-up) as a basis for classifying transactions, there is a [one-to-one correspondence]({{ site.url }}/tutorials/cash-book-web#finalised-accounts) between the codes in your accounts and box references in the government portal.  That makes data-entry an easy process.
- Replacing the asset-based recording system of accountants with a [production-based supply versus demand model]({{ site.url }}/about#design) means capital and tax are algorithmically derived. Because there is no double-entry, there is no need for a Trial Balance. It always balances on every transaction, and this is reflected in the bank balance and money owing at any given time. These are two things [that every businessperson knows]({{ site.url }}/accounts#error-checking) and can objectively verify. In the unlikely event of a government audit, you simply and confidently supply your bank statements, register them as a user, and they can check it all adds up, replicating what the SvD algorithms are already doing. 
- The government give you nine months to get your act together.  Because transaction entry points are flexible In Accounts Mode, you could leave it to the last minute if you like. However, Trade Control is a production system, and, in this mode, you must operate in real time: to preserve the integrity of the [Company Statement]({{ site.url }}/tutorials/manufacturing#company-statement), [model what-if scenarios]({{ site.url }}/tutorials/manufacturing#pricing-and-scheduling) and process your [ongoing order book]({{ site.url }}/tutorials/manufacturing#project-schedule). Not only will you know what tax you are obliged to pay, but what you will or might pay in the future from your projected funds, and this constantly updates with every transaction made. Therefore, at any given point, including year-end, your accounts are already complete. Then you have a further nine months to tweak and post the figures.
- Accountancy practice has evolved at the behest of external public or private shareholders who want to know how much money they can skim off a productive resource without killing it off. Governments have enacted laws to enforce these methods, because they can graft taxes onto the extraction process and get a slice of the pie.  That is why the self-employed often do not even look at the year-end accounts they pay so much for, because traditional accounts have no operational significance, and they are not interested in exploiting themselves. Transferring responsibility for your finances from the instruments of corporate power to yourself can only increase your understanding of the financial drivers that underpin your business, improving decision making whilst saving costs.
- Doing the accounts yourself does not preclude a personal tax advisor, should you need one.
- Trade Control is an open-source application that you can [download from GitHub](https://github.com/tradecontrol) and store locally. No matter what happens in the future, you can always replicate the environment without cost or licence fees.
- You can [get up and running]({{ site.url }}/tutorials/installing-web#web-hosting) on a reliable and secure website for 1 GBP/pcm. [All other costs are optional](https://www.tradecontrol.online/pricing). You will be able to access your business data from any device, anywhere in the world.

## Make Tax Digital

If you are currently renting an accounting package from a bank or accountancy software provider, it is likely that they will be posting the figures to HRMC via the government's Make Tax Digital (MTD) service. This is a web service that offers an automated interface between a private computer program and the government tax system. Your tax requirements are therefore concealed behind the provider's private application and responsibility to collect the correct information is delegated to them. To take responsibility for your own finances requires bypassing this MTD interface and obtaining a direct connection with the tax system through the Government Gateway. It will inform you whenever tax law changes and provide itemised, context sensitive help for every obligation and deduction.

When your turnover is above a certain threshold (currently GBP 80K), you are now legally obliged to submit your VAT returns through the MTD web service, therefore forcing you to use a private package. In 2022, the existing VAT return system in the gateway will be disabled and all vat registered companies will be forced down the same path. The reason for this constraint is unknown, although it will further benefit the financial services sector by marshalling every productive business to operate through their systems.  To counter, we use a [simple and cost-effective intermediary]({{ site.url }}/tutorials/digital-tax) which works well enough. With sufficient commercial support, we could code a free interface to the VAT MTD service for you.

# Instructions

## Requirements

The following walk-through presents the accounts generated from these two tutorials:

- [Accounts Tutorial]({{ site.url }}/tutorials/cash-book-web)
- [Balance Sheet]({{ site.url }}/tutorials/balance-sheet-web)

You can replicate the process using the [P&L and Balance Sheet]({{ site.url }}/tutorials/balance-sheet-web#review-5) on your phone, or by [generating a Trade Statement]({{ site.url }}/docs/tc_accounts_hmrc.xlsx) using Office 365.

## Government Gateway

For this submission, we are going to use the tax account of Trade Control Ltd, whose period end is 31st March. Obviously, we are not going to post this, because it is fictitious, but the process for entering factual data is identical. 

### Companies House

Every company in the UK is registered with Companies House. Each year you must complete an Annual Return, describing the structure of the company. You also present company accounts, to communicate the financial position in terms of capital.  You can submit the accounts to Companies House directly, but you do not need to do that anymore. Instead, you should use the Government Gateway.

### Tax Services

In addition to Companies House, a limited company registers for access to the government portal or gateway. Your home page shows the services you have added and activated. 

![Government Gateway]( {{ site.url}}/images/filing_hmrc_services.png)

The key schemes are [PAYE]({{ site.url }}/accounts#paye), VAT (if registered) and corporation tax. Here, we focus on the latter.

## Company Tax Return

A new submission requires both the Companies House accounts and an HMRC tax return. The accounts consist of a balance sheet and P&L. The tax return consists of the tax calculation itself and various ad hoc data collected by the government during the entry process. Because we used the HMRC template to work through the tutorial, we just enter each amount using the corresponding code. If you use your own cash codes and categories, you may need to add specific totals to satisfy the government's data-collection needs. 

Firstly, create a new submission:

 ![create submission]({{ site.url }}/images/filing_01_create_submission.png) 

Then answer the standard questions and make sure you select the option below:

![filing type]({{ site.url }}/images/filing_02_filing_type.png)

## Company Accounts

![companies house]({{ site.url }}/images/filing_03_companies_house.png)

If you can answer yes to the questions below, you are eligible for micro-accounts, which just means you can communicate less information to Companies House. 

![about the company]({{ site.url }}/images/filing_04_micro_accounts.png)

The tutorial qualifies, so for brevity we are going to select that.

![accounts type]({{ site.url }}/images/filing_05_accounts_type.png)

Now you can enter the Profit and Loss values, which correspond to the [P&L on your phone]({{ site.url }}/tutorials/balance-sheet-web#profit-and-loss-account) or [Trade Statement]({{ site.url }}/accounts#365).

> A few things to note - there is context sensitive help for every single entry; the portal is bang up to date with the latest requirements (Covid); and you can contact HMRC directly with any codes you are uncertain about. 

![profit and loss]({{ site.url }}/images/filing_06_profit_and_loss.png)

Because we are presenting micro-accounts, we need to aggregate [the full balance sheet]({{ site.url }}/docs/tc_accounts_hmrc.xlsx). You just take out fixed assets and share capital and add up the remaining values to obtain current assets:

![balance sheet]({{ site.url }}/images/filing_07_balance_sheet.png)

Finally, you approve your accounts, and HMRC generate a PDF document that they send to Companies House after submission.

![accounts approval]({{ site.url }}/images/filing_08_accounts_approval.png)

## Corporation Tax

To enter the values associated with the tax computation, use the codes that begin with **CP**. From the web app, scroll to the [company tax totals]({{ site.url }}/tutorials/balance-sheet-web#company-tax-totals) and select details to view the full listing. To simplify the entry, we have moved the Assets - Net Profit category (**TC-ASSETNP**) from Total Expenses (**CP40**) into the Cost of Sales (**CP8**). Otherwise we would need to split out depreciation from the asset account balance.

![start computations]({{ site.url }}/images/filing_09_start_computations.png)

Work through the screens entering in the **CP** values.

![general expenses]({{ site.url }}/images/filing_10_expenses.png)

Make sure the detailed P&L profit figure matches that presented to Companies House.

![profit and loss]({{ site.url }}/images/filing_11_profit_and_loss.png)

### Losses Carried Forward

Because Trade Control algorithms are based on Supply v Demand, losses are automatically carried forward on the [Company Tax Statement]({{ site.url}}/tutorials/balance-sheet-web#company-tax). However, because accounting is based on calculating increases in asset value over financial periods, this is not the case in traditional accounting practice. You therefore must make a separate claim against tax on profits by carrying forward losses. The **Losses C/F** button will inform you how much loss, if any, you can offset against profits made during the financial year. 

![losses carried forward]({{ site.url }}/images/filing_12_losses_carried_forward.png)

## Submission

Your submission is saved in the government portal, and you can work on it over the nine-month window until it is ready to submit. There are various sections that we have not covered, but they are all self-explanatory and consistently updated to reflect current tax law.   

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

