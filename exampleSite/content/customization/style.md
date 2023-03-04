---
authors: ["will_faught"]
categories: ["customization", "paige"]
date: "2023-01-01"
description: "Demonstration of Paige customization that styles data."
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
    #paige-authors { font-style: italic; }
    #paige-content { font-style: italic; }
    #paige-date { font-style: italic; }
    #paige-description { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-terms { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    #paige-pages .paige-authors { font-style: italic; }
    #paige-pages .paige-date-header { font-style: italic; }
    #paige-pages .paige-date { font-style: italic; }
    #paige-pages .paige-summary { font-style: italic; }
    #paige-pages .paige-term { font-style: italic; }
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
    #paige-authors { font-style: italic; }
    #paige-content { font-style: italic; }
    #paige-date { font-style: italic; }
    #paige-description { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-terms { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    #paige-pages .paige-authors { font-style: italic; }
    #paige-pages .paige-date-header { font-style: italic; }
    #paige-pages .paige-date { font-style: italic; }
    #paige-pages .paige-summary { font-style: italic; }
    #paige-pages .paige-term { font-style: italic; }
```
