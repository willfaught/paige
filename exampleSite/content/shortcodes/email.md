---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
description: "Demonstration of the Paige email shortcode."
tags: ["email"]
title: "Email Shortcode"
---

Paige provides a `paige/email` shortcode that hides e-mail addresses from robots.

<!--more-->

## Address and text parameters

Code:

```go-text-template
{{</* paige/email address="example@example.com" text="E-mail me" */>}}
```

Result:

{{< paige/email address="example@example.com" text="E-mail me" >}}
