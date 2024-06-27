+++
authors = ["author-demo"]
categories = ["customization", "paige"]
description = "Demonstrations of Paige customization."
series = ["series-demo"]
tags = ["sections"]
title = "Customization"
[paige]
style = """
#paige-authors,
#paige-credit,
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
  file_link:
    disable: false
  style: |
    #paige-authors,
    #paige-credit,
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
