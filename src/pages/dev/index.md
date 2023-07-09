---
layout: ../../layouts/Documentation.astro
title: Developments
permalink: dev/index
---

## ASP.NET Core Web App
The [Accounts Mode implementation](/tutorials/installing-web) provides the framework for a full implementation of the Trade Control node. MIS Mode in ASP.NET Core would make all system functionality available to phone users.

For progress, refer to ongoing developments in the [GitHub repository](https://github.com/TradeControl/tradecontrol.web/blob/master/docs/dev_plan.md).

## MTD Government Services
An MTD project is [currently under development](https://github.com/TradeControl/hmrc_mtd). It will allow any UK business to post their VAT returns for free.

## Networking
Trade Control nodes can be [connected together](/tutorials/network_overview) to form supply-chains. It would make sense to implement the existing code in netcore and run it as a service.

## Bitcoin Side-chaining
Trade Control is a supporter of bitcoin as [Unit of Account](/tutorials/bitcoin_overview) and published its [commercial wallet](https://tradecontrol.github.io/bitcoin) in 2020. Trading goods and services, generating Company Accounts, tax calculations and supply-chain management, all work fine using this bitcoin wallet. There are obviously many non-technical reasons that impede adoption. However, the biggest technical hurdles are high miner fees, slow transaction speeds and throughput constraints. Financial services have implemented a solution to overcome these issues for their industry, called [side-chaining](https://en.wikipedia.org/wiki/Lightning_Network). Why not implement side-chaining for supply-chains? Each supply-chain could act like a bank of off-chain pegged coins, and [consortium members](/tutorials/network_overview) transfer coins to and from these [new cash accounts](/tutorials/bitcoin#coin-transfers).

## Free Software
The Trade Control schema and business logic are published under a GNU licence, but Sql Server is not. To address this requires a straight re-write of the [SqlNode](https://github.com/tradecontrol/sqlnode) into MariaDB. Since MariaDB now supports Common Table Expressions and Windows Functions, heavily used by the schema design, it should be a viable proposition both technically and practically.
