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

Welcome to the last Hugo theme you'll probably ever need.

## Features

- Accessibility
- Analytics
- Automatic switching between light and dark color schemes
- Blog
- Bootstrap
- Comments
- Customizable
- Dark color scheme
- E-mail protection
- Facebook sharing
- Header links
- Landing page
- Light color scheme
- Math typesetting
- Menu
- Minimal design
- Multiple authors
- Multiple languages
- RSS with full content
- Responsive
- Right-to-left languages
- SEO
- Safari and Firefox Reader View support
- Search
- Sections
- Single column
- Social links
- Table of contents
- Twitter sharing

## Get started with Hugo

1. [Install Hugo](https://gohugo.io/installation/).

    For Homebrew on Mac:

    ```sh
    $ brew install hugo
    ```

2. Create a site:

    ```sh
    $ hugo new site yourproject
    ```

3. Create a post:

    ```sh
    $ cd yourproject
    $ hugo new my-post.md
    ```

See [Hugo's quick start guide](https://gohugo.io/getting-started/quick-start/) for more information.

## Install

### Option 1: Use a Hugo module

Example `config.yaml`:

```yaml
module:
  imports:
  - path: "github.com/willfaught/paige"
```

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

### Option 2: Use a Git subtree

Example `config.yaml`:

```yaml
theme: "paige"
```

Install:

```sh
$ cd yourproject
$ git subtree add --prefix themes/paige --squash https://github.com/willfaught/paige master
```

Update:

```sh
$ cd yourproject
$ git subtree pull --prefix themes/paige --squash https://github.com/willfaught/paige master
```

### Option 3: Use a Git submodule

Example `config.yaml`:

```yaml
theme: "paige"
```

Install:

```sh
$ cd yourproject
$ git submodule add https://github.com/willfaught/paige themes/paige
$ git submodule update --init --recursive --remote
```

Update:

```sh
$ cd yourproject
$ git submodule update --recursive --remote
```

### Option 4: Use a copy

Example `config.yaml`:

```yaml
theme: "paige"
```

Install:

```sh
$ cd yourproject
$ git clone https://github.com/willfaught/paige themes/paige
$ rm -rf themes/paige/.git
```

Update:

```sh
$ cd yourproject
$ rm -rf themes/paige
$ git clone https://github.com/willfaught/paige themes/paige
$ rm -rf themes/paige/.git
```

## Run

```sh
$ cd yourproject
$ hugo server -D
```

## Configure

All configuration settings have sensible defaults.
No manual configuration is required.

Optional site parameters:

```yaml
authors:
  michael_bluth:
    name: "Michael Bluth"
    default: true # Credit this author in pages that have no authors parameter
  george_bluth:
    name: "George Bluth"
paige:
  analytics:
    chartbeat: # chartbeat.com
      account_id: "123456"
      domain: "example.com"
    clicky: # clicky.com
      account_id: "123456"
    fathom: # usefathom.com
      account_id: "123456"
    finteza: # finteza.com
      account_id: "123456"
      script_url: "https://example.com/script.js"
    hotjar: # hotjar.com
      account_id: "123456"
    matomo: # matomo.org
      account_id: "123456"
      host_url: "https://example.com"
    mixpanel: # mixpanel.com
      token: "123456"
    plausible: # plausible.io
      account_id: "123456"
    woopra: # woopra.com
      domain: "example.com"
    yandex: # metrica.yandex.com
      account_id: "123456"
  bootstrap:
    icons:
      link_href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" # Local or remote file
      link_integrity: "sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" # File integrity hash
    script:
      script_integrity: "sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" # File integrity hash
      script_src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" # Local or remote file
    style:
      link_href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" # Local or remote file
      link_integrity: "sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" # File integrity hash
  color: "#123456" # Theme color for Safari and Windows
  color_scheme: "light" # Use the "light" or "dark" color scheme without automatic switching
  content_max_width: "66ch" # Page table of contents and content max width
  comments:
    cactus: # cactus.chat
      account_id: "123456"
    commento: # commento.io
      script_url: "https://example.com/script.js"
    hyvor: # hyvor.com
      account_id: "123456"
    intensedebate: # intensedebate.com
      account_id: "123456"
    isso: # isso-comments.de
      script_url: "https://example.com/script.js"
    remark42: # remark42.com
      host_url: "https://example.com"
      site_id: "123456"
    replybox: # getreplybox.com
      account_id: "123456"
    utterances: # utteranc.es
      github_repo: "example/foo"
  date_format: "2006 January 2" # Hugo date format for page dates
  hide_theme_comment: true # Don't put a link to this project in a code comment
  hide_theme_link: true # Don't put a link to this project in the footer
  math:
    autorender:
      script_integrity: "sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" # File integrity hash
      script_src: "https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/contrib/auto-render.min.js" # Local or remote file
    script:
      script_integrity: "sha384-97gW6UIJxnlKemYavrqDHSX3SiygeOwIZhwyOKRfSaf0JWKRVj9hLASHgFTzT+0O" # File integrity hash
      script_src: "https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.js" # Local or remote file
    style:
      link_href: "https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css" # Local or remote file
      link_integrity: "sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/" # File integrity hash
  menu_style: "links" # Menu is link list for "links", tab list for "tabs", or pill list if unset
  metadata_max_width: "100ch" # Page metadata max width
  rss:
    managing_editor: "Michael Bluth"
    web_master: "Michael Bluth"
  social: # Social links on the home page
    examplesite:
      icon: example-icon # Bootstrap icon name
      link: https://example.com/username
      name: Example Site # Used for screen readers
```

If you set `hide_theme_comment` or `hide_theme_link`, please credit this project in a post to help others find it.

Optional page parameters:

```yaml
authors: [
  "michael_bluth", # Credit the corresponding author name in the site parameters
  {"author": "michael_bluth"}, # Credit the corresponding author name in the site parameters
  {"name": "Lucille Bluth"} # Credit this author name
]
link: "https://youtu.be/dQw4w9WgXcQ" # The reference for an anchor around the title
paige:
  about_class: "h6 text-end" # Page about class
  content_class: "fst-italic" # Page content class
  description_class: "h5 text-start" # Page description class
  math: true # Enable math typesetting with KaTeX
  title_class: "display-1 fw-medium text-start" # Page title class
  toc: true # Show a table of contents if there are any headers
```

Additional optional home page parameters:

```yaml
blurb: "There's a new daddy in town." # Displayed below the greeting
greeting: "You know best" # Displayed below the image
image_raw: true # Do not copy or process the image
image_stretch: true # Stretch the image fully horizontally if true; center the image otherwise
image_url: "me.jpg" # A page, site, or remote resource glob
```

Additional optional list page parameters:

```yaml
paige:
  show_full_pages: true # Show full pages, not just page titles and descriptions
```

Additional optional single page parameters:

```yaml
paige:
  hide_rss: true # Don't include this page in RSS feeds
  hide_search: true # Don't include this page in search results
```

Example `config.yaml`:

```yaml
baseurl: https://example.com
copyright: © Michael Bluth
enablerobotstxt: true
languagecode: en-us
languages:
  en:
    menu:
      main:
      - identifier: home
        name: Home
        url: /
        weight: 10
      - identifier: about
        name: About
        url: /about/
        weight: 20
      - identifier: blog
        name: Blog
        url: /blog/
        weight: 30
      - identifier: categories
        name: Categories
        url: /categories/
        weight: 40
      - identifier: tags
        name: Tags
        url: /tags/
        weight: 50
      - identifier: search
        name: Search
        url: /search/
        weight: 60
    title: No Borders, No Limits
    weight: 10
markup:
  goldmark:
    renderer:
      unsafe: true
  tableofcontents:
    endlevel: 6
    ordered: true
    startlevel: 2
module:
  imports:
  - path: github.com/willfaught/paige
outputs:
  home:
  - html
  - json
  - rss
paginate: 50
params:
  paige:
    social:
      email:
        icon: envelope
        link: mailto:username@example.com
        name: E-mail
      github:
        icon: github
        link: https://github.com/username
        name: GitHub
      linkedin:
        icon: linkedin
        link: https://linkedin.com/in/username
        name: LinkedIn
permalinks:
  blog: /blog/:year/:month/:day/:title/
social:
  twitter: username
timezone: America/Los_Angeles
titlecasestyle: Go
```

## Layouts

The `paige/search` layout provides full site search.

Example `config.yaml`:

```yaml
outputs:
  home: ["html", "json", "rss"]
```

Example `content/search.md`:

```yaml
---
layout: paige/search
title: Search
---
```

## Shortcodes

### Figure

The `paige/figure` shortcode provides a figure with content.

```
{{< paige/figure
    caption="My caption"
    float="left"
    height="10rem"
    horizontal="center"
    maxheight="10rem"
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
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Maximum total height.</dd>
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

### Quote

The `paige/quote` shortcode provides a figure with a quotation.

```
{{< paige/quote >}}
My content
{{< /paige/quote >}}
```

Inner content: Required. String. Markdown. The quotation.

Parameters:

It has the parameters of the `paige/figure` shortcode.

### Code

The `paige/code` shortcode provides a figure with code.

```
{{< paige/code
    caption="My caption"
    lang="html"
    options="linenos=true"
>}}
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
    <dt><code>caption</code></dt>
    <dd>Optional. String. Markdown. Descriptive text below the code.</dd>
    <dt><code>lang</code></dt>
    <dd>Optional. Position 0. String. Chroma language code. Defaults to <code>plaintext</code>. See the <a href="https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages">codes</a>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo highlight options. See the <a href="https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode">options</a>.</dd>
</dl>

It has the other parameters of the `paige/figure` shortcode.

### Image

The `paige/image` shortcode provides a figure with an image.

```
{{< paige/image
    alt="My alt" >}}
    caption="My caption"
    link="https://github.com/willfaught/paige"
    method="resize"
    options="550x webp picture Lanczos"
    raw=false
    src="me.jpg"
    title="My title"
>}}
```

Inner content: None.

Parameters:

<dl>
    <dt><code>alt</code></dt>
    <dd>Optional. String. Plain text. Image alt.</dd>
    <dt><code>caption</code></dt>
    <dd>Optional. String. Markdown. Descriptive text below the image.</dd>
    <dt><code>link</code></dt>
    <dd>Optional. String. URL. Image link.</dd>
    <dt><code>method</code></dt>
    <dd>Optional. String. Hugo image processing method. Must be <code>crop</code>, <code>fill</code>, <code>fit</code>, or <code>resize</code>. Must be specified with <code>options</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo image processing options. Must be specified with <code>method</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>.</dd>
    <dt><code>raw</code></dt>
    <dd>Optional. Boolean. Whether to reference an image without copying it. Default is <code>false</code>.</dd>
    <dt><code>src</code></dt>
    <dd>Required. Position 0. String. URL. Image source.</dd>
    <dt><code>title</code></dt>
    <dd>Optional. String. Plain text. Image title.</dd>
</dl>

It has the other parameters of the `paige/figure` shortcode.

### Gallery

The `paige/gallery` shortcode provides a figure with a collection of images.

```
{{< paige/gallery
    align="center"
    caption="My caption"
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
    {{< paige/gallery
        caption="My caption"
        height="10rem"
        image="me.jpg"
        maxheight="10rem"
        maxwidth="10rem"
        method="resize"
        options="550x webp picture Lanczos"
        raw=false
        width="10rem"
    />}}
    {{< paige/gallery
        caption="My caption"
        height="10rem"
        image="you.jpg"
        maxheight="10rem"
        maxwidth="10rem"
        method="resize"
        options="550x webp picture Lanczos"
        raw=false
        width="10rem"
    />}}
{{< /paige/gallery >}}
```

Inner content: Optional. String. HTML. Must be other uses of this shortcode.

Parameters:

<dl>
    <dt><code>align</code></dt>
    <dd>Optional. String. Cross axis alignment. Must be <code>baseline</code>, <code>center</code>, <code>end</code>, <code>start</code>, or <code>stretch</code>. Must not be used when nested.</dd>
    <dt><code>caption</code></dt>
    <dd>Optional. String. Markdown. Descriptive text below the image or images.</dd>
    <dt><code>height</code></dt>
    <dd>Optional. String. CSS value. Image height.</dd>
    <dt><code>image</code></dt>
    <dd>Optional. String. Page, site, or remote image glob. Only used in the inner content of this shortcode.</dd>
    <dt><code>images</code></dt>
    <dd>Optional. Position 0. String. Page, site, or remote images glob. Default is all image page resources.</dd>
    <dt><code>justify</code></dt>
    <dd>Optional. String. Main axis space distribution. Must be <code>around</code>, <code>between</code>, <code>center</code>, <code>end</code>, <code>evenly</code>, or <code>start</code>. Must not be used when nested.</dd>
    <dt><code>maxheight</code></dt>
    <dd>Optional. String. CSS value. Maximum image height.</dd>
    <dt><code>maxwidth</code></dt>
    <dd>Optional. String. CSS value. Maximum image width.</dd>
    <dt><code>method</code></dt>
    <dd>Optional. String. Hugo image processing method. Must be <code>crop</code>, <code>fill</code>, <code>fit</code>, or <code>resize</code>. Default is <code>resize</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-methods">methods</a>.</dd>
    <dt><code>options</code></dt>
    <dd>Optional. String. Hugo image processing options. Default is <code>550x webp picture Lanczos</code>. See the <a href="https://gohugo.io/content-management/image-processing/#image-processing-options">options</a>.</dd>
    <dt><code>raw</code></dt>
    <dd>Optional. Boolean. Whether to reference an image without copying it. Default is <code>false</code>.</dd>
    <dt><code>type</code></dt>
    <dd>Optional. String. Type of layout. Grid and list layouts use the horizontal axis as the main axis, and the vertical axis as the cross axis. Must be <code>grid</code> or <code>list</code>. Default is <code>list</code>.</dd>
    <dt><code>width</code></dt>
    <dd>Optional. String. CSS value. Image width.</dd>
</dl>

It has the other parameters of the `paige/figure` shortcode.

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
    keyboard=true
    loop=false
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
    <dt><code>keyboard</code></dt>
    <dd>Optional. Boolean. Enable keyboard input. Default is <code>true</code>.</dd>
    <dt><code>loop</code></dt>
    <dd>Optional. Boolean. Loop the video. Default is <code>false</code>.</dd>
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
</dl>

See [Vimeo documentation](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview) for more detail.

### YouTube

The `paige/youtube` shortcode provides a responsive YouTube video.

```
{{< paige/youtube
    autoplay=false
    controls=true
    end=20
    fullscreen=true
    list=PL2WkvfelorAFjpzGUWc4OWAWmiJpwL97L
    loop=true
    mute=true
    start=10
    title="My title"
    video="dQw4w9WgXcQ"
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
    <dt><code>list</code></dt>
    <dd>Optional. String. Playlist ID.</dd>
    <dt><code>loop</code></dt>
    <dd>Optional. Boolean. Loop the video.</dd>
    <dt><code>mute</code></dt>
    <dd>Optional. Boolean. Mute the video.</dd>
    <dt><code>start</code></dt>
    <dd>Optional. Integer. Elapsed seconds. Start the video here.</dd>
    <dt><code>video</code></dt>
    <dd>Optional. Position 0. String. Video ID.</dd>
</dl>

## Customize

If `partials/paige/head-last.html` exists in the site, it is included at the end of the head tag.
If `partials/paige/body-last.html` exists in the site, it is included at the end of the body tag.

Most code is in partial templates that are included by the default layouts.
Elements can be added, changed, or removed easily by overriding the corresponding default layout or partial template.

For example, the default layouts
`home.html`, `list.html`, `single.html`, `taxonomy.html`, and `term.html`
include the partial template `paige/article.html`.
`paige/article.html` includes the partial templates `paige/metadata.html`, `paige/toc.html`, and `paige/content.html`.
`paige/metadata.html` includes the partial templates `paige/title.html`, `paige/description.html`, and `paige/other.html`.
To change the page title for those default layouts, change `paige/title.html`.
To change the page title for `single.html`,
replace the use of `paige/article.html` in `single.html` with the use of
`paige/title.html`, `paige/description.html`, `paige/other.html`, `paige/toc.html`, and `paige/content.html`,
then replace that use of `paige/title.html` with your own design.

## Design

The HTML author is the page authors, if any.

The HTML description is the page description, if any.

The HTML keywords is a union of the page keywords, tags, and categories, if any.

The HTML title is the page title, followed by a middle dot, followed by the site title.
If one is missing, the other is used without the middle dot.
For the home page, the title is the page title, if any, or the site title otherwise.

The HTML body can have a header, a body, and a footer.
The header has the menu, if any;
the page title, if any;
the page description, if any;
the page authors, if any;
and the page date, if any.
The body has the page content, if any.
The footer has the copyright notice, if any; and the theme link, if any.

The page title and description can be Markdown. Markup is stripped for HTML and RSS titles.

The page title is displayed in an `h1` tag, so page content headers must start with `h2`.

The page date is the publish date, if any.

## Implementation

Bootstrap 5.3.0-alpha1 CSS and JavaScript and Bootstrap Icons 1.10.3 are used unless overridden.

Hugo names, CSS names, and JavaScript names that begin with "paige" capitalized in any way are reserved.

## Community

Get started by [starring](https://github.com/willfaught/paige/stargazers)
and [following](https://github.com/willfaught/paige/watchers) the project.

If you find a problem or have a suggestion, please share it by [creating an issue](https://github.com/willfaught/paige/issues/new).
Feedback is encouraged and appreciated.

If you have a fix or improvement, please share it by [creating a pull request](https://github.com/willfaught/paige/compare).

## Credits

Photo by [Sergey Pesterev](https://unsplash.com/photos/JV78PVf3gGI).

## Project

Created by [Will Faught](https://willfaught.com).
Released under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
Hosted at https://github.com/willfaught/paige.
