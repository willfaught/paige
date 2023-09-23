---
authors: ["will-faught"]
categories: ["paige", "shortcodes"]
date: "2023-09-18T21:34:01-07:00"
description: "Demonstration of the Paige gallery shortcode."
paige:
  feed:
    hide_page: true
tags: ["figures", "gallery", "images"]
title: "Gallery Shortcode"
---

Paige provides a `paige/gallery` shortcode for displaying a list of images.

<!--more-->

## Align parameter

Code:

```go-html-template
{{</* paige/gallery align="start" */>}}
{{</* paige/image height="20rem" src="01-2.jpg" */>}}
{{</* paige/image height="10rem" src="02-2.jpg" */>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery align="start" >}}
{{< paige/image height="20rem" src="01-2.jpg" >}}
{{< paige/image height="10rem" src="02-2.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-html-template
{{</* paige/gallery align="center" */>}}
{{</* paige/image height="20rem" src="01-2.jpg" */>}}
{{</* paige/image height="10rem" src="02-2.jpg" */>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery align="center" >}}
{{< paige/image height="20rem" src="01-2.jpg" >}}
{{< paige/image height="10rem" src="02-2.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-html-template
{{</* paige/gallery align="end" */>}}
{{</* paige/image height="20rem" src="01-2.jpg" */>}}
{{</* paige/image height="10rem" src="02-2.jpg" */>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery align="end" >}}
{{< paige/image height="20rem" src="01-2.jpg" >}}
{{< paige/image height="10rem" src="02-2.jpg" >}}
{{< /paige/gallery >}}

## Breakpoints parameter

Code:

```go-html-template
{{</* paige/gallery breakpoints=true images="large/*.jpg" /*/>}}
```

Result:

{{< paige/gallery breakpoints=true images="large/*.jpg" />}}

## Class parameter

Code:

```go-html-template
{{</* paige/gallery class="rounded-5" images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery class="rounded-5" images="*-2.jpg" />}}

## Densities parameter

Code:

```go-html-template
{{</* paige/gallery densities="1x 2x 3x" images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery densities="1x 2x 3x" images="*-2.jpg" />}}

## Fetchpriority parameter

Code:

```go-html-template
{{</* paige/gallery fetchpriority="high" images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery fetchpriority="high" images="*-2.jpg" />}}

---

Code:

```go-html-template
{{</* paige/gallery fetchpriority="low" images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery fetchpriority="low" images="*-2.jpg" />}}

## Height parameter

Code:

```go-html-template
{{</* paige/gallery height="10rem" images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery height="10rem" images="*-2.jpg" />}}

---

Code:

```go-html-template
{{</* paige/gallery height="20rem" images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery height="20rem" images="*-2.jpg" />}}

## Images parameter

Code:

```go-html-template
{{</* paige/gallery images="1-2.jpg" /*/>}}
```

Result:

{{< paige/gallery images="1-2.jpg" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" />}}

## Justify parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" justify="start" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" justify="start" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" justify="center" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" justify="center" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" justify="end" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" justify="end" />}}

## Linked parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" linked="unprocessed" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" linked="unprocessed" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" linked="default" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" linked="default" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" linked="r180" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" linked="r180" />}}

## Loading parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" loading="eager" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" loading="eager" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" loading="lazy" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" loading="lazy" />}}

## Maxheight parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" maxheight="10rem" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" maxheight="10rem" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" maxheight="20rem" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" maxheight="20rem" />}}

## Maxwidth parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" maxwidth="10rem" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" maxwidth="10rem" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" maxwidth="20rem" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" maxwidth="20rem" />}}

## Process parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" process="default" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" process="default" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" process="300x300 center crop lanczos picture r180 webp" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" process="300x300 center crop lanczos picture r180 webp" />}}

## Style parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" style="filter: grayscale(100%)" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" style="filter: grayscale(100%)" />}}

## Type

Code:

```go-html-template
{{</* paige/gallery images="*.jpg" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" type="grid" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*.jpg" maxheight="10rem" type="rows" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" maxheight="10rem" type="rows" />}}

## Width parameter

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" width="10rem" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" width="10rem" />}}

---

Code:

```go-html-template
{{</* paige/gallery images="*-2.jpg" width="20rem" /*/>}}
```

Result:

{{< paige/gallery images="*-2.jpg" width="20rem" />}}

## Figure

Code:

```go-html-template
{{</* paige/figure caption="Gallery" */>}}
{{</* paige/gallery */>}}
{{</* paige/figure caption="Image 1" */>}}
{{</* paige/image src="01-2.jpg" */>}}
{{</* /paige/figure */>}}
{{</* paige/figure caption="Image 2" */>}}
{{</* paige/image src="02-2.jpg" */>}}
{{</* /paige/figure */>}}
{{</* paige/figure caption="Image 3" */>}}
{{</* paige/image src="03.jpg" */>}}
{{</* /paige/figure */>}}
{{</* paige/figure caption="Image 4" */>}}
{{</* paige/image src="04.jpg" */>}}
{{</* /paige/figure */>}}
{{</* /paige/gallery */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Gallery" >}}
{{< paige/gallery >}}
{{< paige/figure caption="Image 1" >}}
{{< paige/image src="01-2.jpg" >}}
{{< /paige/figure >}}
{{< paige/figure caption="Image 2" >}}
{{< paige/image src="02-2.jpg" >}}
{{< /paige/figure >}}
{{< paige/figure caption="Image 3" >}}
{{< paige/image src="03.jpg" >}}
{{< /paige/figure >}}
{{< paige/figure caption="Image 4" >}}
{{< paige/image src="04.jpg" >}}
{{< /paige/figure >}}
{{< /paige/gallery >}}
{{< /paige/figure >}}
