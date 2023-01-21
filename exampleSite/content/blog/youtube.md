---
categories: [paige]
date: 2023-01-20
description: Demonstration of the Paige YouTube shortcode.
tags: [shortcodes, videos]
title: YouTube Shortcode
---

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
