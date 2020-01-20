<p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.svg" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Statamic Starter Kit: Cool Writings
</h1>

![Statamic 3.0+](https://img.shields.io/badge/Statamic-3.0+-FF269E?style=for-the-badge&link=https://statamic.com)

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
- :100:/:100:/:100:/:100: Lighthouse score

## Screenshot

![Screenshot](https://github.com/statamic/statamic-starter-cool-writings/raw/master/screenshot.png)

## Quick Start

**1. Create a new site** cloning the repo and removing the origin repo.

```
git clone git@github.com:statamic/statamic-starter-cool-writings.git new-site
cd my-site
rm -rf .git
composer install
cp .env.example .env && php artisan key:generate
```

**2. Make a new user** – you'll want it to be a `super` so you have access to everything.

```
php please make:user
```

**3. Do your thing!**

If you're using [Laravel Valet](https://laravel.com/docs/valet) (or similar), your site should be available at `http://my-site.test`. You can access the control panel at `http://my-site.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic 3 docs](https://statamic.dev), and enjoy!

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).
