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
{{</* paige/gallery images="1*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="1*.jpg" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="2*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="2*.jpg" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="3*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="3*.jpg" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="4*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="4*.jpg" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="5*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="5*.jpg" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="6*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="6*.jpg" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" />}}

## Grid layout

Code:

```go-text-template
{{</* paige/gallery images="1*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="1*" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="2*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="2*" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="3*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="3*" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="4*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="4*" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="5*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="5*" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="6*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="6*" />}}

---

Code:

```go-text-template
{{</* paige/gallery images="*.jpg" /*/>}}
```

Result:

{{< paige/gallery images="*.jpg" />}}

## Customization

Code:

```go-text-template
{{</* paige/gallery */>}}
    {{</* paige/image src="*-1*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
    {{< paige/image src="*-1*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery */>}}
    {{</* paige/image src="*-2*.jpg" /*/>}}
    {{</* paige/image src="*-3*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
    {{< paige/image src="*-2*.jpg" >}}
    {{< paige/image src="*-3*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery */>}}
    {{</* paige/image src="*-4*.jpg" /*/>}}
    {{</* paige/image src="*-5*.jpg" /*/>}}
    {{</* paige/image src="*-6*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
    {{< paige/image src="*-4*.jpg" >}}
    {{< paige/image src="*-5*.jpg" >}}
    {{< paige/image src="*-6*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery */>}}
    {{</* paige/image src="*-7*.jpg" /*/>}}
    {{</* paige/image src="*-8*.jpg" /*/>}}
    {{</* paige/image src="*-9*.jpg" /*/>}}
    {{</* paige/image src="*-10.jpg*" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
    {{< paige/image src="*-7*.jpg" >}}
    {{< paige/image src="*-8*.jpg" >}}
    {{< paige/image src="*-9*.jpg" >}}
    {{< paige/image src="*-10.jpg*" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery */>}}
    {{</* paige/image src="*-11*.jpg" /*/>}}
    {{</* paige/image src="*-12*.jpg" /*/>}}
    {{</* paige/image src="*-13*.jpg" /*/>}}
    {{</* paige/image src="*-14*.jpg" /*/>}}
    {{</* paige/image src="*-15*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
    {{< paige/image src="*-11*.jpg" >}}
    {{< paige/image src="*-12*.jpg" >}}
    {{< paige/image src="*-13*.jpg" >}}
    {{< paige/image src="*-14*.jpg" >}}
    {{< paige/image src="*-15*.jpg" >}}
{{< /paige/gallery >}}

---

Code:

```go-text-template
{{</* paige/gallery */>}}
    {{</* paige/image src="*-16*.jpg" /*/>}}
    {{</* paige/image src="*-17*.jpg" /*/>}}
    {{</* paige/image src="*-18*.jpg" /*/>}}
    {{</* paige/image src="*-19*.jpg" /*/>}}
    {{</* paige/image src="*-20*.jpg" /*/>}}
    {{</* paige/image src="*-21*.jpg" /*/>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
    {{< paige/image src="*-16*.jpg" >}}
    {{< paige/image src="*-17*.jpg" >}}
    {{< paige/image src="*-18*.jpg" >}}
    {{< paige/image src="*-19*.jpg" >}}
    {{< paige/image src="*-20*.jpg" >}}
    {{< paige/image src="*-21*.jpg" >}}
{{< /paige/gallery >}}

## Figure

Code:

```go-text-template
{{</* paige/gallery */>}}
{{</* paige/figure caption="Image 1" /*/>}}
{{</* paige/image src="*-1*.jpg" /*/>}}
{{</* /paige/figure */>}}
{{</* paige/figure caption="Image 2" /*/>}}
{{</* paige/image src="*-2*.jpg" /*/>}}
{{</* /paige/figure */>}}
{{</* paige/figure caption="Image 3" /*/>}}
{{</* paige/image src="*-3*.jpg" /*/>}}
{{</* /paige/figure */>}}
{{</* paige/figure caption="Image 4" /*/>}}
{{</* paige/image src="*-4*.jpg" /*/>}}
{{</* /paige/figure */>}}
{{</* /paige/gallery */>}}
```

Result:

{{< paige/gallery >}}
{{< paige/figure caption="Image 1" >}}
{{< paige/image src="*-1*.jpg" >}}
{{< /paige/figure >}}
{{< paige/figure caption="Image 2" >}}
{{< paige/image src="*-2*.jpg" >}}
{{< /paige/figure >}}
{{< paige/figure caption="Image 3" >}}
{{< paige/image src="*-3*.jpg" >}}
{{< /paige/figure >}}
{{< paige/figure caption="Image 4" >}}
{{< paige/image src="*-4*.jpg" >}}
{{< /paige/figure >}}
{{< /paige/gallery >}}

<p class="text-center">Photos by <a href="https://unsplash.com/@photos_by_lanty">Lanty</a>.</p>
