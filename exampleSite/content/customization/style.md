---
authors: ["will-faught"]
categories: ["customization", "paige"]
date: "2023-01-01"
description: "Demonstration of Paige customization that styles data."
paige:
  style: |
    #paige-authors,
    #paige-credit,
    #paige-date,
    #paige-reading-time,
    #paige-series,
    #paige-terms,
    #paige-toc,
    #paige-subpages .paige-authors,
    #paige-subpages .paige-date,
    #paige-subpages .paige-date-header,
    #paige-subpages .paige-reading-time,
    #paige-subpages .paige-series,
    #paige-subpages .paige-summary,
    #paige-subpages .paige-terms {
        display: block;
    }
    #paige-authors { font-style: italic; }
    #paige-content { font-style: italic; }
    #paige-date { font-style: italic; }
    #paige-description { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-series { font-style: italic; }
    #paige-terms { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    #paige-subpages .paige-authors { font-style: italic; }
    #paige-subpages .paige-date { font-style: italic; }
    #paige-subpages .paige-date-header { font-style: italic; }
    #paige-subpages .paige-series { font-style: italic; }
    #paige-subpages .paige-summary { font-style: italic; }
    #paige-subpages .paige-term { font-style: italic; }
series: ["demo"]
tags: ["singles", "style"]
title: "Style Data"
weight: 20
---

This site uses the default styles on the other pages. This page changes them.

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
    #paige-subpages .paige-authors,
    #paige-subpages .paige-date,
    #paige-subpages .paige-date-header,
    #paige-subpages .paige-reading-time,
    #paige-subpages .paige-series,
    #paige-subpages .paige-summary,
    #paige-subpages .paige-terms {
        display: block;
    }
    #paige-authors { font-style: italic; }
    #paige-content { font-style: italic; }
    #paige-date { font-style: italic; }
    #paige-description { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-series { font-style: italic; }
    #paige-terms { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    #paige-subpages .paige-authors { font-style: italic; }
    #paige-subpages .paige-date { font-style: italic; }
    #paige-subpages .paige-date-header { font-style: italic; }
    #paige-subpages .paige-series { font-style: italic; }
    #paige-subpages .paige-summary { font-style: italic; }
    #paige-subpages .paige-term { font-style: italic; }
```
