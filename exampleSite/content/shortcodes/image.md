---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
description: "Demonstration of the Paige image shortcode."
tags: ["figures", "images"]
title: "Image Shortcode"
weight: 40
---

Paige provides a `paige/image` shortcode for displaying an image.

<!--more-->

## Alt parameter

Code:

```go-text-template
{{</* paige/image alt="Landscape" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image alt="Landscape" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Height parameter

Code:

```go-text-template
{{</* paige/image height="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image height="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Link parameter

Code:

```go-text-template
{{</* paige/image link="https://github.com/willfaught/paige" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image link="https://github.com/willfaught/paige" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Maxheight parameter

Code:

```go-text-template
{{</* paige/image maxheight="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image maxheight="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Maxwidth parameter

Code:

```go-text-template
{{</* paige/image maxwidth="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image maxwidth="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Method and options parameters

Code:

```go-text-template
{{</* paige/image link="https://github.com/willfaught/paige" method="resize" options="550x webp picture Lanczos" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image link="https://github.com/willfaught/paige" method="resize" options="550x webp picture Lanczos" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Src parameter

Code:

```go-text-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Title parameter

Code:

```go-text-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" title="Landscape" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" title="Landscape" >}}

## Width parameter

Code:

```go-text-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="50%" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="50%" >}}

## Figure

Code:

```go-text-template
{{</* paige/figure caption="Landscape" */>}}
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Landscape" >}}
{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
{{< /paige/figure >}}
