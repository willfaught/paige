+++
authors = ["author-demo"]
categories = ["customization", "paige"]
date = 2023-09-18T20:21:05-07:00
description = "Demonstration of a customization that styles all data."
series = ["series-demo"]
tags = ["singles", "style"]
title = "Style Data"
[paige]
style = """
#paige-page-authors,
#paige-page-content,
#paige-page-date,
#paige-page-description,
#paige-page-file,
#paige-page-keywords,
#paige-page-reading-time,
#paige-page-series,
#paige-page-siblings,
#paige-page-title,
#paige-page-toc,
#paige-site-breadcrumbs,
#paige-site-copyright,
#paige-site-credit,
#paige-site-description,
#paige-site-license,
#paige-site-menu,
#paige-site-title {
    font-style: italic;
}
"""
[paige.pages]
disable_authors = false
disable_auto_schema = true
disable_date = false
disable_description = false
disable_edit = false
disable_history = false
disable_keywords = false
disable_next = false
disable_prev = false
disable_reading_time = false
disable_series = false
disable_title = false
disable_toc = false
disable_word_count = false
full_width = true
[paige.pages.base_schema]
isAccessibleForFree = true
isFamilyFriendly = true
[paige.pages.base_schema.publisher]
"@type" = "Organization"
name = "Paige"
url = "https://github.com/willfaught/paige"
[paige.pages.microdata]
itemid = "https://willfaught.com/paige/customizations/style/"
itemscope = ""
itemtype = "https://schema.org/HowTo"
[[paige.pages.schemas]]
"@context" = "https://schema.org"
"@type" = "WebPage"
name = "Style"
url = "https://willfaught.com/paige/customizations/style/"
[paige.site]
color = "#df4655"
color_scheme = "dark"
credit = '<a class="link-secondary text-decoration-none" href="https://github.com/willfaught/paige">Paige Theme</a>'
date_format = ":date_full"
description = "Mighty, malleable media mastery"
disable_breadcrumbs = false
disable_credit = false
disable_license = false
edit_url = "https://github.com/willfaught/paige/edit/master/example/content/%s"
external_link_new_tab = true
history_url = "https://github.com/willfaught/paige/commits/master/example/content/%s"
keyword_style = "pills"
license = "EUPL License"
menu_style = "tabs"
[paige.site.base_schema]
isAccessibleForFree = true
isFamilyFriendly = true
[paige.site.base_schema.publisher]
"@type" = "Organization"
name = "Paige"
url = "https://github.com/willfaught/paige"
[[paige.site.schemas]]
"@context" = "https://schema.org"
"@type" = "WebSite"
name = "Paige"
url = "https://willfaught.com/paige/"
+++

This page styles some data differently than the rest of the site.

<!--more-->

## Parameters

This page has the following parameters:

```toml
[paige]

style = """
#paige-page-authors,
#paige-page-content,
#paige-page-date,
#paige-page-description,
#paige-page-file,
#paige-page-keywords,
#paige-page-reading-time,
#paige-page-series,
#paige-page-siblings,
#paige-page-title,
#paige-page-toc,
#paige-site-breadcrumbs,
#paige-site-copyright,
#paige-site-credit,
#paige-site-description,
#paige-site-license,
#paige-site-menu,
#paige-site-title {
    font-style: italic;
}
"""

[paige.pages]

disable_authors = false
disable_auto_schema = true
disable_date = false
disable_description = false
disable_edit = false
disable_history = false
disable_keywords = false
disable_next = false
disable_prev = false
disable_reading_time = false
disable_series = false
disable_title = false
disable_toc = false
disable_word_count = false
full_width = true

[paige.pages.base_schema]

isAccessibleForFree = true
isFamilyFriendly = true

[paige.pages.base_schema.publisher]

"@type" = "Organization"
name = "Paige"
url = "https://github.com/willfaught/paige"

[paige.pages.microdata]

itemid = "https://willfaught.com/paige/customizations/"
itemscope = ""
itemtype = "https://schema.org/HowTo"

[[paige.pages.schemas]]

"@context" = "https://schema.org"
"@type" = "WebPage"
name = "Style"
url = "https://willfaught.com/paige/customizations/"

[paige.site]

color = "#df4655"
color_scheme = "dark"
credit = '<a class="link-secondary text-decoration-none" href="https://github.com/willfaught/paige">Paige Theme</a>'
date_format = ":date_full"
description = "Mighty, malleable media mastery"
disable_breadcrumbs = false
disable_credit = false
disable_license = false
edit_url = "https://github.com/willfaught/paige/edit/master/example/content/%s"
external_link_new_tab = true
history_url = "https://github.com/willfaught/paige/commits/master/example/content/%s"
keyword_style = "pills"
license = "EUPL License"
menu_style = "tabs"

[paige.site.base_schema]

isAccessibleForFree = true
isFamilyFriendly = true

[paige.site.base_schema.publisher]

"@type" = "Organization"
name = "Paige"
url = "https://github.com/willfaught/paige"

[[paige.site.schemas]]

"@context" = "https://schema.org"
"@type" = "WebSite"
name = "Paige"
url = "https://willfaught.com/paige/"
```
