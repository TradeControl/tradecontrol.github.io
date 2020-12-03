---
layout: page
title: Modelling projects and workflows
permalink: /app
---

## Design

Broadly, the app connects two aspects of commerce: production and assets.

Accounting systems are not connected to production because they use Double-Entry Book-keeping ledgers to derive the accounts. They are asset-based systems. Trade Control is production-based. It models workflows and subsequently applies an asset-charge algorithm to productive transactions. From this alternative recording surface, company accounts are derived. This is the opposite way round to traditional practice. Here, the objective is to establish asset value in the form of capital, and any production system must be subsequently bolted on. In this way, production is disconnected from finance, and that negatively influences both attitude and innovative potential.

## Trade Statement

The two aspects of commerce are visible in the [Trade Statement]({{ site.url }}/docs/tc_balance_sheet.xlsx) (an Excel [VSTO template]({{ site.url }}/tutorials/installing-vsto)).

The first section shows trading performance, irrespective of assets. This information is obtained from the invoicing of [workflows]({{ site.url }}/tutorials/manufacturing#workflow) (or tasks/jobs/projects):

![summary]({{ site.url}}/images/app_statement_summary.png)

The next section adds asset movement, such as stock. Since changes in asset value impact capital, movement must be added to the trading totals for a legally compliant P&L:

![Profit and Loss]({{ site.url }}/images/app_profit_and_loss.png)

And finally, the [balance sheet]({{ site.url }}/tutorials/balance-sheet):

![Balance Sheet]({{ site.url }}/images/app_balance_sheet.png)


