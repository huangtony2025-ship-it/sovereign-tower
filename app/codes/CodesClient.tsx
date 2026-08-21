'use client';

import { useState } from 'react';
import { codes, pageContent } from '@/lib/data';

export default function CodesClient({ h1, desc }: { h1: string; desc: string }) {
  const [copied, setCopied] = useState('');

  const copy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      setTimeout(() => setCopied(''), 1500);
    } catch {
      setCopied('');
    }
  };

  return (
    <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="page-head">
        <h1>{h1}</h1>
        <p className="desc">{desc}</p>
      </div>

      <section style={{ marginTop: 28 }}>
        <h2>{pageContent.codes.workingTitle ?? 'Working Codes'}</h2>
        <p style={{ color: '#9a9ab0', marginTop: 8, fontSize: '0.9rem' }}>
          {pageContent.codes.workingIntro}
        </p>
        <div style={{ marginTop: 16 }}>
          {codes.working.map((c) => (
            <div className="code-item" key={c.code}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <code>{c.code}</code>
                {c.isNew && <span className="badge new" style={{ marginLeft: 8 }}>New</span>}
                <div className="reward">{c.reward}</div>
              </div>
              <button
                className="copy-btn"
                onClick={() => copy(c.code)}
                style={{ flexShrink: 0 }}
              >
                {copied === c.code ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {codes.expired.length > 0 && (
        <section style={{ marginTop: 32 }}>
          <h2>{pageContent.codes.expiredTitle ?? 'Expired Codes'}</h2>
          <p style={{ color: '#9a9ab0', marginTop: 8, fontSize: '0.9rem' }}>
            {pageContent.codes.expiredIntro}
          </p>
          <div style={{ marginTop: 16 }}>
            {codes.expired.map((c) => (
              <div className="code-item" key={c.code}>
                <div style={{ flex: 1 }}>
                  <code style={{ color: '#9a9ab0' }}>{c.code}</code>
                  <span className="badge expired" style={{ marginLeft: 8 }}>Expired</span>
                  <div className="reward">{c.reward}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {codes.redeemSteps.length > 0 && (
        <section style={{ marginTop: 32 }}>
          <h2>{pageContent.codes.redeemTitle ?? 'How to Redeem Codes'}</h2>
          <ol style={{ marginLeft: 22, marginTop: 12, color: '#d5d5e2' }}>
            {codes.redeemSteps.map((s, i) => (
              <li key={i} style={{ margin: '6px 0' }}>{s}</li>
            ))}
          </ol>
        </section>
      )}

      <section style={{ marginTop: 32 }}>
        <h2>{pageContent.codes.moreTitle ?? 'How to Get More Codes'}</h2>
        <p style={{ color: '#9a9ab0' }}>
          {pageContent.codes.moreCodes}
        </p>
      </section>
    </main>
  );
}
