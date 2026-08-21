import type { Metadata } from 'next';
import { site, codes, pageContent } from '@/lib/data';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: pageContent.codes.metaTitle ?? `${site.name} Codes — All Working Codes`,
  description:
    pageContent.codes.metaDesc ?? `All working ${site.name} codes with rewards. Redeem ${codes.working.map((c) => c.code).join(', ')} for free Keys and Chests.`,
  alternates: { languages: { th: `${site.url}/th/codes` } },
};

export default function CodesPage() {
  return <CodesClient h1={pageContent.codes.h1} desc={pageContent.codes.desc} />;
}
