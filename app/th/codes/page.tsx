import type { Metadata } from 'next';
import { site, codes, pageContent } from '@/lib/data.th';
import ThCodesClient from './ThCodesClient';

export const metadata: Metadata = {
  title: pageContent.codes.metaTitle ?? `โค้ด ${site.name} — โค้ดทั้งหมดที่ใช้งานได้`,
  description:
    pageContent.codes.metaDesc ?? `โค้ด ${site.name} ที่ใช้งานได้ทั้งหมดพร้อมรางวัล แลก ${codes.working.map((c) => c.code).join(', ')} เพื่อรับกุญแจและหีบฟรี`,
  alternates: { languages: { 'x-default': `${site.url.replace(/\/th$/, '')}/codes` } },
};

export default function ThCodesPage() {
  return <ThCodesClient h1={pageContent.codes.h1} desc={pageContent.codes.desc} />;
}
