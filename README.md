<!-- statamic:hide --><p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.png" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Statamic Starter Kit: Cool Writings
</h1>

![Statamic 3.2+](https://img.shields.io/badge/Statamic-3.2+-FF269E?style=for-the-badge&link=https://statamic.com)
<!-- /statamic:hide -->

## Features
- Articles blogging collection with most recent articles on the home page
- Markdown focused writing experience
- Topics taxonomy for Articles
- Pages structure for dynamic navigation
- Customizable social links and icons
- Clean & modern typography using [Inter](https://rsms.me/inter/)
- Beautifully responsive
- Built with [TailwindCSS](https://tailwindcss.com)
- Itty bitty [Alpine.js](https://github.com/alpinejs/alpine) for interactions
- 💯/💯/💯/💯 Lighthouse score

<!-- statamic:hide -->
## Screenshot

![Screenshot](https://github.com/statamic/statamic-starter-cool-writings/raw/master/screenshot.png)
<!-- /statamic:hide -->

## Video Tour

Watch the [Cool Writings video tour](https://www.youtube.com/watch?v=IgjJYfVF26Q) to see what's going on under the hood.

## Quick Start

### 1. Create a new site

You can create a new site using the [Statamic CLI Tool](https://github.com/statamic/cli):

```
statamic new your-site statamic/starter-kit-cool-writings
```

Or you can install manually into a fresh [Statamic installation](https://statamic.dev/installation) by running:

```
php please starter-kit:install statamic/starter-kit-cool-writings --clear-site
```

### 2. Make a new user

The above installers should prompt you to make a user, but you can also run `php please make:user`. You'll want it to be a `super` so you have access to everything.

### 3. Recompile the CSS (optional)

The [TailwindCSS](https://tailwindcss.com/) included in this kit is compiled with [PurgeCSS](https://purgecss.com/) to reduce filesize on any unused classes and selectors. If you want to modify anything, just recompile it.

```
npm i && npm run dev
```

To compile for production again:

```
npm run production
```

### 4. Do your thing!

If you're using [Laravel Valet](https://laravel.com/docs/valet) (or similar), your site should be available at `http://cool-site.test`. You can access the control panel at `http://cool-site.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic 3 docs](https://statamic.dev), and enjoy!

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).
