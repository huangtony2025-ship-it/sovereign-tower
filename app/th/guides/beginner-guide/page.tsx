import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.guides['beginner-guide'].metaTitle ?? `คู่มือเริ่มต้น ${site.name} — การอัปเกรดและสกิลทรีที่ดีที่สุด`,
  description:
    pageContent.guides['beginner-guide'].metaDesc ?? `คู่มือเริ่มต้น ${site.name}: ลากศัตรูเป็นวงกว้าง เลือก Multi-shot, Attack Speed และ Projectile Count ก่อน แล้วใช้กุญแจอัปสกิลทรี`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/guides/beginner-guide` } },
};

type Section = { h2: string; paragraphs?: string[]; list?: string[]; table?: { headers: string[]; rows: string[][] } };

export default function ThBeginnerGuidePage() {
  const g = pageContent.guides['beginner-guide'];
  const sections: Section[] = g.sections;
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="prose">
        <h1>{g.h1}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${g.imgVideoId}/hqdefault.jpg`} alt={g.imgAlt} />
        <p>{g.intro}</p>

        <div className="callout">
          <strong>{g.callout}</strong>
        </div>

        {sections.map((sec) => (
          <section key={sec.h2}>
            <h2>{sec.h2}</h2>
            {sec.paragraphs?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {sec.table ? (
              <table>
                <thead>
                  <tr>
                    {sec.table.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{j === 0 ? <strong>{cell}</strong> : cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
