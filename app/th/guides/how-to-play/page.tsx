import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.guides['how-to-play'].metaTitle ?? `วิธีเล่น ${site.name} — เวฟ, กุญแจ, หีบ & ความหายาก`,
  description:
    pageContent.guides['how-to-play'].metaDesc ?? `วิธีเล่น ${site.name}: เอาชีวิตรอดเวฟ สะสมกุญแจ เปิดหีบเพื่อปลดล็อกอาวุธและอุปกรณ์ และเข้าใจความหายาก`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/guides/how-to-play` } },
};

type Section = { h2: string; paragraphs?: string[]; list?: string[]; table?: { headers: string[]; rows: string[][] } };

export default function ThHowToPlayPage() {
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
