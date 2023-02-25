---
authors: ["will_faught"]
categories: ["configuration", "paige"]
date: "2022-02-23"
description: "Demonstration of the Paige configuration."
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
tags: ["lists"]
title: "Configuration"
---

This site hides some list page data by default. This page shows it all.

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
