---
layout: ../../layouts/Documentation.astro
title: Tax Hub Business Tax
permalink: /tax/tax-hub-business-tax
---

**Business Tax** adapts to the type of business. Companies see Corporation Tax information; sole traders see cumulative MTD Income Tax information.

Choose a financial year and period in the sidebar. Use **Business Tax Totals** to review calculated totals and adjustments, **Business Tax Statement** to review tax due, paid and the running balance, and **Losses Carried Forward** to review the year-end loss movement.

## Companies

Companies use the configured Corporation Tax rate for the relevant financial periods. If the recorded history needs a period-specific correction, use **Adjust tax rates** and record a Business Tax adjustment rather than replacing historical accounting evidence.

The company projection separates statutory accounts, Corporation Tax computation and CT600 return information. This prevents a derived computation result from being treated as an independently mapped accounting amount.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/business-tax-company.png"
    alt="Company Business Tax workspace showing the Corporation Tax HMRC View"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Sole traders

MTD Income Tax quarterly updates are cumulative from the start of the tax year. The fourth update is not the annual tax return.

The MIN profile reports turnover, other business income and consolidated expenses. The STD profile reports the supported detailed expense categories. Both are supported profiles of the same cumulative reporting source.

Expected annual profit is used only to estimate an effective Income Tax and National Insurance rate for cash-flow planning. Final liabilities come from HMRC and are not calculated or submitted by this planning estimate.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/business-tax-sole-trader-std.png"
    alt="Sole-trader Business Tax workspace showing the detailed STD cumulative MTD Income Tax projection"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## HMRC View

**HMRC View** displays source-specific submission totals and payload detail for review. In the current product boundary, “submission” identifies the prepared data shape; it does not indicate that information has been transmitted or accepted.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/business-tax-hmrc-view.png"
    alt="Business Tax workspace showing by HMRC tax tags"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

