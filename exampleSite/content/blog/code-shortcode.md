---
categories: [paige]
date: "2023-01-06"
description: Demonstration of the code shortcode.
tags: [figures, shortcodes]
title: Code Shortcode
---

Code:

```go-text-template
{{</* paige/code */>}}
c = 'c = %r; print(c %% c)'; print(c % c)
{{</* /paige/code */>}}
```

Result:

{{< paige/code >}}
c = 'c = %r; print(c %% c)'; print(c % c)
{{< /paige/code >}}

---

```go-text-template
{{</* paige/code lang="python" caption="Python quine" */>}}
c = 'c = %r; print(c %% c)'; print(c % c)
{{</* /paige/code */>}}
```

Result:

{{< paige/code lang="python" caption="Python quine" >}}
c = 'c = %r; print(c %% c)'; print(c % c)
{{< /paige/code >}}
