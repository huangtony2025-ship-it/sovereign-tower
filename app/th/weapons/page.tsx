import type { Metadata } from 'next';
import { site, weapons, weaponMechanics, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.weapons.metaTitle ?? `อาวุธ ${site.name} — อาวุธทั้งหมด, ความหายาก & กลไก`,
  description:
    pageContent.weapons.metaDesc ?? `อาวุธทุกชนิดใน ${site.name}: ความหายาก ความเร็วโจมตี จำนวนกระสุน และโหลดเอาต์ที่ดีที่สุด`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/weapons` } },
};

export default function ThWeaponsPage() {
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="page-head">
        <h1>{pageContent.weapons.h1}</h1>
        <p className="desc">{pageContent.weapons.desc}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${pageContent.weapons.imgVideoId ?? '9lPNGbUWqxw'}/hqdefault.jpg`} alt={pageContent.weapons.imgAlt} />
      </div>

      <section style={{ marginTop: 24 }}>
        <h2>{pageContent.weapons.mechanicsH2}</h2>
        <div style={{ overflowX: 'auto', marginTop: 16 }}>
          <table className="prose" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>{pageContent.weapons.mechCol ?? 'กลไก'}</th>
                <th>{pageContent.weapons.descCol ?? 'คำอธิบาย'}</th>
                <th>{pageContent.weapons.priorityCol ?? 'ความสำคัญ'}</th>
              </tr>
            </thead>
            <tbody>
              {weaponMechanics.map((m) => (
                <tr key={m.mechanic}>
                  <td><strong>{m.mechanic}</strong></td>
                  <td>{m.desc}</td>
                  <td>{m.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>{pageContent.weapons.allTitle ?? 'อาวุธทั้งหมด'}</h2>
        <div className="grid" style={{ marginTop: 16 }}>
          {weapons.map((w) => (
            <div className="card" key={w.name}>
              <div className="tier-row">
                <span className={`tier-badge tier-${w.tier}`}>{w.tier}</span>
                <h3>{w.name}</h3>
              </div>
              <p><strong>{pageContent.weapons.bestWith ?? 'เข้ากับ'}:</strong> {w.synergy}</p>
              <p><strong>{pageContent.weapons.playstyle ?? 'สไตล์เล่น'}:</strong> {w.playstyle}</p>
              <p><strong>{pageContent.weapons.difficulty ?? 'ความยาก'}:</strong> {w.difficulty}</p>
              <p style={{ marginTop: 8 }}>{w.note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
