---
categories: [paige]
date: 2023-01-22
description: Demonstration of the Paige Vimeo shortcode.
tags: [shortcodes, videos]
title: Vimeo Shortcode
---

## Basic

Code:

```go-text-template
{{</* paige/vimeo "644036051" */>}}
```

Result:

{{< paige/vimeo "644036051" >}}

## Video parameter

Code:

```go-text-template
{{</* paige/vimeo video="644036051" */>}}
```

Result:

{{< paige/vimeo video="644036051" >}}

## All parameters

Code:

```go-text-template
{{</* paige/vimeo
    autopause=true
    autoplay=false
    background=false
    byline=true
    color="00adef"
    controls=true
    description="My description"
    dnt=false
    fullscreen=true
    keyboard=true
    loop=false
    muted=false
    pip=false
    playsinline=true
    portrait=true
    quality="auto"
    speed=false
    texttrack=false
    time="1m2s"
    title=true
    transparent=true
    video="644036051"
*/>}}
```

Result:

{{< paige/vimeo
    autopause=true
    autoplay=false
    background=false
    byline=true
    color="00adef"
    controls=true
    description="My description"
    dnt=false
    fullscreen=true
    keyboard=true
    loop=false
    muted=false
    pip=false
    playsinline=true
    portrait=true
    quality="auto"
    speed=false
    texttrack=false
    time="1m2s"
    title=true
    transparent=true
    video="644036051"
>}}
