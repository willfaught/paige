# Paige

Powerful, pliable pixel perfection. An advanced Hugo theme. [Try it out.](https://willfaught.com/paige)

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/willfaught/paige/raw/master/images/screenshot-dark.jpg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/willfaught/paige/raw/master/images/screenshot.jpg">
    <img alt="Screenshot" src="https://github.com/willfaught/paige/raw/master/images/screenshot.jpg">
</picture>

Paige is designed to put your content front and center, avoiding the typical clutter. The look is seamless and smooth, scalable and readable, portable and efficient. The layout is minimal and responsive, using verticality and white space to delineate and highlight each part of the page. The implementation is flexible and extensible. It’s a versatile canvas that serves most needs.

## Features

- Accessibility
- Atom feed
- Authors
- Blog
- Bootstrap styles and icons
- Categories
- Code shortcode
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
- Responsive
- Right-to-left languages
- RSS feed
- Safari and Firefox Reader View support
- Search
- Sections
- SEO
- Series
- Single column
- Social media links
- Table of contents
- Tab shortcode
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

1. [Install Hugo](https://gohugo.io/installation/) (the extended version, and at least v0.141.0).

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
    $ hugo new site yoursite
    ```

4. Create a post:

    ```sh
    $ cd yoursite
    $ hugo new yourpost.md
    ```

5. Install the Paige module:

    ```sh
    $ cd yoursite
    $ hugo mod init github.com/youraccount/yoursite
    $ hugo mod get github.com/willfaught/paige@latest
    ```

6. Import the Paige module:

    ```sh
    $ cd yoursite
    $ cat >>hugo.toml <<EOF
    [[module.imports]]
    path = "github.com/willfaught/paige"
    EOF
    ```

7. Build and run the site:

    ```sh
    $ cd yoursite
    $ hugo server -D
    ```

8. Update the Paige module:

    ```sh
    $ cd yoursite
    $ hugo mod get github.com/willfaught/paige@latest
    ```

See Hugo's [installation](https://gohugo.io/installation/), [getting started](https://gohugo.io/getting-started/), and [module](https://gohugo.io/hugo-modules/) guides for more information.

See the [minimal look](#minimal-look), [narrow look](#narrow-look), [narrow-and-wide look](#narrow-and-wide-look), and [menu navigation only](#menu-navigation-only) sections for common customizations.

## Configure

### Parameters

There is a single parameter object with sensible defaults that can be overridden in site or page parameters:

```toml
[paige]

enable_math = false # Enables math typesetting for this page
exclude_feeds = false # Exclude this page from feeds
exclude_search = false # Exclude the page from search
style = "" # CSS included at the end of the stylesheet, before style-last.css, for this page

[paige.alert]

message = "" # Markdown displayed before the page body
type = "primary" # Bootstrap alert class

[paige.feeds]

link_to_page = false # Link to the page instead of the front matter link, if present
page_link = "⏎" # If a front matter link is present, and link_to_page is false, then link to the page with this text

[paige.feeds.atom]

authors = []
# Example:
# [[paige.feeds.atom.authors]]
# email = "example@example.com"
# name = "John Doe"
# url = "https://github.com/account/project"
icon = "" # Example: "/icon.webp"
logo = "" # Example: "/logo.webp"

[paige.feeds.rss]

managing_editor = "" # Example: "example@example.com (John Doe)"
web_master = "" # Example: "example@example.com (John Doe)"

[paige.pages]

# Content
disable_authors = false
disable_collections = false
disable_date = false
disable_description = false
disable_edit = false
disable_history = false
disable_keywords = false
disable_next = false
disable_pages = false
disable_prev = false
disable_reading_time = false
disable_sections = false
disable_series = false
disable_title = false
disable_toc = false

# Navigation
edit_url = "" # Example: "https://github.com/account/project/edit/master/content/%s"
history_url = "" # Example: "https://github.com/account/project/commits/master/content/%s"

# Schema
base_schema = {} # JSON-LD schema that all page schemas override
# Example:
# [paige.pages.base_schema]
# isAccessibleForFree = true
# isFamilyFriendly = true
# [paige.pages.base_schema.publisher]
# "@type" = "Organization"
# name = "John Doe"
# url = "https://example.com"
disable_auto_schema = false # Disables the automatic JSON-LD schema generation
microdata = {} # Microdata non-property attributes (all except itemprop) for the web page
# Example:
# [paige.pages.microdata]
# itemid = "foo"
# itemref = "bar"
# itemscope = ""
# itemtype = "https://schema.org/Chapter
schemas = [] # JSON-LD schemas
# Example:
# [[paige.pages.schemas]]
# "@context" = "https://schema.org"
# "@type" = "Book"
# name = "My Book"
# url = "https://example.com"

[paige.site]

# Behavior
date_format = ":date_long" # Hugo date format
external_link_new_tab = false # Open external links in new tabs

# Content
disable_copyright = false
disable_credit = false
disable_description = false
disable_license = false
disable_title = false

# Navigation
disable_breadcrumbs = false
disable_menu = false

# Presentation
color = "#0d6efd" # Bootstrap primary color and theme color for Safari and Windows
color_scheme = "auto" # Must be "auto", "dark", or "light"
keyword_style = "text" # Must be "text" or "pills"
menu_style = "links" # Must be "links", "pills", "tabs", or "underline"

# Schema
base_schema = {} # JSON-LD schema that all site schemas override
# Example:
# [paige.site.base_schema]
# isAccessibleForFree = true
# isFamilyFriendly = true
# [paige.site.base_schema.publisher]
# "@type" = "Organization"
# name = "John Doe"
# url = "https://example.com"
schemas = [] # JSON-LD schemas
# Example:
# [[paige.site.schemas]]
# "@context" = "https://schema.org"
# "@type" = "Organization"
# name = "Acme"
# url = "https://example.com"

# Values
credit = '<a class="link-secondary text-decoration-none" href="https://github.com/willfaught/paige">Paige Theme</a>'
description = "" # Site description. Appears above the menu and below the site title if set.
license = "" # Example: "CC BY 4.0 License"

[paige.subpages]

disable_authors = false
disable_date = false
disable_description = false
disable_keywords = false
disable_reading_time = false
disable_series = false
disable_summary = false
disable_title = false
```

The parameter object is accessed in site parameters as `[params.paige]`, and in page parameters as `[paige]`.

The assigned values shown are the default values unless otherwise specified.

Parameters specific to pages:

```toml
link = "" # The reference for an anchor around the title. Example: "https://youtu.be/dQw4w9WgXcQ".
```

The assigned values shown are the default values.

Parameters specific to author term pages (if the "authors" taxonomy is configured):

```toml
[paige.author]
email = "" # Example: example@example.com
name = "" # Example: John Doe
url = "" # Example: https://example.com
```

The assigned values shown are the default values.

Parameters specific to menus:

```toml
[paige]
disabled = false
divider_above = false
divider_below = false
header_above = ""
header_below = ""
```

The assigned values shown are the default values.

### Menu

The menu can be configured using the `main` menu.
The active menu item has a URL that is a prefix of the path of the current page.
A menu item with the URL `/` only matches a `/` path.

If you intend for the menu to be sufficient for all navigation,
see [how to hide other navigation features](#menu-navigation-only).

### Taxonomies

Support for authors, categories, series, and tags taxonomies is built in.

Set `default` to `true` in the front matter of an author term page for that author to be credited in regular pages that have no authors parameter.
A default author must be referenced at least once explicitly in a regular page.

To disable the rendering of author pages, add this to `yoursite/hugo.toml`:

```toml
[[cascade]]
[cascade._target]
path = "{/authors,/authors/**}"
[cascade.build]
render = "never"
```

The `email` and `url` parameters in the front matter of an author term page are used in feeds if present.

### SEO

The "author", "description", and "keywords" meta tags are generated from the page parameters.
The keywords are the page parameters "keywords", "categories", and "tags".

A JSON-LD script is generated from the page parameters,
which can be disabled with `paige.pages.disable_auto_schema`.
Arbitrary schemas can be specified for the site with `paige.site.schemas`
or for pages with `paige.pages.schemas`, at the site or page level.
A base schema can be specified for site schemas with `paige.site.base_schema`,
and for page schemas with `paige.pages.base_schema`.

HTML microdata is generated from the page parameters
if the non-property attributes are specified in `paige.pages.microdata`.

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
home = ["atom", "html", "paige-search", "rss"]
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
    options=""
    unescape=false >}}

{{< /paige/code >}}
```

Parameters:

<dl>
    <dt><code>lang</code></dt>
    <dd>Optional. Position 0. String. Chroma <a href="https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages">language code</a>. Default is <code>plaintext</code>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo <a href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode">highlight options</a>.</dd>
    <dt><code>unescape</code></dt>
    <dd>Optional. Boolean. Whether to reverse the HTML escaping in the body. Useful for when the request shortcode is used in the body.</dd>
</dl>

Body: Required. String. The code.

### Email

The `paige/email` shortcode hides e-mail addresses from robots.

```
{{< paige/email
    address="" >}}

{{< /paige/email >}}
```

Parameters:

<dl>
    <dt><code>address</code></dt>
    <dd>Required. Position 0. String. The e-mail address.</dd>
</dl>

Body: Required. String. Markdown. The content.

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

Body: Required. String. Markdown. The content.

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

Body: Optional. String. HTML. The images.

### Icon

The `paige/icon` shortcode provides a web font icon.

```
{{< paige/icon
    class=""
    title=""
    url="" >}}
```

Parameters:

<dl>
    <dt><code>class</code></dt>
    <dd>Required. Position 0. String. <code>&lt;i&gt;</code> class. Example: <code>bi bi-github</code>.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. String. The screen reader description and anchor title. Example: <code>GitHub</code>.</dd>
    <dt><code>url</code></dt>
    <dd>Optional. String. URL. Example: <code>https://github.com/account/project</code>. E-mails in URLs with a <code>mailto:</code> scheme are protected from web crawlers.</dd>
</dl>

Body: None.

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

Body: None.

### Quote

The `paige/quote` shortcode provides a quotation.

```
{{< paige/quote
    cite="" >}}

{{< /paige/quote >}}
```

Parameters:

<dl>
    <dt><code>cite</code></dt>
    <dd>Optional. String. Plain text. Citation.</dd>
</dl>

Body: Required. String. Markdown. The quotation.

### Request

The `paige/request` shortcode provides the content for a URL.

```
{{< paige/request
    method=""
    url="" >}}
```

Parameters:

<dl>
    <dt><code>method</code></dt>
    <dd>Optional. String. HTTP method. Default is <code>get</code>.</dd>
    <dt><code>url</code></dt>
    <dd>Required. String. URL.</dd>
</dl>

Body: None.

### Tabs

The `paige/tabs` shortcode provides tab buttons and tab panes.
It must contain one `paige/tabs/buttons` shortcode, and then one `paige/tabs/panes` shortcode.

```
{{< paige/tabs >}}

{{< /paige/tabs >}}
```

Parameters: None.

Body: Required. String. HTML. The tab buttons and tab panes.

The `paige/tabs/buttons` shortcode provides tab buttons.
It must contain one or more `paige/tabs/button` shortcodes.
Each `paige/tabs/button` shortcode corresponds to the `paige/tabs/pane` shortcode in the same position.

```
{{< paige/tabs/buttons >}}

{{< /paige/tabs/buttons >}}
```

Parameters: None.

Body: Required. String. HTML. The tab buttons.

The `paige/tabs/button` shortcode provides a tab button.

```
{{< paige/tabs/button >}}

{{< /paige/tabs/button >}}
```

Parameters: None.

Body: Required. String. Markdown. The tab button content.

The `paige/tabs/panes` shortcode provides tab panes.
It must contain one or more `paige/tabs/pane` shortcodes.
Each `paige/tabs/pane` shortcode corresponds to the `paige/tabs/button` shortcode in the same position.

```
{{< paige/tabs/panes >}}

{{< /paige/tabs/panes >}}
```

Parameters: None.

Body: Required. String. HTML. The tab panes.

The `paige/tabs/pane` shortcode provides a tab pane.

```
{{< paige/tabs/pane >}}

{{< /paige/tabs/pane >}}
```

Parameters: None.

Body: Required. String. Markdown. The tab pane content.

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

Body: None.

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

Body: None.

## Customize

### Include

Files can be included in many places in HTML.

| If this file exists                                      | It is included at                    |
| ---------------------------------------------------------| -------------------------------------|
| `yoursite/layouts/partials/paige/body-first.html`        | The beginning of the body tag        |
| `yoursite/layouts/partials/paige/body-last.html`         | The end of the body tag              |
| `yoursite/layouts/partials/paige/head-first.html`        | The beginning of the head tag        |
| `yoursite/layouts/partials/paige/head-last.html`         | The end of the head tag              |
| `yoursite/layouts/partials/paige/page-footer-first.html` | The beginning of the page footer tag |
| `yoursite/layouts/partials/paige/page-footer-last.html`  | The end of the page footer tag       |
| `yoursite/layouts/partials/paige/page-header-first.html` | The beginning of the page header tag |
| `yoursite/layouts/partials/paige/page-header-last.html`  | The end of the page header tag       |
| `yoursite/layouts/partials/paige/site-first.html`        | The beginning of the main tag        |
| `yoursite/layouts/partials/paige/site-last.html`         | The end of the main tag              |
| `yoursite/layouts/partials/paige/site-footer-first.html` | The beginning of the site footer tag |
| `yoursite/layouts/partials/paige/site-footer-last.html`  | The end of the site footer tag       |
| `yoursite/layouts/partials/paige/site-header-first.html` | The beginning of the site header tag |
| `yoursite/layouts/partials/paige/site-header-last.html`  | The end of the site header tag       |
| `yoursite/layouts/partials/paige/style-first.css`        | The beginning of the style tag       |
| `yoursite/layouts/partials/paige/style-last.css`         | The end of the style tag             |

There are kind variants of include files that are included only when the file kind matches the page kind.

| If this file exists                                     | It is included when         |
| --------------------------------------------------------| ----------------------------|
| `yoursite/layouts/partials/paige/[PLACE]-home.html`     | The page kind is "home"     |
| `yoursite/layouts/partials/paige/[PLACE]-page.html`     | The page kind is "page"     |
| `yoursite/layouts/partials/paige/[PLACE]-section.html`  | The page kind is "section"  |
| `yoursite/layouts/partials/paige/[PLACE]-taxonomy.html` | The page kind is "taxonomy" |
| `yoursite/layouts/partials/paige/[PLACE]-term.html`     | The page kind is "term"     |

Above, the place placeholder must be "body-first", "body-last", "head-first", etc.

Kind variants are included right after their counterpart non-kind variant.

The argument for the templates is the page.

### Override

Most code is in partial templates that the layout templates use.
Code can be added, changed, or removed easily by overriding the corresponding layout or partial template.

For example, `layouts/_default/list.html` and `layouts/_default/single.html` include `layouts/partial/paige/page.html`.
`layouts/partial/paige/page.html` includes `layouts/partial/paige/page-header.html`.
To change the page title for those layout templates, change `layouts/partial/paige/page-header.html`.

To change the page title for `layouts/_default/single.html` only,
replace the inclusion of `layouts/partial/paige/page.html` in `layouts/_default/single.html` with its content,
then in that, replace the inclusion of `layouts/partial/paige/page-header.html` with its content,
then in that, change the page title.

To change the favicon, override these files:

- `static/android-chrome-192x192.png`
- `static/android-chrome-512x512.png`
- `static/apple-touch-icon-114x114-precomposed.png`
- `static/apple-touch-icon-114x114.png`
- `static/apple-touch-icon-120x120-precomposed.png`
- `static/apple-touch-icon-120x120.png`
- `static/apple-touch-icon-144x144-precomposed.png`
- `static/apple-touch-icon-144x144.png`
- `static/apple-touch-icon-152x152-precomposed.png`
- `static/apple-touch-icon-152x152.png`
- `static/apple-touch-icon-180x180-precomposed.png`
- `static/apple-touch-icon-180x180.png`
- `static/apple-touch-icon-57x57-precomposed.png`
- `static/apple-touch-icon-57x57.png`
- `static/apple-touch-icon-60x60-precomposed.png`
- `static/apple-touch-icon-60x60.png`
- `static/apple-touch-icon-72x72-precomposed.png`
- `static/apple-touch-icon-72x72.png`
- `static/apple-touch-icon-76x76-precomposed.png`
- `static/apple-touch-icon-76x76.png`
- `static/apple-touch-icon-precomposed.png`
- `static/apple-touch-icon.png`
- `static/favicon-16x16.png`
- `static/favicon-32x32.png`
- `static/favicon.ico`
- `static/favicon.png`
- `static/favicon.svg`
- `static/mstile-144x144.png`
- `static/mstile-150x150.png`
- `static/mstile-310x150.png`
- `static/mstile-310x310.png`
- `static/mstile-70x70.png`
- `static/safari-pinned-tab.svg`

You can generate these favicon files [here](https://realfavicongenerator.net).

To change the syntax highlighting styles, override these files [with your own](https://gohugo.io/content-management/syntax-highlighting/#generate-syntax-highlighter-css):

- `layouts/partials/paige/dark.css`
- `layouts/partials/paige/light.css`

### Extend

Use CSS selectors to extend the default styling.

Page identifiers:

<dl>
    <dt><code>#paige-page-alert</code></dt>
    <dd>The page alert.</dd>
    <dt><code>#paige-page-authors</code></dt>
    <dd>The page authors.</dd>
    <dt><code>#paige-page-collections</code></dt>
    <dd>The page collections.</dd>
    <dt><code>#paige-page-collections-header</code></dt>
    <dd>The page collections header.</dd>
    <dt><code>#paige-page-content</code></dt>
    <dd>The page content.</dd>
    <dt><code>#paige-page-date</code></dt>
    <dd>The page date.</dd>
    <dt><code>#paige-page-description</code></dt>
    <dd>The page description.</dd>
    <dt><code>#paige-page-edit</code></dt>
    <dd>The page edit link.</dd>
    <dt><code>#paige-page-file</code></dt>
    <dd>The container of the page edit and history links.</dd>
    <dt><code>#paige-page-footer</code></dt>
    <dd>The page footer that contains the page edit, history, next, and previous links.</dd>
    <dt><code>#paige-page-header</code></dt>
    <dd>The page header that contains the page title, description, metadata, and table of contents.</dd>
    <dt><code>#paige-page-history</code></dt>
    <dd>The page history link.</dd>
    <dt><code>#paige-page-keywords</code></dt>
    <dd>The page keywords.</dd>
    <dt><code>#paige-page-metadata</code></dt>
    <dd>The page metadata.</dd>
    <dt><code>#paige-page-next</code></dt>
    <dd>The next page link.</dd>
    <dt><code>#paige-page-pages</code></dt>
    <dd>The page pages.</dd>
    <dt><code>#paige-page-pages-header</code></dt>
    <dd>The page pages header.</dd>
    <dt><code>#paige-page-pagination</code></dt>
    <dd>The pagination of sub-pages.</dd>
    <dt><code>#paige-page-prev</code></dt>
    <dd>The previous page link.</dd>
    <dt><code>#paige-page-reading-time</code></dt>
    <dd>The page reading time.</dd>
    <dt><code>#paige-page-sections</code></dt>
    <dd>The page sections.</dd>
    <dt><code>#paige-page-sections-header</code></dt>
    <dd>The page sections header.</dd>
    <dt><code>#paige-page-series</code></dt>
    <dd>The page series.</dd>
    <dt><code>#paige-page-siblings</code></dt>
    <dd>The container of the page next and previous links.</dd>
    <dt><code>#paige-page-title</code></dt>
    <dd>The page title.</dd>
    <dt><code>#paige-page-toc</code></dt>
    <dd>The page table of contents.</dd>
</dl>

Site identifiers:

<dl>
    <dt><code>#paige-site-breadcrumbs</code></dt>
    <dd>The site breadcrumbs.</dd>
    <dt><code>#paige-site-copyright</code></dt>
    <dd>The site copyright.</dd>
    <dt><code>#paige-site-credit</code></dt>
    <dd>The site credit.</dd>
    <dt><code>#paige-site-description</code></dt>
    <dd>The site description.</dd>
    <dt><code>#paige-site-footer</code></dt>
    <dd>The site footer that contains the site copyright, license, and credit.</dd>
    <dt><code>#paige-site-header</code></dt>
    <dd>The site header that contains the site title, description, menu, and breadcrumbs.</dd>
    <dt><code>#paige-site-license</code></dt>
    <dd>The site license.</dd>
    <dt><code>#paige-site-menu</code></dt>
    <dd>The site menu.</dd>
    <dt><code>#paige-site-title</code></dt>
    <dd>The site title.</dd>
</dl>

Page classes:

<dl>
    <dt><code>.paige-page-keyword</code></dt>
    <dd>A keyword.</dd>
    <dt><code>.paige-page-keyword-category</code></dt>
    <dd>A category keyword.</dd>
    <dt><code>.paige-page-keyword-tag</code></dt>
    <dd>A tag keyword.</dd>
    <dt><code>.paige-page-keywords</code></dt>
    <dd>The keywords.</dd>
</dl>

Sub-page classes:

<dl>
    <dt><code>.paige-page-authors</code></dt>
    <dd>The authors.</dd>
    <dt><code>.paige-page-date</code></dt>
    <dd>The date.</dd>
    <dt><code>.paige-description</code></dt>
    <dd>The description.</dd>
    <dt><code>.paige-page-metadata</code></dt>
    <dd>The metadata.</dd>
    <dt><code>.paige-page</code></dt>
    <dd>A page.</dd>
    <dt><code>.paige-page-reading-time</code></dt>
    <dd>The reading time.</dd>
    <dt><code>.paige-page-series</code></dt>
    <dd>The series.</dd>
    <dt><code>.paige-summary</code></dt>
    <dd>The summary.</dd>
    <dt><code>.paige-title</code></dt>
    <dd>The title.</dd>
</dl>

Page kind classes:

<dl>
    <dt><code>.paige-kind-home</code></dt>
    <dd>The container element of pages with kind "home".</dd>
    <dt><code>.paige-kind-section</code></dt>
    <dd>The container element of pages with kind "section".</dd>
    <dt><code>.paige-kind-page</code></dt>
    <dd>The container element of pages with kind "page".</dd>
    <dt><code>.paige-kind-taxonomy</code></dt>
    <dd>The container element of pages with kind "taxonomy".</dd>
    <dt><code>.paige-kind-term</code></dt>
    <dd>The container element of pages with kind "term".</dd>
</dl>

Page status classes:

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
    <dt><code>.paige-email</code></dt>
    <dd>The container element of <code>paige/email</code> shortcodes.</dd>
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

### Minimal look

By default, everything is shown.
If you want a more minimal look,
try the following in `yoursite/hugo.toml`:

```toml
[params.paige.subpages]
disable_authors = true
disable_date = true
disable_keywords = true
disable_reading_time = true
disable_series = true
disable_summary = true

[params.paige.pages]
disable_authors = true
disable_date = true
disable_keywords = true
disable_next = true
disable_prev = true
disable_reading_time = true
disable_series = true
disable_toc = true
```

### Narrow look

By default, the content expands to fill the whole window.
This can result in very long lines, depending on the window width.
To use [the recommended line length of 66 characters](https://en.wikipedia.org/wiki/Line_length#Printed_text) (40rem),
try the following in `yoursite/hugo.toml`:

```toml
[params.paige]
style = """
#paige-page-content > * { margin-left: auto; margin-right: auto; max-width: 40rem; }
"""
```

### Narrow-and-wide look

By default, the content expands to fill the whole window.
This can result in very long lines, depending on the window width.
To use [the recommended line length of 66 characters](https://en.wikipedia.org/wiki/Line_length#Printed_text) (40rem)
for all content except media,
try the following in `yoursite/hugo.toml`:

```toml
[params.paige]
style = """
#paige-page-content > * { margin-left: auto; margin-right: auto; max-width: 40rem; }
#paige-page-content > img,
#paige-page-content > .paige-image,
#paige-page-content > .paige-vimeo,
#paige-page-content > .paige-youtube { max-width: 100%; }
"""
```

### Menu navigation only

If you configure a menu, and intend for it to be sufficient for all navigation,
you should hide the breadcrumbs on every page,
and hide the collection, section, and page lists on the home page if you use the default home page layout.

To hide the breadcrumbs on every page,
try the following in `yoursite/hugo.toml`:

```toml
[params.paige.site]
disable_breadcrumbs = true
```

To hide the collection, section, and page lists on the home page,
try the following in `yoursite/content/_index.md`:

```toml
[params.paige.subpages]
disable_collections = true
disable_pages = true
disable_sections = true
```

## Credits

- Photos by [Lanty](https://unsplash.com/@photos_by_lanty)
- Photo by [Sergey Pesterev](https://unsplash.com/photos/JV78PVf3gGI)

## Project

Created by [Will Faught](https://willfaught.com).
Released under the [MIT License](https://spdx.org/licenses/MIT.html).
Hosted at https://github.com/willfaught/paige.
