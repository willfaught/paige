+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the tabs shortcodes."
tags = ["figures", "tabs"]
title = "Tabs"
+++

The `paige/tabs` shortcode displays content in tabs.

<!--more-->

## Basic

Code:

```go-html-template
{{</* paige/tabs */>}}
{{</* paige/tabs/buttons */>}}
{{</* paige/tabs/button */>}}JSON{{</* /paige/tabs/button */>}}
{{</* paige/tabs/button */>}}TOML{{</* /paige/tabs/button */>}}
{{</* paige/tabs/button */>}}YAML{{</* /paige/tabs/button */>}}
{{</* /paige/tabs/buttons */>}}
{{</* paige/tabs/panes */>}}
{{</* paige/tabs/pane */>}}
{{</* paige/code lang="json" */>}}
{"foo": 123}
{{</* /paige/code */>}}
{{</* /paige/tabs/pane */>}}
{{</* paige/tabs/pane */>}}
{{</* paige/code lang="toml" */>}}
foo = 123
{{</* /paige/code */>}}
{{</* /paige/tabs/pane */>}}
{{</* paige/tabs/pane */>}}
{{</* paige/code lang="yaml" */>}}
foo: 123
{{</* /paige/code */>}}
{{</* /paige/tabs/pane */>}}
{{</* /paige/tabs/panes */>}}
{{</* /paige/tabs */>}}
```

Result:

{{< paige/tabs >}}
{{< paige/tabs/buttons >}}
{{< paige/tabs/button >}}JSON{{< /paige/tabs/button >}}
{{< paige/tabs/button >}}TOML{{< /paige/tabs/button >}}
{{< paige/tabs/button >}}YAML{{< /paige/tabs/button >}}
{{< /paige/tabs/buttons >}}
{{< paige/tabs/panes >}}
{{< paige/tabs/pane >}}
{{< paige/code lang="json" >}}
{"foo": 123}
{{< /paige/code >}}
{{< /paige/tabs/pane >}}
{{< paige/tabs/pane >}}
{{< paige/code lang="toml" >}}
foo = 123
{{< /paige/code >}}
{{< /paige/tabs/pane >}}
{{< paige/tabs/pane >}}
{{< paige/code lang="yaml" >}}
foo: 123
{{< /paige/code >}}
{{< /paige/tabs/pane >}}
{{< /paige/tabs/panes >}}
{{< /paige/tabs >}}

## Figure

Code:

```go-html-template
{{</* paige/figure caption="Tabs" */>}}
{{</* paige/tabs */>}}
{{</* paige/tabs/buttons */>}}
{{</* paige/tabs/button */>}}JSON{{</* /paige/tabs/button */>}}
{{</* paige/tabs/button */>}}TOML{{</* /paige/tabs/button */>}}
{{</* paige/tabs/button */>}}YAML{{</* /paige/tabs/button */>}}
{{</* /paige/tabs/buttons */>}}
{{</* paige/tabs/panes */>}}
{{</* paige/tabs/pane */>}}
{{</* paige/code lang="json" */>}}
{"foo": 123}
{{</* /paige/code */>}}
{{</* /paige/tabs/pane */>}}
{{</* paige/tabs/pane */>}}
{{</* paige/code lang="toml" */>}}
foo = 123
{{</* /paige/code */>}}
{{</* /paige/tabs/pane */>}}
{{</* paige/tabs/pane */>}}
{{</* paige/code lang="yaml" */>}}
foo: 123
{{</* /paige/code */>}}
{{</* /paige/tabs/pane */>}}
{{</* /paige/tabs/panes */>}}
{{</* /paige/tabs */>}}
{{</* /paige/figure */>}}
```

Result:

{{< paige/figure caption="Tabs" >}}
{{< paige/tabs >}}
{{< paige/tabs/buttons >}}
{{< paige/tabs/button >}}JSON{{< /paige/tabs/button >}}
{{< paige/tabs/button >}}TOML{{< /paige/tabs/button >}}
{{< paige/tabs/button >}}YAML{{< /paige/tabs/button >}}
{{< /paige/tabs/buttons >}}
{{< paige/tabs/panes >}}
{{< paige/tabs/pane >}}
{{< paige/code lang="json" >}}
{"foo": 123}
{{< /paige/code >}}
{{< /paige/tabs/pane >}}
{{< paige/tabs/pane >}}
{{< paige/code lang="toml" >}}
foo = 123
{{< /paige/code >}}
{{< /paige/tabs/pane >}}
{{< paige/tabs/pane >}}
{{< paige/code lang="yaml" >}}
foo: 123
{{< /paige/code >}}
{{< /paige/tabs/pane >}}
{{< /paige/tabs/panes >}}
{{< /paige/tabs >}}
{{< /paige/figure >}}
