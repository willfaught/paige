---
authors: ["will-faught"]
categories: ["customization", "paige"]
date: "2022-02-23"
description: "Demonstration of Paige customization."
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
tags: ["sections"]
title: "Customization"
---

This site hides some section page data by default. This page shows it all.

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
