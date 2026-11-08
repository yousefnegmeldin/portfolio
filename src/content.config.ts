import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalText = z.string().trim().nullish().transform((value) => value || undefined);
const media = optionalText.pipe(
  z.string().regex(/^\/media\/[\w./%-]+$/)
    .refine((value) => !value.split('/').some((part) => part === '..' || part === '.'))
    .optional(),
);
const focalPoint = z.preprocess(
  (value) => value === '' || value === null ? undefined : value,
  z.coerce.number().min(0).max(100).optional(),
);

const article = z.object({
  title: z.string().trim().min(1),
  description: optionalText,
  date: z.union([z.date(), z.iso.date()]).transform((value) => new Date(value)),
  draft: z.boolean().nullish().transform((value) => value ?? false),
  image: media,
  imageAlt: optionalText,
  imageCaption: optionalText,
  video: media,
  videoCaption: optionalText,
  videoCaptions: media,
});

const cover = {
  cover: media,
  coverX: focalPoint,
  coverY: focalPoint,
  coverTone: z.enum(['light', 'dark']).nullish(),
};

const entries = (folder: string) => glob({
  base: `./content/${folder}`,
  pattern: '**/*.{md,mdx}',
  generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/i, ''),
});

const writing = defineCollection({ loader: entries('writing'), schema: article.extend(cover) });
const notebook = defineCollection({ loader: entries('notebook'), schema: article });
const work = defineCollection({
  loader: entries('work'),
  schema: article.extend({
    ...cover,
    featured: z.boolean().nullish().transform((value) => value ?? false),
    runtime: optionalText,
    relatedWriting: z.array(z.string()).nullish().transform((value) => value ?? []),
  }),
});

export const collections = { writing, notebook, work };
