---
layout: ../../layouts/Documentation.astro
title: Business Initialisation
permalink: /deployment/web-initialisation
---

Instructions for initialising the Trade Control business entity node.

## Start-up

Once installed, the app requires authentication to proceed beyond the home page. The **first user to register** by entering their email address and password is automatically assigned the **Administrator role** with full login rights.

After logging in, you'll be taken to the **Initialisation form**, where you enter your business identity and bank details. 

> Tip: Each setting is remembered, so it's worth entering correct values from the outset. All settings can be amended later-there's no need to start from scratch if you make a mistake.

### Installation Template

The template you select determines how the business is configured. For example:

- **HMRC templates** map cash transactions to tax return codes, simplifying account submission.
- If you're following a tutorial, set the year end to the **previous month** to simulate a year-end.
- Otherwise, choose the **start month** you registered with HMRC.

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_initialisation.png" 
    alt="Business Node Initialisation" 
    title="Business Node Initialisation" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

### Registrations

User registrations are managed via the **System > Registrations** menu. When a new user registers, they cannot access the system until an administrator identifies them and assigns an appropriate role.

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_registrations.png" 
    alt="Users and Registrations" 
    title="Users and Registrations" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

There are three types of role:

- **Administrators** -- full access to all system features
- **Managers** -- edit permissions on all user data
- **Users** -- edit permissions on their own data only

The Administrator menu includes additional options, but the authorisation system still prevents users from accessing restricted pages directly-even if they attempt to enter URLs manually.

There is no theoretical limit to the number of users who can register or use the site simultaneously.

### Mail Host

The web app uses a mail host to send system-generated emails—such as password resets, invoice deliveries, and user notifications. This allows the app to communicate with users directly, without relying on external email clients.

To configure email delivery, you'll need the **SMTP server address** and **SSL port** for your chosen email provider. Most email accounts are compatible, including Gmail, Outlook, and business domains.

For testing purposes, you can use a Gmail account:
- SMTP server: `smtp.gmail.com`
- SSL port: `465`
- Enable [Less Secure App Access](https://myaccount.google.com/security) in your Gmail security settings.

Open **System > Mail Settings** to enter host details. The app supports multiple mail hosts in case one becomes unavailable, but only one can be active at a time.

Passwords are stored securely using **per-installation symmetric encryption**. During setup, a unique key is generated and stored in the database, allowing the app to decrypt credentials only when needed. This avoids hardcoded secrets and ensures each deployment remains isolated.

> Tip: If you're deploying to production, consider using a dedicated mail service like SendGrid or Mailjet for better reliability and delivery tracking.

### Files

Emails sent by the app rely on HTML templates (e.g. sales invoices), associated images (e.g. company logos), and PDF attachments (e.g. terms and conditions). By default, the system includes templates for income, expense, and support request emails.

To manage these assets, open **System > File Transfer** and sync the files on disk with the app. This interface allows you to download templates for modification and upload updated versions. Synchronisation is only required if you're using external FTP access.

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_file_transfer.png" 
    alt="File Transfer" 
    title="Upload Files" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

To personalise your templates, select **Images** and upload your company logo using the filename `company_logo.png`. This logo is used by the default templates, but you can upload alternative files and modify the templates to suit your branding.

### Document Templates

A document template is an HTML file containing **[Tags]**. These tags are replaced with live data when constructing a document. Images referenced in the HTML must be embedded in the email, and they also use tags. It's also common practice to attach PDF documents to invoices—such as policy statements—though this is optional.

Refer to the full <a href="https://github.com/tradecontrol/tradecontrol.web/blob/master/docs/template_tags.md" target="_blank" rel="noopener noreferrer">Template Tag Listing</a> for supported tags.

From **Invoicing > Email Templates**, you can assign a template to an invoice type. You may use a single template for both invoices and credit notes, or separate templates for each. Multiple templates can be associated with the same invoice type, allowing for different scenarios (e.g. with or without attachments).

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_document_template.png" 
    alt="Document Templates" 
    title="Document Templates" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

To personalise your template, select it and assign a logo. Click the logo and change the default tag `[TAG0]` to `[LOGO]`, which is used by the template.

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_template_image.png" 
    alt="Template Image" 
    title="Template Image" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

Finally, add any PDF attachments you want to include with your invoices and credit notes.

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_template_attachment.png" 
    alt="Template Attachment" 
    title="Template Attachment" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

### Re-Initialisation

Initialisation can be re-run by an Administrator anytime from the **System menu**, allowing you to reboot the business setup after exploring tutorials. 

<!--<div style="max-width: fit-content; margin: 1rem 0; text-align: left;">
  <img 
    src="/images/web_reinitialisation.png" 
    alt="Busines Re-initialisation" 
    title="Busines Re-initialisation" 
    style="max-width: 100%; height: auto;" 
    loading="lazy"
  >
</div>-->

---
