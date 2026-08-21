import type { Metadata } from 'next';
import { site, pageContent } from '@/lib/data';

export const metadata: Metadata = {
  title: pageContent.about.metaTitle ?? `About — ${site.name} Wiki`,
  description:
    pageContent.about.metaDesc ?? `${site.name} Wiki is a fan-made reference for ${site.name}.`,
  alternates: { languages: { th: `${site.url}/th/about` } },
};

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="prose">
        <h1>{pageContent.about.title}</h1>
        {pageContent.about.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <h2>{pageContent.about.officialTitle ?? 'Official Links'}</h2>
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
