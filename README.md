# Paige

A simple Hugo theme. [Try it out.](https://willfaught.com/paige)

## Screenshots

<img src="https://github.com/willfaught/paige/raw/master/images/screenshot.jpg">

Home page:

<img src="https://github.com/willfaught/paige/raw/master/images/home.jpg">

List page:

<img src="https://github.com/willfaught/paige/raw/master/images/list.jpg">

Single page:

<img src="https://github.com/willfaught/paige/raw/master/images/single.jpg">

Taxonomy page:

<img src="https://github.com/willfaught/paige/raw/master/images/taxonomy.jpg">

Term page:

<img src="https://github.com/willfaught/paige/raw/master/images/term.jpg">

404 page:

<img src="https://github.com/willfaught/paige/raw/master/images/404.jpg">

Search page:

<img src="https://github.com/willfaught/paige/raw/master/images/search.jpg">

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
    mixpanel:
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
  gallery: # Inherited by the paige/gallery and paige/gallery/item shortcodes
    display: "list" # Display images in a grid or list; values are "grid", "list"; default is "grid"
    method: "resize" # Hugo image processing method; values are "crop", "fill", "fit", "resize"; default is "resize"
    options: "550x webp picture Lanczos" # Hugo image processing options; default is "550x webp picture Lanczos"
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
  gallery: # Inherited by the paige/gallery and paige/gallery/item shortcodes
    display: "list" # Display images in a grid or list; values are "grid", "list"; default is "grid"
    method: "resize" # Hugo image processing method; values are "crop", "fill", "fit", "resize"; default is "resize"
    options: "550x webp picture Lanczos" # Hugo image processing options; default is "550x webp picture Lanczos"
  math: true # Enable math typesetting with KaTeX
  toc: true # Show a table of contents if there are any headers
```

Additional optional home page parameters:

```yaml
blurb: "There's a new daddy in town." # Displayed below the greeting
center_url: "my-center.jpg" # An image that is centered
greeting: "You know best" # Displayed below the center and stretch images
stretch_url: "my-stretch.jpg" # A 4x3 or panorama image that is stretched fully horizontally
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
      discord:
        icon: discord
        link: https://discord.com/users/username
        name: Discord
      dribbble:
        icon: dribbble
        link: https://dribbble.com/username
        name: Dribbble
      email:
        icon: envelope
        link: mailto:username@example.com
        name: E-mail
      facebook:
        icon: facebook
        link: https://facebook.com/username
        name: Facebook
      github:
        icon: github
        link: https://github.com/username
        name: GitHub
      instagram:
        icon: instagram
        link: https://instagram.com/username
        name: Instagram
      linkedin:
        icon: linkedin
        link: https://linkedin.com/in/username
        name: LinkedIn
      medium:
        icon: medium
        link: https://medium.com/@username
        name: Medium
      pinterest:
        icon: pinterest
        link: https://pinterest.com/username
        name: Pinterest
      quora:
        icon: quora
        link: https://quora.com/profile/username
        name: Quora
      reddit:
        icon: reddit
        link: https://reddit.com/u/username
        name: Reddit
      spotify:
        icon: spotify
        link: https://open.spotify.com/user/username
        name: Spotify
      stackoverflow:
        icon: stack-overflow
        link: https://stackoverflow.com/users/username
        name: Stack Overflow
      strava:
        icon: strava
        link: https://strava.com/athletes/username
        name: Strava
      twitch:
        icon: twitch
        link: https://twitch.tv/username
        name: Twitch
      twitter:
        icon: twitter
        link: https://twitter.com/username
        name: Twitter
      vimeo:
        icon: vimeo
        link: https://vimeo.com/username
        name: Vimeo
      wordpress:
        icon: wordpress
        link: https://username.wordpress.com
        name: Wordpress
      yelp:
        icon: yelp
        link: https://yelp.com/user_details?userid=username
        name: Yelp
      youtube:
        icon: youtube
        link: https://youtube.com/user/username
        name: YouTube
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

### Image

The `paige/image` shortcode provides a figure with a centered image and an optional, centered caption.

These are the the named parameters with positions:

```
{{< paige/image
    src="https://imgs.xkcd.com/comics/sandwich.png"
    caption="My caption"
    link="https://xkcd.com/149"
    title="My title"
    alt="My alt" >}}
```

Only the image source parameter is required.
If the image source argument is a relative path, it must be a page resource.

These are the named parameters without positions:

```
{{< paige/image height=500 width=500 >}}
```

### Code

The `paige/code` shortcode provides a figure with centered, highlighted code and an optional, centered caption.

These are the the named parameters with positions:

```
{{< paige/code lang="go" caption="My caption" options="linenos=true" >}}
<!doctype html>
<html lang="en">
<body>
  <p>Test</p>
</body>
</html>
{{< /paige/code >}}
```

### Gallery

The `paige/gallery` shortcode provides a figure with a set of images and an optional, centered caption.

```
{{< paige/gallery
    
    // Page resource image file name or pattern; optional; defaults to all images
    images="birthday*.jpg"
    
    // Optional
    caption="My caption"
    
    // Hugo image processing method; optional; values are "crop", "fill", "fit", "resize"; default is "resize"
    method="resize"

    // Hugo image processing options; optional; default is "550x webp picture Lanczos"
    options="550x webp picture Lanczos"

    // Display images in a grid or list; optional; values are "grid", "list"; default is "grid"
    display="grid"

/>}}
```

The `paige/gallery/item` shortcode is nested within the `paige/gallery` shortcode to provide a caption and customization per image.
The display type is automatically list, and cannot be overridden.

```
{{< paige/gallery caption="My caption" method="resize" options="550x webp picture Lanczos" >}}

    {{< paige/gallery/item
    
        // Page resource image file name or pattern
        image="birthday1.jpg"
        
        // Optional
        caption="My caption"
        
        // Optional
        method="resize"
        
        // Optional
        options="550x webp picture Lanczos"

    >}}

{{< /paige/gallery >}}
```

The `paige/gallery` shortcode must be self-closing if the `paige/gallery/item` shortcode is not used.

```
{{< paige/gallery />}}
```

## Customization

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
The header has the menu, if any; the page title, if any; the page description, if any; and the page date, if any.
The body has the page content, if any.
The footer has the copyright notice, if any, and the theme link, if any.

The page title and description can be Markdown. Markup is stripped for HTML and RSS titles.

The page title is displayed in an `h1` tag, so page content headers must start with `h2`.

The page date is the publish date, if any.

Bootstrap 5.3.0-alpha1 CSS and JavaScript and Bootstrap Icons 1.10.3 are used unless overridden.
Bootstrap CSS and Bootstrap Icons are loaded from the Bootstrap CDN for every page.

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
