---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
description: "Demonstration of the Paige icon shortcode."
tags: ["icon", "web font"]
title: "Icon Shortcode"
---

Paige provides a `paige/icon` shortcode for displaying a web font icon.

<!--more-->

## Class parameter

Code:

```go-text-template
<p class="display-1">Icon: {{</* paige/icon class="bi bi-github" */>}}</p>
```

Result:

<p class="display-1">Icon: {{< paige/icon class="bi bi-github" >}}</p>

## Name parameter

Code:

```go-text-template
<p class="display-1">Icon: {{</* paige/icon class="bi bi-github" name="GitHub" */>}}</p>
```

Result:

<p class="display-1">Icon: {{< paige/icon class="bi bi-github" name="GitHub" >}}</p>

## Url parameter

Code:

```go-text-template
<p class="display-1">Icon: {{</* paige/icon class="bi bi-github" url="https://github.com/willfaught/paige" */>}}</p>
```

Result:

<p class="display-1">Icon: {{< paige/icon class="bi bi-github" url="https://github.com/willfaught/paige" >}}</p>
