---
authors: ["will_faught"]
categories: ["paige", "shortcodes"]
description: "Demonstration of the Paige gallery shortcode."
tags: ["figures", "gallery", "images"]
title: "Gallery Shortcode"
weight: 50
---

Paige provides a `paige/gallery` shortcode for displaying a list of images.

<!--more-->

See the images in the example site to understand how the below file patterns work.
Resize the viewport as narrow and wide as you can to see the responsiveness.

## Rows layout

Code:

```go-text-template
{{</* paige/gallery images="1*.jpg" caption="1 image" /*/>}}
```

Result:

{{< paige/gallery images="1*.jpg" caption="1 image" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="2*.jpg" caption="2 images" /*/>}}
```

Result:

{{< paige/gallery images="2*.jpg" caption="2 images" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="3*.jpg" caption="3 images" /*/>}}
```

Result:

{{< paige/gallery images="3*.jpg" caption="3 images" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="4*.jpg" caption="4 images" /*/>}}
```

Result:

{{< paige/gallery images="4*.jpg" caption="4 images" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="5*.jpg" caption="5 images" /*/>}}
```

Result:

{{< paige/gallery images="5*.jpg" caption="5 images" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="6*.jpg" caption="6 images" /*/>}}
```

Result:

{{< paige/gallery images="6*.jpg" caption="6 images" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="*.jpg" caption="All images" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" caption="All images" />}}

## Grid layout

Code:

```go-text-template
{{</* paige/gallery images="1*.jpg" caption="1 image" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="1*" caption="1 image" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="2*.jpg" caption="2 images" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="2*" caption="2 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="3*.jpg" caption="3 images" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="3*" caption="3 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="4*.jpg" caption="4 images" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="4*" caption="4 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="5*.jpg" caption="5 images" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="5*" caption="5 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="6*.jpg" caption="6 images" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="6*" caption="6 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="*.jpg" caption="All images" type="grid" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" caption="All images" type="grid" />}}

## Customization

Code:

```go-text-template
{{</* paige/gallery caption="1 image" */>}}
    {{</* paige/image src="*-1*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="1 image" >}}
    {{< paige/image src="*-1*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="2 images" */>}}
    {{</* paige/image src="*-2*.jpg" /*/>}}
    {{</* paige/image src="*-3*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="2 images" >}}
    {{< paige/image src="*-2*.jpg" >}}
    {{< paige/image src="*-3*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="3 images" */>}}
    {{</* paige/image src="*-4*.jpg" /*/>}}
    {{</* paige/image src="*-5*.jpg" /*/>}}
    {{</* paige/image src="*-6*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="3 images" >}}
    {{< paige/image src="*-4*.jpg" >}}
    {{< paige/image src="*-5*.jpg" >}}
    {{< paige/image src="*-6*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="4 images" */>}}
    {{</* paige/image src="*-7*.jpg" /*/>}}
    {{</* paige/image src="*-8*.jpg" /*/>}}
    {{</* paige/image src="*-9*.jpg" /*/>}}
    {{</* paige/image src="*-10.jpg*" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="4 images" >}}
    {{< paige/image src="*-7*.jpg" >}}
    {{< paige/image src="*-8*.jpg" >}}
    {{< paige/image src="*-9*.jpg" >}}
    {{< paige/image src="*-10.jpg*" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="5 images" */>}}
    {{</* paige/image src="*-11*.jpg" /*/>}}
    {{</* paige/image src="*-12*.jpg" /*/>}}
    {{</* paige/image src="*-13*.jpg" /*/>}}
    {{</* paige/image src="*-14*.jpg" /*/>}}
    {{</* paige/image src="*-15*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="5 images" >}}
    {{< paige/image src="*-11*.jpg" >}}
    {{< paige/image src="*-12*.jpg" >}}
    {{< paige/image src="*-13*.jpg" >}}
    {{< paige/image src="*-14*.jpg" >}}
    {{< paige/image src="*-15*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="6 images" */>}}
    {{</* paige/image src="*-16*.jpg" /*/>}}
    {{</* paige/image src="*-17*.jpg" /*/>}}
    {{</* paige/image src="*-18*.jpg" /*/>}}
    {{</* paige/image src="*-19*.jpg" /*/>}}
    {{</* paige/image src="*-20*.jpg" /*/>}}
    {{</* paige/image src="*-21*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="6 images" >}}
    {{< paige/image src="*-16*.jpg" >}}
    {{< paige/image src="*-17*.jpg" >}}
    {{< paige/image src="*-18*.jpg" >}}
    {{< paige/image src="*-19*.jpg" >}}
    {{< paige/image src="*-20*.jpg" >}}
    {{< paige/image src="*-21*.jpg" >}}
{{< /paige/gallery >}}

<div class="text-center">Photos by <a href="https://unsplash.com/@photos_by_lanty">Lanty</a>.</div>
