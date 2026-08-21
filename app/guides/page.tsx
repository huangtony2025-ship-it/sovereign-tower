import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data';

export const metadata: Metadata = {
  title: pageContent.guidesIndex.metaTitle ?? `${site.name} Guides — Beginner, How to Play, Keys`,
  description:
    pageContent.guidesIndex.metaDesc ?? `${site.name} guides: beginner guide, how to play, and how to get Keys.`,
  alternates: { languages: { th: `${site.url}/th/guides` } },
};

export default function GuidesPage() {
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="page-head">
        <h1>{pageContent.guidesIndex.h1}</h1>
        <p className="desc">{pageContent.guidesIndex.desc}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${pageContent.guidesIndex.imgVideoId ?? 'wFvonkM2s9Q'}/hqdefault.jpg`} alt={pageContent.guidesIndex.imgAlt} />
      </div>
      <div className="grid" style={{ marginTop: 24 }}>
        {pageContent.guidesIndex.cards.map((g) => (
          <div className="card" key={g.href}>
            <h3><a href={g.href}>{g.title}</a></h3>
            <p>{g.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
