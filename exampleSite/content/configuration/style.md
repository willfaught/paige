---
authors: ["will_faught"]
categories: ["configuration", "paige"]
date: "2022-02-23"
description: "Demonstration of the Paige style configuration."
paige:
  style: |
    .paige-authors,
    .paige-date,
    .paige-reading-time,
    .paige-terms-outer,
    .paige-toc,
    #paige-credit,
    #paige-pages .paige-authors,
    #paige-pages .paige-date-header,
    #paige-pages .paige-date,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
    .paige-authors { font-style: italic; }
    .paige-content { font-style: italic; }
    .paige-date { font-style: italic; }
    .paige-description { font-style: italic; }
    .paige-reading-time { font-style: italic; }
    .paige-terms-outer { font-style: italic; }
    .paige-title { font-style: italic; }
    .paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    #paige-pages .paige-authors { font-style: italic; }
    #paige-pages .paige-date-header { font-style: italic; }
    #paige-pages .paige-date { font-style: italic; }
    #paige-pages .paige-summary { font-style: italic; }
    #paige-pages .paige-terms-inner { font-style: italic; }
tags: ["singles", "style"]
title: "Style Configuration"
weight: 20
---

This site uses the default styles on the other pages. This page changes them.

<!--more-->

## Parameters

This page has the following parameters:

```yaml
paige:
  style: |
    .paige-authors,
    .paige-date,
    .paige-reading-time,
    .paige-terms-outer,
    .paige-toc,
    #paige-credit,
    #paige-pages .paige-authors,
    #paige-pages .paige-date-header,
    #paige-pages .paige-date,
    #paige-pages .paige-summary,
    #paige-pages .paige-terms {
        display: block;
    }
    .paige-authors { font-style: italic; }
    .paige-content { font-style: italic; }
    .paige-date { font-style: italic; }
    .paige-description { font-style: italic; }
    .paige-reading-time { font-style: italic; }
    .paige-terms-outer { font-style: italic; }
    .paige-title { font-style: italic; }
    .paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    #paige-pages .paige-authors { font-style: italic; }
    #paige-pages .paige-date-header { font-style: italic; }
    #paige-pages .paige-date { font-style: italic; }
    #paige-pages .paige-summary { font-style: italic; }
    #paige-pages .paige-terms-inner { font-style: italic; }
```
