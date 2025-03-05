+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the request shortcode."
tags = ["request", "figures"]
title = "Request"
+++

The `paige/request` shortcode displays the content for a URL.

<!--more-->

## Basic

Code:

```go-html-template
<pre>
{{</* paige/request "https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" */>}}
</pre>
```

Result:

<pre>
{{< paige/request "https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" >}}
</pre>

## Method parameter

Code:

```go-html-template
<pre>
{{</* paige/request method="get" url="https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" */>}}
</pre>
```

Result:

<pre>
{{< paige/request method="get" url="https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" >}}
</pre>

## Url parameter

Code:

```go-html-template
<pre>
{{</* paige/request url="https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" */>}}
</pre>
```

Result:

<pre>
{{< paige/request url="https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" >}}
</pre>

## Figure

Code:

```go-html-template
{{</* paige/figure caption="License" */>}}
<pre>
{{</* paige/request "https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" */>}}
</pre>
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="License" >}}
<pre>
{{< paige/request "https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" >}}
</pre>
{{< /paige/figure >}}
