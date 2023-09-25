---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
date: "2023-09-18T21:34:58-07:00"
description: "Demonstration of the Paige email shortcode."
paige:
  feed:
    hide_page: true
tags: ["email"]
title: "Email Shortcode"
---

Paige provides a `paige/email` shortcode that hides e-mail addresses from robots.

<!--more-->

## Address and content parameters

Code:

```go-html-template
{{</* paige/email address="example@example.com" */>}}E-mail me{{</* /paige/email */>}}
```

Result:

{{< paige/email address="example@example.com" >}}E-mail me{{< /paige/email >}}
