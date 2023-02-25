---
authors: ["will_faught"]
categories: ["configuration", "paige"]
date: "2022-02-23"
description: "Demonstration of the Paige hide configuration."
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
title: "Hide Configuration"
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
