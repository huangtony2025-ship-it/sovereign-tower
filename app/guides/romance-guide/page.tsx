import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data';

export const metadata: Metadata = {
  title: pageContent.guides['romance-guide'].metaTitle ?? `${site.name} Romance Guide`,
  description:
    pageContent.guides['romance-guide'].metaDesc ?? `How to get Keys in ${site.name}: redeem codes, survive deep into bonus waves, and spend Keys on the skill tree before gambling on chests.`,
  alternates: { languages: { th: `${site.url}/th/guides/romance-guide` } },
};

type Section = { h2: string; paragraphs?: string[]; list?: string[]; table?: { headers: string[]; rows: string[][] } };

export default function HowToGetKeysPage() {
  const g = pageContent.guides['romance-guide'];
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

        <div className="callout">
          <strong>{g.callout}</strong>
        </div>
      </div>
    </main>
  );
}
