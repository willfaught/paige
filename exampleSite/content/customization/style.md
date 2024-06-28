+++
authors = ["author-demo"]
categories = ["customization", "paige"]
date = 2023-09-18T20:21:05-07:00
description = "Demonstration of Paige customization that styles data."
series = ["series-demo"]
tags = ["singles", "style"]
title = "Style Data"
weight = 10
[paige]
style = """
#paige-authors,
#paige-credit,
#paige-date,
#paige-file,
#paige-keywords,
#paige-prev-next,
#paige-reading-time,
#paige-series,
#paige-toc,
.paige-authors,
.paige-date,
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
#paige-file { font-style: italic; }
#paige-keywords { font-style: italic; }
#paige-reading-time { font-style: italic; }
#paige-series { font-style: italic; }
#paige-title { font-style: italic; }
#paige-toc { font-style: italic; }
#paige-copyright { font-style: italic; }
#paige-credit { font-style: italic; }
.paige-authors { font-style: italic; }
.paige-date { font-style: italic; }
.paige-keyword { font-style: italic; }
.paige-series { font-style: italic; }
.paige-summary { font-style: italic; }
"""
+++

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
    #paige-file,
    #paige-keywords,
    #paige-prev-next,
    #paige-reading-time,
    #paige-series,
    #paige-toc,
    .paige-authors,
    .paige-date,
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
    #paige-file { font-style: italic; }
    #paige-keywords { font-style: italic; }
    #paige-reading-time { font-style: italic; }
    #paige-series { font-style: italic; }
    #paige-title { font-style: italic; }
    #paige-toc { font-style: italic; }
    #paige-copyright { font-style: italic; }
    #paige-credit { font-style: italic; }
    .paige-authors { font-style: italic; }
    .paige-date { font-style: italic; }
    .paige-keyword { font-style: italic; }
    .paige-series { font-style: italic; }
    .paige-summary { font-style: italic; }
```
