---
layout: ../../layouts/Documentation.astro
title: Generating XML Price Lists
permalink: /tutorials/pricelists
---

Before [quotations](/tutorials/quotations) can be raised, an xml file needs to be distrubuted to the customer. The easiest way to generate the xml is by using the Price List Generator.

[overview](/tutorials/quotations)

## Installation

[download and install the latest release - tcPriceLists.zip](https://github.com/tradecontrol/quotations/releases)

## XML File

XML is a universal language for communicating data, whether locally or over the internet. Each xml file maps to an explicit or implicit schema that defines how the data is structured. The Price List Generator uses the correct schema to populate the xml file with data. Quotations can then be obtained from the file because it is in a predictable format.
 
## New Price List

Because the price list is stored in a text file, it can be copied and modified, or created from scratch. When creating a new file you must specify the following details:

![new price list](/images/quotation_new.png)

The customer shows in the title of the [quotation app](/tutorials/quotations). Here we have specified the xml file is a standard price list.

## Products

Use Add to include as many products as you want in the Price List. The logo could be a picture of the product, but equally it could be an image of whatever additional graphic text to display when the product is selected.

![products](/images/quotation_product.png)

## Extras and Quantities

Entering quantity thresholds and extras can be enacted in a single transaction. If they are stored in a spreadsheet or document, you can paste them into the entry form directly:

![price list extras](/images/quotation_extras.png)

Use move up/down to sequence the extras in the order you want them to appear to the customer.

And then quantities:

![price list qty](/images/quotation_qty.png)

## Prices

There are prices for the quantities and additional costs for the extras. When you select the extras the focus is passed to the unit price.

![price entry]({{ sitel.url }}/images/quotation_prices.png)

## Distribution

All you need to do is email the XML file to the customer along with a link to the [quotations](/tutorials/quotations) page.
