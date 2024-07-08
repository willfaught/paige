+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the email shortcode."
tags = ["email"]
title = "Email"
+++

Paige provides a `paige/email` shortcode that hides e-mail addresses from robots.

<!--more-->

## Address parameter

Code:

```go-html-template
{{%/* paige/email address="example@example.com" */%}}E-mail me{{%/* /paige/email */%}}
```

Result:

{{% paige/email address="example@example.com" %}}E-mail me{{% /paige/email %}}
