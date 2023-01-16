---
categories: [paige]
date: "2023-01-02"
description: Demonstration of the Paige quote shortcode.
tags: [figures, shortcodes]
title: Quote Shortcode
---

Code:

```go-text-template
{{</* paige/quote */>}}
Don't believe everything you read on the Internet.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote >}}
Don't believe everything you read on the Internet.
{{< /paige/quote >}}

---

Code:

```go-text-template
{{</* paige/quote caption="Abraham Lincoln" */>}}
Don't believe everything you read on the Internet.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote caption="Abraham Lincoln" >}}
Don't believe everything you read on the Internet.
{{< /paige/quote >}}

---

Code:

```go-text-template
{{</* paige/quote */>}}
Don't believe everything you read on the Internet.
{{</* /paige/quote */>}}

{{</* paige/quote */>}}
Use the Force, Harry.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote >}}
Don't believe everything you read on the Internet.
{{< /paige/quote >}}

{{< paige/quote >}}
Use the Force, Harry.
{{< /paige/quote >}}

---

Code:

```go-text-template
{{</* paige/quote caption="Abraham Lincoln" float="end" */>}}
Don't believe everything you read on the Internet.
{{</* /paige/quote */>}}

Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar. Do the right thing here. String this blind girl along so that dad doesn't have to pay his debt to society. Dead Dove DO NOT EAT. Come on, this is a Bluth family celebration. It's no place for children. If you didn't have adult onset diabetes, I wouldn't mind giving you a little sugar. She's not 'that Mexican', Mom. She's my Mexican. And she's Colombian or something. Friday night.
```

Result:

{{< paige/quote caption="Abraham Lincoln" float="end" >}}
Don't believe everything you read on the Internet.
{{< /paige/quote >}}

Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the "Skip's Scramble", an omelet that contained everything on the menu. Do not order the Skip's Scramble. You might enjoy this. Oh. Em. Gee. That's amazing. It feels good to be back in a queen! I need a tea to give my dingle less tingle. Teamocil. Heyyyyyy Uncle Father Oscar. Do the right thing here. String this blind girl along so that dad doesn't have to pay his debt to society. Dead Dove DO NOT EAT. Come on, this is a Bluth family celebration. It's no place for children. If you didn't have adult onset diabetes, I wouldn't mind giving you a little sugar. She's not 'that Mexican', Mom. She's my Mexican. And she's Colombian or something. Friday night.

---

Code:

```go-text-template
{{</* paige/quote caption="Hickory Dickory Dock" align="start" */>}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{</* /paige/quote */>}}

{{</* paige/quote caption="Hickory Dickory Dock" align="center" */>}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{</* /paige/quote */>}}

{{</* paige/quote caption="Hickory Dickory Dock" align="end" */>}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote caption="Hickory Dickory Dock" align="start" >}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{< /paige/quote >}}

{{< paige/quote caption="Hickory Dickory Dock" align="center" >}}
<div style="white-space: pre">Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.</div>
{{< /paige/quote >}}

{{< paige/quote caption="Hickory Dickory Dock" align="end" >}}
<div style="white-space: pre">Humpty Dumpty sat on a wall,
Humpty Dumpty had a great fall.
All the king's horses and all the king's men
Couldn't put Humpty together again.</div>
{{< /paige/quote >}}
