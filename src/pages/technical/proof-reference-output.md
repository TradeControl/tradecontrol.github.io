---
layout: ../../layouts/Documentation.astro
title: Cash Statement Proofs - Reference Output
permalink: /technical/proof-reference-output
---

## Equity reconciliation output (reference)

This page captures a reference resultset for the synthetic scenario matrix.

The table rows are produced by executing:

- `Schema/tcNodeDb4/Scripts/EXEC_DatasetSyntheticMIS.sql`

and copying the final `SELECT` resultset.

<div style="max-width: 100%; overflow-x: auto;">
	<table style="width: 100%; border-collapse: collapse;">
		<thead>
			<tr>
				<th style="width:90px;">IsCompany</th>
				<th>Scenario Id</th>
				<th style="width:250px;">Scenario Name</th>
				<th>Year</th>
				<th style="width:120px;">Description</th>
				<th>Opening Capital</th>
				<th>Closing Capital</th>
				<th>Profit</th>
				<th>Business Tax</th>
				<th>Profit After Tax</th>
				<th>Capital Movement</th>
				<th>Opening Position</th>
				<th style="width:180px;">Opening Account Position</th>
				<th>Capital Delta</th>
				<th>Variance</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Yes</td>
				<td>1</td>
				<td>VAT=0, PriceRatio=0.5 (loss)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>35000</td>
				<td>-4536.69</td>
				<td>-36135.69</td>
				<td>0</td>
				<td>-36135.69</td>
				<td>-38001</td>
				<td>-400</td>
				<td>35000</td>
				<td>-39536.69</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>1</td>
				<td>VAT=0, PriceRatio=0.5 (loss)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>-4536.69</td>
				<td>-53698.6</td>
				<td>-49161.92</td>
				<td>0</td>
				<td>-49161.92</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>-49161.92</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>1</td>
				<td>VAT=0, PriceRatio=0.5 (loss)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>-53698.6</td>
				<td>-53698.6</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>2</td>
				<td>VAT=1, PriceRatio=0.5 (loss)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>35000</td>
				<td>-3373.19</td>
				<td>-34972.19</td>
				<td>0</td>
				<td>-34972.19</td>
				<td>-38001</td>
				<td>-400</td>
				<td>35000</td>
				<td>-38373.19</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>2</td>
				<td>VAT=1, PriceRatio=0.5 (loss)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>-3373.19</td>
				<td>-51993.48</td>
				<td>-48620.29</td>
				<td>0</td>
				<td>-48620.29</td>
				<td>-0.01</td>
				<td>0</td>
				<td>0</td>
				<td>-48620.3</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>2</td>
				<td>VAT=1, PriceRatio=0.5 (loss)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>-51993.48</td>
				<td>-51993.48</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>3</td>
				<td>VAT=0, PriceRatio=3.0 (profit)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>35000</td>
				<td>145992.69</td>
				<td>141226.78</td>
				<td>26833.09</td>
				<td>114393.69</td>
				<td>-38001</td>
				<td>-400</td>
				<td>35000</td>
				<td>110992.69</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>3</td>
				<td>VAT=0, PriceRatio=3.0 (profit)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>145992.69</td>
				<td>310101.26</td>
				<td>202603.16</td>
				<td>38494.6</td>
				<td>164108.56</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>164108.56</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>3</td>
				<td>VAT=0, PriceRatio=3.0 (profit)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>310101.26</td>
				<td>310101.26</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>4</td>
				<td>VAT=1, PriceRatio=3.0 (profit)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>35000</td>
				<td>146935.13</td>
				<td>142390.28</td>
				<td>27054.15</td>
				<td>115336.13</td>
				<td>-38001</td>
				<td>-400</td>
				<td>35000</td>
				<td>111935.13</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>4</td>
				<td>VAT=1, PriceRatio=3.0 (profit)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>146935.13</td>
				<td>311482.4</td>
				<td>203144.79</td>
				<td>38597.51</td>
				<td>164547.28</td>
				<td>-0.01</td>
				<td>0</td>
				<td>0</td>
				<td>164547.27</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Yes</td>
				<td>4</td>
				<td>VAT=1, PriceRatio=3.0 (profit)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>311482.4</td>
				<td>311482.4</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>1</td>
				<td>VAT=0, PriceRatio=0.5 (loss)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>30000</td>
				<td>19891.51</td>
				<td>-11358.49</td>
				<td>0</td>
				<td>-11358.49</td>
				<td>-33350</td>
				<td>-400</td>
				<td>35000</td>
				<td>-10108.49</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>1</td>
				<td>VAT=0, PriceRatio=0.5 (loss)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>19891.51</td>
				<td>3073</td>
				<td>-16818.52</td>
				<td>0</td>
				<td>-16818.52</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>-16818.52</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>1</td>
				<td>VAT=0, PriceRatio=0.5 (loss)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>3073</td>
				<td>3073</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>2</td>
				<td>VAT=1, PriceRatio=0.5 (loss)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>30000</td>
				<td>20221.68</td>
				<td>-11028.32</td>
				<td>0</td>
				<td>-11028.32</td>
				<td>-33350</td>
				<td>-400</td>
				<td>35000</td>
				<td>-9778.32</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>2</td>
				<td>VAT=1, PriceRatio=0.5 (loss)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>20221.68</td>
				<td>3944.79</td>
				<td>-16276.89</td>
				<td>0</td>
				<td>-16276.89</td>
				<td>-0.01</td>
				<td>0</td>
				<td>0</td>
				<td>-16276.9</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>2</td>
				<td>VAT=1, PriceRatio=0.5 (loss)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>3944.79</td>
				<td>3944.79</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>3</td>
				<td>VAT=0, PriceRatio=3.0 (profit)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>30000</td>
				<td>135198.37</td>
				<td>166003.98</td>
				<td>62055.61</td>
				<td>103948.37</td>
				<td>-33350</td>
				<td>-400</td>
				<td>35000</td>
				<td>105198.37</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>3</td>
				<td>VAT=0, PriceRatio=3.0 (profit)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>135198.37</td>
				<td>279133.69</td>
				<td>234946.56</td>
				<td>91011.25</td>
				<td>143935.31</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>143935.31</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>3</td>
				<td>VAT=0, PriceRatio=3.0 (profit)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>279133.69</td>
				<td>279133.69</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>4</td>
				<td>VAT=1, PriceRatio=3.0 (profit)</td>
				<td>2024</td>
				<td>2024-25</td>
				<td>30000</td>
				<td>135390.15</td>
				<td>166334.15</td>
				<td>62194</td>
				<td>104140.15</td>
				<td>-33350</td>
				<td>-400</td>
				<td>35000</td>
				<td>105390.15</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>4</td>
				<td>VAT=1, PriceRatio=3.0 (profit)</td>
				<td>2025</td>
				<td>2025-26</td>
				<td>135390.15</td>
				<td>279640.79</td>
				<td>235488.19</td>
				<td>91237.55</td>
				<td>144250.65</td>
				<td>-0.01</td>
				<td>0</td>
				<td>0</td>
				<td>144250.64</td>
				<td>0</td>
			</tr>
			<tr>
				<td>No</td>
				<td>4</td>
				<td>VAT=1, PriceRatio=3.0 (profit)</td>
				<td>2026</td>
				<td>2026-27</td>
				<td>279640.79</td>
				<td>279640.79</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
				<td>0</td>
			</tr>
		</tbody>
	</table>
</div>