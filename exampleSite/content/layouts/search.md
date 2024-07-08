+++
authors = ["author-demo"]
categories = ["layouts", "paige"]
description = "Demonstration of the search layout."
layout = "paige/search"
tags = ["search"]
title = "Search"
weight = 20
[paige.feed]
hide_page = true
+++

Paige provides a `paige/search` layout for site search.

<!--more-->

Example `config.yaml`:

```yaml
outputs:
  home: ["atom", "html", "paige-search", "rss"]
```

Example `content/layouts/search.md`:

```yaml
---
layout: "paige/search"
title: "Search"
---
```

Result:
