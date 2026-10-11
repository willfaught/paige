# Changelog

All notable changes to Paige are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.120.0] - 2026-10-10

### Changed

- Update Bootstrap to 5.3.8.
- Update Bootstrap Icons to 1.13.2.
- Update Katex to 0.19.0.
- Update Flexsearch to 0.8.212.

## [0.119.1] - 2026-10-10

### Changed

- Improve ga, is, sq, zh translations.

## [0.119.0] - 2026-10-08

### Changed

- Update Bootstrap Icons to 1.13.2.

## [0.118.0] - 2026-07-21

### Upgrade

- Update custom menu templates or configuration that assume menu destinations are URLs; menus now use page paths.

### Changed

- Change menus to use page paths.
- Update Katex to 0.16.47.

### Fixed

- Fix example site tags layout.
- Fix example site search layout.
- Fix example site categories layout.

## [0.117.0] - 2026-06-08

### Added

- Add imperative mood to the contributing guide.
- Add .github/workflows/build-latest.yaml.
- Add .github/workflows/build-windows.yaml.

### Changed

- Rename .github/workflows/pages.yaml to build.yaml.

## [0.116.1] - 2026-05-27

### Fixed

- Fix trailing newlines in rendered links ([#122](https://github.com/willfaught/paige/issues/122)).

## [0.116.0] - 2026-04-29

### Upgrade

- If you override Hugo built-in templates, move overrides into the new `_partials` layout directories. Update custom templates using Hugo language fields or configuration parameters to the current names (`Locale` and `Direction`).

### Changed

- Use new layout directory structure.
- Replace site.LanguageCode with site.Language.Locale.
- Replace .Language.LanguageDirection with .Language.Direction.
- Replace .Language.LanguageCode with .Language.Locale.
- Use new Hugo config param names.

## [0.115.0] - 2026-02-18

### Upgrade

- Replace `module.mounts.includeFiles` with `module.mounts.files` in Hugo module configuration.

### Changed

- Use module.mounts.files instead of includefiles.

## [0.114.0] - 2026-01-20

### Added

- Add dart-sass package to Snap instructions.

### Changed

- Update Katex to v0.16.27.
- Silence Sass if-function deprecation.
- Install Hugo Snap package from edge channel.

## [0.113.1] - 2025-10-11

### Changed

- Stop silencing obsolete mixed-decls warning from Dart Sass.

## [0.113.0] - 2025-10-08

### Changed

- Update Katex to 0.16.23.
- Update Bootstrap Icons to 1.13.1.
- Update Bootstrap to 5.3.8.

## [0.112.0] - 2025-10-07

### Upgrade

- Rename shortcode arguments `old` to `level`, `max` to `largest`, and `cap` to `max`.

### Added

- Add narrow look to list page subpages.
- Add minimize_heading_sizes config.
- Add maximum_heading_level config.
- Add normalize_heading_sizes config.

### Changed

- Use page var.

## [0.111.1] - 2025-03-30

### Changed

- Use page title in single kind, not link title.
- Shorten var names.

## [0.111.0] - 2025-03-28

### Changed

- Move highlight config to site step.
- Explain that id param must be unique URN.

### Removed

- Remove page self links in feeds.
- Remove separate Sass installation for Snap.
- Remove heading links in Atom, RSS.

## [0.110.4] - 2025-03-10

### Changed

- Use page language for feed language.

### Removed

- Remove use of htmlUnescape in feeds.

## [0.110.3] - 2025-03-10

### Added

- Add self links to feeds.

### Changed

- Escape page link in feeds.
- Order channel fields for RSS.

## [0.110.2] - 2025-03-10

### Added

- Add missing page vars.

### Changed

- Use tag URN for feed IDs.
- Do not validate feed link rels.
- Escape link href attr in feeds.

### Fixed

- Fix self links to alternate.

## [0.110.1] - 2025-03-09

### Changed

- Document use of paige.author.email, name, url.
- Explain where a default author must be referenced.
- Change menu limit to a couple handfuls.
- Change feeds to use default page order.

### Removed

- Remove config place from minimal look.

## [0.110.0] - 2025-03-08

### Upgrade

- Rename the default author localization key to `paige.author.default` and remove the hidden credit feature.

### Changed

- Rename default to paige.author.default.
- Document id param.
- Clarify link param is a URL.

### Removed

- Remove quotes from shortcode names.
- Remove quotes from authors taxonomy name.

## [0.109.0] - 2025-03-07

### Upgrade

- Remove `paige_link_to_this_section` and `func-content.html`; update custom templates or references that use them.

### Changed

- Document the needed markup.highlight config.
- Adjust heading size in class instead of tag.

### Removed

- Remove markup.tableofcontents config in example site.
- Remove func-content.html.
- Remove paige_link_to_this_section.

## [0.108.1] - 2025-03-05

### Changed

- Renumber heading levels using page fragments.
- Rename exampleSite to example.

## [0.108.0] - 2025-03-05

### Upgrade

- Rename `exampleSite` to `example` if your scripts or documentation refer to that directory.

### Added

- Allow HTML in some Atom fields.

### Changed

- Limit image shortcode processing params to raster images.
- Change raster to vector.
- Rename exampleSite to example.

### Fixed

- Fix linked args.

## [0.107.1] - 2025-03-04

### Changed

- Use default language paths for link, tag resources.

## [0.107.0] - 2025-03-04

### Upgrade

- Remove `style-first.css` and `style-last.css` includes; move custom styles into the `paige.style` setting. Feed identifiers also change.

### Changed

- Use github highlight style for feeds.
- Use id param for Atom ID if present.
- Convert style.html to asset.

### Removed

- Remove style-first.css, style-last.css includes.
- Remove host from feed IDs.

## [0.106.0] - 2025-03-02

### Upgrade

- Rename the color scheme setting from `colorScheme` to `scheme`.

### Added

- Add menu header examples.

### Changed

- Fall back to site description for home page.
- Use updated favicon files.
- Rename colorScheme to scheme.

### Removed

- Remove msapplication metas.

## [0.105.0] - 2025-03-02

### Upgrade

- Update page-kind configuration because section kinds are no longer included in page kinds.

### Added

- Add missing section comments.

### Changed

- Group page kinds correctly.
- Host FlexSearch.
- Lowercase includeFiles.

### Removed

- Remove section kinds from page kinds.

## [0.104.0] - 2025-03-01

### Changed

- Center metadata with text-center.
- Refactor text-center in list items.

### Removed

- Remove paige-page-metadata.

### Fixed

- Fix TOC right padding.

## [0.103.0] - 2025-03-01

No notable user-facing changes.

## [0.102.0] - 2025-02-28

### Upgrade

- Rename `paige.pages.max_width` to `paige.pages.full_width`.

### Changed

- Center page title, description.
- Rename paige.pages.max_width to full_width.
- Set full_width in customizations pages.

## [0.101.0] - 2025-02-23

### Upgrade

- Change shortcode `linked` arguments from strings to Boolean values.

### Changed

- Change cite param to Markdown.
- Explain what linked param does.
- Use value syntax in shortcode doc.
- Change linked params to accept Booleans.
- Mark includes as safe.

## [0.100.2] - 2025-02-22

### Changed

- Use relative URLs for image sources.

### Fixed

- Handle SVG images.

## [0.100.1] - 2025-02-21

### Added

- Add setup instructions for translate.py.

### Changed

- Document site description used in feeds.
- Refactor into var like below.
- Move var up to match vars above.

### Fixed

- Fix style-first, last file extensions.

## [0.100.0] - 2025-02-19

### Added

- Add config paige.pages.max_width.
- Add COPYRIGHT.

### Changed

- Use spans for unrendered taxonomies.

### Removed

- Remove some whitespace collapse actions.

### Fixed

- Fix math in math typesetting page.

## [0.99.0] - 2025-02-14

### Added

- Add missing atom prefix to link tags.
- Add links for page translations, output formats for RSS.

### Removed

- Remove title from feed content bottom links.

### Fixed

- Fix hreflang to use language code.
- Fix hreflang to use feed page.

## [0.98.0] - 2025-02-14

### Upgrade

- Rename the localization string `subtitle` to `description` in custom language files.

### Changed

- Use site title and fall back to page title.
- Change feeds titles to be similar to page titles.
- Use author name with title fallback for author meta.
- Use author name with title fallback for feed pages.

### Fixed

- Fix author name place.

## [0.97.1] - 2025-02-13

### Changed

- Change menu home link to use site base URL.
- Clarify which go.mod file.

## [0.97.0] - 2025-02-12

### Added

- Add error if resource not found.

### Changed

- Use copyright term and year.
- Use Paige v.0.97.0.

## [0.96.0] - 2025-02-11

### Removed

- Remove margin between site title, description.

### Fixed

- Fix update command.

## [0.95.0] - 2025-02-11

### Added

- Add i18n helper script.

### Changed

- Use home string instead of site title.

## [0.94.1] - 2025-02-11

### Changed

- Rename RSS vars to match Atom.
- Reimplement Atom feed updated value.
- Move feed subpage filters to main loops.
- Use ChatGPT for German localization.
- Revert "Change link to https".

## [0.94.0] - 2025-02-10

### Upgrade

- Migrate configuration to the renamed `paige.feeds`, `paige.exclude_feeds`, `paige.exclude_search`, `paige.page.edit_url`, `paige.page.history_url`, and `paige.subpages` keys. Remove obsolete `paige.title`, `paige.copyright`, analytics, and comments settings.

### Changed

- Rename paige.feed to paige.feeds.
- Use at least Hugo v0.141.0.

### Removed

- Remove analytics.
- Remove comments.
- Remove paige.title config.

## [0.93.0] - 2025-02-06

### Upgrade

- Rename page ordering and configuration keys as documented, including `paige.list_page` to `paige.subpage` and `disablekinds` to `disabledkinds`.

### Changed

- Update katex to v0.16.21.
- Update bootstrap-icons to v1.11.3.
- Replace twitter_simple shortcode with x.
- Use remote resource content.

### Removed

- Remove params config prefix.

## [0.92.0] - 2024-08-25

### Added

- Add missing paige-keyword classes for keywords.
- Add paige-keyword-category, tag classes.

## [0.91.2] - 2024-08-25

### Added

- Include Cusdis when configured.

### Fixed

- FIx menu nav only doc to use config.

## [0.91.1] - 2024-07-29

### Changed

- Explain atom, rss output requirements.

## [0.91.0] - 2024-07-25

### Changed

- Render menu names as Markdown.

## [0.90.2] - 2024-07-24

### Changed

- Show alert if only value in page header.

### Removed

- Remove exampleSite/search.md.

## [0.90.1] - 2024-07-21

### Added

- Add unescape param to code shortcode.
- Add link to syntax highlight generation.

### Changed

- Trim spaces, tabs from code end.

## [0.90.0] - 2024-07-20

### Upgrade

- Rename `hide` configuration prefixes to `disable` and update comments settings to match the new names.

### Added

- Add request shortcode.
- Add comments to list pages.
- Add paige.comments.disable_kinds config.
- Add default menu.

### Changed

- Change config prefix hide to disable.

## [0.89.0] - 2024-07-17

### Upgrade

- If you override Paige templates, rename overrides to the new `tag-*`, `site-*`, `page-*`, and `list-*` template paths; remove overrides for deleted templates.

### Added

- Add h1 tags to home page.
- Add paige.credit config.
- Add paige.license config.

### Changed

- Rename page.html to list-item.html.

### Removed

- Remove customization page weights.

## [0.88.0] - 2024-07-11

### Upgrade

- Use the tabs shortcode `body` argument in place of its previous inner-content argument.

### Added

- Add tab shortcode feature.
- Add missing dl tags.
- Add #paige-metadata-rest.

### Changed

- Change inner content to body.
- Move body below params.

## [0.87.0] - 2024-07-08

### Upgrade

- Rename the `customization` content directory to `customizations` and update shortcode page titles and front matter.

### Added

- Add tabs shortcode.

### Removed

- Remove shortcode from page titles.
- Remove Paige from page descriptions.
- Remove layout from page titles.
- Remove dates, weights from layout pages.

## [0.86.0] - 2024-06-28

### Upgrade

- Change the archetype date front matter from a string to a TOML date value.

### Changed

- Explain how to disable rendering for author pages.
- Change date archetype to date type.
- Use TOML date syntax.
- Convert front matter to TOML.

## [0.85.0] - 2024-06-26

### Added

- Add CSS IDs for site description, title.
- Add bottom margin to all content elements.

### Changed

- Put next page link first.
- Use aquo entities for next, prev links.

### Fixed

- Fix order of next, prev page links.

## [0.84.0] - 2024-06-22

### Fixed

- Fix deprecation warning.

## [0.83.0] - 2024-06-22

### Added

- Add theme meta tag.

## [0.82.0] - 2024-06-12

### Added

- Add French translations.
- Add Spanish translations.
- Add Hindi translations.

### Changed

- Explain how to change syntax highlighting style.
- Change link to https.

## [0.81.0] - 2024-06-09

### Upgrade

- Remove the previous/next arrows from page links; update custom CSS or expectations that depend on those arrows.

### Changed

- Use arrow, heavy black arrow entities for pagination links.
- Order all pages by weight, date, title.
- Move title from icon link to icon graphic.

### Removed

- Remove prev, next page arrows from links.

## [0.80.4] - 2024-06-07

### Changed

- Check for empty taxonomies.

## [0.80.3] - 2024-06-07

### Removed

- Remove whitespace inside icon shortcode.

## [0.80.2] - 2024-06-07

### Changed

- Dedent markup in icon shortcode.

### Removed

- Remove link fragment placeholder.

## [0.80.1] - 2024-06-07

### Added

- Add table bottom margin.

### Changed

- Change td, th paddin to 0.25rem.

## [0.80.0] - 2024-06-07

### Upgrade

- Update site setup to use the supported Hugo and Dart Sass installation steps; the build no longer enables Hugo Git information.

### Added

- Add img-fluid class to image, gallery shortcode images.

### Changed

- Build with Hugo v0.126.3.
- Shorten Sass name.

### Removed

- Remove empty taxonomy check.

### Fixed

- Fix page list for taxonomy, term pages.

## [0.79.0] - 2024-06-04

### Upgrade

- Move `date.format` to `date_format` and `menu.style` to `menu_style`; remove the page `id` parameter and update custom figure counter selectors.

### Changed

- Use rel permalink as feed ID fallback.
- Change image shortcode to use div.
- Require alert config object.

### Removed

- Remove page param id.

### Fixed

- Fix list.rss.xml warning prefix.

## [0.78.0] - 2024-05-31

### Upgrade

- Rename `file_link` configuration to `file_edit_url` and `git.commit_url` to `file_history_url`.

### Added

- Add keyword_style config.

### Changed

- Use site.Config.Services.GoogleAnalytics.ID.
- Change file_link config to file_edit_url.
- Replace git.commit_url config with file_history_url.

### Fixed

- Fix prev, next page link URLs.

## [0.77.0] - 2024-05-29

### Changed

- Make nav links style underlined.

## [0.76.2] - 2024-05-29

### Changed

- Limit max width for page items.

## [0.76.1] - 2024-05-29

### Fixed

- Fix weight ordering.

## [0.76.0] - 2024-05-29

### Added

- Add prev, next page links.

### Changed

- Use taxonomy values directly.
- Hide page group header if only one.
- Render, encode page fields in lists correctly.
- Use paige.site_title, site.Title as home title fallbacks.

## [0.75.0] - 2024-04-09

### Upgrade

- The default menu style changes to links. Set the menu style explicitly if you rely on the previous default.

### Added

- Add paige.site_title, site_description.

### Changed

- Change the default menu style to links.
- Change links style to highlight active item.
- Replace h2 with mb-2.

### Removed

- Remove max width with scroll from content.

## [0.74.0] - 2024-04-07

No notable user-facing changes.

## [0.73.0] - 2024-04-07

### Upgrade

- Remove Muut comments support; choose another supported comments provider if your site uses Muut.

### Added

- Add paige.color_scheme config.

### Changed

- Upgrade Katex to v0.16.10.
- Upgrade Bootstrap to v5.3.3.
- Require Paige v0.72.0 for exampleSite.

### Removed

- Remove Muut comments.

## [0.72.0] - 2024-03-25

### Changed

- Use MIT license.

## [0.71.4] - 2023-11-12

### Fixed

- Fix RSS feed permalink.

## [0.71.3] - 2023-11-12

### Upgrade

- Update custom feed output paths for the new `list.rss.xml` filename and plain-text Atom/RSS output format.

### Changed

- Rename rss.xml to list.rss.xml.
- Change Atom, RSS outputs to plain text.
- Change Atom, RSS output formats to use ugly URLs.

## [0.71.2] - 2023-10-21

### Changed

- Order grouped pages by weight.

## [0.71.1] - 2023-10-11

### Changed

- Use htmlUnescape with plainify in RSS.
- Use absolute permalinks for images.

## [0.71.0] - 2023-10-11

### Upgrade

- Rename `paige.link` to `paige.file_link`, and update `paige.link.hide_page` to `paige.file_link.disable`.

### Added

- Enable width style work for content.

### Changed

- Explain config nesting in site params.
- Rename paige.link.hide_page to disable.

### Removed

- Remove superfluous item in feature list.

### Fixed

- Fix RSS feed links.

## [0.70.2] - 2023-10-04

### Changed

- Update Hugo to 0.119.0.
- Escape page titles in attributes.

## [0.70.1] - 2023-10-04

### Added

- Add missing $page contexts.

### Changed

- No printf for link Atom elements.

### Fixed

- Fix page ID to use permalink.
- Fix Atom IDs to always be a URI.

## [0.70.0] - 2023-10-03

### Added

- Enable Atom for terms in exampleSite.
- Add paige.link config.

### Changed

- Lowercase noClasses config.
- Use repository URL.

### Fixed

- Fix paige.feed.rss examples.

## [0.69.2] - 2023-10-03

### Changed

- Move site title under the language.

### Fixed

- Fix Atom icon and logo.

## [0.69.1] - 2023-09-24

### Fixed

- Fix link render target to have no whitespace.

## [0.69.0] - 2023-09-24

### Upgrade

- Rename feed configuration from `paige.feed` to `paige.feeds`, page settings from `pages` to `subpages`, and link settings from `link` to `pagelink`. Review custom feed templates and replace removed feed options.

### Added

- Add author name to pages, site in RSS in exampleSite.
- Add email, url author attributes.
- Add Atom feeds.

### Changed

- Use paige.feed, paige.feed.rss config.
- Change RSS file to rss.xml.

## [0.68.0] - 2023-09-15

### Changed

- Update Bootstrap to 5.3.2.
- Update Bootstrap Icons to 1.11.0.
- Update Katex to 0.16.8.
- Rename config.toml to hugo.toml.

## [0.67.0] - 2023-09-15

### Added

- Add external_link_new_tab param.

## [0.66.0] - 2023-09-09

### Changed

- Darken highlighted code for easier reading.

## [0.65.6] - 2023-09-07

### Fixed

- Fix example to match code.

## [0.65.5] - 2023-08-21

### Changed

- Use Dart Sass.

## [0.65.4] - 2023-08-12

### Changed

- Use relLangURL for content paths.

### Removed

- Remove references to menu breakpoints.

## [0.65.3] - 2023-08-05

### Added

- Add links in image shortcut sizes, srcset params.
- Add step to update Paige module.
- Add p tags to image shortcode doc.

### Changed

- Use go-html-template code type.

### Fixed

- Fix gallery breakpoints default value.

## [0.65.2] - 2023-08-02

### Changed

- Use absURL for index.json.

## [0.65.1] - 2023-07-29

### Changed

- Hide home, search pages from RSS, search.

## [0.65.0] - 2023-07-23

### Upgrade

- Remove the `filled-rows` gallery type; choose a supported gallery type.

### Changed

- Dedent gallery markup.
- Document paige.comments.muut.

### Removed

- Remove filled-rows gallery type.

### Fixed

- Fix paige.search.hide_page.
- Fix paige.rss.hide_page.

## [0.64.1] - 2023-07-22

### Fixed

- Fix invalid self-closing shortcodes.

## [0.64.0] - 2023-07-02

### Added

- Add replace directive to example site.

### Changed

- Rename config.yaml to hugo.yaml in exampleSite.
- Update Paige to v0.63.0.

## [0.63.0] - 2023-06-20

### Changed

- Upgrade Bootstrap to v5.3.0.
- Upgrade Bootstrap Icons to v1.10.5.
- Upgrade Katex to v0.16.7.

## [0.62.3] - 2023-06-14

### Changed

- More hugo.toml rename fixes.

## [0.62.2] - 2023-06-14

### Upgrade

- Rename the site's `config.toml` to `hugo.toml` when upgrading to the current Hugo configuration filename convention.

### Changed

- Change config.toml to hugo.toml.

### Fixed

- Fix dart-sass-embedded step on macOS.

## [0.62.1] - 2023-05-13

### Changed

- Update Paige to v0.62.0.

## [0.62.0] - 2023-05-13

### Upgrade

- Update menu configuration and markup because the navbar was removed from the menu.

### Added

- Add missing text prefixes.
- Add nested menus.

### Changed

- Use pill menu for invalid style.

### Removed

- Remove navbar from menu.

### Fixed

- Fix p tag around image in home page.

## [0.61.1] - 2023-04-27

### Changed

- Update Paige to v0.60.1 in exampleSite.

## [0.61.0] - 2023-04-27

### Removed

- Remove shadow class from home page image.
- Remove w-100 from metadata.

## [0.60.1] - 2023-04-25

### Changed

- Update Paige to v0.60.0 in exampleSite.

## [0.60.0] - 2023-04-25

### Upgrade

- Remove the gallery grid `col` wrapper and the `paige.date.source` setting; update gallery markup and date configuration.

### Added

- Add breakpoints to home page image.
- Add gallery breakpoints, densities params.
- Add gallery type filled-rows.
- Add image shortcode param style.

### Fixed

- Fix guide links to match page names.

## [0.59.0] - 2023-04-23

### Upgrade

- Review image shortcode loading settings: the default loading behavior changed to eager.

### Added

- Add layouts/partials/paige/image.html.

### Changed

- Update Bootstrap to 5.3.0-alpha3.
- Change img.html loading param default to eager.
- Omit explicit eager image loading.

### Removed

- Remove page param from resource.html.

## [0.58.1] - 2023-04-10

### Changed

- Update Paige to v0.58.0 in exampleSite.

## [0.58.0] - 2023-04-10

### Added

- Add gallery param process.

### Changed

- Update image shortcode doc.

### Removed

- Remove figure from exampleSite home page.

## [0.57.0] - 2023-04-08

### Upgrade

- Rename analytics and comments `disabled` settings to `disable`; remove the hero and icon shortcodes.

### Added

- Add support for Beam analytics.
- Add support for Clarity analytics.
- Add support for Counter analytics.
- Add support for Pirsch analytics.

### Removed

- Drop trailing slashes from analytics provider URLs.

## [0.56.2] - 2023-04-08

No notable user-facing changes.

## [0.56.1] - 2023-04-08

### Added

- Add missing period.

### Changed

- Document quote param cite.
- Align shortcode example params vertically.

## [0.56.0] - 2023-04-08

### Upgrade

- Rename `commit_url_prefix` to `commit_url` (now a format string) and update hero shortcode arguments to the revised `process` format.

### Added

- Add underline menu style.
- Add tabs menu style.

### Changed

- Require Hugo 0.111.3.
- Change page title h1 to use default size.

### Removed

- Remove link-secondary from links menu style.

## [0.55.0] - 2023-04-07

### Added

- Add breakpoints, densities, process, sizes, srcset params.

### Changed

- Document special home page menu path behavior.

### Removed

- Remove invalid sentence.

## [0.54.4] - 2023-03-29

### Added

- Add condition around browserconfig.xml meta.

### Fixed

- Fix favicon paths.

## [0.54.3] - 2023-03-28

### Changed

- Rename paige/node_modules/bootstrap/scss/vendor to _vendor.

## [0.54.2] - 2023-03-27

### Changed

- Move assets/paige file to assets/_paige.

## [0.54.1] - 2023-03-27

### Changed

- Move import config below module commands.

### Fixed

- Fix Bootstrap to work with Go modules.

## [0.54.0] - 2023-03-27

### Added

- Add condition around header.
- Add margin above title if no header.

### Changed

- Update Bootstrap to 5.3.0-alpha2.
- Cherry pick Bootstrap fix after 5.3.0-alpha2.

### Fixed

- Ensure consistent parameter for paige.scss.

## [0.53.0] - 2023-03-24

### Upgrade

- Remove custom CSS references to `.paige-social`, which is no longer used.

### Added

- Add fileExists conditions around favicon link tags.

### Changed

- Change hero image to webp.

### Removed

- Remove .paige-social.

### Fixed

- Fix template caching issue with Bootstrap colors.
- Fix authors in meta tag.

## [0.52.0] - 2023-03-22

### Upgrade

- Update custom CSS selectors and shortcode/layout references for the renamed pages/list classes and removed layouts and social shortcode.

### Added

- Add #paige-menu.

### Changed

- Rename subpage to page.
- Use page var.
- Always use regular pages for RSS.

### Fixed

- Fix active menu for custom permalinks.

## [0.51.0] - 2023-03-17

### Added

- Add type param to script.html.
- Add site share discussion link.

### Changed

- Mount correct Katex files.

## [0.50.1] - 2023-03-16

### Fixed

- Fix styles to work within #paige-content.

## [0.50.0] - 2023-03-16

### Added

- Add img-fluid to gallery images.
- Add de.yaml.

### Changed

- Rename gallery page images.
- Use overflow-hidden in grid gallery.
- Only use link clouds for categories, tags taxonomies.

## [0.49.0] - 2023-03-16

### Upgrade

- Rename social icon configuration from `bootstrap_icon` to `class`.

### Added

- Add #paige-article.
- Add condition around article class.
- Add #paige-metadata.

### Changed

- Change paige.social.*.bootstrap_icon to class.
- Parameterize browserconfig.xml, site.webmanifest.

## [0.48.0] - 2023-03-16

### Upgrade

- Update custom CSS selectors to the renamed `paige-subpage` and `paige-keyword` classes; remove the `nogap` setting.

### Added

- Add authors taxonomy.
- Add $page to page.html.

### Removed

- Remove site, page param headings.
- Remove logic around msapplication-config.

### Fixed

- Fix Bootstrap JS mount.

## [0.47.0] - 2023-03-14

### Upgrade

- Remove the `max_width` parameter and update any custom mount paths to use the `_paige` prefix.

### Added

- Add .paige-reading-time to minimal look.

### Changed

- Use Hugo 0.111.3.
- Document mount config.
- Change file prefix to _paige.

### Removed

- Remove max_width param.

## [0.46.1] - 2023-03-08

### Added

- Add layouts prefix to include files.

### Removed

- Remove last reference to color_scheme.
- Remove trailing doc period.

### Fixed

- Fix reference to style-last.css.
- Fix style-first, style-last file extensions.

## [0.46.0] - 2023-03-08

### Upgrade

- Remove the `color_scheme` configuration and its data attribute; use Bootstrap's color-scheme media query behavior instead.

### Added

- Add alerts.

### Changed

- Replace color_scheme, data attr with Bootstrap media query.
- Replace local landscape with remote one.

### Fixed

- Fix Bootstrap SCSS mount.
- Fix href to be src.

## [0.45.0] - 2023-03-05

### Upgrade

- Rename `hide.md` to `show.md` and remove the image shortcode `raw` argument.

### Added

- Add pinned pages.

### Changed

- Use Hugo 0.111.2.
- Change social.html to be reusable.

### Removed

- Remove raw param.

### Fixed

- Fix paige.home.image.raw doc.

## [0.44.0] - 2023-03-04

### Added

- Add figure image float examples.
- Add quote cite param.
- Add image alt to home layout.
- Add #paige-comments.
- Add section layout.

## [0.43.0] - 2023-03-03

### Added

- Add maxheight, maxwidth params to image.

### Changed

- Separate youtube and figure shortcodes.
- Separate vimeo and figure shortcodes.

### Removed

- Delete image-figure.html.

### Fixed

- Fix youtube hl URL param.

## [0.42.2] - 2023-03-02

### Changed

- Update gallery doc.

## [0.42.1] - 2023-03-02

### Changed

- Use Hugo 0.111.1.
- Change Windows package to hugo-extended.
- Give page to img.html.
- Skip page if nil.

## [0.42.0] - 2023-03-01

### Upgrade

- Remove the figure shortcode and its `height` and `maxheight` arguments; use the image, quote, code, or gallery shortcode appropriate to each item.

### Removed

- Remove maxheight param.
- Remove height param.
- Remove overflow-auto from figure.

### Fixed

- Fix figure centering.
- Fix figure vertical param.

## [0.41.2] - 2023-02-26

### Changed

- Note that the extended version is required.

## [0.41.1] - 2023-02-25

### Added

- Add node step to start steps.

### Changed

- Update screenshots.
- Change following to watching.

### Removed

- Remove social.twitter config.
- Remove mention of paige.credit.data.hide.

## [0.41.0] - 2023-02-25

### Upgrade

- Remove references to the old `paige.title`, `paige.description`, `paige.authors`, and related list settings; update selectors to use `#paige-root`.

### Added

- Add paige.date param.
- Add page kind classes.

### Removed

- Remove analytics, comments examples.
- Remove mention of home.html default layout.

### Fixed

- Fix size of home, search layout headers.

## [0.40.0] - 2023-02-23

### Upgrade

- Update custom template overrides to the renamed partials and layouts; the home page no longer uses the `home.html` default layout.

### Added

- Add package.hugo.json.

### Changed

- Convert home default layout into paige/home layout.
- Replace page dates with weights in exampleSite.
- Rename func-resource.html to resource.html.
- Clarify page list.

## [0.39.0] - 2023-02-20

### Changed

- Rename Install Hugo to Setup Hugo.
- Use Windows Hugo command for Linux.
- Rename Build with Hugo to Build.
- Use example author name.
- Use typical example author name.

## [0.38.1] - 2023-02-17

### Removed

- Remove relLangURL from link, script.

## [0.38.0] - 2023-02-17

### Added

- Add Katex files.
- Add Bootstrap and Bootstrap Icons files.

### Removed

- Remove figure params from quote.md.
- Remove figure params from code.md.
- Remove keywords param from archetype.

## [0.37.0] - 2023-02-12

### Upgrade

- Move blog content to the `content` directory and update references to the renamed landscape image and removed about page.

### Added

- Add content/layouts/search.md.
- Add tags param.

### Changed

- Replace scratch with param.
- Document figure params for video shortcodes.
- Move shortcode pages into shortcodes section.

## [0.36.1] - 2023-02-09

No notable user-facing changes.

## [0.36.0] - 2023-02-09

### Upgrade

- Update shortcode and page configuration arguments renamed from `class` to `name` and from `section` to `page`.

### Added

- Add author to all pages.
- Add paige.list.pages.hide param.

### Changed

- Change section to page.
- Move comments into separate files.
- Move analytics into separate files.

## [0.35.0] - 2023-02-06

### Added

- Add paige-* classes and IDs to all HTML structures.

### Changed

- Order params.
- Align table Markdown syntax.

### Fixed

- Fix paige.credit param mentions.

## [0.34.0] - 2023-02-05

### Upgrade

- Rename `paige.show_full_pages` to `paige.page_list.content.show`, the table-of-contents setting to `paige.page.table_of_contents.hide`, and `paige.math` to `paige.katex`. Update social icon and link keys from `icon` and `link` to `bootstrap_icon` and `url`.

### Added

- Add mw-100 to page.content.class default.
- Add home section to site config.

### Changed

- Move paige-content to page.content.class default.
- Rename toc param to page.table_of_contents.hide.
- Use paige.home config for home page.

## [0.33.0] - 2023-02-01

### Upgrade

- Move page settings under the new nested `paige.page` configuration and update renamed list, date-format, and class settings.

### Added

- Add {description,title}_class config.
- Add paige.page.content_class site config.
- Add config to hide page data.

### Changed

- Replace some page config prefixes with nesting.
- Rename resource to result.

## [0.32.0] - 2023-01-28

### Added

- Add page flags to page list.

### Changed

- Show, hide, style metadata, summary in page list.

### Removed

- Remove wrong example.

## [0.31.0] - 2023-01-26

### Upgrade

- Rename the `paige-body-last` and `paige-head-last` partials to `paige/body-last` and `paige/head-last`.

### Added

- Add page authors to body header description.
- Add collapsible navbar to menu.
- Add code semantics to false values.

### Changed

- Disallow nested use of gallery shortcode params align, justify.
- Specify all gallery shortcode align, justify param values.

## [0.30.0] - 2023-01-23

### Upgrade

- Rename the YouTube shortcode `title` argument to `description`.

### Added

- Add vimeo shortcode.
- Add headers to vimeo-shortcode.html.

### Changed

- Rename youtube shortcode title param to description.

## [0.29.0] - 2023-01-22

### Upgrade

- Rename shortcode arguments `align` and `justify` to `horizontal` and `vertical`, and `titleclass` to `title_class`; rename the about layout file.

### Added

- Add description_class page param.
- Add about_class page param.
- Add content-class page param.

### Changed

- Finish the figure shortcode post.
- Rename align, justify params to horizontal, vertical.

## [0.28.0] - 2023-01-22

## Upgrade

- Update shortcode arguments and site configuration to the revised Hugo-style names. Remove custom overrides for parameters and defaults that this release dropped.

### Added

- Add gallery.html, item.html, gallery-item.html.
- Add gallery post.
- Add figure-shortcode.md.

### Changed

- Change string keys to Hugo names.
- Rename gallery-shortcodes to gallery-shortcode.

## [0.27.1] - 2023-01-01

### Added

- Add _url suffix to center, stretch home page params.
- Add missing quotes.

### Changed

- Update Bootstrap override info.

### Removed

- Remove markup.highlight.style example.

## [0.27.0] - 2022-12-31

### Upgrade

- Update inline page author values to maps, use page-relative image resources, and rename changed shortcodes, partials, and CSS hooks.

### Added

- Add menu_style site param.

### Changed

- Change figure shortcode to use relative paths as page resources.
- Change inline page authors from strings to maps.
- Change header link hover to not affect layout.

### Fixed

- Fix twitter_simple shortcode to use named params.

## [0.26.3] - 2022-12-27

### Changed

- Use paige prefix in search code.
- Clarify paige name reservation.

## [0.26.2] - 2022-12-27

### Changed

- Clarify default layout.

## [0.26.1] - 2022-12-27

### Changed

- Move up figure title by one position.

## [0.26.0] - 2022-12-27

### Upgrade

- Update references to renamed partials and header-link classes; figure usage is now a shortcode.

### Added

- Add paige/figure shortcode.
- Add render-heading.html.

### Changed

- Change search, figures sections to layouts, shortcodes.
- Move page metadata into paige-metadata.html.
- Rename paige-metadata.html to paige-other.html.

## [0.25.0] - 2022-12-21

### Added

- Add more social links.

### Changed

- Order social params.

### Removed

- Remove www subdomain from social links.

### Fixed

- Fix link parameter name.

## [0.24.1] - 2022-12-21

### Added

- Add tags for browserconfig.xml, favicon.ico if baseurl is not root.

### Changed

- Use relLangURL for link tag paths.

### Fixed

- Fix local Bootstrap paths to be relative.

## [0.24.0] - 2022-12-21

### Added

- Add favicons.

## [0.23.6] - 2022-12-20

### Added

- Add social config to site params section.
- Add tableofcontents config to config example.

### Changed

- Change example to username in example config.

### Removed

- Remove quotes to match style.

## [0.23.5] - 2022-12-20

### Added

- Add contact theme tag.

## [0.23.4] - 2022-12-20

### Added

- Add multilingual theme tag.

## [0.23.3] - 2022-12-20

### Fixed

- Fix to use link attribute.

## [0.23.2] - 2022-12-20

### Changed

- Change en weight to 10.

## [0.23.1] - 2022-12-20

### Upgrade

- Rename social link configuration from `url` to `link`.

### Changed

- Change en weight to 10.
- Rename social url to link, reorder.
- Change Twitter example username to username.

## [0.23.0] - 2022-12-20

### Upgrade

- Update site setup to import Paige as a Hugo module; the example configuration no longer uses the old theme-directory setup.

### Added

- Add project context for server command.

### Changed

- Change example config to use theme module.
- Update files included by paige-article.html.
- Update design section.

### Removed

- Remove site author params from example.

## [0.22.0] - 2022-12-20

### Upgrade

- Review custom templates, menus, search/feed settings, and shortcode calls against the updated names and behavior; this release changes several interfaces.

### Added

- Add RSS full content feature.
- Add Markdown processing for RSS description.
- Add excluderss page parameter.
- Add excludesearch page parameter.

### Changed

- Use paige-titles.html in rss.xml.

## [0.21.0] - 2022-12-13

### Upgrade

- If you override Paige templates, update override paths to match the renamed and reorganized templates in this release.

### Added

- Add Bootstrap support feature.
- Add Bootstrap overrides.
- Add search.

### Changed

- Update stretch home page screenshots.
- Update menu weights.

## [0.20.0] - 2022-12-09

### Added

- Add shadow class to home page pics.
- Add back blank lines to CSS.

### Removed

- Remove center pic alt attribute.
- Remove content example screenshots.

## [0.19.0] - 2022-12-09

### Changed

- Move head.html last.

### Removed

- Remove blank lines.

## [0.18.0] - 2022-12-09

### Added

- Add blockquote styles.

## [0.17.0] - 2022-12-09

### Changed

- Wrap blurb with p tag.

## [0.16.0] - 2022-12-09

### Changed

- Change stretch image.
- Update screenshots.

## [0.15.0] - 2022-12-01

### Added

- Add Paige name to home page.
- Add description punctuation.

### Changed

- Change empty lists to show page title.
- Rephrase to page parameter.
- Rename title to Blog.

## [0.14.0] - 2022-11-18

### Added

- Add katex support.

## [0.13.0] - 2022-11-18

### Added

- Add slashes to home pic URLs.

## [0.12.0] - 2022-11-17

### Changed

- Use background-image for cover pic.

### Fixed

- Fix avatar and cover file extensions.

## [0.11.0] - 2022-11-17

### Changed

- Update Bootstrap to v5.2.2.
- Update Bootstrap Icons to v1.10.2.
- Move Hugo license closer to Hugo content.
- Clarify page content.
- Order design by HTML structure and page type.

## [0.10.0] - 2022-09-15

### Changed

- Restructure centered columns.

### Removed

- Remove extra space after description.

## [0.9.0] - 2022-09-14

### Changed

- Unescape HTML entities in head titles.

## [0.8.0] - 2022-09-14

### Changed

- Move home.html to _default.

## [0.7.0] - 2022-09-13

### Fixed

- Fix RSS.

## [0.6.0] - 2022-09-13

### Added

- Add middle dot to RSS title.

## [0.5.1] - 2022-09-09

### Removed

- Remove /paige from baseurl.

## [0.5.0] - 2022-09-09

### Fixed

- Fix config baseurl.

## [0.4.0] - 2022-09-08

### Changed

- Change example author name.
- Missing comma.

### Fixed

- Fix base path logic.

## [0.3.0] - 2022-09-08

No notable user-facing changes.

## [0.2.0] - 2022-09-08

### Upgrade

- Set Hugo's `themesDir` to `..` in the example configuration and move example posts from `post` to `blog`.

### Added

- Add config.toml.
- Add Arrested Development ipsum to home page.
- Add config.yaml.

### Fixed

- Fix hugo command.
- Fix 404 page to use h1 tag.

## [0.1.0] - 2022-09-07

### Added

- Initial Paige theme release, including its Go module definition.

[Unreleased]: https://github.com/willfaught/paige/compare/v0.119.0...HEAD
[0.120.0]: https://github.com/willfaught/paige/compare/v0.119.1...v0.120.0
[0.119.1]: https://github.com/willfaught/paige/compare/v0.119.0...v0.119.1
[0.119.0]: https://github.com/willfaught/paige/compare/v0.118.0...v0.119.0
[0.118.0]: https://github.com/willfaught/paige/compare/v0.117.0...v0.118.0
[0.117.0]: https://github.com/willfaught/paige/compare/v0.116.1...v0.117.0
[0.116.1]: https://github.com/willfaught/paige/compare/v0.116.0...v0.116.1
[0.116.0]: https://github.com/willfaught/paige/compare/v0.115.0...v0.116.0
[0.115.0]: https://github.com/willfaught/paige/compare/v0.114.0...v0.115.0
[0.114.0]: https://github.com/willfaught/paige/compare/v0.113.1...v0.114.0
[0.113.1]: https://github.com/willfaught/paige/compare/v0.113.0...v0.113.1
[0.113.0]: https://github.com/willfaught/paige/compare/v0.112.0...v0.113.0
[0.112.0]: https://github.com/willfaught/paige/compare/v0.111.1...v0.112.0
[0.111.1]: https://github.com/willfaught/paige/compare/v0.111.0...v0.111.1
[0.111.0]: https://github.com/willfaught/paige/compare/v0.110.4...v0.111.0
[0.110.4]: https://github.com/willfaught/paige/compare/v0.110.3...v0.110.4
[0.110.3]: https://github.com/willfaught/paige/compare/v0.110.2...v0.110.3
[0.110.2]: https://github.com/willfaught/paige/compare/v0.110.1...v0.110.2
[0.110.1]: https://github.com/willfaught/paige/compare/v0.110.0...v0.110.1
[0.110.0]: https://github.com/willfaught/paige/compare/v0.109.0...v0.110.0
[0.109.0]: https://github.com/willfaught/paige/compare/v0.108.1...v0.109.0
[0.108.1]: https://github.com/willfaught/paige/compare/v0.108.0...v0.108.1
[0.108.0]: https://github.com/willfaught/paige/compare/v0.107.1...v0.108.0
[0.107.1]: https://github.com/willfaught/paige/compare/v0.107.0...v0.107.1
[0.107.0]: https://github.com/willfaught/paige/compare/v0.106.0...v0.107.0
[0.106.0]: https://github.com/willfaught/paige/compare/v0.105.0...v0.106.0
[0.105.0]: https://github.com/willfaught/paige/compare/v0.104.0...v0.105.0
[0.104.0]: https://github.com/willfaught/paige/compare/v0.103.0...v0.104.0
[0.103.0]: https://github.com/willfaught/paige/compare/v0.102.0...v0.103.0
[0.102.0]: https://github.com/willfaught/paige/compare/v0.101.0...v0.102.0
[0.101.0]: https://github.com/willfaught/paige/compare/v0.100.2...v0.101.0
[0.100.2]: https://github.com/willfaught/paige/compare/v0.100.1...v0.100.2
[0.100.1]: https://github.com/willfaught/paige/compare/v0.100.0...v0.100.1
[0.100.0]: https://github.com/willfaught/paige/compare/v0.99.0...v0.100.0
[0.99.0]: https://github.com/willfaught/paige/compare/v0.98.0...v0.99.0
[0.98.0]: https://github.com/willfaught/paige/compare/v0.97.1...v0.98.0
[0.97.1]: https://github.com/willfaught/paige/compare/v0.97.0...v0.97.1
[0.97.0]: https://github.com/willfaught/paige/compare/v0.96.0...v0.97.0
[0.96.0]: https://github.com/willfaught/paige/compare/v0.95.0...v0.96.0
[0.95.0]: https://github.com/willfaught/paige/compare/v0.94.1...v0.95.0
[0.94.1]: https://github.com/willfaught/paige/compare/v0.94.0...v0.94.1
[0.94.0]: https://github.com/willfaught/paige/compare/v0.93.0...v0.94.0
[0.93.0]: https://github.com/willfaught/paige/compare/v0.92.0...v0.93.0
[0.92.0]: https://github.com/willfaught/paige/compare/v0.91.2...v0.92.0
[0.91.2]: https://github.com/willfaught/paige/compare/v0.91.1...v0.91.2
[0.91.1]: https://github.com/willfaught/paige/compare/v0.91.0...v0.91.1
[0.91.0]: https://github.com/willfaught/paige/compare/v0.90.2...v0.91.0
[0.90.2]: https://github.com/willfaught/paige/compare/v0.90.1...v0.90.2
[0.90.1]: https://github.com/willfaught/paige/compare/v0.90.0...v0.90.1
[0.90.0]: https://github.com/willfaught/paige/compare/v0.89.0...v0.90.0
[0.89.0]: https://github.com/willfaught/paige/compare/v0.88.0...v0.89.0
[0.88.0]: https://github.com/willfaught/paige/compare/v0.87.0...v0.88.0
[0.87.0]: https://github.com/willfaught/paige/compare/v0.86.0...v0.87.0
[0.86.0]: https://github.com/willfaught/paige/compare/v0.85.0...v0.86.0
[0.85.0]: https://github.com/willfaught/paige/compare/v0.84.0...v0.85.0
[0.84.0]: https://github.com/willfaught/paige/compare/v0.83.0...v0.84.0
[0.83.0]: https://github.com/willfaught/paige/compare/v0.82.0...v0.83.0
[0.82.0]: https://github.com/willfaught/paige/compare/v0.81.0...v0.82.0
[0.81.0]: https://github.com/willfaught/paige/compare/v0.80.4...v0.81.0
[0.80.4]: https://github.com/willfaught/paige/compare/v0.80.3...v0.80.4
[0.80.3]: https://github.com/willfaught/paige/compare/v0.80.2...v0.80.3
[0.80.2]: https://github.com/willfaught/paige/compare/v0.80.1...v0.80.2
[0.80.1]: https://github.com/willfaught/paige/compare/v0.80.0...v0.80.1
[0.80.0]: https://github.com/willfaught/paige/compare/v0.79.0...v0.80.0
[0.79.0]: https://github.com/willfaught/paige/compare/v0.78.0...v0.79.0
[0.78.0]: https://github.com/willfaught/paige/compare/v0.77.0...v0.78.0
[0.77.0]: https://github.com/willfaught/paige/compare/v0.76.2...v0.77.0
[0.76.2]: https://github.com/willfaught/paige/compare/v0.76.1...v0.76.2
[0.76.1]: https://github.com/willfaught/paige/compare/v0.76.0...v0.76.1
[0.76.0]: https://github.com/willfaught/paige/compare/v0.75.0...v0.76.0
[0.75.0]: https://github.com/willfaught/paige/compare/v0.74.0...v0.75.0
[0.74.0]: https://github.com/willfaught/paige/compare/v0.73.0...v0.74.0
[0.73.0]: https://github.com/willfaught/paige/compare/v0.72.0...v0.73.0
[0.72.0]: https://github.com/willfaught/paige/compare/v0.71.4...v0.72.0
[0.71.4]: https://github.com/willfaught/paige/compare/v0.71.3...v0.71.4
[0.71.3]: https://github.com/willfaught/paige/compare/v0.71.2...v0.71.3
[0.71.2]: https://github.com/willfaught/paige/compare/v0.71.1...v0.71.2
[0.71.1]: https://github.com/willfaught/paige/compare/v0.71.0...v0.71.1
[0.71.0]: https://github.com/willfaught/paige/compare/v0.70.2...v0.71.0
[0.70.2]: https://github.com/willfaught/paige/compare/v0.70.1...v0.70.2
[0.70.1]: https://github.com/willfaught/paige/compare/v0.70.0...v0.70.1
[0.70.0]: https://github.com/willfaught/paige/compare/v0.69.2...v0.70.0
[0.69.2]: https://github.com/willfaught/paige/compare/v0.69.1...v0.69.2
[0.69.1]: https://github.com/willfaught/paige/compare/v0.69.0...v0.69.1
[0.69.0]: https://github.com/willfaught/paige/compare/v0.68.0...v0.69.0
[0.68.0]: https://github.com/willfaught/paige/compare/v0.67.0...v0.68.0
[0.67.0]: https://github.com/willfaught/paige/compare/v0.66.0...v0.67.0
[0.66.0]: https://github.com/willfaught/paige/compare/v0.65.6...v0.66.0
[0.65.6]: https://github.com/willfaught/paige/compare/v0.65.5...v0.65.6
[0.65.5]: https://github.com/willfaught/paige/compare/v0.65.4...v0.65.5
[0.65.4]: https://github.com/willfaught/paige/compare/v0.65.3...v0.65.4
[0.65.3]: https://github.com/willfaught/paige/compare/v0.65.2...v0.65.3
[0.65.2]: https://github.com/willfaught/paige/compare/v0.65.1...v0.65.2
[0.65.1]: https://github.com/willfaught/paige/compare/v0.65.0...v0.65.1
[0.65.0]: https://github.com/willfaught/paige/compare/v0.64.1...v0.65.0
[0.64.1]: https://github.com/willfaught/paige/compare/v0.64.0...v0.64.1
[0.64.0]: https://github.com/willfaught/paige/compare/v0.63.0...v0.64.0
[0.63.0]: https://github.com/willfaught/paige/compare/v0.62.3...v0.63.0
[0.62.3]: https://github.com/willfaught/paige/compare/v0.62.2...v0.62.3
[0.62.2]: https://github.com/willfaught/paige/compare/v0.62.1...v0.62.2
[0.62.1]: https://github.com/willfaught/paige/compare/v0.62.0...v0.62.1
[0.62.0]: https://github.com/willfaught/paige/compare/v0.61.1...v0.62.0
[0.61.1]: https://github.com/willfaught/paige/compare/v0.61.0...v0.61.1
[0.61.0]: https://github.com/willfaught/paige/compare/v0.60.1...v0.61.0
[0.60.1]: https://github.com/willfaught/paige/compare/v0.60.0...v0.60.1
[0.60.0]: https://github.com/willfaught/paige/compare/v0.59.0...v0.60.0
[0.59.0]: https://github.com/willfaught/paige/compare/v0.58.1...v0.59.0
[0.58.1]: https://github.com/willfaught/paige/compare/v0.58.0...v0.58.1
[0.58.0]: https://github.com/willfaught/paige/compare/v0.57.0...v0.58.0
[0.57.0]: https://github.com/willfaught/paige/compare/v0.56.2...v0.57.0
[0.56.2]: https://github.com/willfaught/paige/compare/v0.56.1...v0.56.2
[0.56.1]: https://github.com/willfaught/paige/compare/v0.56.0...v0.56.1
[0.56.0]: https://github.com/willfaught/paige/compare/v0.55.0...v0.56.0
[0.55.0]: https://github.com/willfaught/paige/compare/v0.54.4...v0.55.0
[0.54.4]: https://github.com/willfaught/paige/compare/v0.54.3...v0.54.4
[0.54.3]: https://github.com/willfaught/paige/compare/v0.54.2...v0.54.3
[0.54.2]: https://github.com/willfaught/paige/compare/v0.54.1...v0.54.2
[0.54.1]: https://github.com/willfaught/paige/compare/v0.54.0...v0.54.1
[0.54.0]: https://github.com/willfaught/paige/compare/v0.53.0...v0.54.0
[0.53.0]: https://github.com/willfaught/paige/compare/v0.52.0...v0.53.0
[0.52.0]: https://github.com/willfaught/paige/compare/v0.51.0...v0.52.0
[0.51.0]: https://github.com/willfaught/paige/compare/v0.50.1...v0.51.0
[0.50.1]: https://github.com/willfaught/paige/compare/v0.50.0...v0.50.1
[0.50.0]: https://github.com/willfaught/paige/compare/v0.49.0...v0.50.0
[0.49.0]: https://github.com/willfaught/paige/compare/v0.48.0...v0.49.0
[0.48.0]: https://github.com/willfaught/paige/compare/v0.47.0...v0.48.0
[0.47.0]: https://github.com/willfaught/paige/compare/v0.46.1...v0.47.0
[0.46.1]: https://github.com/willfaught/paige/compare/v0.46.0...v0.46.1
[0.46.0]: https://github.com/willfaught/paige/compare/v0.45.0...v0.46.0
[0.45.0]: https://github.com/willfaught/paige/compare/v0.44.0...v0.45.0
[0.44.0]: https://github.com/willfaught/paige/compare/v0.43.0...v0.44.0
[0.43.0]: https://github.com/willfaught/paige/compare/v0.42.2...v0.43.0
[0.42.2]: https://github.com/willfaught/paige/compare/v0.42.1...v0.42.2
[0.42.1]: https://github.com/willfaught/paige/compare/v0.42.0...v0.42.1
[0.42.0]: https://github.com/willfaught/paige/compare/v0.41.2...v0.42.0
[0.41.2]: https://github.com/willfaught/paige/compare/v0.41.1...v0.41.2
[0.41.1]: https://github.com/willfaught/paige/compare/v0.41.0...v0.41.1
[0.41.0]: https://github.com/willfaught/paige/compare/v0.40.0...v0.41.0
[0.40.0]: https://github.com/willfaught/paige/compare/v0.39.0...v0.40.0
[0.39.0]: https://github.com/willfaught/paige/compare/v0.38.1...v0.39.0
[0.38.1]: https://github.com/willfaught/paige/compare/v0.38.0...v0.38.1
[0.38.0]: https://github.com/willfaught/paige/compare/v0.37.0...v0.38.0
[0.37.0]: https://github.com/willfaught/paige/compare/v0.36.1...v0.37.0
[0.36.1]: https://github.com/willfaught/paige/compare/v0.36.0...v0.36.1
[0.36.0]: https://github.com/willfaught/paige/compare/v0.35.0...v0.36.0
[0.35.0]: https://github.com/willfaught/paige/compare/v0.34.0...v0.35.0
[0.34.0]: https://github.com/willfaught/paige/compare/v0.33.0...v0.34.0
[0.33.0]: https://github.com/willfaught/paige/compare/v0.32.0...v0.33.0
[0.32.0]: https://github.com/willfaught/paige/compare/v0.31.0...v0.32.0
[0.31.0]: https://github.com/willfaught/paige/compare/v0.30.0...v0.31.0
[0.30.0]: https://github.com/willfaught/paige/compare/v0.29.0...v0.30.0
[0.29.0]: https://github.com/willfaught/paige/compare/v0.28.0...v0.29.0
[0.28.0]: https://github.com/willfaught/paige/compare/v0.27.1...v0.28.0
[0.27.1]: https://github.com/willfaught/paige/compare/v0.27.0...v0.27.1
[0.27.0]: https://github.com/willfaught/paige/compare/v0.26.3...v0.27.0
[0.26.3]: https://github.com/willfaught/paige/compare/v0.26.2...v0.26.3
[0.26.2]: https://github.com/willfaught/paige/compare/v0.26.1...v0.26.2
[0.26.1]: https://github.com/willfaught/paige/compare/v0.26.0...v0.26.1
[0.26.0]: https://github.com/willfaught/paige/compare/v0.25.0...v0.26.0
[0.25.0]: https://github.com/willfaught/paige/compare/v0.24.1...v0.25.0
[0.24.1]: https://github.com/willfaught/paige/compare/v0.24.0...v0.24.1
[0.24.0]: https://github.com/willfaught/paige/compare/v0.23.6...v0.24.0
[0.23.6]: https://github.com/willfaught/paige/compare/v0.23.5...v0.23.6
[0.23.5]: https://github.com/willfaught/paige/compare/v0.23.4...v0.23.5
[0.23.4]: https://github.com/willfaught/paige/compare/v0.23.3...v0.23.4
[0.23.3]: https://github.com/willfaught/paige/compare/v0.23.2...v0.23.3
[0.23.2]: https://github.com/willfaught/paige/compare/v0.23.1...v0.23.2
[0.23.1]: https://github.com/willfaught/paige/compare/v0.23.0...v0.23.1
[0.23.0]: https://github.com/willfaught/paige/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/willfaught/paige/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/willfaught/paige/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/willfaught/paige/compare/v0.19.0...v0.20.0
[0.19.0]: https://github.com/willfaught/paige/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/willfaught/paige/compare/v0.17.0...v0.18.0
[0.17.0]: https://github.com/willfaught/paige/compare/v0.16.0...v0.17.0
[0.16.0]: https://github.com/willfaught/paige/compare/v0.15.0...v0.16.0
[0.15.0]: https://github.com/willfaught/paige/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/willfaught/paige/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/willfaught/paige/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/willfaught/paige/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/willfaught/paige/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/willfaught/paige/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/willfaught/paige/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/willfaught/paige/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/willfaught/paige/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/willfaught/paige/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/willfaught/paige/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/willfaught/paige/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/willfaught/paige/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/willfaught/paige/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/willfaught/paige/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/willfaught/paige/releases/tag/v0.1.0
