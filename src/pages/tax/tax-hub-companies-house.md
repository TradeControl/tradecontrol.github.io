---
layout: ../../layouts/Documentation.astro
title: Companies House Accounts Filing
permalink: /tax/tax-hub-companies-house
---

Use **File Your Accounts** to prepare, approve and file unaudited, filleted FRS 105 micro-entity accounts with Companies House.

The filing is derived from the accounting records in Trade Control. Balance-sheet figures are not re-entered on a filing form. The first supported profile does not cover full accounts, dormant-company accounts, audited accounts, FRS 102 accounts or another accounts regime.

## What is a micro-entity?

For a financial year beginning on or after **6 April 2025**, a company normally qualifies as a micro-entity if it meets at least two of these three conditions:

| Criterion | Threshold |
| --- | ---: |
| Annual turnover | Not more than **£1 million** |
| Balance sheet total (total assets) | Not more than **£500,000** |
| Average number of employees | Not more than **10** |

Meeting the size thresholds does not by itself make every company eligible. Certain companies and group situations are excluded, including public limited companies, charitable companies and some parent or subsidiary companies. The rules for a company's first and subsequent financial years can also affect qualification.

Check the current [Companies House guidance on micro-entity accounts](https://www.gov.uk/government/publications/filing-your-companies-house-accounts/life-of-a-company-part-1-accounts#micro-entity-accounts) or seek professional advice if you are unsure. The thresholds that applied before 6 April 2025 were lower, so use the accounting period's start date when deciding which limits apply.

## Before you begin

Finish the financial year and review its Annual P&L, year-end Balance Sheet and Equity Bridge in [Tax Hub Accounts](/tax/tax-hub-accounts). Resolve any reconciliation failure and check the underlying debtor, creditor, bank, cash and fixed-asset positions.

In **Accounts**, select the completed financial year and open **File Your Accounts**.

## Start the filing journey

The filing overview shows the company number, accounting period, filing profile, whether these are first or subsequent accounts, and the Equity Bridge result. Check that these details describe the accounts you intend to file, then choose **Start filing journey**.

Starting the journey does not send anything to Companies House.

> For purposes of demonstration, screenshots are presented in Companies House official test mode.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-start-filing.png"
    alt="File Your Accounts overview before the journey starts."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Review the accounting evidence

The guided review confirms the year-end evidence behind the accounts:

1. **Review scope** — confirm the selected company, period and Equity Bridge.
2. **Debtors and creditors** — review the year-end populations and totals. **Review historical balances** opens the Subject Browser detail.
3. **Bank and cash** — review current and reserve-account balances and their reconciliation to the balance sheet. **Review account** opens the Cash Manager statement.
4. **Fixed assets** — review opening and closing carrying values, additions, depreciation and write-downs using the available account and schedule links.
5. **Complete the evidence review** — confirm the dated accounting snapshots and unlock the filing information.

If a scheduled depreciation or write-off instalment is due by the selected year end, post it through the fixed-asset review. Tax Hub then reloads the accounts and recalculates the balances, Equity Bridge and filing evidence.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-evidence-review.png"
    alt="Guided year-end evidence review at the start of the sequence."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-accounting-evidence.png"
    alt="A representative expanded accounting-evidence step."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-evidence-completion.png"
    alt="Accept accounts filing evidence review is complete."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Enter the filing information

Supply the information that is not held in the ledger, including the approval date, signing director, principal activity, accounting policies, average number of employees and any applicable director advances.

Review this information carefully. It forms part of the statutory accounts, but it cannot be used to replace or adjust the balance-sheet figures derived from the accounting records.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-filing-review.png"
    alt="Review Companies House filing meta-data."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Review the exact accounts

Choose **Prepare exact accounts**. Preparation does not send anything to Companies House.

Tax Hub displays the exact XHTML accounts document that will be filed. Read it on screen and use:

- [**Download filing XHTML**](/docs/companies-house-accounts-draft.xhtml) to retain the exact filing document; and
- [**Download draft PDF**](/docs/companies-house-accounts-draft.pdf) for a paged review copy marked **DRAFT — NOT FILED**.

The PDF is for human review. The retained XHTML is the filing document.

## Approve the accounts

Read the declaration for the exact document, select its confirmation and choose **Approve accounts — does not file**.

Approval records the user and binds the selected company, accounting period, reviewed evidence and exact document. The result is **Approved — not filed**. If the accounting evidence changes, prepare and approve a new document.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-accounts-document.png"
    alt="Prepared exact accounts with the document visible."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Submit the accounts once

Submission is a separate, explicitly confirmed action. Check that the approved document is the one you intend to file, select the final confirmation and choose the submission action.

The approved package is sent once and automatic retry is disabled. If the connection or browser is interrupted after sending begins, do not submit again or start another filing journey. Reopen the same company and accounting period to continue the existing filing.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-approved-not-filed.png"
    alt="The state immediately after approval and before submission."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Acknowledgement is not acceptance

A gateway acknowledgement confirms that Companies House has received the package. It does not mean that the accounts have been accepted.

Tax Hub retains the submission details and prevents another ordinary submission for the same company, accounting period and filing profile. When that period is reopened, **EXISTING FILING — DO NOT RESUBMIT** is shown instead of a new filing action.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-acknowledged.png"
    alt="The acknowledged result after Companies House has received the filing."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Check the filing status

For an acknowledged, pending or parked filing, choose **Check Companies House status**. Tax Hub adds the result to the existing filing record; it does not create or resend a filing.

The result may be:

- **Pending** — Companies House is still processing the filing; check again later.
- **Parked** — keep the existing filing and follow the recovery guidance shown.
- **Accepted** — Companies House has accepted the accounts.
- **Rejected** — review the Companies House response and correct the underlying issue before beginning an appropriate replacement filing.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/companies-house-status-check.png"
    alt="Existing filing before a terminal decision, or after an enquiry returns Pending."
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

<div style="max-width: 1400px; margin: 1rem 0; padding: 1rem; border: 2px dashed #aaa; border-radius: 8px;">
  <strong>Screenshot required:</strong> An accepted filing after the status enquiry.<br />
  Save as <code>/public/images/tax-hub/companies-house-status-accepted.png</code>.<br />
  Show the Companies House-derived <strong>Accepted</strong> state, submission reference and latest status enquiry.
</div>
