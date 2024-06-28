+++
authors = ["author-demo"]
categories = ["customization", "paige"]
date = 2023-09-18T21:21:05-07:00
description = "Demonstration of Paige customization that shows data."
series = ["series-demo"]
tags = ["show", "singles"]
title = "Show Data"
weight = 20
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
"""
+++

This site hides some single page data by default. This page shows it all.

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
```
