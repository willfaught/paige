---
authors: ["will_faught"]
categories: ["customization", "paige"]
date: "2023-02-01"
description: "Demonstration of Paige customization that hides data."
paige:
  style: |
    .paige-authors,
    .paige-date,
    .paige-reading-time,
    .paige-terms,
    .paige-toc,
    #paige-credit,
    #paige-pages .paige-authors,
    #paige-pages .paige-date-header,
    #paige-pages .paige-date,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
tags: ["hide", "singles"]
title: "Hide Data"
weight: 10
---

This site hides some single page data by default. This page shows it all.

<!--more-->

## Parameters

This page has the following parameters:

```yaml
paige:
  style: |
    .paige-authors,
    .paige-date,
    .paige-reading-time,
    .paige-terms,
    .paige-toc,
    #paige-credit,
    #paige-pages .paige-authors,
    #paige-pages .paige-date-header,
    #paige-pages .paige-date,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
```
