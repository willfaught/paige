---
authors: ["will-faught"]
categories: ["customization", "paige"]
date: "2023-01-01"
description: "Demonstration of Paige customization that styles data."
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
    #paige-authors { font-style: italic; }
    #paige-content { font-style: italic; }
    #paige-date { font-style: italic; }
    #paige-description { font-style: italic; }
    #paige-file-link { font-style: italic; }
    #paige-keywords { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-series { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    .paige-authors { font-style: italic; }
    .paige-date { font-style: italic; }
    .paige-date-header { font-style: italic; }
    .paige-keyword { font-style: italic; }
    .paige-series { font-style: italic; }
    .paige-summary { font-style: italic; }
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
    #paige-authors { font-style: italic; }
    #paige-content { font-style: italic; }
    #paige-date { font-style: italic; }
    #paige-description { font-style: italic; }
    #paige-file-link { font-style: italic; }
    #paige-keywords { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-series { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    .paige-authors { font-style: italic; }
    .paige-date { font-style: italic; }
    .paige-date-header { font-style: italic; }
    .paige-keyword { font-style: italic; }
    .paige-series { font-style: italic; }
    .paige-summary { font-style: italic; }
```
