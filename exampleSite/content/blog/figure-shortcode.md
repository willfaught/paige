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
{{</* paige/figure caption="Abraham Lincoln" */>}}
Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Abraham Lincoln" >}}
Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Michael was having brunch with Sally Sitwell" float="end" */>}}
Michael was having brunch
{{</* /paige/figure */>}}

Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar.
```

Result:

{{< paige/figure caption="Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro." width="20%" height="15rem" float="end" >}}
Michael was having brunch with Sally Sitwell
{{< /paige/figure >}}

Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar.

---

Code:

```go-text-template
{{</* paige/figure caption="Abraham Lincoln" float="start" */>}}
Don't believe everything you read on the Internet.
{{</* /paige/figure */>}}

Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar.
```

Result:

{{< paige/figure caption="Abraham Lincoln" float="start" >}}
Don't believe everything you read on the Internet.
{{< /paige/figure >}}

Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar.

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" */>}}
<div style="white-space: pre">
Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.
</div>
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" >}}
<div style="white-space: pre">
Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.
</div>
{{< /paige/figure >}}
