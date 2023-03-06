---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
description: "Demonstration of the Paige Vimeo shortcode."
tags: ["videos", "vimeo"]
title: "Vimeo Shortcode"
weight: 70
---

Paige provides a `paige/vimeo` shortcode for playing Vimeo videos.

<!--more-->

## Basic

Code:

```go-text-template
{{</* paige/vimeo "644036051" */>}}
```

Result:

{{< paige/vimeo "644036051" >}}

## Autopause parameter

Code:

```go-text-template
{{</* paige/vimeo autopause=false video="644036051" */>}}
```

Result:

{{< paige/vimeo autopause=false video="644036051" >}}

## Autoplay parameter

Code:

```go-text-template
{{</* paige/vimeo autoplay=true video="644036051" */>}}
```

Result:

{{< paige/vimeo autoplay=true video="644036051" >}}

## Background parameter

Code:

```go-text-template
{{</* paige/vimeo background=true video="644036051" */>}}
```

Result:

{{< paige/vimeo background=true video="644036051" >}}

## Byline parameter

Code:

```go-text-template
{{</* paige/vimeo byline=false video="644036051" */>}}
```

Result:

{{< paige/vimeo byline=false video="644036051" >}}

## Color parameter

Code:

```go-text-template
{{</* paige/vimeo color="ff0000" video="644036051" */>}}
```

Result:

{{< paige/vimeo color="ff0000" video="644036051" >}}

## Controls parameter

Code:

```go-text-template
{{</* paige/vimeo controls=false video="644036051" */>}}
```

Result:

{{< paige/vimeo controls=false video="644036051" >}}

## Description parameter

Code:

```go-text-template
{{</* paige/vimeo description="My description" video="644036051" */>}}
```

Result:

{{< paige/vimeo description="My description" video="644036051" >}}

## DNT parameter

Code:

```go-text-template
{{</* paige/vimeo dnt=true video="644036051" */>}}
```

Result:

{{< paige/vimeo dnt=true video="644036051" >}}

## Fullscreen parameter

Code:

```go-text-template
{{</* paige/vimeo fullscreen=false video="644036051" */>}}
```

Result:

{{< paige/vimeo fullscreen=false video="644036051" >}}

## Height parameter

Code:

```go-text-template
{{</* paige/vimeo height="10rem" video="644036051" */>}}
```

Result:

{{< paige/vimeo height="10rem" video="644036051" >}}

## Keyboard parameter

Code:

```go-text-template
{{</* paige/vimeo keyboard=false video="644036051" */>}}
```

Result:

{{< paige/vimeo keyboard=false video="644036051" >}}

## Loop parameter

Code:

```go-text-template
{{</* paige/vimeo loop=true video="644036051" */>}}
```

Result:

{{< paige/vimeo loop=true video="644036051" >}}

## Maxheight parameter

Code:

```go-text-template
{{</* paige/vimeo maxheight="10rem" video="644036051" */>}}
```

Result:

{{< paige/vimeo maxheight="10rem" video="644036051" >}}

## Maxwidth parameter

Code:

```go-text-template
{{</* paige/vimeo maxwidth="50%" video="644036051" */>}}
```

Result:

{{< paige/vimeo maxwidth="50%" video="644036051" >}}

## Muted parameter

Code:

```go-text-template
{{</* paige/vimeo muted=true video="644036051" */>}}
```

Result:

{{< paige/vimeo muted=true video="644036051" >}}

## PIP parameter

Code:

```go-text-template
{{</* paige/vimeo pip=true video="644036051" */>}}
```

Result:

{{< paige/vimeo pip=true video="644036051" >}}

## Playsinline parameter

Code:

```go-text-template
{{</* paige/vimeo playsinline=false video="644036051" */>}}
```

Result:

{{< paige/vimeo playsinline=false video="644036051" >}}

## Portrait parameter

Code:

```go-text-template
{{</* paige/vimeo portrait=false video="644036051" */>}}
```

Result:

{{< paige/vimeo portrait=false video="644036051" >}}

## Quality parameter

Code:

```go-text-template
{{</* paige/vimeo quality="720p" video="644036051" */>}}
```

Result:

{{< paige/vimeo quality="720p" video="644036051" >}}

## Speed parameter

Code:

```go-text-template
{{</* paige/vimeo speed=true video="644036051" */>}}
```

Result:

{{< paige/vimeo speed=true video="644036051" >}}

## Texttrack parameter

Code:

```go-text-template
{{</* paige/vimeo texttrack=true video="644036051" */>}}
```

Result:

{{< paige/vimeo texttrack=true video="644036051" >}}

## Time parameter

Code:

```go-text-template
{{</* paige/vimeo time="1m2s" video="644036051" */>}}
```

Result:

{{< paige/vimeo time="1m2s" video="644036051" >}}

## Title parameter

Code:

```go-text-template
{{</* paige/vimeo title=false video="644036051" */>}}
```

Result:

{{< paige/vimeo title=false video="644036051" >}}

## Transparent parameter

Code:

```go-text-template
{{</* paige/vimeo transparent=false video="644036051" */>}}
```

Result:

{{< paige/vimeo transparent=false video="644036051" >}}

## Video parameter

Code:

```go-text-template
{{</* paige/vimeo video="644036051" */>}}
```

Result:

{{< paige/vimeo video="644036051" >}}

## Width parameter

Code:

```go-text-template
{{</* paige/vimeo video="644036051" width="50%" */>}}
```

Result:

{{< paige/vimeo video="644036051" width="50%" >}}

## Figure

Code:

```go-text-template
{{</* paige/figure caption="Vimeo" */>}}
{{</* paige/vimeo video="644036051" */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Vimeo" >}}
{{< paige/vimeo video="644036051" >}}
{{< /paige/figure >}}
