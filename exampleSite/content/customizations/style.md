+++
authors = ["author-demo"]
categories = ["customization", "paige"]
date = 2023-09-18T20:21:05-07:00
description = "Demonstration of a customization that styles all data."
series = ["series-demo"]
tags = ["singles", "style"]
title = "Style Data"
[paige]
credit = "Paige Theme"
file_edit_url = "https://github.com/willfaught/paige/edit/master/exampleSite/content/%s"
file_history_url = "https://github.com/willfaught/paige/commits/master/exampleSite/content/%s"
license = "MIT License"
style = """
#paige-authors,
#paige-breadcrumbs,
#paige-content,
#paige-copyright,
#paige-credit,
#paige-date,
#paige-description,
#paige-file,
#paige-keywords,
#paige-license,
#paige-menu,
#paige-page-title,
#paige-page-description,
#paige-reading-time,
#paige-series,
#paige-siblings,
#paige-site-title,
#paige-site-description,
#paige-toc {
    font-style: italic;
}
"""
[paige.list_page]
hide_authors = false
hide_date = false
hide_keywords = false
hide_reading_time = false
hide_series = false
hide_summary = false
[paige.page]
hide_authors = false
hide_date = false
hide_keywords = false
hide_next = false
hide_prev = false
hide_reading_time = false
hide_series = false
hide_toc = false
[paige.site]
hide_breadcrumbs = false
hide_credit = false
hide_license = false
+++

This page styles some data differently than the rest of the site.

<!--more-->

## Parameters

This page has the following parameters:

```toml
[paige]
credit = "Paige Theme"
file_edit_url = "https://github.com/willfaught/paige/edit/master/exampleSite/content/%s"
file_history_url = "https://github.com/willfaught/paige/commits/master/exampleSite/content/%s"
license = "MIT License"
style = """
#paige-authors,
#paige-breadcrumbs,
#paige-content,
#paige-copyright,
#paige-credit,
#paige-date,
#paige-description,
#paige-file,
#paige-keywords,
#paige-license,
#paige-menu,
#paige-page-title,
#paige-page-description,
#paige-reading-time,
#paige-series,
#paige-siblings,
#paige-site-title,
#paige-site-description,
#paige-toc {
    font-style: italic;
}
"""
[paige.list_page]
hide_authors = false
hide_date = false
hide_keywords = false
hide_reading_time = false
hide_series = false
hide_summary = false
[paige.page]
hide_authors = false
hide_date = false
hide_keywords = false
hide_next = false
hide_prev = false
hide_reading_time = false
hide_series = false
hide_toc = false
[paige.site]
hide_breadcrumbs = false
hide_credit = false
hide_license = false
```
