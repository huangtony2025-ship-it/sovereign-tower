import type { Metadata } from 'next';
import { site, worlds, pageContent } from '@/lib/data';

export const metadata: Metadata = {
  title: pageContent.worlds.metaTitle ?? `${site.name} Worlds Guide`,
  description:
    pageContent.worlds.metaDesc ?? `${site.name} worlds guide: progress through worlds and become the best fighter.`,
  alternates: { languages: { th: `${site.url}/th/worlds` } },
};

export default function WorldsPage() {
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="page-head">
        <h1>{pageContent.worlds.h1}</h1>
        <p className="desc">{pageContent.worlds.desc}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${pageContent.worlds.imgVideoId ?? '1mLw1E3a2aw'}/hqdefault.jpg`} alt={pageContent.worlds.imgAlt} />
      </div>

      <section style={{ marginTop: 24 }}>
        <div className="grid">
          {worlds.map((w) => (
            <div className="card" key={w.name}>
              <span className="tag">{pageContent.worlds.cardTag ?? 'World'}</span>
              <h3>{w.name}</h3>
              <p>{w.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>{pageContent.worlds.voidH2}</h2>
        <p style={{ color: '#9a9ab0', marginTop: 10, maxWidth: 680 }}>
          {pageContent.worlds.voidPara}
        </p>
      </section>
    </main>
  );
}
