---
authors: ["will-faught"]
categories: ["customization", "paige"]
date: "2023-02-01"
description: "Demonstration of Paige customization that shows data."
paige:
  style: |
    #paige-authors,
    #paige-credit,
    #paige-date,
    #paige-reading-time,
    #paige-series,
    #paige-terms,
    #paige-toc,
    #paige-pages .paige-authors,
    #paige-pages .paige-date,
    #paige-pages .paige-date-header,
    #paige-pages .paige-reading-time,
    #paige-pages .paige-series,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
series: ["demo"]
tags: ["show", "singles"]
title: "Show Data"
---

This site hides some single page data by default. This page shows it all.

<!--more-->

## Parameters

This page has the following parameters:

```yaml
paige:
  style: |
    #paige-authors,
    #paige-credit,
    #paige-date,
    #paige-reading-time,
    #paige-series,
    #paige-terms,
    #paige-toc,
    #paige-pages .paige-authors,
    #paige-pages .paige-date,
    #paige-pages .paige-date-header,
    #paige-pages .paige-reading-time,
    #paige-pages .paige-series,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
```
