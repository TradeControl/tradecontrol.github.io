---
layout: ../../layouts/Documentation.astro
title: Quotations from XML Price Lists
permalink: /tutorials/quotations
---

The following document explains how to raise quotations from the xml price lists provided by your supplier.

[overview](/tutorials/quotations_overview)

## Installation

[download and install the latest release - tcQuotations.zip](https://github.com/tradecontrol/quotations/releases)

Run setup.exe to check that the required .NET framework is installed. The app does not require access to any external services since all the data is encapsulated in the XML price list file. 

## Opening the Price List

Copy the supplier's price lists into a working folder.

Open the app from the desktop icon and locate the XML file. The window will load the first product in the listing, with a quantity of 1. The products, extras and images will relate to your supplier. Changing the product, quantity or checking extras will update the Unit Price.

![Quote Load](/images/quotation_load.png)

## Quotations

To save a quote, enter a title and press the quote button. It will be listed at the bottom of the window, along with other quotations. Selecting a quote will activate it and present the full details in the right-hand panel. By right clicking on the quote these details can be copied to the clipboard in text form so they can be pasted into an email.

If the file has been modified, you will be asked to save before closing. The supplier's XML file is updated to include the quotations you have derived from their price list.
