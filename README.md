<!-- statamic:hide --><p align="center"><img src="https://statamic.com/assets/branding/squircle/statamic-mark-lime.svg" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Starter Kit: Cool Writings
</h1>

A typography-led journal for Statamic, with generous whitespace, teal ink details, and a little ’90s personality. Version 3.0.0 brings a complete editorial refresh, built-in article search, and light and dark themes.

## Features

- Fluid Inter typography, open article rows, and a fine-lined canvas with small handwritten details.
- Light and dark themes with a miniature rocker switch. Your choice is remembered across pages and visits.
- Article search across titles, excerpts, and full text, using Statamic’s local index.
- Markdown articles with considered headings, quotes, images, lists, code, and tables, followed by up to two more published stories.
- A chronological archive with ten articles per page, plus topics with descriptions and article counts.
- A fuller About page, a custom 404 page, and the original three sample stories.
- Responsive navigation, keyboard focus states, Escape-to-close controls, and reduced-motion support.
- Editable site settings and social links, with Antlers templates, Tailwind CSS 4, Vite 8, and Alpine.js 3.

<!-- statamic:hide -->
## Screenshots

![Cool Writings 3.0.0 in light mode](https://raw.githubusercontent.com/statamic/starter-kit-cool-writings/master/screenshot.png)

[Dark mode and more screenshots](https://github.com/statamic/starter-kit-cool-writings/tree/master/screenshots) · [Square thumbnail](https://raw.githubusercontent.com/statamic/starter-kit-cool-writings/master/thumbnail.png)
<!-- /statamic:hide -->

## Quick start

Create a site with the [Statamic CLI](https://github.com/statamic/cli):

```sh
statamic new your-site statamic/starter-kit-cool-writings
```

Or install the kit into a fresh [Statamic site](https://statamic.dev/installation):

```sh
php please starter-kit:install statamic/starter-kit-cool-writings --clear-site
```

The `--clear-site` option replaces existing site content. Use a fresh installation or back up your site first.

Follow the installer’s prompts to create a user, then visit `/cp` to start editing. You can also create a super user with:

```sh
php please make:user
```

Production assets are included, so you can use the kit without a frontend build. To work on the templates and styles, use Node.js 20.19+ or 22.12+:

```sh
npm install
npm run dev
```

Build the production assets when you’re ready:

```sh
npm run build
```

## Writing and customization

Write articles in Markdown and add a short excerpt and topics in the article editor. Topic descriptions are optional and appear on both the topic list and the individual topic page. The home page, About page, archive introduction, and topic introduction are editable content entries. Site name and social links live in the Settings globals.

Component styling lives in the templates as Tailwind utilities. Shared partials handle article rows, navigation, search, the theme switch, and the canvas frame. `resources/css/prose.css` styles the HTML produced by Markdown; `resources/css/site.css` contains the Tailwind theme and shared defaults.

## Search

The search icon in the navigation expands into an input. Results include published articles matching their title, excerpt, or full text. The local index is created on the first search and updates when articles are saved through the control panel.

After editing article files directly, rebuild it with:

```sh
php please search:update writings
```

The index is configured in `config/statamic/search.php`, the route in `routes/web.php`, and the results template in `resources/views/search.antlers.html`. Search requires a running Statamic site and is not available in a static HTML export.

## Light and dark themes

The theme starts with your operating system’s preference. Flip the light switch in the navigation to choose a theme; the browser remembers that choice. Tailwind’s `dark:` utilities follow the selected theme, with a system-preference fallback when JavaScript is unavailable.

The Surge and Reebok sample images include `-dark.jpg` variants beside the originals in `public/assets/content`. Their article Markdown uses `<picture>` with a `data-theme-dark` source. The theme switch updates that source alongside the page colors; its `prefers-color-scheme: dark` media attribute provides the fallback without JavaScript. Regular photographs can use the same image in both themes.

## Upgrading from 2.x

This is a starter kit, so installing a new release does not automatically merge the design into a customized site. For an existing site, compare the 3.0.0 templates, styles, JavaScript, blueprints, and search configuration with your own changes. Rebuild the frontend assets after merging.

The original sample entry IDs and URLs are preserved. The content model adds an optional topic description and exposes the existing topics relationship in the article editor.

## Contributing

Contributions are welcome. Please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct) before contributing.
