import type { Metadata } from 'next';
import { site, weapons, pageContent } from '@/lib/data';

export const metadata: Metadata = {
  title: pageContent.tierList.metaTitle ?? `${site.name} Tier List — Best Weapons Ranked`,
  description:
    pageContent.tierList.metaDesc ?? `${site.name} weapon tier list: all weapons ranked for wave survival. See which weapon leads the current meta.`,
  alternates: { languages: { th: `${site.url}/th/tier-list` } },
};

export default function TierListPage() {
  const ordered = [...weapons].sort((a, b) => (a.tier < b.tier ? -1 : 1));
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="page-head">
        <h1>{pageContent.tierList.h1}</h1>
        <p className="desc">{pageContent.tierList.desc}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${pageContent.tierList.imgVideoId ?? 'ODjpoP9VoUs'}/hqdefault.jpg`} alt={pageContent.tierList.imgAlt} />
      </div>

      <section style={{ marginTop: 24 }}>
        {['S', 'A', 'B'].map((tier) => (
          <div key={tier} style={{ marginBottom: 24 }}>
            <div className="tier-row">
              <span className={`tier-badge tier-${tier}`}>{tier}</span>
              <h2 style={{ margin: 0 }}>{tier === 'S' ? (pageContent.tierList.tierS ?? 'S-Tier (Meta)') : tier === 'A' ? (pageContent.tierList.tierA ?? 'A-Tier') : (pageContent.tierList.tierB ?? 'B-Tier')}</h2>
            </div>
            <div className="grid" style={{ marginTop: 12 }}>
              {ordered
                .filter((w) => w.tier === tier)
                .map((w) => (
                  <div className="card" key={w.name}>
                    <h3>{w.name}</h3>
                    <p><strong>{pageContent.tierList.bestWith ?? 'Best with'}:</strong> {w.synergy}</p>
                    <p><strong>{pageContent.tierList.playstyle ?? 'Playstyle'}:</strong> {w.playstyle}</p>
                    <p style={{ marginTop: 6 }}>{w.note}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>{pageContent.tierList.metaH2}</h2>
        <p style={{ color: '#9a9ab0', marginTop: 10, maxWidth: 680 }}>
          {pageContent.tierList.metaPara}
        </p>
      </section>
    </main>
  );
}
