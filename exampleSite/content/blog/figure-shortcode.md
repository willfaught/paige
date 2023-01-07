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
{{</* paige/figure caption="Hickory Dickory Dock" */>}}
<pre style="font-family: inherit; font-size: 1rem">
Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.
</pre>
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" >}}
<pre style="font-family: inherit; font-size: 1rem">
Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.
</pre>
{{< /paige/figure >}}


