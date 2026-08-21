import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data';

export const metadata: Metadata = {
  title: pageContent.guides['how-to-play'].metaTitle ?? `${site.name} How to Play — Waves, Keys, Chests & Rarity`,
  description:
    pageContent.guides['how-to-play'].metaDesc ?? `How to play ${site.name}: survive waves, collect Keys, open Chests to unlock weapons and equipment, and understand weapon rarity.`,
  alternates: { languages: { th: `${site.url}/th/guides/how-to-play` } },
};

type Section = { h2: string; paragraphs?: string[]; list?: string[]; table?: { headers: string[]; rows: string[][] } };

export default function HowToPlayPage() {
  const g = pageContent.guides['how-to-play'];
  const sections: Section[] = g.sections;
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="prose">
        <h1>{g.h1}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${g.imgVideoId}/hqdefault.jpg`} alt={g.imgAlt} />
        <p>{g.intro}</p>

        {sections.map((sec) => (
          <section key={sec.h2}>
            <h2>{sec.h2}</h2>
            {sec.paragraphs?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {sec.list ? (
              <ul>
                {sec.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
