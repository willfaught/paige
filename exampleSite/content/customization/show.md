---
authors: ["will_faught"]
categories: ["customization", "paige"]
date: "2023-02-01"
description: "Demonstration of Paige customization that shows data."
paige:
  style: |
    #paige-authors,
    #paige-credit,
    #paige-date,
    #paige-reading-time,
    #paige-terms,
    #paige-toc,
    #paige-pages .paige-authors,
    #paige-pages .paige-date,
    #paige-pages .paige-date-header,
    #paige-pages .paige-reading-time,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
tags: ["show", "singles"]
title: "Show Data"
weight: 10
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
    #paige-terms,
    #paige-toc,
    #paige-pages .paige-authors,
    #paige-pages .paige-date,
    #paige-pages .paige-date-header,
    #paige-pages .paige-reading-time,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
```
