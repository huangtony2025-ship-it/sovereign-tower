import type { Metadata } from 'next';
import { site, gameStats, videos, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.home?.metaTitle ?? `${site.name} — โค้ด, อาวุธ, คู่มือ`,
  description: pageContent.home?.metaDesc ?? site.description,
  alternates: { languages: { 'x-default': site.url.replace(/\/th$/, '') } },
};

const thumb = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

export default function ThHome() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="hero-eyebrow">{pageContent.hero.eyebrow}</span>
          <h1>{pageContent.hero.title}</h1>
          <p className="sub">{site.tagline}</p>
          <p className="hero-desc">{site.description}</p>
          <div className="stats">
            {gameStats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <a className="cta" href="/th/codes">
              {pageContent.hero.ctaCodes}
            </a>
            <a className="cta ghost" href="/th/guides/beginner-guide">
              {pageContent.hero.ctaBeginner}
            </a>
            <a className="cta ghost" href="/th/tier-list">
              {pageContent.hero.ctaTier}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{pageContent.home?.videosTitle ?? 'วิดีโอล่าสุด'}</h2>
          <div className="grid">
            {videos.map((v) => (
              <div className="card video-card" key={v.videoId}>
                <a
                  className="video-thumb"
                  href={`https://www.youtube.com/watch?v=${v.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="card-img" src={thumb(v.videoId)} alt={v.title} loading="lazy" />
                  <span className="play-btn" />
                </a>
                <h3>
                  <a href={`https://www.youtube.com/watch?v=${v.videoId}`} target="_blank" rel="noreferrer">
                    {v.title}
                  </a>
                </h3>
                <div className="v-meta">{v.views}{v.views ? ' · ' : ''}{v.age}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{pageContent.home?.popularTitle ?? 'หน้ายอดนิยม'}</h2>
          <div className="grid">
            {pageContent.popularPages.map((p) => (
              <div className="card" key={p.href}>
                <a href={p.href}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="card-img" src={thumb(p.videoId)} alt={p.title} loading="lazy" />
                </a>
                <span className="tag">{p.tag}</span>
                <h3>
                  <a href={p.href}>{p.title}</a>
                </h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{pageContent.home?.aboutTitle ?? `${site.name} คืออะไร?`}</h2>
          <div className="prose">
            {pageContent.homeAbout.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
