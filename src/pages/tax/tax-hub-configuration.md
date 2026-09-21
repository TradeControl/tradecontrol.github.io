---
layout: ../../layouts/Documentation.astro
title: Tax Hub Initial Configuration
permalink: /tax/tax-hub-configuration
---

Tax Hub relies on a correctly initialized business and reviewed statutory reporting profiles. An administrator should complete this work before reporting periods are reviewed.

## Initialize the business

In **System > Admin Manager > Setup**, select the jurisdiction, business template, financial-year start and VAT registration status. See [Node Initialisation](/admin/admin-manager-init) for the complete setup workflow.

The template determines whether the business is a company or sole trader and installs the corresponding accounting classification. Reporting definitions are jurisdiction- and authority-aware; the design is not limited to one permanent set of UK authorities.

For a sole trader, enter **Expected Annual Profit**. Trade Control uses it to derive an effective Income Tax and National Insurance planning rate for cash-flow forecasting. It is not a submitted liability and is not an HMRC calculation.

## Review reporting profiles

Open **System > Admin Manager > Tax > Reporting Profiles**. Check the authority reference, required registrations, Tax Source and reporting settings for every applicable profile. Select **Reviewed and active** only after completing that review.

See [Reporting Profiles](/admin/admin-manager-reporting-profiles) for the profile states and maintenance workflow.

## Check financial periods and tax rates

Use [Financial Periods](/admin/admin-manager-periods) to confirm the accounting calendar. Companies should also check the Corporation Tax rate for each financial period in [Tax Configuration](/admin/admin-manager-tax-config). Use an adjustment for an historical difference rather than silently rewriting the recorded rate.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/reporting-profile-ready.png"
    alt="Admin Manager Reporting Profiles showing a reviewed and ready statutory reporting profile"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>
