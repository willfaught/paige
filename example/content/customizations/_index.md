+++
authors = ["author-demo"]
categories = ["customization", "paige"]
description = "Demonstrations of customizations."
series = ["series-demo"]
tags = ["sections"]
title = "Customizations"
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
name = "Customization"
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
[paige.subpages]
disable_authors = false
disable_date = false
disable_keywords = false
disable_reading_time = false
disable_series = false
disable_summary = false
disable_word_count = false
+++

This site hides some section page data by default. This page shows it all.

<!--more-->

## Parameters

This page has the following parameters:

```toml
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
name = "Customization"
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

[paige.subpages]

disable_authors = false
disable_date = false
disable_keywords = false
disable_reading_time = false
disable_series = false
disable_summary = false
disable_word_count = false
```
