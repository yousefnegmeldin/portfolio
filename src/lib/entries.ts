import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

type Entry = CollectionEntry<'writing' | 'work' | 'notebook'>;

export const entryUrl = (entry: Pick<Entry, 'id' | 'collection'>) =>
  `/${entry.collection}/${entry.id.split('/').map(encodeURIComponent).join('/')}/`;

export function newestFirst(a: Entry, b: Entry) {
  return b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id);
}

export async function getEntries<C extends CollectionKey>(collection: C, includeDrafts = import.meta.env.DEV) {
  const entries = await getCollection(collection, ({ data }) => includeDrafts || !data.draft);
  return entries.sort(newestFirst);
}

export function relatesTo(project: CollectionEntry<'work'>, essay: CollectionEntry<'writing'>) {
  return project.data.relatedWriting.some((path) =>
    path.replace(/^\/?content\/writing\//, '').replace(/\.(md|mdx)$/i, '') === essay.id,
  );
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' });

export const formatDate = (date: Date) => dateFormatter.format(date);
