---
authors: ["will-faught"]
categories: ["customization", "paige"]
date: "2023-02-01"
description: "Demonstration of Paige customization that shows data."
paige:
  file_link:
    disable: false
  style: |
    #paige-authors,
    #paige-credit,
    #paige-date,
    #paige-keywords,
    #paige-reading-time,
    #paige-series,
    #paige-toc,
    .paige-authors,
    .paige-date,
    .paige-date-header,
    .paige-keywords,
    .paige-reading-time,
    .paige-series,
    .paige-summary {
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
  file_link:
    disable: false
  style: |
    #paige-authors,
    #paige-credit,
    #paige-date,
    #paige-keywords,
    #paige-reading-time,
    #paige-series,
    #paige-toc,
    .paige-authors,
    .paige-date,
    .paige-date-header,
    .paige-keywords,
    .paige-reading-time,
    .paige-series,
    .paige-summary {
        display: block;
    }
```
