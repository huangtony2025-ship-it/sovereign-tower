import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';

export const dynamic = 'force-static';

const base = site.url;

const pages = [
  '',
  '/codes',
  '/weapons',
  '/tier-list',
  '/guides',
  '/guides/beginner-guide',
  '/guides/how-to-play',
  '/guides/how-to-get-keys',
  '/builds',
  '/worlds',
  '/about',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const en = pages.map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7,
    alternates: {
      languages: { th: base + '/th' + p },
    },
  }));

  const th = pages.map((p) => ({
    url: base + '/th' + p,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
    alternates: {
      languages: { 'x-default': base + p },
    },
  }));

  return [...en, ...th];
}
