+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the icon shortcode."
tags = ["icon", "web font"]
title = "Icon"
+++

The `paige/icon` shortcode displays a web font icon.

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
