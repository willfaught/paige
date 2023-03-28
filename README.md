# Paige

Powerful, pliable pixel perfection. An advanced Hugo theme. [Try it out.](https://willfaught.com/paige)

<img src="https://github.com/willfaught/paige/raw/master/images/screenshot.jpg">

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
- Authors
- Automatic switching between light and dark color schemes
- Blog
- Bootstrap
- Categories
- Code shortcode
- Comments
- Customizable
- Dark color scheme
- E-mail protection
- Facebook sharing
- Figure shortcode
- Gallery shortcode
- Header links
- Icon shortcode
- Image shortcode
- Landing page
- Languages
- Light color scheme
- Math typesetting
- Menu
- Minimal design
- Quote shortcode
- RSS with full content
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

Please share your deployed sites by [posting links](https://github.com/willfaught/paige/discussions/12).

## Get started with Hugo

1. [Install Hugo](https://gohugo.io/installation/) (the extended version is required).

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

2. [Install Embedded Dart Sass](https://github.com/sass/dart-sass-embedded/releases).

    For Homebrew on Mac:

    ```sh
    $ brew install sass/sass/dart-sass-embedded
    ```

    For Chocolatey on Windows:

    ```sh
    $ choco install dart-sass-embedded
    ```

    For Snap on Linux:

    ```sh
    $ sudo snap install dart-sass-embedded
    ```

3. Create a site:

    ```sh
    $ hugo new site yourproject
    ```

4. Create a post:

    ```sh
    $ cd yourproject
    $ hugo new my-post.md
    ```

See [Hugo's quick start guide](https://gohugo.io/getting-started/quick-start/) for more information.

## Install

Install:

```sh
$ cd yourproject
$ hugo mod init github.com/youraccount/yourproject
$ hugo mod get github.com/willfaught/paige
```

Update:

```sh
$ cd yourproject
$ hugo mod get -u
```

Example `config.yaml`:

```yaml
module:
  imports:
  - path: "github.com/willfaught/paige"
```

## Run

```sh
$ cd yourproject
$ hugo server -D
```

## Configure

There is a single parameter object with sensible defaults that can be overridden in site or page parameters:

```yaml
paige:
  analytics:
    chartbeat: # See https://chartbeat.com
      account_id: ""
      domain: ""
    disabled: false # Disable all analytics
    clicky: # See https://clicky.com
      account_id: ""
    fathom: # See https://usefathom.com
      account_id: ""
    finteza: # See https://finteza.com
      account_id: ""
      script_url: ""
    hotjar: # See https://hotjar.com
      account_id: ""
    matomo: # See https://matomo.org
      account_id: ""
      host_url: ""
    mixpanel: # See https://mixpanel.com
      token: ""
    plausible: # See https://plausible.io
      account_id: ""
    woopra: # See https://woopra.com
      domain: ""
    yandex: # See https://metrica.yandex.com
      account_id: ""
  color: "#0d6efd" # Bootstrap primary color; theme color for Safari and Windows
  comments:
    cactus: # See https://cactus.chat
      account_id: ""
    commento: # See https://commento.io
      script_url: ""
    disabled: false # Disable all comments
    hyvor: # See https://hyvor.com
      account_id: ""
    intensedebate: # See https://intensedebate.com
      account_id: ""
    isso: # See https://isso-comments.de
      script_url: ""
    remark42: # See https://remark42.com
      host_url: ""
      site_id: ""
    replybox: # See https://getreplybox.com
      account_id: ""
    utterances: # See https://utteranc.es
      github_repo: ""
  date:
    format: ":date_long" # Hugo date format
    source: "published" # Displayed date in single pages; must be "published" or "modified"
  git:
    commit_url_prefix: "" # Example is "https://github.com/willfaught/paige/commit/"
  math: false # Enable math typesetting
  menu:
    breakpoint: "sm" # Bootstrap breakpoint at which to display all menu items
    style: "pills" # Must be "links" or "pills"
  rss:
    hide_page: false
    managing_editor: ""
    web_master: ""
  search:
    hide_page: false
  style: "" # CSS included at the end of the stylesheet, before style-last.css
```

The assigned values shown are the default values.

Optional site parameters:

```yaml
authors:
  will-faught:
    name: "Will Faught"
    default: false # Credit this author in pages that have no authors parameter
```

Optional page parameters:

```yaml
authors:
- "will-faught" # Credit the corresponding author in the site parameters
- author: "will-faught" # Credit the corresponding author in the site parameters
- name: "Will Faught" # Credit this author
link: "https://youtu.be/dQw4w9WgXcQ" # The reference for an anchor around the title
paige:
  alert: "Alert!" # Markdown displayed before the page body (defaults to primary alert type)
  alert:
    message: "Alert!" # Markdown displayed before the page body
    type: "primary" # Bootstrap alert type
  pin: true # Display this page before the rest
```

## Features

An optional menu can be configured.
The active menu item has a URL that is a prefix of the path of the current page.

Example `config.yaml`:

```yaml
languages:
  en:
    menu:
      main:
      - identifier: "home"
        name: "Home"
        url: "/"
        weight: 10
      - identifier: "blog"
        name: "Blog"
        url: "/blog/"
        weight: 20
      - identifier: "tags"
        name: "Tags"
        url: "/tags/"
        weight: 30
      - identifier: "search"
        name: "Search"
        url: "/search/"
        weight: 40
    weight: 10
```

## Layouts

### Cloud

The `paige/cloud` layout provides a link cloud for sub-pages.

Example `content/tags/_index.md`:

```yaml
layout: "paige/cloud"
```

The assigned values shown are the default values.

### Search

The `paige/search` layout provides a search page.

Example `config.yaml`:

```yaml
outputs:
  home: ["html", "json", "rss"]
```

Example `content/search.md`:

```yaml
layout: "paige/search"
title: "Search"
```

## Shortcodes

### Code

The `paige/code` shortcode provides a figure with code.

```
{{< paige/code lang="html" options="linenos=true" >}}
<!doctype html>
<html lang="en">
<body>
  <p>Test</p>
</body>
</html>
{{< /paige/code >}}
```

Inner content: Required. String. The code.

Parameters:

<dl>
    <dt><code>lang</code></dt>
    <dd>Optional. Position 0. String. Chroma language code. Defaults to <code>plaintext</code>. See the <a href="https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages">codes</a>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo highlight options. See the <a href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode">options</a>.</dd>
</dl>

### Figure

The `paige/figure` shortcode provides a figure with content.

```
{{< paige/figure
    caption="My caption"
    float="left"
    height="10rem"
    horizontal="center"
    maxwidth="10rem"
    number=0
    numbered=false
    vertical="center"
    width="10rem"
>}}
My content
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

The `paige/gallery` shortcode provides a figure with a collection of images.

```
{{< paige/gallery
    align="center"
    format="webp"
    height="10rem"
    images="*.jpg"
    justify="center"
    maxheight="10rem"
    maxwidth="10rem"
    method="resize"
    options="550x webp picture Lanczos"
    type="list"
    width="10rem"
/>}}

{{< paige/gallery >}}
{{< paige/image src="1.jpg" >}}
{{< paige/image src="2.jpg" >}}
{{< paige/image src="3.jpg" >}}
{{< /paige/gallery >}}
```

Inner content: Optional. String. HTML.

Parameters:

<dl>
    <dt><code>align</code></dt>
    <dd>Optional. String. Cross axis alignment. Must be <code>baseline</code>, <code>center</code>, <code>end</code>, <code>start</code>, or <code>stretch</code>.</dd>
    <dt><code>format</code></dt>
    <dd>Optional. String. Image format. Must be <code>bmp</code>, <code>gif</code>, <code>jpg</code>, <code>png</code>, <code>tiff</code>, or <code>webp</code>. Must not be used with <code>method</code> or <code>options</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Image height.</dd>
    <dt><code>images</code></dt>
    <dd>Optional. Position 0. String. Page, site, or remote images glob. Default is all image page resources.</dd>
    <dt><code>justify</code></dt>
    <dd>Optional. String. Main axis space distribution. Must be <code>around</code>, <code>between</code>, <code>center</code>, <code>end</code>, <code>evenly</code>, or <code>start</code>.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Maximum image height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Maximum image width.</dd>
    <dt><code>method</code></dt>
    <dd>Optional. String. Hugo image processing method. Must be <code>crop</code>, <code>fill</code>, <code>fit</code>, or <code>resize</code>. Default is <code>resize</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo image processing options. Default is <code>550x webp picture Lanczos</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>.</dd>
    <dt><code>type</code></dt>
    <dd>Optional. String. Type of layout. Grid and list layouts use the horizontal axis as the main axis, and the vertical axis as the cross axis. Must be <code>grid</code> or <code>list</code>. Default is <code>list</code>.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Image width.</dd>
</dl>

### Hero

The `paige/hero` shortcode provides a hero section.

```
{{< paige/hero
    alt="My alt"
    format="webp"
    header="My header"
    height="10rem"
    image="https://github.com/willfaught/paige"
    imageclass="rounded-4 shadow"
    maxheight="10rem"
    maxwidth="10rem"
    title="My title"
    width="10rem"
>}}
My content
{{< /paige/hero >}}
```

Inner content: Optional. String. Markdown. The body.

Parameters:

<dl>
    <dt><code>alt</code></dt>
    <dd>Optional. String. Plain text. Image alt.</dd>
    <dt><code>format</code></dt>
    <dd>Optional. String. Image format. Must be <code>bmp</code>, <code>gif</code>, <code>jpg</code>, <code>png</code>, <code>tiff</code>, or <code>webp</code>. Must not be used with <code>method</code> or <code>options</code>.</dd>
    <dt><code>header</code></dt>
    <dd>Optional. String. Markdown. The header.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Image height.</dd>
    <dt><code>image</code></dt>
    <dd>Optional. String. URL. Image source.</dd>
    <dt><code>imageclass</code></dt>
    <dd>Optional. String. Class attribute value.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Image maximum height. Default is <code>20rem</code>.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Image maximum width.</dd>
    <dt><code>stretch</code></dt>
    <dd>Optional. Boolean. Whether to stretch the image fully horizontally.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. String. Plain text. Image title.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Image width.</dd>
</dl>

### Icon

The `paige/icon` shortcode provides a web font icon.

```
{{< paige/icon class="bi bi-github" name="GitHub" url="https://github.com/willfaught/paige" >}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>class</code></dt>
    <dd>Required. Position 0. String. Class attribute value.</dd>
    <dt><code>name</code></dt>
    <dd>Optional. String. The screen reader description.</dd>
    <dt><code>url</code></dt>
    <dd>Optional. String. URL. E-mails in URLs with a <code>mailto:</code> scheme are protected from web crawlers.</dd>
</dl>

### Image

The `paige/image` shortcode provides a figure with an image.

```
{{< paige/image
    alt="My alt" >}}
    format="webp"
    height="10rem"
    link="https://github.com/willfaught/paige"
    maxheight="10rem"
    maxwidth="10rem"
    method="resize"
    options="550x webp picture Lanczos"
    src="me.jpg"
    title="My title"
    width="10rem"
>}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>alt</code></dt>
    <dd>Optional. String. Plain text. Image alt.</dd>
    <dt><code>format</code></dt>
    <dd>Optional. String. Image format. Must be <code>bmp</code>, <code>gif</code>, <code>jpg</code>, <code>png</code>, <code>tiff</code>, or <code>webp</code>. Must not be used with <code>method</code> or <code>options</code>.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Image height.</dd>
    <dt><code>link</code></dt>
    <dd>Optional. String. URL. Image link.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Image maximum height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Image maximum width.</dd>
    <dt><code>method</code></dt>
    <dd>Optional. String. Hugo image processing method. Must be <code>crop</code>, <code>fill</code>, <code>fit</code>, or <code>resize</code>. Must be specified with <code>options</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo image processing options. Must be specified with <code>method</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>.</dd>
    <dt><code>src</code></dt>
    <dd>Required. Position 0. String. URL. Image source.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. String. Plain text. Image title.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Image width.</dd>
</dl>

### Quote

The `paige/quote` shortcode provides a figure with a quotation.

```
{{< paige/quote >}}
My content
{{< /paige/quote >}}
```

Inner content: Required. String. Markdown. The quotation.

Parameters: None.

### Vimeo

The `paige/vimeo` shortcode provides a responsive Vimeo video.

```
{{< paige/vimeo
    autopause=true
    autoplay=false
    background=false
    byline=true
    color="00adef"
    controls=true
    description="My description"
    dnt=false
    fullscreen=true
    height="10rem"
    keyboard=true
    loop=false
    maxheight="10rem"
    maxwidth="10rem"
    muted=false
    pip=false
    playsinline=true
    portrait=true
    quality="auto"
    speed=false
    texttrack=false
    time="1m2s"
    title=true
    transparent=true
    video="644036051"
    width="10rem"
>}}
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

The `paige/youtube` shortcode provides a responsive YouTube video.

```
{{< paige/youtube
    autoplay=false
    controls=true
    description="YouTube video"
    end=0
    fullscreen=true
    height="10rem"
    list="PL2WkvfelorAFjpzGUWc4OWAWmiJpwL97L"
    loop=false
    maxheight="10rem"
    maxwidth="10rem"
    mute=false
    start=0
    video="dQw4w9WgXcQ"
    width="10rem"
>}}
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

| If this file exists in the site            | It is included at               |
| ------------------------------------------ | ------------------------------- |
| `layouts/partials/paige/body-first.html`   | The beginning of the body tag   |
| `layouts/partials/paige/body-last.html`    | The end of the body tag         |
| `layouts/partials/paige/footer-first.html` | The beginning of the footer tag |
| `layouts/partials/paige/footer-last.html`  | The end of the footer tag       |
| `layouts/partials/paige/head-first.html`   | The beginning of the head tag   |
| `layouts/partials/paige/head-last.html`    | The end of the head tag         |
| `layouts/partials/paige/header-first.html` | The beginning of the header tag |
| `layouts/partials/paige/header-last.html`  | The end of the header tag       |
| `layouts/partials/paige/main-first.html`   | The beginning of the main tag   |
| `layouts/partials/paige/main-last.html`    | The end of the main tag         |
| `layouts/partials/paige/style-first.css`   | The beginning of the style tag  |
| `layouts/partials/paige/style-last.css`    | The end of the style tag        |

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
    <dt><code>.paige-article</code></dt>
    <dd>The article.</dd>
    <dt><code>.paige-authors</code></dt>
    <dd>The authors.</dd>
    <dt><code>.paige-content</code></dt>
    <dd>The content.</dd>
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
    <dt><code>.paige-toc</code></dt>
    <dd>The table of contents.</dd>
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
try the following in your `layouts/partials/paige/style-first.css`:

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

## Design

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

## Implementation

The following NPM packages are used:

- [bootstrap](https://www.npmjs.com/package/bootstrap/v/5.3.0-alpha1)
- [bootstrap-icons](https://www.npmjs.com/package/bootstrap-icons/v/1.10.3)
- [katex](https://www.npmjs.com/package/katex/v/0.16.4)

Hugo names, HTML names, CSS names, and JavaScript names that begin with "paige" capitalized in any way,
optionally prefixed with one or more underscores, are reserved.

## Credits

- Photos by [Lanty](https://unsplash.com/@photos_by_lanty)
- Photo by [Sergey Pesterev](https://unsplash.com/photos/JV78PVf3gGI)

## Project

Created by [Will Faught](https://willfaught.com).
Released under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
Hosted at https://github.com/willfaught/paige.
