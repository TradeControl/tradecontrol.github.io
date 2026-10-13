---
layout: ../../layouts/Documentation.astro
title: Developments
permalink: dev/index
---

Trade Control is replacing its functional Accounts and MIS prototypes with a production web platform. The prototypes remain in active private use and provide the accounting and operational model for the new implementation, but they are not commercially delivered products.

Last reviewed 13 October 2026.

## The prototype foundation

The original Accounts and MIS applications demonstrate the complete Trade Control model in working software. They are used by a small group of businesses and have supplied the practical foundation for the replacement programme.

Their source is retained in the archived [Office prototype](https://github.com/TradeControl/office) and the archive within [SQLNode](https://github.com/TradeControl/sqlnode). These repositories preserve the proven behaviour and design history; they are not the intended commercial delivery platform.

## Release 1 — Accounts Mode

[TradeControl Web](https://github.com/TradeControl/tradecontrol.web) is the production replacement for Accounts Mode. It carries the established accounting model into an ASP.NET Core web application with clearer workflows, stronger evidence boundaries and deployment suitable for a supported service.

### Implemented product capabilities

- The core Accounts Mode web interface and Invoice Register.
- Financial statements, balance-sheet validation and the Equity Bridge.
- Subject debtor, creditor and aged-balance reporting.
- The Tax Hub workspace and its accounting-source review facilities.
- The VAT preparation, approval and submission journey, technically validated against HMRC's sandbox services.
- The [Companies House accounts journey](/tax/tax-hub-companies-house) for unaudited, filleted FRS 105 micro-entity accounts, including accounting-evidence review, exact-document preparation, approval, controlled submission and status continuation.

### Work continuing toward first release

- Corporation Tax integration and its relationship with the statutory accounts.
- Production access and operational completion for the supported tax-authority services.
- A secure multi-tenant deployment with an absolute boundary between business instances.
- Installation, administration, monitoring, recovery and alternative-deployment guidance.
- Final product documentation and release acceptance.

Self Assessment remains under consideration for the first release. Its inclusion will be decided against the remaining launch workload rather than presented here as either committed or excluded.

Companies House has approved the software for the accounts type developed to date and supplied the protected live package reference. The complete journey is being documented and exercised in the official test environment; live activation remains deferred until the multi-tenant production service and its operational controls exist.

The VAT workflow is technically implemented and tested. External production approval, credentials and compatible-software listing remain separate authority dependencies and are not implied by implementation completion.

## Production delivery

Release 1 is complete only when the implemented Accounts Mode capabilities can be operated as a secure, supportable service. The development deployment is deliberately a single-business environment and is not evidence of production multi-tenant isolation.

The production programme therefore includes:

- tenant-specific identity, data, evidence, credential and storage boundaries;
- controlled authority configuration and live activation;
- backup, recovery, audit and operational support;
- deployment and upgrade procedures; and
- a documented route for independently hosted installations.

## Release 2 — MIS Mode

MIS Mode will replace the working prototype rather than invent a separate management system. It will bring the prototype's operational capabilities into the same production web platform after the Accounts Mode foundation is established.

Its defining capability is the **Company Statement**: a continuous, transaction-grained balance sheet used for planning and costing. Instead of reconstructing the company at reporting intervals, it expresses the financial state produced by individual completed and projected transactions. Projects can therefore be evaluated as changes to the state of the whole business, including cash flow, tax, obligations, reserves and feasibility constraints.

The Company Statement and its planning mechanics already exist and operate in the prototype. Their engineering basis is described in [Applied Production Theory: A Transaction-Grained Framework for Real Firms](https://github.com/iamonnox/papers/blob/main/APT/apt.md).

The planned scope includes:

- the Company Statement and transaction-grained planning and costing;
- Admin Manager adapters and controlled business configuration;
- multi-level Object structures and bills of materials;
- sales, works and purchase Project workflows;
- document management; and
- the management-information views built from the shared polarity-based accounting model.

Detailed sequencing will be set after the first-release deployment workload is understood.

## Longer-term development

Later work may extend the Business Entity node with:

- the [Supply Chain Network](https://github.com/TradeControl/network);
- the [Commercial Crypto Wallet](https://github.com/TradeControl/bitcoin); and
- integration of Trade Control's manufacturing systems.

These are programme directions, not commitments for the first commercial release.

Trade Control owns the intellectual property in functioning Material Requirements Planning (MRP) and Manufacturing Execution System (MES) software developed in, and used within, a live production environment. That source is not currently released as open-source code. The manufacturing programme therefore concerns the controlled integration or reimplementation of existing working software, not the future acquisition of manufacturing knowledge.

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

