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
{{</* paige/quote cite="Abraham Lincoln" */>}}
Don't believe everything you read on the Internet.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote cite="Abraham Lincoln" >}}
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
{{</* paige/quote cite="Abraham Lincoln" */>}}
Don't believe everything you read on the Internet.
{{</* /paige/quote */>}}

{{</* paige/quote cite="Gandalf" */>}}
Use the Force, Harry.
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote cite="Abraham Lincoln" >}}
Don't believe everything you read on the Internet.
{{< /paige/quote >}}

{{< paige/quote cite="Gandalf" >}}
Use the Force, Harry.
{{< /paige/quote >}}

---

Code:

```go-text-template
{{</* paige/quote caption="Hickory Dickory Dock" align="start" */>}}
<pre class="paige-font-inherit">
Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.
</pre>
{{</* /paige/quote */>}}

{{</* paige/quote cite="Hickory Dickory Dock" align="end" */>}}
<pre class="paige-font-inherit">
Humpty Dumpty sat on a wall,
Humpty Dumpty had a great fall.
All the king's horses and all the king's men
Couldn't put Humpty together again.
</pre>
{{</* /paige/quote */>}}
```

Result:

{{< paige/quote caption="Hickory Dickory Dock" align="start" >}}
<pre class="paige-font-inherit">
Hickory dickory dock.
The mouse ran up the clock.
The clock struck one,
The mouse ran down,
Hickory dickory dock.
</pre>
{{< /paige/quote >}}

{{< paige/quote cite="Hickory Dickory Dock" align="end" >}}
<pre class="paige-font-inherit">
Humpty Dumpty sat on a wall,
Humpty Dumpty had a great fall.
All the king's horses and all the king's men
Couldn't put Humpty together again.
</pre>
{{< /paige/quote >}}
