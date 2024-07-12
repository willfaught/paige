+++
authors = ["author-demo"]
categories = ["customization", "paige"]
date = 2023-09-18T21:21:05-07:00
description = "Demonstration of a customization that shows all data."
series = ["series-demo"]
tags = ["show", "singles"]
title = "Show Data"
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

This page shows some data that the rest of the site hides.

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
