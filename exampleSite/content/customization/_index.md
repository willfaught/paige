---
authors: ["will_faught"]
categories: ["customization", "paige"]
date: "2022-02-23"
description: "Demonstration of Paige customization."
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
