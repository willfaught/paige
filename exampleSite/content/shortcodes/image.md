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

```go-html-template
<p>
{{</* paige/image alt="Landscape" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image alt="Landscape" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Class parameter

Code:

```go-html-template
<p>
{{</* paige/image class="rounded-5" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image class="rounded-5" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Fetchpriority parameter

Code:

```go-html-template
<p>
{{</* paige/image fetchpriority="high" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image fetchpriority="high" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Height parameter

Code:

```go-html-template
<p>
{{</* paige/image height="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image height="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Link parameter

Code:

```go-html-template
<p>
{{</* paige/image link="https://github.com/willfaught/paige" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image link="https://github.com/willfaught/paige" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Linked parameter

Code:

```go-html-template
<p>
{{</* paige/image linked="unprocessed" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image linked="unprocessed" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

---

Code:

```go-html-template
<p>
{{</* paige/image linked="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image linked="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

---

Code:

```go-html-template
<p>
{{</* paige/image linked="r180" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image linked="r180" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Loading parameter

Code:

```go-html-template
<p>
{{</* paige/image loading="eager" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image loading="eager" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Maxheight parameter

Code:

```go-html-template
<p>
{{</* paige/image maxheight="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image maxheight="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Maxwidth parameter

Code:

```go-html-template
<p>
{{</* paige/image maxwidth="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image maxwidth="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Process parameter

Code:

```go-html-template
<p>
{{</* paige/image process="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image process="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

---

Code:

```go-html-template
<p>
{{</* paige/image process="550x lanczos picture resize webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image process="550x lanczos picture resize webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Src parameter

Code:

```go-html-template
<p>
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
</p>
```

Result:

<p>
{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
</p>

## Title parameter

Code:

```go-html-template
<p>
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" title="Landscape" */>}}
</p>
```

Result:

<p>
{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" title="Landscape" >}}
</p>

## Width parameter

Code:

```go-html-template
<p>
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="50%" */>}}
</p>
```

Result:

<p>
{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="50%" >}}
</p>

## Figure

Code:

```go-html-template
{{</* paige/figure caption="Landscape" */>}}
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Landscape" >}}
{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
{{< /paige/figure >}}
