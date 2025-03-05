+++
authors = ["author-demo"]
categories = ["layouts", "paige"]
description = "Demonstration of the search layout."
layout = "paige/search"
tags = ["search"]
title = "Search"
+++

The `paige/search` layout provides site search.

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
