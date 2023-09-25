---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
date: "2023-09-18T21:35:15-07:00"
description: "Demonstration of the Paige icon shortcode."
tags: ["icon", "web font"]
title: "Icon Shortcode"
---

Paige provides a `paige/icon` shortcode for displaying a web font icon.

<!--more-->

## Class parameter

Code:

```go-html-template
<p class="display-1">Icon: {{</* paige/icon class="bi bi-github" */>}}</p>
```

Result:

<p class="display-1">Icon: {{< paige/icon class="bi bi-github" >}}</p>

## Title parameter

Code:

```go-html-template
<p class="display-1">Icon: {{</* paige/icon class="bi bi-github" title="GitHub" */>}}</p>
```

Result:

<p class="display-1">Icon: {{< paige/icon class="bi bi-github" title="GitHub" >}}</p>

## Url parameter

Code:

```go-html-template
<p class="display-1">Icon: {{</* paige/icon class="bi bi-github" url="https://github.com/willfaught/paige" */>}}</p>
```

Result:

<p class="display-1">Icon: {{< paige/icon class="bi bi-github" url="https://github.com/willfaught/paige" >}}</p>
