+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the email shortcode."
tags = ["email"]
title = "Email"
+++

The `paige/email` shortcode hides e-mail addresses from crawlers.

<!--more-->

## Address parameter

Code:

```go-html-template
{{%/* paige/email address="example@example.com" */%}}E-mail me{{%/* /paige/email */%}}
```

Result:

{{% paige/email address="example@example.com" %}}E-mail me{{% /paige/email %}}
