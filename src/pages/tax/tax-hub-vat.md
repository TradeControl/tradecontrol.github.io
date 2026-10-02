---
layout: ../../layouts/Documentation.astro
title: Tax Hub VAT
permalink: /tax/tax-hub-vat
---

The VAT workspace brings the VAT statement, return totals, period detail and HMRC filing journey together. Its figures are projected from the same accounting evidence used by the VAT section of the Cash Statement.

Choose a **Financial Year** and, where needed, a **Period** from the Tax Hub sidebar. Period descriptions are shown as ordinary inclusive reporting periods.

## Before filing

The business must have a ready [**Indirect tax reporting**](/admin/admin-manager-reporting-profiles) profile. The VAT registration number is maintained in the reporting subject's organisation details and is shown in the filing journey in masked form.

The **HMRC VAT connection** panel shows whether the business is connected. Choose **Manage** to connect, sign out or disconnect the Government Gateway organisation account. Trade Control does not ask for or store the user's HMRC sign-in credentials.

Connecting an account grants Trade Control permission to use HMRC's VAT service. Signing out ends the local session without revoking that permission; disconnecting removes the stored HMRC connection and requires authorisation again.

## VAT Statement

**VAT Statement** shows VAT due, VAT paid and the running balance.

## VAT Submission

**VAT Submission** shows the nine return figures, including VAT due on sales and acquisitions, VAT reclaimed, net VAT due and the relevant values excluding VAT. Use **Adjust tax rates** to open the effective-dated VAT adjustment controls in Admin Manager.

Adjustments support reconciliation for the selected tax-period window and should be supported by the business records.

## VAT Summary

**VAT Summary** shows the return figures by period and responds to the selected financial-year and period filters.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-submission.png"
    alt="Tax Hub VAT Submission tab showing the nine VAT return figures"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## HMRC Obligations

Open **HMRC Obligations** and choose **Refresh HMRC** to retrieve the filing periods available to the connected organisation account.

Trade Control distinguishes:

- open HMRC obligations with a matching local return;
- fulfilled or previously filed HMRC periods; and
- local forecast periods that HMRC has not supplied as filing obligations.

Choose **Review return** beside the open obligation. A return cannot be submitted from a local forecast row or for a VAT registration number that differs from the connected HMRC organisation.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-hmrc-obligations.png"
    alt="HMRC VAT Obligations showing an open filing period with a local return available"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Review, approve and submit

The review displays the exact nine-box return calculated from the business's accounting records. The values cannot be edited on the review page. Resolve any preparation or reconciliation finding before continuing.

HMRC displays the inclusive final date of the obligation. Trade Control stores the following day as its exclusive period boundary; both descriptions refer to the same reporting period.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-return-review.png"
    alt="VAT return review showing the exact nine VAT return figures and legal declaration"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

Filing deliberately uses two separate actions:

1. Read the legal declaration, select its confirmation and choose **Approve return — does not submit**. This records approval of the exact displayed return but does not contact HMRC.
2. Check the prominent **Not yet submitted to HMRC** message, select the final submission acknowledgement and choose **Submit VAT return to HMRC**.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-approved-not-submitted.png"
    alt="Approved VAT return showing that it has not yet been submitted to HMRC"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

Do not close or repeat the action while submission is in progress. Trade Control prevents duplicate submissions and treats an interrupted or uncertain outcome as requiring reconciliation rather than inviting an immediate retry.

## Receipt and reconciliation

An accepted return displays HMRC's processing date and safe receipt references. **HMRC readback — Exact match confirmed** means the return retrieved from HMRC matches the exact approved nine-box payload.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-accepted-receipt.png"
    alt="Accepted HMRC VAT return showing receipt details and an exact readback match"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

Choose **Refresh HMRC** after submission. The filed period is no longer available for submission and is presented as fulfilled or already submitted with readback available.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-filed-obligation.png"
    alt="HMRC VAT Obligations showing that the return has already been filed and readback is available"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Filing History

Open **Filing History** to review VAT returns recorded for the business after it adopted the current indirect-tax reporting profile. The history follows the **Financial Year** and **Period** selected in the Tax Hub sidebar, so a business that has used Trade Control for many years can focus on the relevant accounting window.

Only filings belonging to the VAT registration number currently held by the reporting subject are shown. A historical record created under an obsolete VAT identity is not presented as a filing for the current business registration.

Each filing records:

- the HMRC period and whether the return was accepted, rejected, not sent or has an uncertain outcome;
- the masked VAT registration number and the Trade Control user who approved it;
- the update time, attempt reference and HMRC correlation reference;
- HMRC's safe receipt details, where supplied;
- confirmation that the approved and dispatched return evidence still matches its recorded digital fingerprint; and
- the exact HMRC readback result.

Expand **Approved return and audit references** to inspect the approved nine-box values and the prepared return's SHA-256 fingerprint. These details help an authorised user or support operator trace the filing without exposing HMRC credentials or unrestricted request and response data.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-filing-history.png"
    alt="Tax Hub Filing History showing an accepted VAT return, receipt, verified evidence and exact HMRC readback match"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Uncertain outcomes

If the browser or server is interrupted after sending begins, do not submit the return again. Trade Control prevents an ordinary repeat submission and displays a persistent warning on the Tax Hub dashboard when a filing still needs confirmation.

Open **VAT**, then **Filing History**. If HMRC's acceptance is already recorded but the exact readback did not complete, or if the outcome remains uncertain, choose **Reconcile with HMRC** to retrieve the authority's copy and compare it with the exact approved return.

When every value agrees, Filing History records an exact match. If any value differs, the differing fields are shown for investigation. If HMRC cannot prove the outcome, do not submit the return again: retain the attempt reference and seek support.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-filing-history-reconciliation.png"
    alt="VAT Filing History showing the controlled Reconcile with HMRC action for an uncertain filing outcome"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

After a successful reconciliation, the recovery action disappears and **HMRC readback** confirms that all nine retrieved VAT values exactly match the approved return. An outcome of **HMRC-SUCCESS (HTTP 201)** remains unchanged when the acceptance receipt was already safely recorded before the interruption.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/vat-filing-history-reconciled.png"
    alt="VAT Filing History after recovery showing an accepted return and exact HMRC readback match"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>
