# In the Works

Personal engineering site for Yousef Negmeldin. Astro builds static pages from Markdown and MDX, and React is available for interactive pieces within an essay.

## Local development

Use Node 24 LTS, or another Node version supported by Astro.

```sh
nvm use
npm ci
npm run dev
npm run check
npm run build
```

The build outputs to `dist/`. The homepage intro and Work intro live in `src/site.ts`.

## Publishing with Pages CMS

Open this repository and its publishing branch in [Pages CMS](https://app.pagescms.org/) after pushing `.pages.yml`. The Pages CMS GitHub App needs access to the repo.

- Write essays in **Writing**, case studies in **Work**, and short entries in **Notebook**. Each entry is a Markdown file in its own folder under `content/`.
- Keep **Draft** enabled while editing. Drafts are visible in `npm run dev` and excluded from production routes, listings, and RSS. Saving a draft commits its source to Git, and uploads in `public/media/` are served at their URLs.
- Add artwork to a Writing cover, then set its horizontal and vertical position from 0 to 100 and choose a text color. The title and excerpt overlay the full image. Mark up to two Work entries as featured to show them on the homepage.
- Use the body editor to place images and fenced code blocks. The **Article figure** fields add a captioned image within the article column. For a caption at a specific point in Markdown, use an HTML `figure` with an `img` and `figcaption` in source mode.
- Use **Article video** to upload an MP4 or WebM. Add a caption and a WebVTT file as needed. The site renders a click-to-play player below the body.
- Choose **Related essays** on a Work entry. Published essays link back to the case study. Files in `public/media/` are served from `/media/`.

## MDX essays and React

Author `.mdx` files in the same collection folders from the code editor. They use the same frontmatter and routes as Markdown. To position media anywhere in the article, import `Figure.astro` or `Video.astro` from `src/components/` and place it between paragraphs.

For a React demo, import its component in MDX and use `client:visible` so it loads when a reader reaches it. Leave off the directive if the component only needs to render static HTML. Use a repository-relative file path such as `content/writing/example.mdx` in a Work entry’s `relatedWriting` field to cross-link a code-authored essay.

The combined Writing and Notebook feed is available at `/rss.xml`.
