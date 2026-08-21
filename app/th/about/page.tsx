import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.about.metaTitle ?? `เกี่ยวกับ — วิกิ ${site.name}`,
  description:
    pageContent.about.metaDesc ?? `วิกิ ${site.name} เป็นแหล่งอ้างอิงแฟนเมดสำหรับ ${site.name}`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/about` } },
};

export default function ThAboutPage() {
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="prose">
        <h1>{pageContent.about.title}</h1>
        {pageContent.about.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <h2>{pageContent.about.officialTitle ?? 'ลิงก์อย่างเป็นทางการ'}</h2>
        <ul>
          <li>
            <a href={site.officialLink} target="_blank" rel="noreferrer">
              {pageContent.about.officialLinkText}
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
