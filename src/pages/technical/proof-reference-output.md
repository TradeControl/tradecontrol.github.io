---
layout: ../../layouts/Documentation.astro
title: Cash Statement Proofs - Reference Output
permalink: /technical/proof-reference-output
---

<div style="max-width: 100%; overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr>
        <th>Scenario Id</th>
        <th style="width:250px;">Scenario Name</th>
        <th style="width:300px;">Proof Name</th>
        <th>Tolerance</th>
        <th>Year Count</th>
        <th style="width:150px;">Capital Delta Definition Max Abs Error</th>
        <th>Profit After Tax Definition Max Abs Error</th>
        <th style="width:150px;">Difference Definition Max Abs Error</th>
        <th>Difference Max Abs</th>
        <th style="width:150px;">Losses CF Delta Definition Max Abs Error</th>
        <th>Losses CF_Negative Count</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>VAT=0, PriceRatio=3.0 (profit)</td>
        <td>Cash Statement / Equity Reconciliation Proofs</td>
        <td>0.1</td>
        <td>3</td>
        <td>0.01</td>
        <td>0.01</td>
        <td>0</td>
        <td>0</td>
        <td>1.45519E-11</td>
        <td>0</td>
        <td>PASS</td>
      </tr>
      <tr>
        <td>2</td>
        <td>VAT=1, PriceRatio=3.0 (profit)</td>
        <td>Cash Statement / Equity Reconciliation Proofs</td>
        <td>0.1</td>
        <td>3</td>
        <td>2.91038E-11</td>
        <td>0</td>
        <td>9.31323E-12</td>
        <td>0.06</td>
        <td>1.45519E-11</td>
        <td>0</td>
        <td>PASS</td>
      </tr>
      <tr>
        <td>3</td>
        <td>VAT=0, PriceRatio=0.5 (loss)</td>
        <td>Cash Statement / Equity Reconciliation Proofs</td>
        <td>0.1</td>
        <td>3</td>
        <td>0.01</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>7.27596E-12</td>
        <td>0</td>
        <td>PASS</td>
      </tr>
      <tr>
        <td>4</td>
        <td>VAT=1, PriceRatio=0.5 (loss)</td>
        <td>Cash Statement / Equity Reconciliation Proofs</td>
        <td>0.1</td>
        <td>3</td>
        <td>0.01</td>
        <td>0</td>
        <td>2.3283E-12</td>
        <td>0.06</td>
        <td>7.27596E-12</td>
        <td>0</td>
        <td>PASS</td>
      </tr>
    </tbody>
  </table>
</div>
