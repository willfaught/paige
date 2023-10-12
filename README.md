# Paige

Powerful, pliable pixel perfection. An advanced Hugo theme. [Try it out.](https://willfaught.com/paige)

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/willfaught/paige/raw/master/images/screenshot-dark.jpg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/willfaught/paige/raw/master/images/screenshot.jpg">
    <img alt="Screenshot" src="https://github.com/willfaught/paige/raw/master/images/screenshot.jpg">
</picture>

Paige is designed to put your content front and center,
avoiding the typical clutter.
The look is seamless and smooth, scalable and readable, portable and efficient.
The layout is minimal and responsive,
using verticality and white space to focus and delineate parts of the page.
The implementation is flexible and extensible.
It's a versatile canvas that serves most web needs.

## Features

- Accessibility
- Analytics
- Atom feed
- Authors
- Blog
- Bootstrap
- Categories
- Code shortcode
- Comments
- Customizable
- Dark color scheme
- Email shortcode
- Facebook sharing
- Figure shortcode
- Gallery shortcode
- Header links
- Icon shortcode
- Image pixel densities
- Image shortcode
- Image size breakpoints
- Image thumbnails
- Landing page
- Languages
- Light color scheme
- Math typesetting
- Menu
- Minimal design
- Quote shortcode
- RSS feed
- Responsive
- Right-to-left languages
- SEO
- Safari and Firefox Reader View support
- Search
- Sections
- Series
- Single column
- Social links
- Table of contents
- Tags
- Twitter sharing
- Validated with [PageSpeed](https://pagespeed.web.dev/report?url=https%3A%2F%2Fwillfaught.com%2Fpaige%2F&form_factor=desktop) and [Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fwillfaught.com%2Fpaige%2F)
- Vimeo shortcode
- YouTube shortcode

## Community

Get started by [starring](https://github.com/willfaught/paige/stargazers)
and [watching](https://github.com/willfaught/paige/watchers) the project.

If you find a problem or have a suggestion,
please share it by [creating an issue](https://github.com/willfaught/paige/issues/new).

If you have a fix or improvement,
please share it by [creating a pull request](https://github.com/willfaught/paige/compare).

If you make a customization or alteration,
please share it by [posting code or screenshots](https://github.com/willfaught/paige/discussions/8).

If you deploy a site,
please share it by [posting a link](https://github.com/willfaught/paige/discussions/12).

## Setup

1. [Install Hugo](https://gohugo.io/installation/) (the extended version, and at least 0.111.3).

    For Homebrew on Mac:

    ```sh
    $ brew install hugo
    ```

    For Chocolatey on Windows:

    ```sh
    $ choco install hugo-extended
    ```

    For Snap on Linux:

    ```sh
    $ sudo snap install hugo
    ```

2. [Install Dart Sass](https://github.com/sass/dart-sass/releases).

    For Homebrew on Mac:

    ```sh
    $ brew install sass/sass/sass
    ```

    For Chocolatey on Windows:

    ```sh
    $ choco install sass
    ```

    For Snap on Linux:

    ```sh
    $ sudo snap install dart-sass
    ```

3. Create a site:

    ```sh
    $ hugo new site yourproject
    ```

4. Create a post:

    ```sh
    $ cd yourproject
    $ hugo new yourpost.md
    ```

5. Install the Paige module:

    ```sh
    $ cd yourproject
    $ hugo mod init github.com/youraccount/yourproject
    $ hugo mod get github.com/willfaught/paige@latest
    ```

6. Import the Paige module:

    ```sh
    $ cd yourproject
    $ cat >>hugo.toml <<EOF
    [[module.imports]]
    path = "github.com/willfaught/paige"
    EOF
    ```

7. Build and run the site:

    ```sh
    $ cd yourproject
    $ hugo server -D
    ```

8. Update the Paige module:

    ```sh
    $ cd yourproject
    $ hugo mod get github.com/willfaught/paige@latest
    ```

See Hugo's [installation](https://gohugo.io/installation/), [getting started](https://gohugo.io/getting-started/), and [module](https://gohugo.io/hugo-modules/) guides for more information.

See the [minimal look](#minimal-look), [narrow look](#narrow-look), and [menu navigation only](#menu-navigation-only) sections for common customizations.

## Configure

### Parameters

There is a single parameter object with sensible defaults that can be overridden in site or page parameters:

```toml
[paige]
color = "#0d6efd" # Bootstrap primary color and theme color for Safari and Windows
external_link_new_tab = false # Open external links in new tabs
math = false # Enable math typesetting
style = "" # CSS included at the end of the stylesheet, before style-last.css

[paige.analytics]
disable = false # Disable all analytics

[paige.analytics.beam] # See https://beamanalytics.io
token = ""

[paige.analytics.chartbeat] # See https://chartbeat.com
account_id = ""
domain = ""

[paige.analytics.clarity] # See https://clarity.microsoft.com
account_id = ""

[paige.analytics.clicky] # See https://clicky.com
account_id = ""

[paige.analytics.counter] # See https://counter.dev
account_id = ""
utc_offset = ""

[paige.analytics.fathom] # See https://usefathom.com
account_id = ""

[paige.analytics.finteza] # See https://finteza.com
account_id = ""
script_url = ""

[paige.analytics.hotjar] # See https://hotjar.com
account_id = ""

[paige.analytics.matomo] # See https://matomo.org
account_id = ""
host_url = ""

[paige.analytics.mixpanel] # See https://mixpanel.com
token = ""

[paige.analytics.pirsch] # See https://pirsch.io
identification_code = ""

[paige.analytics.plausible] # See https://plausible.io
account_id = ""

[paige.analytics.woopra] # See https://woopra.com
domain = ""

[paige.analytics.yandex] # See https://metrica.yandex.com
account_id = ""

[paige.comments]
disable = false # Disable all comments

[paige.comments.cactus] # See https://cactus.chat
account_id = ""

[paige.comments.commento] # See https://commento.io
script_url = ""

[paige.comments.graphcomment] # See https://graphcomment.com
account_id = ""

[paige.comments.hyvor] # See https://hyvor.com
account_id = ""

[paige.comments.intensedebate] # See https://intensedebate.com
account_id = ""

[paige.comments.isso] # See https://isso-comments.de
script_url = ""

[paige.comments.muut] # See https://muut.com
account_id = ""

[paige.comments.remark42] # See https://remark42.com
host_url = ""
site_id = ""

[paige.comments.replybox] # See https://getreplybox.com
account_id = ""

[paige.comments.utterances] # See https://utteranc.es
github_repo = ""

[paige.date]
format = ":date_long" # Hugo date format

[paige.feed]
hide_page = false
link_to_page = false # Link to the page instead of the front matter link, if present
page_link = "⏎" # If a front matter link is present, and link_to_page is false, then link to the page with this text

[paige.feed.atom]
authors = []
# Example is:
# [[paige.feed.atom.authors]]
# email = "will.faught@example.com"
# name = "Will Faught
# url = "https://github.com/willfaught/paige"
icon = "" # Example is "/icon.webp"
logo = "" # Example is "/logo.webp"

[paige.feed.rss]
managing_editor = "" # Example is "will.faught@example.com (Will Faught)"
web_master = "" # Example is "will.faught@example.com (Will Faught)"

[paige.file_link] # A link placed at the top of the footer for pages with files
content = "" # Example is "Edit this page"
disable = false
url = ""
# The formatting verb "%s" is replaced with the path to the file relative to the content directory.
# Example is "https://github.com/willfaught/paige/edit/master/content/%s".

[paige.git]
commit_url = "" # Example is "https://github.com/willfaught/paige/commit/%s"

[paige.menu]
style = "pills" # Must be "links", "pills", "tabs", or "underline"

[paige.search]
hide_page = false
```

The assigned values shown are the default values.

The parameter object is accessed in site parameters as `[params.paige]`, and in page parameters as `[paige]`.

Optional site parameters:

```toml
[authors.will-faught]
default = false # Credit this author in pages that have no authors parameter
email = "will.faught@example.com"
name = "Will Faught"
url = "https://willfaught.com/paige"
```

Optional page parameters:

```toml
authors = ["will-faught"] # Credit the corresponding author in the site parameters
link = "https://youtu.be/dQw4w9WgXcQ" # The reference for an anchor around the title

[[authors]]
author = "will-faught" # Credit the corresponding author in the site parameters

[[authors]] # Credit this author
email = "will.faught@example.com"
name = "Will Faught"
url = "https://willfaught.com/paige"

[paige]
alert = "Alert!" # Markdown displayed before the page body (defaults to primary alert type)
pin = true # Display this page before the rest

[paige.alert]
message = "Alert!" # Markdown displayed before the page body
type = "primary" # Bootstrap alert type
```

### Menu

An optional menu can be configured.
The active menu item has a URL that is a prefix of the path of the current page.
A menu item with the URL `/` only matches a `/` path.

Example configuration in `yoursite/hugo.toml`:

```toml
[languages.en]
weight = 10

[[languages.en.menu.main]]
identifier = "home"
name = "Home"
url = "/"
weight = 10

[[languages.en.menu.main]]
identifier = "blog"
name = "Blog"
url = "/blog/"
weight = 20

[[languages.en.menu.main]]
identifier = "life"
name = "Life"
parent = "blog"
url = "/blog/life/"
weight = 10

[[languages.en.menu.main]]
identifier = "work"
name = "Work"
parent = "blog"
url = "/blog/work/"
weight = 20

[languages.en.menu.main.params.paige]
divider_below = true

[[languages.en.menu.main]]
identifier = "interests"
name = "Interests"
parent = "blog"
url = "/blog/interests/"
weight = 30

[languages.en.menu.main.params.paige]
disabled = true

[[languages.en.menu.main]]
identifier = "tags"
name = "Tags"
url = "/tags/"
weight = 30

[[languages.en.menu.main]]
identifier = "search"
name = "Search"
url = "/search/"
weight = 40
```

If you intend for the menu to be sufficient for all navigation,
see [how to hide other navigation features](#menu-navigation-only).

## Layouts

### Cloud

The `paige/cloud` layout provides a link cloud for sub-pages.

Example configuration in `yoursite/content/tags/_index.md`:

```toml
layout = "paige/cloud"
```

### Search

The `paige/search` layout provides a search page.

Example configuration in `yoursite/hugo.toml`:

```toml
[outputs]
home = ["html", "json", "rss"]
```

Example configuration in `yoursite/content/search.md`:

```toml
layout = "paige/search"
title = "Search"
```

## Shortcodes

### Code

The `paige/code` shortcode provides highlighted code.

```
{{< paige/code
    lang=""
    options="" >}}

{{< /paige/code >}}
```

Inner content: Required. String. The code.

Parameters:

<dl>
    <dt><code>lang</code></dt>
    <dd>Optional. Position 0. String. Chroma <a href="https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages">language code</a>. Default is <code>plaintext</code>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo <a href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode">highlight options</a>.</dd>
</dl>

### Email

The `paige/email` shortcode hides e-mail addresses from robots.

```
{{< paige/email
    address="" >}}

{{< /paige/email >}}
```

Inner content: Required. String. Markdown. The content.

Parameters:

<dl>
    <dt><code>address</code></dt>
    <dd>Required. Position 0. String. The e-mail address.</dd>
</dl>

### Figure

The `paige/figure` shortcode provides a figure.

```
{{< paige/figure
    caption=""
    float=""
    height=""
    horizontal=""
    maxwidth=""
    number=0
    numbered=false
    vertical=""
    width="" >}}

{{< /paige/figure >}}
```

Inner content: Required. String. Markdown. The content.

Parameters:

<dl>
    <dt><code>caption</code></dt>
    <dd>Optional. Position 0. String. Markdown. Descriptive text below the content.</dd>
    <dt><code>float</code></dt>
    <dd>Optional. String. Float to one side of its container. Must be <code>start</code> or <code>end</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Total height.</dd>
    <dt><code>horizontal</code></dt>
    <dd>Optional. String. Horizontal alignment. Must be <code>start</code>, <code>center</code>, or <code>end</code>. Default is <code>center</code>.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Maximum total width.</dd>
    <dt><code>number</code></dt>
    <dd>Optional. Integer or string. Figure number. Displayed with the caption.</dd>
    <dt><code>numbered</code></dt>
    <dd>Optional. Boolean. Number the figure automatically. Displayed with the caption.</dd>
    <dt><code>vertical</code></dt>
    <dd>Optional. String. Vertical alignment. Must be <code>start</code>, <code>center</code>, or <code>end</code>. Default is <code>center</code>.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Total width.</dd>
</dl>

### Gallery

The `paige/gallery` shortcode provides an arrangement of images.

```
{{< paige/gallery
    align=""
    breakpoints=false
    class=""
    densities=""
    fetchpriority=""
    height=""
    images=""
    justify=""
    linked=""
    loading=""
    maxheight=""
    maxwidth=""
    process=""
    style=""
    type=""
    width="" >}}

{{< /paige/gallery >}}
```

Inner content: Optional. String. HTML. The images.

Parameters:

<dl>
    <dt><code>align</code></dt>
    <dd>Optional. String. Cross axis alignment. Must be <code>baseline</code>, <code>center</code>, <code>end</code>, <code>start</code>, or <code>stretch</code>.</dd>
    <dt><code>breakpoints</code></dt>
    <dd>Optional. Boolean. Whether to generate copies of the image sized to each Bootstrap breakpoint. Must not use with <code>densities</code>.</dd>
    <dt><code>class</code></dt>
    <dd>Optional. String. Image class. Merged with implementation.</dd>
    <dt><code>densities</code></dt>
    <dd>Optional. String. Float numbers suffixed with an "x", delimited by spaces. The pixel densities of the image to generate. There must be at least two. The largest density matches the original image. Examples are <code>1x 2x</code>, <code>1x 1.5x 2x 2.5x 3x</code>, and <code>0.5x 1.33x 6x 10x</code>. Must not use with <code>breakpoints</code>.</dd>
    <dt><code>fetchpriority</code></dt>
    <dd>Optional. String. Must be <code>high</code> or <code>low</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Image height.</dd>
    <dt><code>images</code></dt>
    <dd>Optional. Position 0. String. Page, site, or remote images glob. Default is all image page resources.</dd>
    <dt><code>justify</code></dt>
    <dd>Optional. String. Main axis space distribution. Must be <code>around</code>, <code>between</code>, <code>center</code>, <code>end</code>, <code>evenly</code>, or <code>start</code>.</dd>
    <dt><code>linked</code></dt>
    <dd>Optional. String. Hugo image processing <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a> and <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>, mixed together, for the linked image. If no method is specified, resize is used. If no image dimensions are specified, the originals are used. If it is <code>unprocessed</code>, it is unprocessed. If it is <code>default</code>, the <a href="https://gohugo.io/content-management/image-processing/#processing-options">default options</a> are used.</dd>
    <dt><code>loading</code></dt>
    <dd>Optional. String. Must be <code>eager</code> (default) or <code>lazy</code>.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Maximum image height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Maximum image width.</dd>
    <dt><code>process</code></dt>
    <dd>Optional. String. Hugo image processing <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a> and <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>, mixed together, for the displayed image. If no method is specified, resize is used. If no image dimensions are specified, the originals are used. If it is <code>default</code>, the <a href="https://gohugo.io/content-management/image-processing/#processing-options">default options</a> are used.</dd>
    <dt><code>style</code></dt>
    <dd>Optional. String. CSS. Image style. Merged with implementation.</dd>
    <dt><code>type</code></dt>
    <dd>Optional. String. Type of layout. Must be <code>grid</code> or <code>rows</code> (default).</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Image width.</dd>
</dl>

### Icon

The `paige/icon` shortcode provides a web font icon.

```
{{< paige/icon
    class=""
    title=""
    url="" >}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>class</code></dt>
    <dd>Required. Position 0. String. <code>&lt;i&gt;</code> class. Example is <code>bi bi-github</code>.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. String. The screen reader description and anchor title. Example is <code>GitHub</code>.</dd>
    <dt><code>url</code></dt>
    <dd>Optional. String. URL. Example is <code>https://github.com/willfaught/paige</code>. E-mails in URLs with a <code>mailto:</code> scheme are protected from web crawlers.</dd>
</dl>

### Image

The `paige/image` shortcode provides an image.

```
{{< paige/image
    alt=""
    breakpoints=false
    class=""
    densities=""
    fetchpriority=""
    height=""
    link=""
    linked=""
    loading=""
    maxheight=""
    maxwidth=""
    process=""
    sizes=""
    src=""
    srcset=""
    style=""
    title=""
    width="" >}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>alt</code></dt>
    <dd>Optional. String. Plain text. Image alt.</dd>
    <dt><code>breakpoints</code></dt>
    <dd>Optional. Boolean. Whether to generate copies of the image sized to each Bootstrap breakpoint. Must not use with <code>densities</code>, <code>sizes</code>, or <code>srcset</code>.</dd>
    <dt><code>class</code></dt>
    <dd>Optional. String. Class attribute value.</dd>
    <dt><code>densities</code></dt>
    <dd>Optional. String. Float numbers suffixed with an "x", delimited by spaces. The pixel densities of the image to generate. There must be at least two. The largest density matches the original image. Examples are <code>1x 2x</code>, <code>1x 1.5x 2x 2.5x 3x</code>, and <code>0.5x 1.33x 6x 10x</code>. Must not use with <code>breakpoints</code>, <code>sizes</code>, or <code>srcset</code>.</dd>
    <dt><code>fetchpriority</code></dt>
    <dd>Optional. String. Must be <code>high</code> or <code>low</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Image height.</dd>
    <dt><code>link</code></dt>
    <dd>Optional. String. URL. Image link. Must not use with <code>linked</code>.</dd>
    <dt><code>linked</code></dt>
    <dd>Optional. String. Hugo image processing <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a> and <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>, mixed together, for the linked image. If no method is specified, resize is used. If no image dimensions are specified, the originals are used. If it is <code>unprocessed</code>, it is unprocessed. If it is <code>default</code>, the <a href="https://gohugo.io/content-management/image-processing/#processing-options">default options</a> are used. Must not use with <code>link</code>.</dd>
    <dt><code>loading</code></dt>
    <dd>Optional. String. Must be <code>eager</code> (default) or <code>lazy</code>.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Image maximum height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Image maximum width.</dd>
    <dt><code>process</code></dt>
    <dd>Optional. String. Hugo image processing <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a> and <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>, mixed together, for the displayed image. If no method is specified, resize is used. If no image dimensions are specified, the originals are used. If it is <code>default</code>, the <a href="https://gohugo.io/content-management/image-processing/#processing-options">default options</a> are used.</dd>
    <dt><code>sizes</code></dt>
    <dd>Optional. String. Image <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes">sizes</a>. Must not be set with <code>breakpoints</code> or <code>densities</code>.</dd>
    <dt><code>src</code></dt>
    <dd>Required. Position 0. String. URL. Image source.</dd>
    <dt><code>srcset</code></dt>
    <dd>Optional. String. Image <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset">srcset</a>. Must not be set with <code>breakpoints</code> or <code>densities</code>.</dd>
    <dt><code>style</code></dt>
    <dd>Optional. String. CSS. Image style. Merged with implementation.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. String. Plain text. Image title.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Image width.</dd>
</dl>

### Quote

The `paige/quote` shortcode provides a quotation.

```
{{< paige/quote
    cite="" >}}

{{< /paige/quote >}}
```

Inner content: Required. String. Markdown. The quotation.

Parameters:

<dt><code>cite</code></dt>
<dd>Optional. String. Plain text. Citation.</dd>

### Vimeo

The `paige/vimeo` shortcode provides a Vimeo video.

```
{{< paige/vimeo
    autopause=false
    autoplay=false
    background=false
    byline=false
    color=""
    controls=false
    description=""
    dnt=false
    fullscreen=false
    height=""
    keyboard=false
    loop=false
    maxheight=""
    maxwidth=""
    muted=false
    pip=false
    playsinline=false
    portrait=false
    quality=""
    speed=false
    texttrack=false
    time=""
    title=false
    transparent=false
    video=""
    width="" >}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>autopause</code></dt>
    <dd>Optional. Boolean. Enable playing more than one Vimeo video on the same page. Default is <code>true</code>.</dd>
    <dt><code>autoplay</code></dt>
    <dd>Optional. Boolean. Autoplay the video. Default is <code>false</code>.</dd>
    <dt><code>background</code></dt>
    <dd>Optional. Boolean. Autoplay the video. Hide the controls. Loop the video. Mute the video. Default is <code>false</code>.</dd>
    <dt><code>byline</code></dt>
    <dd>Optional. Boolean. Show the author. Default is configured per video.</dd>
    <dt><code>color</code></dt>
    <dd>Optional. String. Hex code. Control color. Default is <code>00adef</code>.</dd>
    <dt><code>controls</code></dt>
    <dd>Optional. Boolean. Show the controls. Default is <code>true</code>.</dd>
    <dt><code>description</code></dt>
    <dd>Optional. String. Plain text. Screen reader content. Default is <code>Vimeo video</code>.</dd>
    <dt><code>dnt</code></dt>
    <dd>Optional. Boolean. Do not track session data. Default is <code>false</code>.</dd>
    <dt><code>fullscreen</code></dt>
    <dd>Optional. Boolean. Enable full screen. Default is <code>true</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Video height.</dd>
    <dt><code>keyboard</code></dt>
    <dd>Optional. Boolean. Enable keyboard input. Default is <code>true</code>.</dd>
    <dt><code>loop</code></dt>
    <dd>Optional. Boolean. Loop the video. Default is <code>false</code>.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Video maximum height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Video maximum width.</dd>
    <dt><code>muted</code></dt>
    <dd>Optional. Boolean. Mute the video. Default is <code>false</code>.</dd>
    <dt><code>pip</code></dt>
    <dd>Optional. Boolean. Show the picture-in-picture control. Default is <code>false</code>.</dd>
    <dt><code>playsinline</code></dt>
    <dd>Optional. Boolean. Play inline instead of full screen on mobile devices. Default is <code>true</code>.</dd>
    <dt><code>portrait</code></dt>
    <dd>Optional. Boolean. Show the author's profile image. Default is configured per video.</dd>
    <dt><code>quality</code></dt>
    <dd>Optional. String. The resolution. Must be <code>auto</code>, <code>240p</code>, <code>360p</code>, <code>540p</code>, <code>720p</code>, <code>1080p</code>, <code>2k</code>, or <code>4k</code>. Default is <code>auto</code>.</dd>
    <dt><code>speed</code></dt>
    <dd>Optional. Boolean. Show the speed controls. Default is <code>false</code>.</dd>
    <dt><code>texttrack</code></dt>
    <dd>Optional. String. Language code and optionally a locale code (e.g. <code>en</code>, <code>en-US</code>). Use the corresponding subtitles. Default is <code>false</code>.</dd>
    <dt><code>time</code></dt>
    <dd>Optional. String. Duration (e.g. <code>0m</code>, <code>1m2s</code>). Start time. Default is <code>0m</code>.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. Boolean. Show the title. Default is configured per video.</dd>
    <dt><code>transparent</code></dt>
    <dd>Optional. Boolean. Use a transparent background instead of a black one. Default is <code>true</code>.</dd>
    <dt><code>video</code></dt>
    <dd>Optional. Position 0. String. Video ID.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Video width.</dd>
</dl>

See [Vimeo documentation](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview) for more detail.

### YouTube

The `paige/youtube` shortcode provides a YouTube video.

```
{{< paige/youtube
    autoplay=false
    controls=false
    description=""
    end=0
    fullscreen=false
    height=""
    list=""
    loop=false
    maxheight=""
    maxwidth=""
    mute=false
    start=0
    video=""
    width="" >}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>autoplay</code></dt>
    <dd>Optional. Boolean. Automatically play the video.</dd>
    <dt><code>controls</code></dt>
    <dd>Optional. Boolean. Show video controls. Default is <code>true</code>.</dd>
    <dt><code>description</code></dt>
    <dd>Optional. String. Plain text. Screen reader content. Default is <code>YouTube video</code>.</dd>
    <dt><code>end</code></dt>
    <dd>Optional. Integer. Elapsed seconds. Stop the video here.</dd>
    <dt><code>fullscreen</code></dt>
    <dd>Optional. Boolean. Enable full screen. Default is <code>true</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Video height.</dd>
    <dt><code>list</code></dt>
    <dd>Optional. String. Playlist ID.</dd>
    <dt><code>loop</code></dt>
    <dd>Optional. Boolean. Loop the video.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Video maximum height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Video maximum width.</dd>
    <dt><code>mute</code></dt>
    <dd>Optional. Boolean. Mute the video.</dd>
    <dt><code>start</code></dt>
    <dd>Optional. Integer. Elapsed seconds. Start the video here.</dd>
    <dt><code>video</code></dt>
    <dd>Optional. Position 0. String. Video ID.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Video width.</dd>
</dl>

## Customize

### Include

| If this file exists                                 | It is included at               |
| --------------------------------------------------- | ------------------------------- |
| `yoursite/layouts/partials/paige/body-first.html`   | The beginning of the body tag   |
| `yoursite/layouts/partials/paige/body-last.html`    | The end of the body tag         |
| `yoursite/layouts/partials/paige/footer-first.html` | The beginning of the footer tag |
| `yoursite/layouts/partials/paige/footer-last.html`  | The end of the footer tag       |
| `yoursite/layouts/partials/paige/head-first.html`   | The beginning of the head tag   |
| `yoursite/layouts/partials/paige/head-last.html`    | The end of the head tag         |
| `yoursite/layouts/partials/paige/header-first.html` | The beginning of the header tag |
| `yoursite/layouts/partials/paige/header-last.html`  | The end of the header tag       |
| `yoursite/layouts/partials/paige/main-first.html`   | The beginning of the main tag   |
| `yoursite/layouts/partials/paige/main-last.html`    | The end of the main tag         |
| `yoursite/layouts/partials/paige/style-first.css`   | The beginning of the style tag  |
| `yoursite/layouts/partials/paige/style-last.css`    | The end of the style tag        |

### Override

Most code is in partials that are included by the layouts.
Elements can be added, changed, or removed easily by overriding the corresponding layout or partial.

For example, the layouts `list.html`, `single.html`, `taxonomy.html`, and `term.html`
include the partial `paige/article.html`.
`paige/article.html` includes the partials `paige/metadata.html`, `paige/toc.html`, and `paige/content.html`.
To change the page title for those layouts, change `paige/metadata.html`.
To change the page title for `single.html`,
replace the use of `paige/article.html` in `single.html` with the use of
`paige/metadata.html`, `paige/toc.html`, and `paige/content.html`,
then replace that use of `paige/metadata.html` with your own design.

### Extend

Use CSS selectors to extend the default styling.

Page identifiers:

<dl>
    <dt><code>#paige-article</code></dt>
    <dd>The article.</dd>
    <dt><code>#paige-authors</code></dt>
    <dd>The authors.</dd>
    <dt><code>#paige-breadcrumbs</code></dt>
    <dd>The breadcrumbs.</dd>
    <dt><code>#paige-collections</code></dt>
    <dd>The collections.</dd>
    <dt><code>#paige-collections-header</code></dt>
    <dd>The collections header.</dd>
    <dt><code>#paige-comments</code></dt>
    <dd>The comments.</dd>
    <dt><code>#paige-content</code></dt>
    <dd>The content.</dd>
    <dt><code>#paige-copyright</code></dt>
    <dd>The copyright.</dd>
    <dt><code>#paige-credit</code></dt>
    <dd>The credit.</dd>
    <dt><code>#paige-date</code></dt>
    <dd>The date.</dd>
    <dt><code>#paige-description</code></dt>
    <dd>The description.</dd>
    <dt><code>#paige-file-link</code></dt>
    <dd>The file link. See the <code>paige.link</code> configuration.</dd>
    <dt><code>#paige-footer</code></dt>
    <dd>The footer.</dd>
    <dt><code>#paige-header</code></dt>
    <dd>The header.</dd>
    <dt><code>#paige-keywords</code></dt>
    <dd>The keywords.</dd>
    <dt><code>#paige-main</code></dt>
    <dd>The main.</dd>
    <dt><code>#paige-menu</code></dt>
    <dd>The menu.</dd>
    <dt><code>#paige-metadata</code></dt>
    <dd>The metadata.</dd>
    <dt><code>#paige-pages</code></dt>
    <dd>The pages.</dd>
    <dt><code>#paige-pages-header</code></dt>
    <dd>The pages header.</dd>
    <dt><code>#paige-pagination</code></dt>
    <dd>The sub-page pagination links.</dd>
    <dt><code>#paige-reading-time</code></dt>
    <dd>The reading time.</dd>
    <dt><code>#paige-root</code></dt>
    <dd>The outermost element in the body.</dd>
    <dt><code>#paige-sections</code></dt>
    <dd>The sections.</dd>
    <dt><code>#paige-sections-header</code></dt>
    <dd>The sections header.</dd>
    <dt><code>#paige-series</code></dt>
    <dd>The series.</dd>
    <dt><code>#paige-title</code></dt>
    <dd>The title.</dd>
    <dt><code>#paige-toc</code></dt>
    <dd>The table of contents.</dd>
</dl>

Page and sub-page classes:

<dl>
    <dt><code>.paige-authors</code></dt>
    <dd>The authors.</dd>
    <dt><code>.paige-date</code></dt>
    <dd>The date.</dd>
    <dt><code>.paige-date-header</code></dt>
    <dd>The date headers.</dd>
    <dt><code>.paige-description</code></dt>
    <dd>The description.</dd>
    <dt><code>.paige-keyword</code></dt>
    <dd>A keyword.</dd>
    <dt><code>.paige-keywords</code></dt>
    <dd>The keywords.</dd>
    <dt><code>.paige-metadata</code></dt>
    <dd>The metadata.</dd>
    <dt><code>.paige-page</code></dt>
    <dd>A page.</dd>
    <dt><code>.paige-reading-time</code></dt>
    <dd>The reading time.</dd>
    <dt><code>.paige-series</code></dt>
    <dd>The series.</dd>
    <dt><code>.paige-summary</code></dt>
    <dd>The summary.</dd>
    <dt><code>.paige-title</code></dt>
    <dd>The title.</dd>
</dl>

Kind classes:

<dl>
    <dt><code>.paige-home</code></dt>
    <dd>The container element of pages with kind "home".</dd>
    <dt><code>.paige-list</code></dt>
    <dd>The container element of pages with kind "section".</dd>
    <dt><code>.paige-single</code></dt>
    <dd>The container element of pages with kind "page".</dd>
    <dt><code>.paige-taxonomy</code></dt>
    <dd>The container element of pages with kind "taxonomy".</dd>
    <dt><code>.paige-term</code></dt>
    <dd>The container element of pages with kind "term".</dd>
</dl>

Status classes:

<dl>
    <dt><code>.paige-draft</code></dt>
    <dd>The container element of draft pages.</dd>
    <dt><code>.paige-expired</code></dt>
    <dd>The container element of expired pages.</dd>
    <dt><code>.paige-future</code></dt>
    <dd>The container element of future pages.</dd>
    <dt><code>.paige-modified</code></dt>
    <dd>The container element of modified pages.</dd>
    <dt><code>.paige-published</code></dt>
    <dd>The container element of published pages.</dd>
    <dt><code>.paige-unpublished</code></dt>
    <dd>The container element of unpublished pages.</dd>
</dl>

Shortcode classes:

<dl>
    <dt><code>.paige-code</code></dt>
    <dd>The container element of <code>paige/code</code> shortcodes.</dd>
    <dt><code>.paige-figure</code></dt>
    <dd>The container element of <code>paige/figure</code> shortcodes.</dd>
    <dt><code>.paige-gallery</code></dt>
    <dd>The container element of <code>paige/gallery</code> shortcodes.</dd>
    <dt><code>.paige-icon</code></dt>
    <dd>The container element of <code>paige/icon</code> shortcodes.</dd>
    <dt><code>.paige-image</code></dt>
    <dd>The container element of <code>paige/image</code> shortcodes.</dd>
    <dt><code>.paige-quote</code></dt>
    <dd>The container element of <code>paige/quote</code> shortcodes.</dd>
    <dt><code>.paige-vimeo</code></dt>
    <dd>The container element of <code>paige/vimeo</code> shortcodes.</dd>
    <dt><code>.paige-youtube</code></dt>
    <dd>The container element of <code>paige/youtube</code> shortcodes.</dd>
</dl>

If you hide `#paige-credit`, please credit this project in a post to help others find it.

### Minimal look

By default, everything is shown.
If you want a more minimal look,
try the following in `yoursite/layouts/partials/paige/style-first.css`:

```css
#paige-authors,
#paige-collections,
#paige-credit,
#paige-keywords,
#paige-reading-time,
#paige-series,
#paige-toc,
.paige-authors,
.paige-date,
.paige-keywords,
.paige-reading-time,
.paige-series,
.paige-summary {
    display: none;
}
```

### Narrow look

By default, the content expands to fill the whole window.
This can result in very long lines, depending on the window width.
To use [the recommended line length of 66 characters](https://en.wikipedia.org/wiki/Line_length#Printed_text),
try the following in `yoursite/hugo.toml`:

```toml
[params.paige]
style = "#paige-content { width: 66ch; }"
```

### Menu navigation only

If you configure a menu, and intend for it to be sufficient for all navigation,
you should hide the breadcrumbs on every page,
and hide the collection, section, and page lists on the home page if you use the default home page layout.

To hide the breadcrumbs on every page,
try the following in `yoursite/layouts/partials/paige/style-first.css`:

```css
#paige-breadcrumbs {
    display: none;
}
```

To hide the collection, section, and page lists on the home page,
try the following in `yoursite/content/_index.md`:

```toml
[paige]
style = """
#paige-collections,
#paige-sections,
#paige-pages {
    display: none;
}
"""
```

## Implementation

The HTML author is the page authors.

The HTML description is the page description.

The HTML keywords is a union of the page keywords, tags, and categories.

The HTML title is the page title, followed by a middle dot, followed by the site title.
If one is missing, the other is used without the middle dot.
For the home page, the title is the page title, or the site title otherwise.

The HTML body has a header, a body, and a footer.
The header has the menu.
The body has the page article.
The footer has the copyright notice and the theme link.
The article has the page metadata, table of contents, and content.
The metadata has the page title, description, terms, authors, date, and reading time.

The copyright notice, title, and description can be Markdown. Markup is stripped for HTML and RSS titles.

The page title is displayed in an `h1` tag, so page content headers must start with `h2`.

The page date is the publish date.

The following NPM packages are used:

- [bootstrap](https://www.npmjs.com/package/bootstrap/v/5.3.2)
- [bootstrap-icons](https://www.npmjs.com/package/bootstrap-icons/v/1.11.0)
- [katex](https://www.npmjs.com/package/katex/v/0.16.8)

Hugo names, HTML names, CSS names, and JavaScript names that begin with "paige" capitalized in any way,
optionally prefixed with one or more underscores, are reserved.

## Credits

- Photos by [Lanty](https://unsplash.com/@photos_by_lanty)
- Photo by [Sergey Pesterev](https://unsplash.com/photos/JV78PVf3gGI)

## Project

Created by [Will Faught](https://willfaught.com).
Released under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
Hosted at https://github.com/willfaught/paige.
