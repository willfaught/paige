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
- Blog
- Bootstrap
- Comments
- Customizable
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

Soon: Dark color scheme and dynamic color schemes, when Bootstrap 5.3 releases.

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
$ hugo mod init github.com/youraccount/yourproject
$ hugo mod get github.com/willfaught/paige
```

Update:

```sh
$ hugo mod get -u
```

### Option 2: Use a Git submodule

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

### Option 3: Use a copy

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
$ hugo server -D
```

## Configure

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
    icons_path: "/my-assets/my-bootstrap-icons.css" # Use local Bootstrap icons
    scripts_path: "/my-assets/my-bootstrap.bundle.min.js" # Use local Bootstrap scripts
    styles_path: "/my-assets/my-bootstrap.min.css" # Use local Bootstrap styles
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
  rss:
    managing_editor: "Michael Bluth"
    web_master: "Michael Bluth"
```

If you set `hide_theme_comment` or `hide_theme_link`, please credit this project in a post to help others find it.

Optional page parameters:

```yaml
authors: [
  "Michael Bluth", # Credit this name exactly
  "george_bluth" # Credit the corresponding author name in the site parameters
]
link: "https://youtu.be/dQw4w9WgXcQ" # The reference for an anchor around the title
paige:
  math: true # Enable math typesetting with KaTeX
  toc: true # Show a table of contents if there are any headers
```

Additional optional home page parameters:

```yaml
blurb: "There's a new daddy in town." # Displayed below the greeting
center: "my-center.jpg" # An image that is centered
greeting: "You know best" # Displayed below the center and stretch images
stretch: "my-stretch.jpg" # A 4x3 or panorama image that is stretched fully horizontally
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
author:
  email: example@example.com
  name: Michael Bluth
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
    weight: 1
markup:
  goldmark:
    renderer:
      unsafe: true
  highlight:
    style: vs
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
        name: Discord
        icon: discord
        url: https://discord.com/users/example
      email:
        name: E-mail
        icon: envelope
        url: mailto:example@example.com
      facebook:
        name: Facebook
        icon: facebook
        url: https://facebook.com/example
      github:
        name: GitHub
        icon: github
        url: https://github.com/example
      instagram:
        name: Instagram
        icon: instagram
        url: https://instagram.com/example
      linkedin:
        name: LinkedIn
        icon: linkedin
        url: https://linkedin.com/in/example
      reddit:
        name: Reddit
        icon: reddit
        url: https://reddit.com/u/example
      twitch:
        name: Twitch
        icon: twitch
        url: https://twitch.tv/example
      twitter:
        name: Twitter
        icon: twitter
        url: https://twitter.com/example
      youtube:
        name: YouTube
        icon: youtube
        url: https://youtube.com/user/example
permalinks:
  blog: /blog/:year/:month/:day/:title/
social:
  twitter: example
theme: paige
timezone: America/Los_Angeles
titlecasestyle: Go
```

## Search

The `paige-search` layout provides full site search.

Example `config.yaml`:

```yaml
outputs:
  home: ["html", "json", "rss"]
```

Example `content/search.md`:

```yaml
---
layout: paige-search
title: Search
---
```

## Customization

If `partials/paige-head-last.html` exists in the site, it is included at the end of the head tag.
If `partials/paige-body-last.html` exists in the site, it is included at the end of the body tag.

Most code is in partial templates that are included by the default layouts.
Elements can easily be added or changed by overriding the corresponding layout or partial template.

For example, the default layouts `home.html`, `list.html`, `single.html`, `taxonomy.html`, and `term.html` include `paige-article.html`,
which includes `paige-title.html`, `paige-description.html`, `paige-date.html`, and `paige-content.html`.
To change the page title for those default layouts, change `paige-title.html`.
To change the page title for `single.html`,
replace the use of `paige-article.html` in `single.html` with the use of `paige-title.html`, `paige-description.html`, `paige-date.html`, and `paige-content.html`,
then replace that use of `paige-title.html` with your own design.

## Design

The HTML author is the site author.

The HTML description is the page description.

The HTML keywords is a union of the page keywords, tags, and categories.

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

Bootstrap 5.2.2 CSS and JavaScript and Bootstrap Icons 1.10.2 are loaded from the Bootstrap CDN for every page unless local Bootstrap assets are used instead.

Map keys, layout file names, partial template file names, CSS names, and JavaScript names beginning with "paige" capitalized in any way are reserved.

## Community

Get started by [starring](https://github.com/willfaught/paige/stargazers)
and [following](https://github.com/willfaught/paige/watchers) the project.

If you find a problem or have a suggestion, please share it by [creating an issue](https://github.com/willfaught/paige/issues/new).
Feedback is encouraged and appreciated.

If you have a fix or improvement, please share it by [creating a pull request](https://github.com/willfaught/paige/compare).

## Credits

Photo by [Sergey Pesterev](https://unsplash.com/photos/JV78PVf3gGI).

## Project

Created by [Will Faught](https://github.com/willfaught).
Released under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
Hosted at https://github.com/willfaught/paige.
