# paige

A simple Hugo theme. [Try it out.](https://willfaught.com/paige)

<img src="https://github.com/willfaught/paige/raw/master/images/screenshot.png" style="width: 100%">

## Features

- Blog
- Facebook sharing support
- Google Analytics support
- Landing page
- Light color scheme
- Menu navigation
- Minimal design
- Responsive, mobile-first layout
- Sections for other kinds of content
- Single column presentation
- Social links
- Twitter sharing support

## Design

Page metadata is embedded automatically. Author is the site author.
Description is the site description. Keywords is a union of the page's
keywords, tags, and categories. There are special affordances for
Facebook and Twitter sharing. Google Analytics is included at the bottom
of the body, if configured. You must create favicons yourself.

The page title is the page's title, followed by a mid dot, followed by
the site title. If one is missing, the other is used without the mid
dot. If both are the same, only one is used without the mid dot.

Every page can have a header, a body, and a footer. The header has the
section menus, if any; the page title, if any; the page description, if
any; and the page date, if any. The body has the content, if any. The
footer has the copyright notice, if any.

The page date is the publish date, if it exists; otherwise, it's the
creation date.

Everything is stacked vertically in one column, and aligned to the
center. The width of the header and footer is limited to 100 characters.
The width of the body is limited to 66 characters. List items are
centered, with the page description underneath the page title, grouped
by month and year, and sorted in descending order. List length is
configured in `config.yaml`.

The section menus in the header are activated if their section matches
the current page. Pages directly under `content` match the section path
`/`. The section menu names, paths, and order are configured in
`config.yaml`.

If a page has a `link` parameter, it's used as the reference for an
anchor around the page title, if any.

If `partials/head.html` exists in the site, it is included at the end of
the head tag. If `partials/body.html` exists in the site, it is included
at the end of the body tag.

The home page shows the `blurb`, `description`, `greeting`, and `title`
parameters from `content/_index.md`, the `avatar.png` and `cover.png`
images at the site root, and linked icons for all the social sites
configured in `config.yaml`.

Taxonomy pages are an inline, unordered, sorted list of links to terms.

The 404 page has a Not Found header, and no body.

An empty list has a Nothing Here header, and no body.

Stock Bootstrap 5.2 and Bootstrap Icons 1.9.1 are used for style and
icons. They're loaded from the Bootstrap CDN for every page.

## Configuration

See the example site directory for an example configuration.

## Credits

- Avatar photo by [Yuvraj Singh](https://unsplash.com/photos/ljziSm0DXg8)
- Cover photo by [Kamran Sabir](https://www.pexels.com/photo/green-lake-surrounded-by-mountain-127753/)
