---
categories: [paige]
date: "2023-01-05"
description: Demonstration of the Paige gallery shortcode.
tags: [figures, shortcodes]
title: Gallery Shortcode
---

See the images in the example site to understand how the below file patterns work.
Resize the viewport as narrow and wide as you can to see the responsiveness.

## Rows layout

Code:

```go-text-template
{{</* paige/gallery images="1*.jpg" caption="1 image" /*/>}}
```

Result:

{{< paige/gallery images="1*.jpg" caption="1 image" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="2*.jpg" caption="2 images" /*/>}}
```

Result:

{{< paige/gallery images="2*.jpg" caption="2 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="3*.jpg" caption="3 images" /*/>}}
```

Result:

{{< paige/gallery images="3*.jpg" caption="3 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="4*.jpg" caption="4 images" /*/>}}
```

Result:

{{< paige/gallery images="4*.jpg" caption="4 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="5*.jpg" caption="5 images" /*/>}}
```

Result:

{{< paige/gallery images="5*.jpg" caption="5 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="6*.jpg" caption="6 images" /*/>}}
```

Result:

{{< paige/gallery images="6*.jpg" caption="6 images" type="grid" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="*.jpg" caption="All images" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" caption="All images" type="grid" />}}

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
    {{</* paige/gallery image="*-1*.jpg" caption="Image 1" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="1 image" >}}
    {{< paige/gallery image="*-1*.jpg" caption="Image 1" />}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="2 images" */>}}
    {{</* paige/gallery image="*-2*.jpg" caption="Image 1" /*/>}}
    {{</* paige/gallery image="*-3*.jpg" caption="Image 2" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="2 images" >}}
    {{< paige/gallery image="*-2*.jpg" caption="Image 1" />}}
    {{< paige/gallery image="*-3*.jpg" caption="Image 2" />}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="3 images" */>}}
    {{</* paige/gallery image="*-4*.jpg" caption="Image 1" /*/>}}
    {{</* paige/gallery image="*-5*.jpg" caption="Image 2" /*/>}}
    {{</* paige/gallery image="*-6*.jpg" caption="Image 3" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="3 images" >}}
    {{< paige/gallery image="*-4*.jpg" caption="Image 1" />}}
    {{< paige/gallery image="*-5*.jpg" caption="Image 2" />}}
    {{< paige/gallery image="*-6*.jpg" caption="Image 3" />}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="4 images" */>}}
    {{</* paige/gallery image="*-7*.jpg" caption="Image 1" /*/>}}
    {{</* paige/gallery image="*-8*.jpg" caption="Image 2" /*/>}}
    {{</* paige/gallery image="*-9*.jpg" caption="Image 3" /*/>}}
    {{</* paige/gallery image="*-10.jpg*" caption="Image 4" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="4 images" >}}
    {{< paige/gallery image="*-7*.jpg" caption="Image 1" />}}
    {{< paige/gallery image="*-8*.jpg" caption="Image 2" />}}
    {{< paige/gallery image="*-9*.jpg" caption="Image 3" />}}
    {{< paige/gallery image="*-10.jpg*" caption="Image 4" />}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="5 images" */>}}
    {{</* paige/gallery image="*-11*.jpg" caption="Image 1" /*/>}}
    {{</* paige/gallery image="*-12*.jpg" caption="Image 2" /*/>}}
    {{</* paige/gallery image="*-13*.jpg" caption="Image 3" /*/>}}
    {{</* paige/gallery image="*-14*.jpg" caption="Image 4" /*/>}}
    {{</* paige/gallery image="*-15*.jpg" caption="Image 5" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="5 images" >}}
    {{< paige/gallery image="*-11*.jpg" caption="Image 1" />}}
    {{< paige/gallery image="*-12*.jpg" caption="Image 2" />}}
    {{< paige/gallery image="*-13*.jpg" caption="Image 3" />}}
    {{< paige/gallery image="*-14*.jpg" caption="Image 4" />}}
    {{< paige/gallery image="*-15*.jpg" caption="Image 5" />}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery caption="6 images" */>}}
    {{</* paige/gallery image="*-16*.jpg" caption="Image 1" /*/>}}
    {{</* paige/gallery image="*-17*.jpg" caption="Image 2" /*/>}}
    {{</* paige/gallery image="*-18*.jpg" caption="Image 3" /*/>}}
    {{</* paige/gallery image="*-19*.jpg" caption="Image 4" /*/>}}
    {{</* paige/gallery image="*-20*.jpg" caption="Image 5" /*/>}}
    {{</* paige/gallery image="*-21*.jpg" caption="Image 6" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery caption="6 images" >}}
    {{< paige/gallery image="*-16*.jpg" caption="Image 1" />}}
    {{< paige/gallery image="*-17*.jpg" caption="Image 2" />}}
    {{< paige/gallery image="*-18*.jpg" caption="Image 3" />}}
    {{< paige/gallery image="*-19*.jpg" caption="Image 4" />}}
    {{< paige/gallery image="*-20*.jpg" caption="Image 5" />}}
    {{< paige/gallery image="*-21*.jpg" caption="Image 6" />}}
{{< /paige/gallery >}}

<div class="text-center">Photos by <a href="https://unsplash.com/@photos_by_lanty">Lanty</a>.</div>
