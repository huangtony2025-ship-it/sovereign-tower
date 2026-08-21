import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.guides['romance-guide'].metaTitle ?? `วิธีเก็บกุญแจใน ${site.name} — ฟาร์มกุญแจเร็วที่สุด`,
  description:
    pageContent.guides['romance-guide'].metaDesc ?? `วิธีเก็บกุญแจใน ${site.name}: ใช้โค้ด เอาชีวิตรอดให้ลึกถึงเวฟโบนัส และใช้กุญแจอัปสกิลทรีก่อนเสี่ยงเปิดหีบ`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/guides/romance-guide` } },
};

type Section = { h2: string; paragraphs?: string[]; list?: string[]; table?: { headers: string[]; rows: string[][] } };

export default function ThHowToGetKeysPage() {
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
