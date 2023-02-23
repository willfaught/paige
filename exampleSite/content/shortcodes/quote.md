---
authors: ["will_faught"]
categories: ["paige"]
description: "Demonstration of the Paige quote shortcode."
tags: ["figures", "quotations", "shortcodes"]
title: "Quote Shortcode"
weight: 20
---

Paige provides a `paige/quote` shortcode for displaying a quotation.

<!--more-->

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
