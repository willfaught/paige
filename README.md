# paige

A simple Hugo theme. [Try it out.](https://willfaught.com/paige)

## Screenshots

Home page:

<img src="https://github.com/willfaught/paige/raw/master/images/home.jpg">

Single page:

<img src="https://github.com/willfaught/paige/raw/master/images/about.jpg">

List page:

<img src="https://github.com/willfaught/paige/raw/master/images/blog.jpg">

Taxonomy page:

<img src="https://github.com/willfaught/paige/raw/master/images/tags.jpg">

Term page:

<img src="https://github.com/willfaught/paige/raw/master/images/term.jpg">

404 page:

<img src="https://github.com/willfaught/paige/raw/master/images/404.jpg">

Markdown example:

<img src="https://github.com/willfaught/paige/raw/master/images/markdown.jpg">

Rich content example:

<img src="https://github.com/willfaught/paige/raw/master/images/rich.jpg">

Placeholder text example:

<img src="https://github.com/willfaught/paige/raw/master/images/placeholder.jpg">

Math typesetting example:

<img src="https://github.com/willfaught/paige/raw/master/images/math.jpg">

Emoji support example:

<img src="https://github.com/willfaught/paige/raw/master/images/emoji.jpg">

## Features

- Blog
- Facebook sharing support
- Google Analytics support
- Landing page
- Light color scheme
- Math typesetting support
- Menu navigation
- Minimal design
- Responsive, mobile-first layout
- Sections for other kinds of content
- Single column presentation
- Social links
- Twitter sharing support

## Design

The HTML metadata is set automatically. The HTML author is the site
author. The HTML description is the page description. The HTML keywords
is a union of the page keywords, tags, and categories.

The HTML title is the page title, followed by a middle dot, followed by
the site title. If one is missing, the other is used without the middle
dot. If both are the same, only one is used without the middle dot.

The HTML body can have a header, a body, and a footer. The header has
the section menus, if any; the page title, if any; the page description,
if any; and the page date, if any. The body has the page content, if
any. The footer has the site copyright notice, if any.

The section menus are activated if their path matches the current page.
Pages in the directory `content/` match the section path `/`. Pages in
the directory `content/foo/` match the section path `/foo/`. The section
menu identifiers, names, weights, paths, and order are configured in
`config.yaml`.

The page date is the publish date, if any; otherwise, it's the creation
date.

Everything is stacked vertically in one column and aligned to the
center.

The home page shows the `blurb`, `description`, `greeting`, and `title`
parameters from `content/_index.md`, the `avatar.jpg` and `cover.jpg`
images at the site root, and linked icons for all the social sites
configured in `config.yaml`.

Single pages use the `link` front matter parameter, if any, as the
reference for an anchor around the page title, if any. If the `math`
parameter is set to true in the page or site parameters, math
typesetting is enabled with KaTeX.

List and term pages show page titles and descriptions per month and year
in descending order. An empty list has a "Nothing here" body.

Taxonomy pages list term links in an inline, unordered, sorted list.

The 404 page has a "Not Found" header, and no body.

If `partials/head.html` exists in the site, it is included at the end of
the head tag. If `partials/body.html` exists in the site, it is included
at the end of the body tag.

Stock Bootstrap 5.2.2 CSS and JavaScript, and Bootstrap Icons 1.10.2,
are used for style, functionality, and icons. They're loaded from the
Bootstrap CDN for every page.

## Configuration

See the example site directory for an example configuration.

## Credits

- Avatar photo by [Yuvraj Singh](https://unsplash.com/photos/ljziSm0DXg8)
- Cover photo by [Kamran Sabir](https://www.pexels.com/photo/green-lake-surrounded-by-mountain-127753/)
