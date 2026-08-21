import type { Metadata } from 'next';
import { site, navLinks, pageContent } from '@/lib/data.th';

export const metadata: Metadata = {
  title: pageContent.home?.metaTitle ?? `${site.name} — โค้ด, อาวุธ, คู่มือ`,
  description: pageContent.home?.metaDesc ?? site.description,
};

export default function ThLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/th" className="nav-logo" dangerouslySetInnerHTML={{ __html: site.brand }} />
            <div className="nav-links">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <span className="lang-switch">
                <a href="/">EN</a>
                <span style={{ color: 'var(--text-dim)' }}>|</span>
                <a href="/th" style={{ color: '#fff', fontWeight: 700 }}>ไทย</a>
              </span>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <div>
              <strong style={{ color: '#e8e8f0' }}>{site.footerTitle}</strong>
              <p style={{ marginTop: 6 }}>{site.footerDesc}</p>
            </div>
            <div>
              <p>
                <a href={site.officialLink} target="_blank" rel="noreferrer">
                  {site.footerOfficial}
                </a>
              </p>
              <p>
                <a href="/th/about">{site.footerAbout}</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
