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
    #paige-keywords,
    #paige-reading-time,
    #paige-series,
    #paige-toc,
    #paige-subpages .paige-authors,
    #paige-subpages .paige-date,
    #paige-subpages .paige-date-header,
    #paige-subpages .paige-keywords,
    #paige-subpages .paige-reading-time,
    #paige-subpages .paige-series,
    #paige-subpages .paige-summary {
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
    #paige-keywords,
    #paige-reading-time,
    #paige-series,
    #paige-toc,
    #paige-subpages .paige-authors,
    #paige-subpages .paige-date,
    #paige-subpages .paige-date-header,
    #paige-subpages .paige-keywords,
    #paige-subpages .paige-reading-time,
    #paige-subpages .paige-series,
    #paige-subpages .paige-summary {
        display: block;
    }
```
