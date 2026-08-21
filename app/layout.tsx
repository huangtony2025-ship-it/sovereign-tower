import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { site, navLinks, pageContent } from '@/lib/data';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: pageContent.home?.metaTitle ?? `${site.name} — Codes, Weapons, Guides`,
  description: pageContent.home?.metaDesc ?? site.description,
  verification: { google: '5_krcRXV0gLnSQZklBMt-u_CkJIAvqg8ih-ZKkVs0u8' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo" dangerouslySetInnerHTML={{ __html: site.brand }} />
            <div className="nav-links">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <span className="lang-switch">
                <a href="/" style={{ color: '#fff', fontWeight: 700 }}>EN</a>
                <span style={{ color: 'var(--text-dim)' }}>|</span>
                <a href="/th">ไทย</a>
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
                <a href="/about">{site.footerAbout}</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
