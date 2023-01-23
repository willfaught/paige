---
categories: [paige]
date: "2023-01-01"
description: Demonstration of the Paige figure shortcode.
tags: [figures, shortcodes]
title: Figure Shortcode
---

## Basic

Code:

```go-text-template
{{</* paige/figure */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Caption parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Abraham Lincoln" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Float parameter

Code:

```go-text-template
{{</* paige/figure float="start" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

I made a huge tiny mistake. In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed. And don't make the water too hot. The scabs come right off. There's a new daddy in town. A discipline daddy. It's so watery. And yet there's a smack of ham to it. Chickens don't clap! I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense. I hear the jury's still out on science. This is not what it looks like. It looks like you're tweaking her nipples through a chain-link fence. What, so the guy we are meeting with can't even grow his own hair? COME ON!
```

Result:

{{< paige/figure float="start" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

I made a huge tiny mistake. In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed. And don't make the water too hot. The scabs come right off. There's a new daddy in town. A discipline daddy. It's so watery. And yet there's a smack of ham to it. Chickens don't clap! I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense. I hear the jury's still out on science. This is not what it looks like. It looks like you're tweaking her nipples through a chain-link fence. What, so the guy we are meeting with can't even grow his own hair? COME ON!

---

Code:

```go-text-template
{{</* paige/figure float="end" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

I made a huge tiny mistake. In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed. And don't make the water too hot. The scabs come right off. There's a new daddy in town. A discipline daddy. It's so watery. And yet there's a smack of ham to it. Chickens don't clap! I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense. I hear the jury's still out on science. This is not what it looks like. It looks like you're tweaking her nipples through a chain-link fence. What, so the guy we are meeting with can't even grow his own hair? COME ON!
```

Result:

{{< paige/figure float="end" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

I made a huge tiny mistake. In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed. And don't make the water too hot. The scabs come right off. There's a new daddy in town. A discipline daddy. It's so watery. And yet there's a smack of ham to it. Chickens don't clap! I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense. I hear the jury's still out on science. This is not what it looks like. It looks like you're tweaking her nipples through a chain-link fence. What, so the guy we are meeting with can't even grow his own hair? COME ON!

## Height parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" height="5rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" height="5rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" height="20rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" height="20rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Horizontal parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" horizontal="start" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" horizontal="center" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" horizontal="end" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" horizontal="start" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" horizontal="center" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" horizontal="end" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Maxheight parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" maxheight="5rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" maxheight="5rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" maxheight="20rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" maxheight="20rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Maxwidth parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" maxwidth="5rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" maxwidth="5rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" maxwidth="20rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" maxwidth="20rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Number parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" number=7 */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" number=7 >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" number="G" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" number="G" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Numbered parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" numbered=true */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" number=3 */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" numbered=true */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" numbered=true >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" number=3 >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" numbered=true >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" number="G" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" number="G" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## Vertical parameter

Code:

```go-text-template
<div class="column-gap-3 d-flex justify-content-between">

{{</* paige/figure caption="Hickory Dickory Dock" height="20rem" vertical="start" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" height="20rem" vertical="center" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

{{</* paige/figure caption="Hickory Dickory Dock" height="20rem" vertical="end" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}

</div>
```

Result:

<div class="column-gap-3 d-flex justify-content-between">

{{< paige/figure caption="Hickory Dickory Dock" height="20rem" vertical="start" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" height="20rem" vertical="center" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

{{< paige/figure caption="Hickory Dickory Dock" height="20rem" vertical="end" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

</div>

## Width parameter

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" width="5rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" width="5rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" width="20rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" width="20rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

## All together

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" float="start" height="20rem" number=7 vertical="end" width="10rem" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" float="start" height="20rem" number=7 vertical="end" width="10rem" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}

I made a huge tiny mistake. In fact, it was a box of Oscar's legally obtained medical marijuana. Primo bud. Real sticky weed. And don't make the water too hot. The scabs come right off. There's a new daddy in town. A discipline daddy. It's so watery. And yet there's a smack of ham to it. Chickens don't clap! I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense. I hear the jury's still out on science. This is not what it looks like. It looks like you're tweaking her nipples through a chain-link fence. What, so the guy we are meeting with can't even grow his own hair? COME ON!

<div class="clearfix"></div>

---

Code:

```go-text-template
{{</* paige/figure caption="Hickory Dickory Dock" horizontal="end" maxheight="20rem" maxwidth="10rem" number=7 vertical="center" */>}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Hickory Dickory Dock" horizontal="end" maxheight="20rem" maxwidth="10rem" number=7 vertical="center" >}}
Hickory dickory dock.<br>The mouse ran up the clock.<br>The clock struck one,<br>The mouse ran down,<br>Hickory dickory dock.
{{< /paige/figure >}}
