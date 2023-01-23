---
categories: [paige]
date: "2023-01-01"
description: Demonstration of the Paige figure shortcode.
tags: [figures, shortcodes]
title: Figure Shortcode
---

Code:

```go-text-template
{{</* paige/figure */>}}
Don't believe everything you read on the Internet.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure >}}
Don't believe everything you read on the Internet.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Abraham Lincoln" */>}}
Don't believe everything you read on the Internet.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Abraham Lincoln" >}}
Don't believe everything you read on the Internet.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" horizontal="start" */>}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" horizontal="center" */>}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" horizontal="end" */>}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" horizontal="start" >}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" horizontal="center" >}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" horizontal="end" >}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{< /paige/figure >}}
