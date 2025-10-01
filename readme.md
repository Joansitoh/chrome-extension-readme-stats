<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="Chrome Extension Stats" />
 <h2 align="center">Chrome Extension Stats Card</h2>
 <p align="center">Get dynamically generated stats cards for your Chrome Web Store extensions!</p>
</p>

<p align="center">
  <a href="https://github.com/Joansitoh/chrome-extension-readme-stats/actions">
    <img alt="Tests" src="https://github.com/Joansitoh/chrome-extension-readme-stats/workflows/Test/badge.svg" />
  </a>
  <a href="https://github.com/Joansitoh/chrome-extension-readme-stats/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/Joansitoh/chrome-extension-readme-stats?color=0088ff" />
  </a>
  <a href="https://github.com/Joansitoh/chrome-extension-readme-stats/pulls">
    <img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/Joansitoh/chrome-extension-readme-stats?color=0088ff" />
  </a>
</p>

<p align="center">
  <a href="https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh">View Demo</a>
  ·
  <a href="https://github.com/Joansitoh/chrome-extension-readme-stats/issues/new/choose">Report Bug</a>
  ·
  <a href="https://github.com/Joansitoh/chrome-extension-readme-stats/issues/new/choose">Request Feature</a>
  ·
  <a href="https://github.com/Joansitoh/chrome-extension-readme-stats/discussions">Ask Question</a>
</p>

<p align="center">Love the project? Please consider <a href="https://github.com/sponsors/Joansitoh">sponsoring</a> to help it improve!</p>

---

# Features

📊 [Chrome Extension Stats Card](#chrome-extension-stats-card) · 🎨 [Themes](#themes) · ⚙️ [Customization](#customization) · 🌍 [Locales](#available-locales) · 🚀 [Deploy](#deploy-on-your-own)

# Chrome Extension Stats Card

Display beautiful stats for your Chrome Web Store extensions!

Copy-paste this into your markdown content, and that's it. Simple!

Change the `extension_id` value to your Chrome Web Store extension's ID.

```md
[![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh)](https://github.com/Joansitoh/chrome-extension-readme-stats)
```

## Finding Your Extension ID

Your extension ID is in the Chrome Web Store URL:

```
https://chrome.google.com/webstore/detail/extension-name/EXTENSION_ID_HERE
                                                         ^^^^^^^^^^^^
```

For example: `jhdflfacjalpcajleapijmclnbilnjlh`

## Hiding Individual Stats

You can pass a query parameter `hide` to hide specific stats with comma-separated values.

> Options: `stars`, `commits`, `issues`

```md
![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&hide=stars,commits)
```

## Showing Icons

You can enable icons by passing `show_icons=true` in the query param:

```md
![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true)
```

## Themes

With built-in themes, you can customize the look of the card without manual customization.

Use `?theme=THEME_NAME` parameter like this:

```md
![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&theme=dark)
```

#### All Built-in Themes

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula and more!

<img src="https://res.cloudinary.com/anuraghazra/image/upload/v1595174536/grs-themes_l4ynja.png" alt="Chrome Extension Stats Themes" width="600px"/>

You can look at a preview for [all available themes](./themes/README.md) or checkout the [theme config file](./themes/index.js).

#### Responsive Card Theme

[![Extension Stats - Light](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/Joansitoh/chrome-extension-readme-stats#responsive-card-theme#gh-light-mode-only)
[![Extension Stats - Dark](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/Joansitoh/chrome-extension-readme-stats#responsive-card-theme#gh-dark-mode-only)

Since GitHub will re-upload the cards and serve them from their CDN, we can not infer the browser/GitHub theme on the server side. There are, however, four methods you can use to create dynamics themes on the client side.

##### Use the transparent theme

We have included a `transparent` theme that has a transparent background. This theme is optimized to look good on GitHub's dark and light default themes. You can enable this theme using the `&theme=transparent` parameter like so:

```md
![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&theme=transparent)
```

<details>
<summary>:eyes: Show example</summary>

![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true&theme=transparent)

</details>

##### Add transparent alpha channel to a themes bg_color

You can use the `bg_color` parameter to make any of [the available themes](./themes/README.md) transparent. This is done by setting the `bg_color` to a color with a transparent alpha channel (i.e. `bg_color=00000000`):

```md
![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&bg_color=00000000)
```

<details>
<summary>:eyes: Show example</summary>

![Extension Stats](https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true&bg_color=00000000)

</details>

##### Use GitHub's theme context tag

You can use [GitHub's theme context](https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/) tags to switch the theme based on the user's GitHub theme automatically. This is done by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL. This tag will define whether the image specified in the markdown is only shown to viewers using a light or a dark GitHub theme:

```md
[![Extension Stats - Dark](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/Joansitoh/chrome-extension-readme-stats#gh-dark-mode-only)
[![Extension Stats - Light](https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/Joansitoh/chrome-extension-readme-stats#gh-light-mode-only)
```

<details>
<summary>:eyes: Show example</summary>

[![Extension Stats - Dark](https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/Joansitoh/chrome-extension-readme-stats#gh-dark-mode-only)
[![Extension Stats - Light](https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/Joansitoh/chrome-extension-readme-stats#gh-light-mode-only)

</details>

##### Use GitHub's new media feature

You can use [GitHub's new media feature](https://github.blog/changelog/2022-05-19-specify-theme-context-for-images-in-markdown-beta/) in HTML to specify whether to display images for light or dark themes. This is done using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature.

```html
<picture>
  <source
    srcset="https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://chrome-extension-readme-stats.vercel.app/api?extension_id=YOUR_ID&show_icons=true" />
</picture>
```

<details>
<summary>:eyes: Show example</summary>

<picture>
  <source
    srcset="https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img src="https://chrome-extension-readme-stats.vercel.app/api?extension_id=jhdflfacjalpcajleapijmclnbilnjlh&show_icons=true" />
</picture>

</details>

## Customization

You can customize the appearance of your `Stats Card` with URL parameters.

#### Common Options

| Name              | Description                                               | Type      | Default Value |
|-------------------|-----------------------------------------------------------|-----------|---------------|
| `extension_id`    | Your Chrome Web Store extension ID                        | string    | **Required**  |
| `developer_name`  | Developer name to display on the card                     | string    | "Developer"   |
| `hide`            | Hide specific stats (comma-separated)                     | string    | null          |
| `hide_title`      | Hide the title of the card                                | boolean   | false         |
| `hide_rank`       | Hide the rank indicator                                   | boolean   | false         |
| `hide_border`     | Hide the card border                                      | boolean   | false         |
| `show_icons`      | Show icons for each stat                                  | boolean   | false         |
| `card_width`      | Set the card's width manually                             | number    | 500           |
| `theme`           | Theme name                                                | string    | "default"     |
| `bg_color`        | Card's background color                                   | hex/gradient | "fffefe"   |
| `title_color`     | Card's title color                                        | hex color | "2f80ed"      |
| `text_color`      | Body text color                                           | hex color | "434d58"      |
| `icon_color`      | Icon color                                                | hex color | "4c71f2"      |
| `border_color`    | Card's border color                                       | hex color | "e4e2e2"      |
| `ring_color`      | Rank circle color                                         | hex color | theme color   |
| `locale`          | Set the language                                          | string    | "en"          |
| `border_radius`   | Corner rounding                                           | number    | 4.5           |
| `number_format`   | Switch between short (25.3k) or long (25300) numbers     | string    | "short"       |
| `rank_icon`       | Rank icon to display                                      | string    | "default"     |
| `disable_animations` | Disable all animations                                 | boolean   | false         |
| `text_bold`       | Use bold text                                             | boolean   | true          |
| `cache_seconds`   | Cache duration (min: 21600, max: 86400)                   | number    | 21600         |

> **Note on cache:**
> Stats cards have a default cache of 6 hours (21600 seconds). If the number of forks/stars is less than 1k, the default cache is 2 hours (7200 seconds).

#### Stats Displayed

- **Total Users** - Number of users who installed your extension
- **Total Ratings** - Number of ratings received
- **Rating Score** - Average rating (0-500 scale)
- **Rank** - Calculated based on extension popularity

#### Gradient Background

You can provide multiple comma-separated values in bg_color option to render a gradient with the following format:

```
&bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10
```

## Deploy on Your Own

### On Vercel

#### :film_projector: [Check Out Step By Step Video Tutorial By @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

Since the GitHub API only allows 5k requests per hour, my `https://chrome-extension-readme-stats.vercel.app/api` could possibly hit the rate limiter. If you host it on your own Vercel server, you won't have to worry about anything. Click on the deploy button to get started!

> **Note:** Since [#58](https://github.com/anuraghazra/github-readme-stats/pull/58), we should be able to handle more than 5k requests without issues :grin:.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Joansitoh/chrome-extension-readme-stats)

<details>
 <summary><b>:hammer_and_wrench: Step-by-step guide on setting up your own Vercel instance</b></summary>

1. Go to [vercel.com](https://vercel.com/).
2. Click on `Log in`.
3. Sign in with GitHub by pressing `Continue with GitHub`.
4. Sign in to GitHub and allow access to all repositories if prompted.
5. Fork this repo.
6. Go back to your [Vercel dashboard](https://vercel.com/dashboard).
7. To import a project, click the `Add New...` button and select the `Project` option.
8. Click the `Continue with GitHub` button, search for the required Git Repository and import it by clicking the `Import` button.
9. Create a personal access token (PAT) [here](https://github.com/settings/tokens/new) if you haven't already and select the `repo` scope.
10. Add the PAT as an environment variable named `PAT_1` (you can also add multiple tokens named `PAT_1`, `PAT_2`, etc. for more rate limit).
11. Click deploy, and you're good to go. See your domains to use the API!

</details>

### On Other Platforms

<details>
<summary><b>On Render</b></summary>

Render provides a free tier with 750 hours per month:

1. Fork this repository
2. Create a new web service on [Render](https://render.com)
3. Set build command: `npm install`
4. Set start command: `node express.js`
5. Deploy!

</details>

<details>
<summary><b>On Railway</b></summary>

1. Fork this repository
2. Go to [Railway](https://railway.app)
3. Create a new project from GitHub
4. Deploy!

</details>

## :sparkling_heart: Support the Project

If you liked the project, consider starring :star: this repository to help it gain more visibility!

[![Stargazers repo roster for @Joansitoh/chrome-extension-readme-stats](https://reporoster.com/stars/Joansitoh/chrome-extension-readme-stats)](https://github.com/Joansitoh/chrome-extension-readme-stats/stargazers)

## :handshake: Contributing

Contributions, issues, and feature requests are welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

Feel free to check the [issues page](https://github.com/Joansitoh/chrome-extension-readme-stats/issues).

## Available Locales

`en`, `es`, `fr`, `de`, `it`, `pt-br`, `pt-pt`, `ja`, `ko`, `cn`, `zh-tw`, `ru`, `ar`, `uk-ua`, `id`, `ml`, `my`, `pl`, `nl`, `fil`, `sr`, `sr-latn`, `uz`, and many more!

Check [all supported locales](./src/translations.js) to see if yours is available.

## :scroll: License

This project is licensed under [MIT](LICENSE).

---

## Credits

This project is based on [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) by [Anurag Hazra](https://github.com/anuraghazra).

Made with :heart: and Chrome Extensions by [Joansitoh](https://github.com/Joansitoh)
