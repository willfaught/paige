---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
date: "2023-09-18T21:35:28-07:00"
description: "Demonstration of the Paige quote shortcode."
tags: ["figures", "quotations"]
title: "Quote Shortcode"
---

Paige provides a `paige/quote` shortcode for displaying a quotation.

<!--more-->

## Basic

Code:

```go-html-template
{{</* paige/quote */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/quote >}}

## Cite

Code:

```go-html-template
{{</* paige/quote cite="Hickory Dickory Dock" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote cite="Hickory Dickory Dock" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/quote >}}

## Figure

Code:

```go-html-template
{{</* paige/figure caption="Hickory Dickory Dock" */>}}
{{</* paige/quote */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/quote */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" >}}
{{< paige/quote >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/quote >}}
{{< /paige/figure >}}
