---
authors: ["will-faught"]
categories: ["layouts", "paige"]
description: "Demonstration of the Paige search layout."
layout: "paige/search"
paige:
  feed:
    hide_page: true
tags: ["search"]
title: "Search Layout"
weight: 20
---

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
