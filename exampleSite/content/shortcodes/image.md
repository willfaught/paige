---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
description: "Demonstration of the Paige image shortcode."
tags: ["figures", "images"]
title: "Image Shortcode"
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

## Class parameter

Code:

```go-text-template
{{</* paige/image class="rounded-5" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image class="rounded-5" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Fetchpriority parameter

Code:

```go-text-template
{{</* paige/image fetchpriority="high" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image fetchpriority="high" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

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

## Linked parameter

Code:

```go-text-template
{{</* paige/image linked="unprocessed" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image linked="unprocessed" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

---

Code:

```go-text-template
{{</* paige/image linked="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image linked="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

---

Code:

```go-text-template
{{</* paige/image linked="r180" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image linked="r180" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Loading parameter

Code:

```go-text-template
{{</* paige/image loading="eager" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image loading="eager" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

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

## Process parameter

Code:

```go-text-template
{{</* paige/image process="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image process="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

---

Code:

```go-text-template
{{</* paige/image process="550x lanczos picture resize webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image process="550x lanczos picture resize webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

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
