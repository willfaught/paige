+++
authors = ["author-demo"]
categories = ["customization", "paige"]
description = "Demonstrations of customizations."
series = ["series-demo"]
tags = ["sections"]
title = "Customizations"
[paige]
credit = "Paige Theme"
style = """
#paige-authors,
#paige-date,
#paige-file,
#paige-keywords,
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

This site hides some section page data by default. This page shows it all.

<!--more-->

## Parameters

This page has the following parameters:

```yaml
paige:
  credit: "Paige Theme"
  file_link:
    disable: false
  style: |
    #paige-authors,
    #paige-date,
    #paige-file,
    #paige-keywords,
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
