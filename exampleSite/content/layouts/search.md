+++
authors = ["author-demo"]
categories = ["layouts", "paige"]
description = "Demonstration of the Paige search layout."
layout = "paige/search"
tags = ["search"]
title = "Search Layout"
weight = 20
[paige.feed]
hide_page = true
+++

Paige provides a `paige/search` layout for site search.

<!--more-->

Example `config.yaml`:

```yaml
outputs:
  home: ["html", "json", "rss"]
```

Example `content/layouts/search.md`:

```yaml
---
layout: "paige/search"
title: "Search Layout"
---
```

Result:
