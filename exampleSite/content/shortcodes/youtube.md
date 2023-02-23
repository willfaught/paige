---
authors: [michael_bluth]
categories: [paige]
description: Demonstration of the Paige YouTube shortcode.
tags: [shortcodes, videos, youtube]
title: YouTube Shortcode
weight: 60
---

Paige provides a `paige/youtube` shortcode for playing YouTube videos.

<!--more-->

Code:

```go-text-template
{{</* paige/youtube "dQw4w9WgXcQ" */>}}
```

Result:

{{< paige/youtube "dQw4w9WgXcQ" >}}

---

Code:

```go-text-template
{{</* paige/youtube video="dQw4w9WgXcQ" */>}}
```

Result:

{{< paige/youtube video="dQw4w9WgXcQ" >}}

---

Code:

```go-text-template
{{</* paige/youtube
    controls=true
    end=20
    fullscreen=true
    loop=true
    mute=true
    start=10
    title="My title"
    video="dQw4w9WgXcQ"
*/>}}
```

Result:

{{< paige/youtube
    controls=true
    end=20
    fullscreen=true
    loop=true
    mute=true
    start=10
    title="My title"
    video="dQw4w9WgXcQ"
>}}
