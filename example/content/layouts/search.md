+++
authors = ["author-demo"]
categories = ["layouts", "paige"]
description = "Demonstration of the search layout."
layout = "paige/search"
tags = ["search"]
title = "Search"
+++

The `paige-search` layout provides site search.

<!--more-->

Example configuration in `yoursite/hugo.toml`:

```toml
[outputs]
home = ["html", "paige-search"]
```

Example configuration in `yoursite/content/search.md`:

```toml
layout = "paige-search"
title = "Search"
```

Result:
