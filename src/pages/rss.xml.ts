import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { entryUrl, getEntries, newestFirst } from '../lib/entries';
import { site } from '../site';

export const GET: APIRoute = async ({ site: url }) => {
  const [writing, notebook] = await Promise.all([getEntries('writing', false), getEntries('notebook', false)]);
  return rss({
    title: site.name,
    description: site.intro,
    site: url!,
    items: [...writing, ...notebook].sort(newestFirst).map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: entryUrl(entry),
    })),
  });
};
