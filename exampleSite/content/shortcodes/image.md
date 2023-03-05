---
authors: ["will_faught"]
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
{{</* paige/image alt="Landscape" src="landscape.webp" */>}}
```

Result:

{{< paige/image alt="Landscape" src="landscape.webp" >}}

## Height parameter

Code:

```go-text-template
{{</* paige/image height="10rem" src="landscape.webp" */>}}
```

Result:

{{< paige/image height="10rem" src="landscape.webp" >}}

## Link parameter

Code:

```go-text-template
{{</* paige/image link="https://github.com/willfaught/paige" src="landscape.webp" */>}}
```

Result:

{{< paige/image link="https://github.com/willfaught/paige" src="landscape.webp" >}}

## Maxheight parameter

Code:

```go-text-template
{{</* paige/image maxheight="10rem" src="landscape.webp" */>}}
```

Result:

{{< paige/image maxheight="10rem" src="landscape.webp" >}}

## Maxwidth parameter

Code:

```go-text-template
{{</* paige/image maxwidth="10rem" src="landscape.webp" */>}}
```

Result:

{{< paige/image maxwidth="10rem" src="landscape.webp" >}}

## Method and options parameters

Code:

```go-text-template
{{</* paige/image link="https://github.com/willfaught/paige" method="resize" options="550x webp picture Lanczos" src="landscape.webp" */>}}
```

Result:

{{< paige/image link="https://github.com/willfaught/paige" method="resize" options="550x webp picture Lanczos" src="landscape.webp" >}}

## Src parameter

Code:

```go-text-template
{{</* paige/image src="landscape.webp" */>}}
```

Result:

{{< paige/image src="landscape.webp" >}}

## Title parameter

Code:

```go-text-template
{{</* paige/image src="landscape.webp" title="Landscape" */>}}
```

Result:

{{< paige/image src="landscape.webp" title="Landscape" >}}

## Width parameter

Code:

```go-text-template
{{</* paige/image src="landscape.webp" width="50%" */>}}
```

Result:

{{< paige/image src="landscape.webp" width="50%" >}}

## Figure

Code:

```go-text-template
{{</* paige/figure caption="Landscape" */>}}
{{</* paige/image src="landscape.webp" */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Landscape" >}}
{{< paige/image src="landscape.webp" >}}
{{< /paige/figure >}}
