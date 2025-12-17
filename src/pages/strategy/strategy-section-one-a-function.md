---
layout: ../../layouts/Documentation.astro
title: Strategy - Functional Description
permalink: /strategy/strategy-section-one-a-function
---

## Triadic Schema: Subject / Object / Projection

Trade Control models productive workflows using a triadic schema: **subject**, **object**, and **projection** [^1]. This replaces conventional dualisms—mind/body, subject/object—which cannot account for the act of making. **Projection** is the missing third term: the interface through which transformation occurs.

Each transaction is recorded as:

- **Subject** – the agent or originator of change, organised into **Namespaces**[^2]. Subjects may be real or virtual.
- **Object** – the entity being acted upon, akin to a Parts Master but not limited to material goods. Objects may be real or virtual and can be connected into arbitrarily complex structures, like a BOM. Objects also serve as **templates for projection**.
- **Projection** – the interface or transformation that links subject and object, enabling recursive modelling of workflows.

## Cash Polarity and the Single Interface

Unlike conventional ERPs that maintain separate interfaces for sales and purchasing, Trade Control uses **a single interface**, viewed through the lens of Cash Polarity[^3]. This determines the direction of flow—whether a transaction is incoming or outgoing—without duplicating logic.

This simplification turns each business entity into a **Node**, capable of being connected in a network where one node’s output is another’s input. Demand replaces the need for Sales or Purchase Orders. The networked model is implemented in Solidity, enabling blockchain-based orchestration of supply chains.

## Recursive Projects and Internal Architecture

Internally, each Business Node contains a **Projects table** that can connect recursively to itself. This allows nested workflows—nodes within nodes—where planning traverses Projects rather than ERP layers.

Sales Orders, Work Orders, Purchase Orders, Warehouse Receipts, and more are modelled as **Project instances**, plugged together with schema logic. This recursive design replaces conventional ERP layering with a **single, pluggable construct**, enabling high-speed orchestration without sacrificing fidelity.

## Summary

Trade Control doesn’t simulate production—it **functions as production**, using schema logic to describe and control real-world workflows. It models both the act of making and the transactional flow, with minimal abstraction and maximal precision.

[Next](/strategy/strategy-section-one-b-concept-money)

---

[^1]: [Subjects and Objects](/articles/tc_production#subjects-and-objects)
[^2]: [Namespaces](/articles/tc_production#namespaces)
[^3]: [Cash Polarity](/articles/tc_production#cash-polarity)
