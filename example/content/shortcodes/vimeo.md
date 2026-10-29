+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the Vimeo shortcode."
tags = ["videos", "vimeo"]
title = "Vimeo"
+++

The `paige-vimeo` shortcode plays a Vimeo video.

<!--more-->

## Basic

Code:

```go-html-template
{{</* paige-vimeo "112836958" */>}}
```

Result:

{{< paige-vimeo "112836958" >}}

## Autopause parameter

Code:

```go-html-template
{{</* paige-vimeo autopause=false video="112836958" */>}}
```

Result:

{{< paige-vimeo autopause=false video="112836958" >}}

## Autoplay parameter

Code:

```go-html-template
{{</* paige-vimeo autoplay=true video="112836958" */>}}
```

Result:

{{< paige-vimeo autoplay=true video="112836958" >}}

## Background parameter

Code:

```go-html-template
{{</* paige-vimeo background=true video="112836958" */>}}
```

Result:

{{< paige-vimeo background=true video="112836958" >}}

## Byline parameter

Code:

```go-html-template
{{</* paige-vimeo byline=false video="112836958" */>}}
```

Result:

{{< paige-vimeo byline=false video="112836958" >}}

## Color parameter

Code:

```go-html-template
{{</* paige-vimeo color="ff0000" video="112836958" */>}}
```

Result:

{{< paige-vimeo color="ff0000" video="112836958" >}}

## Controls parameter

Code:

```go-html-template
{{</* paige-vimeo controls=false video="112836958" */>}}
```

Result:

{{< paige-vimeo controls=false video="112836958" >}}

## Description parameter

Code:

```go-html-template
{{</* paige-vimeo description="My description" video="112836958" */>}}
```

Result:

{{< paige-vimeo description="My description" video="112836958" >}}

## DNT parameter

Code:

```go-html-template
{{</* paige-vimeo dnt=true video="112836958" */>}}
```

Result:

{{< paige-vimeo dnt=true video="112836958" >}}

## Fullscreen parameter

Code:

```go-html-template
{{</* paige-vimeo fullscreen=false video="112836958" */>}}
```

Result:

{{< paige-vimeo fullscreen=false video="112836958" >}}

## Height parameter

Code:

```go-html-template
{{</* paige-vimeo height="10rem" video="112836958" */>}}
```

Result:

{{< paige-vimeo height="10rem" video="112836958" >}}

## Keyboard parameter

Code:

```go-html-template
{{</* paige-vimeo keyboard=false video="112836958" */>}}
```

Result:

{{< paige-vimeo keyboard=false video="112836958" >}}

## Loop parameter

Code:

```go-html-template
{{</* paige-vimeo loop=true video="112836958" */>}}
```

Result:

{{< paige-vimeo loop=true video="112836958" >}}

## Maxheight parameter

Code:

```go-html-template
{{</* paige-vimeo maxheight="10rem" video="112836958" */>}}
```

Result:

{{< paige-vimeo maxheight="10rem" video="112836958" >}}

## Maxwidth parameter

Code:

```go-html-template
{{</* paige-vimeo maxwidth="50%" video="112836958" */>}}
```

Result:

{{< paige-vimeo maxwidth="50%" video="112836958" >}}

## Muted parameter

Code:

```go-html-template
{{</* paige-vimeo muted=true video="112836958" */>}}
```

Result:

{{< paige-vimeo muted=true video="112836958" >}}

## PIP parameter

Code:

```go-html-template
{{</* paige-vimeo pip=true video="112836958" */>}}
```

Result:

{{< paige-vimeo pip=true video="112836958" >}}

## Playsinline parameter

Code:

```go-html-template
{{</* paige-vimeo playsinline=false video="112836958" */>}}
```

Result:

{{< paige-vimeo playsinline=false video="112836958" >}}

## Portrait parameter

Code:

```go-html-template
{{</* paige-vimeo portrait=false video="112836958" */>}}
```

Result:

{{< paige-vimeo portrait=false video="112836958" >}}

## Quality parameter

Code:

```go-html-template
{{</* paige-vimeo quality="720p" video="112836958" */>}}
```

Result:

{{< paige-vimeo quality="720p" video="112836958" >}}

## Speed parameter

Code:

```go-html-template
{{</* paige-vimeo speed=true video="112836958" */>}}
```

Result:

{{< paige-vimeo speed=true video="112836958" >}}

## Texttrack parameter

Code:

```go-html-template
{{</* paige-vimeo texttrack=true video="112836958" */>}}
```

Result:

{{< paige-vimeo texttrack=true video="112836958" >}}

## Time parameter

Code:

```go-html-template
{{</* paige-vimeo time="1m2s" video="112836958" */>}}
```

Result:

{{< paige-vimeo time="1m2s" video="112836958" >}}

## Title parameter

Code:

```go-html-template
{{</* paige-vimeo title=false video="112836958" */>}}
```

Result:

{{< paige-vimeo title=false video="112836958" >}}

## Transparent parameter

Code:

```go-html-template
{{</* paige-vimeo transparent=false video="112836958" */>}}
```

Result:

{{< paige-vimeo transparent=false video="112836958" >}}

## Video parameter

Code:

```go-html-template
{{</* paige-vimeo video="112836958" */>}}
```

Result:

{{< paige-vimeo video="112836958" >}}

## Width parameter

Code:

```go-html-template
{{</* paige-vimeo video="112836958" width="50%" */>}}
```

Result:

{{< paige-vimeo video="112836958" width="50%" >}}

## Figure

Code:

```go-html-template
{{</* paige-figure caption="Vimeo" */>}}
{{</* paige-vimeo video="112836958" */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Vimeo" >}}
{{< paige-vimeo video="112836958" >}}
{{< /paige-figure >}}
