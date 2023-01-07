---
categories: [paige]
date: "2023-01-04"
description: Demonstration of the Paige image shortcode.
tags: [figures, shortcodes]
title: Image Shortcode
---

Code:

```go-text-template
{{</* paige/image src="stretch.webp" */>}}
```

Result:

{{< paige/image src="stretch.webp" >}}

---

Code:

```go-text-template
{{</* paige/image src="stretch.webp" caption="Landscape" width="50%" link="https://github.com/willfaught/paige" */>}}
```

Result:

{{< paige/image src="stretch.webp" caption="Landscape" width="50%" link="https://github.com/willfaught/paige" >}}
