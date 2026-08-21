import type { Metadata } from 'next';
import { site, loadoutPriority, skillTreeOrder, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.builds.metaTitle ?? `บิลด์และโหลดเอาต์ที่ดีที่สุด ${site.name}`,
  description:
    pageContent.builds.metaDesc ?? `โหลดเอาต์ที่ดีที่สุด ${site.name}: บิลด์เมตา ลำดับการอัปเกรดที่เหมาะสม และลำดับการอัปสกิล`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/builds` } },
};

export default function ThBuildsPage() {
  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="page-head">
        <h1>{pageContent.builds.h1}</h1>
        <p className="desc">{pageContent.builds.desc}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-img" src={`https://i.ytimg.com/vi/${pageContent.builds.imgVideoId ?? 'ODjpoP9VoUs'}/hqdefault.jpg`} alt={pageContent.builds.imgAlt} />
      </div>

      <section style={{ marginTop: 24 }}>
        <h2>{pageContent.builds.pathH2}</h2>
        <div style={{ overflowX: 'auto', marginTop: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #2a2a3d', padding: '10px 12px', textAlign: 'left' }}>{pageContent.builds.upgradeCol ?? 'อัปเกรด'}</th>
                <th style={{ border: '1px solid #2a2a3d', padding: '10px 12px', textAlign: 'left' }}>{pageContent.builds.effectCol ?? 'ผลลัพธ์'}</th>
                <th style={{ border: '1px solid #2a2a3d', padding: '10px 12px', textAlign: 'left' }}>{pageContent.builds.whenCol ?? 'เมื่อไหร่ควรเลือก'}</th>
              </tr>
            </thead>
            <tbody>
              {loadoutPriority.map((u) => (
                <tr key={u.upgrade}>
                  <td style={{ border: '1px solid #2a2a3d', padding: '10px 12px' }}><strong>{u.upgrade}</strong></td>
                  <td style={{ border: '1px solid #2a2a3d', padding: '10px 12px', color: '#d5d5e2' }}>{u.effect}</td>
                  <td style={{ border: '1px solid #2a2a3d', padding: '10px 12px', color: '#9a9ab0' }}>{u.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>{pageContent.builds.treeH2}</h2>
        <div style={{ overflowX: 'auto', marginTop: 16 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #2a2a3d', padding: '10px 12px', textAlign: 'left' }}>{pageContent.builds.priorityCol ?? 'ลำดับ'}</th>
                <th style={{ border: '1px solid #2a2a3d', padding: '10px 12px', textAlign: 'left' }}>{pageContent.builds.skillCol ?? 'สกิล'}</th>
              </tr>
            </thead>
            <tbody>
              {skillTreeOrder.map((s) => (
                <tr key={s.priority}>
                  <td style={{ border: '1px solid #2a2a3d', padding: '10px 12px' }}>{s.priority}</td>
                  <td style={{ border: '1px solid #2a2a3d', padding: '10px 12px', color: '#d5d5e2' }}>{s.skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>{pageContent.builds.strategyH2}</h2>
        <p style={{ color: '#9a9ab0', maxWidth: 680 }}>
          {pageContent.builds.strategyPara}
        </p>
      </section>
    </main>
  );
}
