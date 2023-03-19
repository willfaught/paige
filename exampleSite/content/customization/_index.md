---
authors: ["will-faught"]
categories: ["customization", "paige"]
date: "2022-02-23"
description: "Demonstrations of Paige customization."
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
