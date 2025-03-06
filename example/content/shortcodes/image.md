+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the image shortcode."
tags = ["figures", "images"]
title = "Image"
+++

The `paige/image` shortcode displays an image.

<!--more-->

## Alt parameter

Code:

```go-html-template
{{</* paige/image alt="Landscape" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image alt="Landscape" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Breakpoints parameter

Code:

```go-html-template
{{</* paige/image breakpoints=true src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image breakpoints=true src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Class parameter

Code:

```go-html-template
{{</* paige/image class="rounded-5" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image class="rounded-5" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Densities parameter

Code:

```go-html-template
{{</* paige/image densities="1x 2x 3x" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image densities="1x 2x 3x" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Fetchpriority parameter

Code:

```go-html-template
{{</* paige/image fetchpriority="high" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image fetchpriority="high" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Height parameter

Code:

```go-html-template
{{</* paige/image height="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image height="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Link parameter

Code:

```go-html-template
{{</* paige/image link="https://github.com/willfaught/paige" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image link="https://github.com/willfaught/paige" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Linked parameter

Code:

```go-html-template
{{</* paige/image linked=true src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image linked=true src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

---

Code:

```go-html-template
{{</* paige/image linked="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image linked="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

---

Code:

```go-html-template
{{</* paige/image linked="r180" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image linked="r180" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Loading parameter

Code:

```go-html-template
{{</* paige/image loading="eager" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image loading="eager" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Maxheight parameter

Code:

```go-html-template
{{</* paige/image maxheight="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image maxheight="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Maxwidth parameter

Code:

```go-html-template
{{</* paige/image maxwidth="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image maxwidth="10rem" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Process parameter

Code:

```go-html-template
{{</* paige/image process="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image process="default" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

---

Code:

```go-html-template
{{</* paige/image process="550x lanczos picture resize webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image process="550x lanczos picture resize webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Sizes parameter

Code:

```go-html-template
{{</* paige/image
    sizes="(max-width: 576px) 550px, (max-width: 992px) 936px, 1296px"
    src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image
    sizes="(max-width: 576px) 550px, (max-width: 992px) 936px, 1296px"
    src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Src parameter

Code:

```go-html-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}

## Srcset parameter

Code:

```go-html-template
{{</* paige/image
    src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296"
    srcset="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=550 550w,
        https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=936 936w" */>}}
```

Result:

{{< paige/image
    src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296"
    srcset="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=550 550w, https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=936 936w" >}}

## Style parameter

Code:

```go-html-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" style="filter: grayscale(100%)" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" style="filter: grayscale(100%)" >}}

## Title parameter

Code:

```go-html-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" title="Landscape" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" title="Landscape" >}}

## Width parameter

Code:

```go-html-template
{{</* paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="50%" */>}}
```

Result:

{{< paige/image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="50%" >}}

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
