interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  officialLink: string;
  brand: string;
  footerTitle: string;
  footerDesc: string;
  footerOfficial: string;
  footerAbout: string;
  theme: { light: string; dark: string };
}
interface GameStat { label: string; value: string; }
interface Codes {
  working: { code: string; reward: string; isNew: boolean }[];
  expired: { code: string; reward: string }[];
  redeemSteps: string[];
}
interface Weapon { name: string; tier: string; synergy: string; playstyle: string; difficulty: string; note: string; }
interface WeaponMechanic { mechanic: string; desc: string; priority: string; }
interface LoadoutUpgrade { upgrade: string; effect: string; when: string; }
interface SkillTreeItem { priority: number; skill: string; }
interface World { name: string; note: string; }
interface NavLink { label: string; href: string; }
interface Video { title: string; videoId: string; views: string; age: string; }
interface GuideSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
}
interface GuidePage {
  h1: string;
  imgAlt: string;
  imgVideoId: string;
  intro: string;
  callout?: string;
  sections: GuideSection[];
  metaTitle?: string;
  metaDesc?: string;
}
interface PageContent {
  home?: { metaTitle?: string; metaDesc?: string; videosTitle?: string; popularTitle?: string; aboutTitle?: string };
  hero: { eyebrow: string; title: string; ctaCodes: string; ctaBeginner: string; ctaTier: string };
  homeAbout: string[];
  popularPages: { tag: string; title: string; href: string; desc: string; videoId: string }[];
  codes: { h1: string; desc: string; workingIntro: string; expiredIntro: string; moreCodes: string; metaTitle?: string; metaDesc?: string; workingTitle?: string; expiredTitle?: string; redeemTitle?: string; moreTitle?: string };
  weapons: { h1: string; desc: string; imgAlt: string; mechanicsH2: string; imgVideoId?: string; metaTitle?: string; metaDesc?: string; allTitle?: string; mechCol?: string; descCol?: string; priorityCol?: string; bestWith?: string; playstyle?: string; difficulty?: string };
  tierList: { h1: string; desc: string; imgAlt: string; metaH2: string; metaPara: string; imgVideoId?: string; metaTitle?: string; metaDesc?: string; tierS?: string; tierA?: string; tierB?: string; bestWith?: string; playstyle?: string };
  builds: { h1: string; desc: string; imgAlt: string; pathH2: string; treeH2: string; strategyH2: string; strategyPara: string; imgVideoId?: string; metaTitle?: string; metaDesc?: string; upgradeCol?: string; effectCol?: string; whenCol?: string; priorityCol?: string; skillCol?: string };
  worlds: { h1: string; desc: string; imgAlt: string; voidH2: string; voidPara: string; imgVideoId?: string; metaTitle?: string; metaDesc?: string; cardTag?: string };
  guidesIndex: { h1: string; desc: string; imgAlt: string; cards: { title: string; href: string; desc: string }[]; imgVideoId?: string; metaTitle?: string; metaDesc?: string };
  about: { title: string; paragraphs: string[]; officialLinkText: string; metaTitle?: string; metaDesc?: string; officialTitle?: string };
  guides: { [slug: string]: GuidePage };
}

export const site: SiteConfig = {
  name: 'Sovereign Tower',
  tagline: 'คู่มืออัศวิน เควสต์ และการย้อนเวลา',
  description: 'แหล่งอ้างอิง Sovereign Tower แบบแฟนเมด: อัศวิน เควสต์ วอล์กทรู และคู่มือเริ่มต้น สำหรับเกม RPG จำลองอัศวินโต๊ะกลมโดย WILD WITS GAMES',
  url: 'https://sovereigntower.space/th',
  officialLink: 'https://store.steampowered.com/app/4113940/Sovereign_Tower/',
  brand: 'SOVEREIGN<span>TOWER</span>',
  footerTitle: 'คู่มือ Sovereign Tower',
  footerDesc: 'แหล่งอ้างอิงแฟนเมดสำหรับ Sovereign Tower โดย WILD WITS GAMES ไม่เกี่ยวข้องกับผู้พัฒนาหรือผู้จัดจำหน่าย',
  footerOfficial: 'หน้า Steam',
  footerAbout: 'เกี่ยวกับ',
  theme: {
    light: 'hsl(270 60% 50%)',
    dark: 'hsl(270 60% 38%)'
  }
};

export const gameStats: GameStat[] = [
  {
    label: 'วางจำหน่าย',
    value: '7 ส.ค. 2026'
  },
  {
    label: 'ราคา',
    value: '$19.99'
  },
  {
    label: 'ผู้พัฒนา',
    value: 'WILD WITS GAMES'
  },
  {
    label: 'รีวิว',
    value: 'Mostly Positive'
  },
  {
    label: 'CCU',
    value: '1,131'
  },
  {
    label: 'แนวเกม',
    value: 'Narrative RPG'
  }
];

export const codes: Codes = {
  working: [
    {
      code: 'W / A / S / D',
      reward: 'เคลื่อนที่ตัวละครผู้ปกครองในหอคอย',
      isNew: false
    },
    {
      code: 'E',
      reward: 'โต้ตอบ / พูดคุยกับอัศวินและ NPC',
      isNew: false
    },
    {
      code: 'Tab',
      reward: 'เปิดเมนูสภาโต๊ะกลม',
      isNew: false
    },
    {
      code: 'R',
      reward: 'เปิดใช้กลไกย้อนเวลา',
      isNew: false
    },
    {
      code: 'Space',
      reward: 'ยืนยัน / ข้ามบทสนทนา',
      isNew: false
    },
    {
      code: 'Esc',
      reward: 'เมนูหยุดชั่วคราว / ตั้งค่าระบบ',
      isNew: false
    },
    {
      code: 'F',
      reward: 'เซฟด่วนที่จุดตัดสินใจปัจจุบัน',
      isNew: false
    },
    {
      code: 'L',
      reward: 'เปิดบันทึกเควสต์',
      isNew: false
    },
    {
      code: 'M',
      reward: 'เปิดแผนที่หอคอย',
      isNew: false
    }
  ],
  expired: [],
  redeemSteps: [
    'คุยกับอัศวินคนแรกที่โต๊ะกลมเพื่อเริ่มการปกครอง',
    'มอบหมายงานให้แต่ละอัศวินตามบุคลิกและฝ่ายของเขา',
    'ตรวจบันทึกเควสต์ (L) เป็นประจำสำหรับเหตุการณ์ใหม่ที่เกิดจากการมอบหมาย',
    'เมื่อตัดสินใจผิดพลาด กด R เพื่อย้อนเวลาแล้วลองเส้นทางอื่น',
    'สร้างความสนิทกับอัศวินโดยเสิร์ฟอาหารโปรดที่ห้องเลี้ยง'
  ]
};

export const weapons: Weapon[] = [
  {
    name: 'Chester',
    tier: 'S',
    synergy: 'ผู้นำสมดุล เพิ่มทุกฝ่ายเท่ากัน',
    playstyle: 'นักการทูต',
    difficulty: 'ช่วงต้น',
    note: 'อัศวินยืนยันแล้ว อัศวินผู้มีเสน่ห์และสมดุล เก่งในการรักษาความสามัคคีของโต๊ะกลม เข้ากับทุกฝ่ายและให้ผลความสนิทดี'
  },
  {
    name: 'Zolta',
    tier: 'S',
    synergy: 'อัตราสำเร็จเควสต์สูง ปลดล็อกตอนจบลับ',
    playstyle: 'นักยุทธศาสตร์',
    difficulty: 'กลางเกม',
    note: 'อัศวินยืนยันแล้ว นักยุทธศาสตร์ลึกลับที่รู้ทางลับในหอคอย มอบหมาย Zolta ให้เควสต์สื้อความลับเพื่อผลดีที่สุด'
  },
  {
    name: 'Galahad',
    tier: 'S',
    synergy: 'เควสต์บริสุทธิ์ใจ เส้นทางโรแมนซ์',
    playstyle: 'Paladin',
    difficulty: 'ช่วงต้น',
    note: 'อัศวินผู้มีคุณธรรม เก่งเควสต์เลือกขั้นตำสุจริต ความสนิทสูงปลดล็อกการแปลงร่างและโรแมนซ์ อาหารโปรด: ไก่ฟ่ายฮิเบิร์'
  },
  {
    name: 'Lancelot',
    tier: 'A',
    synergy: 'เควสต์ต่อสู้ คู่แข่งของ Gawain',
    playstyle: 'แชมป์เปียน',
    difficulty: 'ช่วงต้น',
    note: 'นักสู้ที่แข็งแกร่งที่สุดของหอคอย ครองเควสต์ประเภทต่อสู้แต่อาจทำให้ฝ่ายตึงเครียดกับฝ่าย Gawain อาหารโปรด: สตูกวางเครื่องเทศ'
  },
  {
    name: 'Percival',
    tier: 'A',
    synergy: 'เควสต์สำรวจ ค้นพบความลับ',
    playstyle: 'นักสื้อ',
    difficulty: 'กลางเกม',
    note: 'อัศวินผู้อยากรู้ หาห้องลับและชิ้นส่วนเรื่องราว จำเป็นสำหรับ 100% อาหารโปรด: พายเห็ดป่า'
  },
  {
    name: 'Morgana',
    tier: 'A',
    synergy: 'เควสต์เวทมนตร์ เพิ่มประสิทธิภาพย้อนเวลา',
    playstyle: 'จอมเวท',
    difficulty: 'ช่วงท้าย',
    note: 'จอมเวทมนตร์ผู้ทรงพลัง ขยายระยะเวลาย้อน สำคัญสำหรับตอนจบที่ต้องแก้ไขไทม์ไลน์หลายรอบ อาหารโปรด: ชากลีบจันทร์'
  },
  {
    name: 'Gawain',
    tier: 'A',
    synergy: 'เควสต์ป้องกัน ผู้รักษาเสถียรภาพฝ่าย',
    playstyle: 'ผู้พิทักษ์',
    difficulty: 'ช่วงต้น',
    note: 'อัศวินผู้มั่นคง ยึดแนวระหว่างวิกฤต คู่แข่งของ Lancelot การรักษาทั้งสองให้มีความสุขเป็นความท้าทายทางทูต อาหารโปรด: ขนมปังสุริยะ'
  },
  {
    name: 'Tristan',
    tier: 'B',
    synergy: 'เควสต์โรแมนซ์ ภารกิจทูต',
    playstyle: 'นักการทูต',
    difficulty: 'กลางเกม',
    note: 'อัศวินผู้โรแมนติก เก่งการโน้มน้าวและเจรจาข้ามฝ่าย ทูตที่ดีที่สุดสำหรับเควสต์สันติภาพ อาหารโปรด: นกกระทึ้งน้ำผึ้ง'
  },
  {
    name: 'Bedivere',
    tier: 'B',
    synergy: 'เควสต์ความภักดี ไม่ทิ้งโต๊ะกลม',
    playstyle: 'ผู้จงรักภักดี',
    difficulty: 'ช่วงต้น',
    note: 'อัศวินที่พึ่งพาได้มากที่สุด ไม่ทิ้งโต๊ะกลมแม้ในไทม์ไลน์ที่แย่ที่สุด ดีสำหรับเสถียรภาพเมื่ออัศวินอื่นแปรพักษ์ อาหารโปรด: ข้าวโอ๊ตบาร์เลย์'
  },
  {
    name: 'Nimue',
    tier: 'B',
    synergy: 'เควสต์เรื่องราว เปิดเผ้าประวัติหอคอย',
    playstyle: 'นักวิชาการ',
    difficulty: 'ช่วงท้าย',
    note: 'ตัวแทนของ Lady of the Lake ปลดล็อกเรื่องราวลึกเกี่ยวกับต้นกำเนิด Sovereign Tower อาหารโปรด: น้ำพุคริสตัล'
  },
  {
    name: 'Kay',
    tier: 'B',
    synergy: 'เควสต์จัดการ เพิ่มประสิทธิภาพทรัพยากร',
    playstyle: 'ผู้ดูแล',
    difficulty: 'ช่วงต้น',
    note: 'อัศวินปฏิบัติที่เพิ่มผลผลิตและประสิทธิภาพงาน บุคลิกแสบแต่เก่งเรื่องจัดการหอคอย อาหารโปรด: สตูเนื้อแข็งแรง'
  },
  {
    name: 'Mordred',
    tier: 'B',
    synergy: 'เควสต์วุ่นว่าย ปลดล็อกตอนจบมืด',
    playstyle: 'ผู้ชิงบัลลังก์',
    difficulty: 'ช่วงท้าย',
    note: 'อัศวินที่ถกเถียง รับ Mordred เปิดเส้นทางตอนจบมืดแต่ทำให้โต๊ะกลมไม่มั่นคง ระวัง — หรือย้อนเวลาถ้าผิดพลาด อาหารโปรด: ไวน์แบล็คธอร์น'
  }
];

export const weaponMechanics: WeaponMechanic[] = [
  {
    mechanic: 'ความสนิทอัศวิน',
    desc: 'เสิร์ฟอาหารโปรดที่ห้องเลี้ยงเพื่อเพิ่มความสนิท ความสนิทสูงปลดล็อกการแปลงร่าง โรแมนซ์ และผลเควสต์พิเศษ',
    priority: 'หลัก'
  },
  {
    mechanic: 'สมดุลฝ่าย',
    desc: 'อัศวินอยู่ในฝ่ายต่าง ๆ เอียงฝ่ายใดมากเกินจะก่อกบฏ สมดุลการมอบหมายเพื่อรักษาเสถียรภาพโต๊ะกลม',
    priority: 'หลัก'
  },
  {
    mechanic: 'ย้อนเวลา',
    desc: 'กด R เพื่อย้อนตัดสินใจ แต่ละครั้งใช้พลังงานไทม์ไลน์ — จัดการให้ดีมิฉะนั้นจะติดตอนจบที่แย่',
    priority: 'หลัก'
  },
  {
    mechanic: 'การแปลงร่างอัศวิน',
    desc: 'ที่ความสนิทเต็ม อัศวินบางคนแปลงร่างเพิ่มพลัง เปลี่ยนผลเควสต์และปลดล็อกสายเรื่องพิเศษ',
    priority: 'สูง'
  },
  {
    mechanic: 'การจับคู่เควสต์-อัศวิน',
    desc: 'มี 312 เควสต์ หลายเควสต์มีผลพิเศษเมื่อมอบหมายอัศวินที่ถูกต้อง ลองและย้อนเวลาเพื่อหาคู่ที่เหมาะสุด',
    priority: 'สูง'
  },
  {
    mechanic: 'ตอนจบหลายแบบ',
    desc: 'เกมมีตอนจบหลายแบบขึ้นกับตัดสินใจ ย้อนเวลาให้สำรวจเส้นทางต่าง ๆ โดยไม่ต้องเริ่มใหม่',
    priority: 'กลาง'
  }
];

export const loadoutPriority: LoadoutUpgrade[] = [
  {
    upgrade: 'รับ Chester & Galahad',
    effect: 'นักทูตสมดุลและ Paladin ผู้บริสุทธิ์เพื่อเริ่มต้น',
    when: 'ชั่วโมงแรก — ฐานที่มั่นคง'
  },
  {
    upgrade: 'รับ Lancelot & Gawain',
    effect: 'ครอบคลุมต่อสู้และป้องกัน แต่จัดการความเป็นคู่แข่ง',
    when: 'ช่วงต้น — กำลังทหาร'
  },
  {
    upgrade: 'ปลดล็อกย้อนเวลา',
    effect: 'ย้อนตัดสินใจผิดและสำรวจเส้นทางอื่น',
    when: 'หลังสาขเรื่องสำคัญแรก'
  },
  {
    upgrade: 'รับ Zolta',
    effect: 'ปลดล็อกเควสต์สื้อความลับและข่าวกรอง',
    when: 'กลางเกม — ข้อได้เปรียบข่าวกรอง'
  },
  {
    upgrade: 'รับ Morgana',
    effect: 'ย้อนเวลานานขึ้นและเควสต์เวทมนตร์',
    when: 'กลาง-ท้ายเกม — ครอบครองไทม์ไลน์'
  },
  {
    upgrade: 'ความสนิทเต็ม & แปลงร่าง',
    effect: 'ปลดล็อกการแปลงร่างอัศวินและโรแมนซ์',
    when: 'ท้ายเกม — พลังสูงสุด'
  },
  {
    upgrade: 'รับ Mordred (ทางเลือก)',
    effect: 'เปิดเส้นทางตอนจบมืดแต่ทำให้โต๊ะกลมไม่มั่นคง',
    when: 'ท้ายเกม — เสี่ยงสูง / ผลตอบแทนสูง'
  }
];

export const skillTreeOrder: SkillTreeItem[] = [
  {
    priority: 1,
    skill: 'รับอัศวินหลัก (Chester, Galahad, Kay)'
  },
  {
    priority: 2,
    skill: 'รับอัศวินทหาร (Lancelot, Gawain)'
  },
  {
    priority: 3,
    skill: 'ปลดล็อกย้อนเวลา'
  },
  {
    priority: 4,
    skill: 'รับอัศวินชเชียลลิสต์ (Zolta, Percival)'
  },
  {
    priority: 5,
    skill: 'ห้องเลี้ยง & ระบบความสนิท'
  },
  {
    priority: 6,
    skill: 'รับอัศวินเวทมนตร์ (Morgana, Nimue)'
  },
  {
    priority: 7,
    skill: 'การแปลงร่างอัศวิน'
  },
  {
    priority: 8,
    skill: 'รับอัศวินถกเถียง (Mordred)'
  }
];

export const worlds: World[] = [
  {
    name: 'Sovereign Tower',
    note: 'ที่นั่งอำนาจของคุณ แต่ละชั้นมีผู้ให้เควสต์ ที่พักอัศวิน และความลับที่ค่อย ๆ เปิดเมื่อขึ้นไป'
  },
  {
    name: 'ห้องโต๊ะกลม',
    note: 'ที่มอบหมายอัศวินให้เควสต์และจัดการสมดุลฝ่าย หัวใจของทุกตัดสินใจยุทธศาสตร์'
  },
  {
    name: 'ห้องเลี้ยง',
    note: 'เสิร์ฟอาหารโปรดเพื่อเพิ่มความสนิทอัศวิน ปลดล็อกการแปลงร่างและโรแมนซ์ที่ความสนิทเต็ม'
  },
  {
    name: 'เควสต์อัศวิน (312 เควสต์)',
    note: 'ต่อสู้ ทูต สำรวจ เวทมนตร์ และจัดการ หลายเควสต์มีผลพิเศษเฉพาะอัศวิน'
  },
  {
    name: 'เส้นทางย้อนเวลา',
    note: 'ย้อนตัดสินใจเพื่อสำรวจไทม์ไลน์อื่น ใช้พลังงานไทม์ไลน์ — ใช้ให้ชาญฉลาด'
  },
  {
    name: 'ทางเดินลับ',
    note: 'ห้องลับทัวไปหอคอย มอบหมาย Percival หรือ Zolta ให้เควสต์สื้อความลับเพื่อเปิดเผ้า'
  },
  {
    name: 'ดินแดนฝ่าย',
    note: 'แต่ละฝ่ายควบคุมส่วนของหอคอย ไม่สมดุลจะก่อกบฏ — รักษาทุกฝ่ายให้พอใจ'
  },
  {
    name: 'เส้นทางโรแมนซ์',
    note: 'โรแมนซ์หลายเส้นทางผูกกับความสนิทอัศวิน Galahad และอื่น ๆ มีเรื่องราวโรแมนซ์เต็ม'
  },
  {
    name: 'การแปลงร่างอัศวิน',
    note: 'สถานะเพิ่มพลังปลดล็อกที่ความสนิทเต็ม เปลี่ยนผลเควสต์และปลดล็อกสายเรื่องพิเศษ'
  },
  {
    name: 'ตอนจบหลายแบบ',
    note: 'ตัดสินใจของคุณข้ามไทม์ไลน์ทั้งหมดกำหนดตอนจบ ย้อนเวลาให้สำรวจเส้นทางต่าง ๆ'
  },
  {
    name: 'ชิ้นส่วนเรื่องราว',
    note: 'เรื่องราวย้อนกลับกระจัดกระจายเกี่ยวกับต้นกำเนิดหอคอย สะสมให้ครบสำหรับตอนจบแท้จริง'
  },
  {
    name: 'ระบบ Achievement',
    note: 'ติดตามความคืบหน้าข้ามเควสต์ ความสนิท ตอนจบ และความลับ บางอย่างต้องย้อนเวลา'
  }
];

export const navLinks: NavLink[] = [
  {
    label: 'การควบคุม',
    href: '/th/codes'
  },
  {
    label: 'อัศวิน',
    href: '/th/weapons'
  },
  {
    label: 'อันดับ',
    href: '/th/tier-list'
  },
  {
    label: 'คู่มือ',
    href: '/th/guides'
  },
  {
    label: 'วอล์กทรู',
    href: '/th/builds'
  },
  {
    label: 'เควสต์และความลับ',
    href: '/th/worlds'
  }
];

export const videos: Video[] = [];

export const pageContent: PageContent = {
  home: {
    metaTitle: 'Sovereign Tower — คู่มืออัศวิน เควสต์ และการย้อนเวลา',
    metaDesc: 'แหล่งอ้างอิง Sovereign Tower แบบแฟนเมด: อัศวิน เควสต์ วอล์กทรู และคู่มือเริ่มต้น สำหรับเกม RPG จำลองอัศวินโต๊ะกลมโดย WILD WITS GAMES',
    videosTitle: 'วิดีโอล่าสุด',
    popularTitle: 'หน้ายอดนิยม',
    aboutTitle: 'Sovereign Tower คืออะไร?'
  },
  hero: {
    eyebrow: 'Round Table Knight Simulation RPG',
    title: 'SOVEREIGN TOWER',
    ctaCodes: 'ปุ่มควบคุม',
    ctaBeginner: 'คู่มือเริ่มต้น',
    ctaTier: 'อันดับอัศวิน'
  },
  homeAbout: [
    'Sovereign Tower เป็น RPG เน้้นเรื่องราวจำลองอัศวินโต๊ะกลมโดย WILD WITS GAMES คุณเล่นเป็นผู้ปกครองหอคอยเวทมนตร์ รับอัศวินผู้มีบุคลิกต่าง ๆ มอบหมายเควสต์ สมดุลการเมืองฝ่าย และร่วมเขียนชะตากรุง ด้วย 312 เควสต์ ตอนจบหลายแบบ และกลไกย้อนเวลา ทุกตัดสินใจมีนัยสำคัญ — และสามารถเขียนใหม่ได้',
    'รับอัศวินเช่น Chester และ Zolta เสิร์ฟอาหารโปรดที่ห้องเลี้ยงเพื่อเพิ่มความสนิท ปลดล็อกการแปลงร่างที่ทรงพลัง และตามล่าหาโรแมนซ์ เมื่อชะตาไม่เป็นไปตามใจ ย้อนเวลาเพื่อเปิดความลับและลองใหม่ คู่มือเหล่านี้ครอบคลุมทุกอย่างตั้งแต่สภาโต๊ะกลมครั้งแรกจนถึงตอนจบแท้จริง'
  ],
  popularPages: [
    {
      tag: 'เริ่มต้น',
      title: 'คู่มือเริ่มต้น',
      href: '/th/guides/beginner-guide',
      desc: 'ชั่วโมงแรก: รับอัศวิน มอบเควสต์ สมดุลฝ่าย และเรียนรู้ย้อนเวลา',
      videoId: ''
    },
    {
      tag: 'อัศวิน',
      title: 'อัศวินทั้งหมดและบทบาท',
      href: '/th/weapons',
      desc: 'ทุกอัศวินที่รับได้ อาหารความสนิท ฝ่าย และผลเควสต์พิเศษ',
      videoId: ''
    },
    {
      tag: 'อันดับ',
      title: 'อันดับอัศวิน',
      href: '/th/tier-list',
      desc: 'อัศวินไหนสำคัญที่สุดและลำดับรับที่เหมาะสุด',
      videoId: ''
    },
    {
      tag: 'วอล์กทรู',
      title: 'วอล์กทรูเควสต์',
      href: '/th/builds',
      desc: '312 เควสต์ การมอบหมายอัศวินที่เหมาะสุด และผลพิเศษ',
      videoId: ''
    },
    {
      tag: 'เควสต์',
      title: 'เควสต์และความลับ',
      href: '/th/worlds',
      desc: 'ทางเดินลับ ชิ้นส่วนเรื่องราว คู่มือ Achievement และตอนจบลับ',
      videoId: ''
    },
    {
      tag: 'โรแมนซ์',
      title: 'คู่มือโรแมนซ์',
      href: '/th/guides/romance-guide',
      desc: 'เส้นทางโรแมนซ์ทั้งหมด ขั้นต่ำความสนิท และการปลดล็อกแปลงร่าง',
      videoId: ''
    }
  ],
  codes: {
    h1: 'ปุ่มควบคุมและคีย์ลัด Sovereign Tower',
    desc: 'Sovereign Tower ไม่มีโค้ดแลกรางวัล — เป็น RPG เน้้นเรื่องราวผู้เล่นเดี่ยว สิ่งที่คุณต้องรู้คือปุ่มควบคุมสำหรับสำรวจ จัดการอัศวิน และย้อนเวลา นี่คือตารางคีย์สำหรับเวอร์ชันเต็ม',
    workingIntro: 'นี่คือปุ่มหลักที่คุณจะใช้ตลอดการปกครอง กด <strong>Copy</strong> เพื่อเก็บไว้ใช้งาน',
    expiredIntro: '',
    moreCodes: 'ปุ่มควบคุมสำหรับเวอร์ชันเต็ม ย้อนเวลา (R) ปลดล็อกหลังสาขเรื่องสำคัญแรก ดูคู่มือ How to Play สำหรับวงจรตัดสินใจทั้งหมด',
    metaTitle: 'ปุ่มควบคุมและคีย์ลัด Sovereign Tower',
    metaDesc: 'ปุ่มควบคุม Sovereign Tower: WASD เคลื่อนที่ E โต้ตอบ Tab โต๊ะกลม R ย้อนเวลา L เควสต์ M แผนที่',
    workingTitle: 'ปุ่มควบคุมหลัก',
    expiredTitle: 'ปุ่มที่ถูกนำออก',
    redeemTitle: 'วิธีตั้งสภาโต๊ะกลมครั้งแรกของคุณ',
    moreTitle: 'หมายเหตุ'
  },
  weapons: {
    h1: 'อัศวินและบทบาททั้งหมดของ Sovereign Tower',
    desc: 'แต่ละอัศวินนำบุคลิก ความภักดีฝ่าย และความเชี่ยวชาญเควสต์มาที่โต๊ะกลม การรู้จัดจ้านและคู่แข่งช่วยให้คุณมอบหมายอัศวินที่ถูกต้อง — และไม่ให้โต๊ะกลมแตกแยก',
    imgAlt: 'อัศวินและบทบาท Sovereign Tower',
    mechanicsH2: 'กลไกอัศวินหลัก',
    imgVideoId: '',
    metaTitle: 'อัศวิน Sovereign Tower — Chester, Zolta, Galahad และทุกคน',
    metaDesc: 'ทุกอัศวิน Sovereign Tower อธิบายครบ: Chester, Zolta, Galahad, Lancelot, Percival, Morgana, Gawain และอื่น ๆ อาหารความสนิท ฝ่าย และความเชี่ยวชาญเควสต์',
    allTitle: 'อัศวินทั้งหมด',
    mechCol: 'กลไก',
    descCol: 'คำอธิบาย',
    priorityCol: 'ความสำคัญ',
    bestWith: 'ซินเนอร์จี',
    playstyle: 'บทบาท',
    difficulty: 'รับเข้า'
  },
  tierList: {
    h1: 'อันดับอัศวิน Sovereign Tower',
    desc: 'จัดอันดับอัศวินตามความสำคัญต่อการพัฒนาแคมเปญ Chester และ Zolta เป็นเสาหลัก — Chester รักษาฝ่ายสมดุล Zolta ปลดล็อกความลับลึกสุด สร้างโต๊ะกลมรอบ ๆ ก่อน',
    imgAlt: 'อันดับอัศวิน Sovereign Tower',
    metaH2: 'เมตา: แกนหลักมั่นคงก่อน',
    metaPara: 'รับ Chester และ Galahad ก่อนสำหรับฐานทางทูตและศีลธรรมที่มั่นคง เพิ่ม Lancelot และ Gawain สำหรับทหาร แล้วปลดล็อกย้อนเวลาก่อนตามหาชเชียลลิสต์ โต๊ะกลมแตกได้ถ้ารับอัศวินถกเถียงอย่าง Mordred เร็วเกินไป',
    imgVideoId: '',
    metaTitle: 'อันดับ Sovereign Tower — อัศวินที่ดีที่สุดและลำดับรับ',
    metaDesc: 'อันดับ Sovereign Tower: Chester และ Zolta นำเมตา ตามด้วย Galahad, Lancelot, Percival, Morgana ลำดับรับที่เหมาะสุดอธิบายครบ',
    tierS: 'S-Tier (แกนหลัก)',
    tierA: 'A-Tier (แข็งแกร่ง)',
    tierB: 'B-Tier (ตามสถานการณ์)',
    bestWith: 'ซินเนอร์จี',
    playstyle: 'บทบาท'
  },
  builds: {
    h1: 'วอล์กทรูเควสต์ Sovereign Tower',
    desc: 'ด้วย 312 เควสต์ การมอบหมายอัศวินที่ถูกต้องทำให้ได้ผลต่างระหว่างผลปกติและผลลับ ทำตามลำดับด้านล่างแล้วทุกตอนเปิดความลับ — โดยเฉพาะเมื่อจับคู่อัศวินที่ถูกต้องกับเควสต์ที่ถูกต้อง',
    imgAlt: 'วอล์กทรูเควสต์ Sovereign Tower',
    pathH2: 'เส้นทางแคมเปญ (ตามลำดับ)',
    treeH2: 'ลำดับรับอัศวิน',
    strategyH2: 'กลยุทธ์ความสนิทก่อน',
    strategyPara: 'ก่อนดันเควสต์เรื่องราว เพิ่มความสนิทอัศวินที่ใช้อยู่โดยเสิร์ฟอาหารโปรดที่ห้องเลี้ยง ความสนิทสูงปลดล็อกการแปลงร่างที่เพิ่มผลเควสต์อย่างมากและเปิดโรแมนซ์ อัศวินที่ความสนิทเต็มมีค่าเท่ากับสองคนที่ฐาน — และคุณสามารถย้อนเวลาแก้มื้อที่พลาดได้เสมอ',
    imgVideoId: '',
    metaTitle: 'วอล์กทรูเควสต์ Sovereign Tower — 312 เควสต์และการมอบหมายที่เหมาะสุด',
    metaDesc: 'วอล์กทรูเควสต์ Sovereign Tower: 312 เควสต์ การมอบหมายอัศวินที่เหมาะสุด ผลพิเศษ และกลยุทธ์ความสนิทก่อนสำหรับการแปลงร่างและโรแมนซ์',
    upgradeCol: 'ขั้นตอน',
    effectCol: 'เกิดอะไรขึ้น',
    whenCol: 'เมื่อไหร่',
    priorityCol: 'ลำดับ',
    skillCol: 'การรับ'
  },
  worlds: {
    h1: 'เควสต์และความลับ Sovereign Tower',
    desc: 'Sovereign Tower เต็มไปด้วยทางเดินลับ ชิ้นส่วนเรื่องราว และตอนจบลับ นี่คือทุกสิ่งที่ค้นพบได้และวิธีไปถึง — มักต้องมอบหมายอัศวินที่ถูกต้องหรือย้อนเวลาลองเส้นทางอื่น',
    imgAlt: 'เควสต์และความลับ Sovereign Tower',
    voidH2: 'หมวดเควสต์และความลับสำคัญ',
    voidPara: '312 เควสต์ครอบคลุมต่อสู้ ทูต สำรวจ เวทมนตร์ และจัดการ หลายเควสต์มีผลพิเศษเฉพาะอัศวิน — มอบ Percival ให้สำรวจ Zolta ให้สื้อความลับ Morgana ให้เวทมนตร์ ทางลับและชิ้นส่วนเรื่องราวปลดล็อกตอนจบแท้ ย้อนเวลาให้กลับมาจุดตัดสินใจใด ๆ',
    imgVideoId: '',
    metaTitle: 'เควสต์และความลับ Sovereign Tower — 312 เควสต์ ทางลับ และตอนจบ',
    metaDesc: 'เควสต์และความลับ Sovereign Tower: 312 เควสต์ ทางเดินลับ ชิ้นส่วนเรื่องราว ตอนจบหลายแบบ และวิธีไปถึงด้วยการมอบหมายอัศวินที่ถูกต้อง',
    cardTag: 'หมวด'
  },
  guidesIndex: {
    h1: 'คู่มือ Sovereign Tower',
    desc: 'จากสภาโต๊ะกลมครั้งแรกสู่ตอนจบแท้ — คำแนะนำสำหรับทุกช่วงของการปกครอง',
    imgAlt: 'คู่มือ Sovereign Tower',
    imgVideoId: '',
    metaTitle: 'คู่มือ Sovereign Tower — เริ่มต้น, วิธีเล่น, โรแมนซ์',
    metaDesc: 'คู่มือ Sovereign Tower: คู่มือเริ่มต้น วิธีเล่น และคู่มือโรแมนซ์ เรียนรู้ RPG จำลองอัศวินโต๊ะกลมทีละขั้น',
    cards: [
      {
        title: 'คู่มือเริ่มต้น',
        href: '/th/guides/beginner-guide',
        desc: 'ชั่วโมงแรก: รับอัศวิน มอบเควสต์ สมดุลฝ่าย และเรียนรู้ย้อนเวลา'
      },
      {
        title: 'วิธีเล่น',
        href: '/th/guides/how-to-play',
        desc: 'ปุ่มควบคุม ระบบโต๊ะกลม กลไกความสนิท และย้อนเวลาอธิบายครบ'
      },
      {
        title: 'คู่มือโรแมนซ์',
        href: '/th/guides/romance-guide',
        desc: 'เส้นทางโรแมนซ์ทั้งหมด ขั้นต่ำความสนิท อาหารโปรด และการปลดล็อกแปลงร่าง'
      }
    ]
  },
  about: {
    title: 'เกี่ยวกับคู่มือ Sovereign Tower',
    paragraphs: [
      'คู่มือ Sovereign Tower เป็นแหล่งอ้างอิงแฟนเมดสำหรับ Sovereign Tower เกม RPG จำลองอัศวินโต๊ะกลมโดย WILD WITS GAMES เรารวบรวมโปรไฟล์อัศวิน วอล์กทรูเควสต์ อันดับ และคู่มือเพื่อช่วยผู้เล่นสร้างโต๊ะกลมที่ดีที่สุดและไปถึงทุกตอนจบ',
      'เว็บนี้ไม่เกี่ยวข้อง ไม่ได้รับการรับรอง หรือสนับสนุนโดย WILD WITS GAMES, Steam หรือแพลตฟอร์มใด ๆ ชื่อเกม โลโก้ และเครื่องหมายการค้าเป็นของผู้เป็นเจ้าของ'
    ],
    officialLinkText: 'เล่น Sovereign Tower บน Steam',
    metaTitle: 'เกี่ยวกับ — คู่มือ Sovereign Tower',
    metaDesc: 'คู่มือ Sovereign Tower เป็นแหล่งอ้างอิงแฟนเมดสำหรับ RPG Sovereign Tower โดย WILD WITS GAMES',
    officialTitle: 'ลิงก์อย่างเป็นทางการ'
  },
  guides: {
    'beginner-guide': {
      h1: 'คู่มือเริ่มต้น Sovereign Tower',
      imgAlt: 'คู่มือเริ่มต้น Sovereign Tower',
      imgVideoId: '',
      metaTitle: 'คู่มือเริ่มต้น Sovereign Tower — โต๊ะกลมแรกและลำดับรับ',
      metaDesc: 'คู่มือเริ่มต้น Sovereign Tower: รับ Chester และ Galahad มอบเควสต์ สมดุลฝ่าย และปลดล็อกย้อนเวลาในเซสชันแรก',
      intro: 'Sovereign Tower ยัดระบบมากมายให้คุณในคราวเดียว — อัศวินผู้มีบุคลิก การเมืองฝ่าย 312 เควสต์ และกลไกย้อนเวลา ชั่วโมงแรกสรุปเป็นวงจรง่าย ๆ: รับอัศวินหลัก มอบเควสต์ตามความเชี่ยวชาญ และรักษาสมดุลฝ่ายขณะเรียนรู้พื้นฐาน',
      callout: 'คำตอบสั้น ๆ: รับ Chester และ Galahad ก่อน มอบเควสต์ตามความเชี่ยวชาญ เสิร์ฟอาหารโปรดที่ห้องเลี้ยง และปลดล็อกย้อนเวลาก่อนสำรวจอัศวินชเชียลลิสต์',
      sections: [
        {
          h2: 'วงจรหลัก',
          paragraphs: [
            'ทุกตอนมีจังหวะเดียวกัน: รับอัศวิน มอบเควสต์ จัดการสมดุลฝ่าย และตอบสนองเหตุการณ์เรื่องราว เมื่อตัดสินใจผิด ย้อนเวลา (R) ให้คุณย้อนและลองเส้นทางอื่น มองเพลย์แรกเป็นการลาดตระเวน — คุณย้อนเวลาทีหลังได้เสมอ',
            'ความผิดพลาดที่ฉุดผู้เล่นใหม่คือการลืเลือนความสนิท อัศวินที่ความสนิทเต็มทำงานดีขึ้นมากและอาจปลดล็อกการแปลงร่าง เสิร์ฟอาหารโปรดที่ห้องเลี้ยงเสมอก่อนดันเควสต์ยาก'
          ]
        },
        {
          h2: 'สภาโต๊ะกลมครั้งแรกของคุณ',
          paragraphs: [
            'ตั้งสภานี้แล้วคุณจะมีโต๊ะกลมทำงานก่อนวิกฤตแรก'
          ],
          table: {
            headers: [
              'ขั้นตอน',
              'สิ่งที่ต้องทำ'
            ],
            rows: [
              [
                '1',
                'รับ Chester — นักทูตสมดุลรักษาฝ่าย'
              ],
              [
                '2',
                'รับ Galahad — Paladin จัดการเควสต์เลือกขั้นตำ'
              ],
              [
                '3',
                'เปิดโต๊ะกลม (Tab) และมอบเควสต์ที่ตรงกับความเชี่ยวชาญ'
              ],
              [
                '4',
                'ไปห้องเลี้ยงและเสิร์ฟอาหารโปรดเพื่อเริ่มความสนิท'
              ],
              [
                '5',
                'ทำเควสต์ 2-3 อย่างเพื่อปลดล็อกย้อนเวลา (R)'
              ]
            ]
          }
        },
        {
          h2: 'ลำดับรับช่วงต้น',
          paragraphs: [
            'รับตามลำดับนี้แล้วโต๊ะกลมมั่นคงผ่านตอนต้น'
          ],
          table: {
            headers: [
              'ลำดับ',
              'อัศวินและเหตุผล'
            ],
            rows: [
              [
                '1',
                'Chester (นักทูต — รักษาฝ่ายสมดุล)'
              ],
              [
                '2',
                'Galahad (Paladin — เควสต์ศีลธรรมและโรแมนซ์ช่วงต้น)'
              ],
              [
                '3',
                'Kay (ผู้ดูแล — เพิ่มประสิทธิภาพทรัพยากร)'
              ],
              [
                '4',
                'Lancelot & Gawain (ทหาร — แต่จัดการความเป็นคู่แข่ง)'
              ],
              [
                '5',
                'ปลดล็อกย้อนเวลาหลังสาขเรื่องแรก'
              ],
              [
                '6',
                'Zolta (นักยุทธศาสตร์ — เควสต์สื้อความลับ)'
              ],
              [
                '7',
                'Percival (นักสื้อ — สำรวจและทางลับ)'
              ],
              [
                '8',
                'เก็บ Mordred ไว้ช่วงท้าย'
              ]
            ]
          }
        },
        {
          h2: 'เคล็ดลับช่วงต้น',
          paragraphs: [
            'อย่ามอบ Lancelot และ Gawain ให้เควสต์เดียวกัน — ความเป็นคู่แข่งทำให้ผลแย่ เสิร์ฟอาหารโปรดที่ห้องเลี้ยงทุกตอน ความสนิทสะสมตามเวลา ปลดล็อกย้อนเวลาให้เร็วที่สุด — เป็นเซฟตี้เน็ตให้ลองได้อย่างอิสระ และอย่ารับ Mordred เร็วเกินไป เส้นทางตอนจบมืดเข้าถึงได้ผ่านย้อนเวลาทีหลังเสมอ'
          ]
        }
      ]
    },
    'how-to-play': {
      h1: 'วิธีเล่น Sovereign Tower',
      imgAlt: 'วิธีเล่น Sovereign Tower',
      imgVideoId: '',
      metaTitle: 'วิธีเล่น Sovereign Tower — วงจรหลัก ปุ่มควบคุม และกลไก',
      metaDesc: 'วิธีเล่น Sovereign Tower: ระบบโต๊ะกลม ความสนิทอัศวิน สมดุลฝ่าย ย้อนเวลา และวงจรมอบเควสต์',
      intro: 'Sovereign Tower เป็น RPG เน้้นเรื่องราวที่คุณปกครองหอคอยเวทมนตร์และนำโต๊ะกลมอัศวิน คุณรับอัศวิน มอบเควสต์ จัดการการเมืองฝ่าย และหล่อหลีมชะตากรุง เมื่อผิดพลาด ย้อนเวลาให้เขียนชะตาใหม่',
      sections: [
        {
          h2: 'วงจรหลัก',
          list: [
            'รับอัศวินที่ห้องโต๊ะกลม',
            'มอบแต่ละคนให้เควสต์ตามความเชี่ยวชาญ',
            'เสิร์ฟอาหารโปรดที่ห้องเลี้ยงเพื่อเพิ่มความสนิท',
            'สมดุลฝ่ายให้ไม่มีใครกบฏ',
            'ใช้ย้อนเวลา (R) เมื่อตัดสินใจผิดพลาด',
            'ตามล่าโรแมนซ์และการแปลงร่างที่ความสนิทเต็ม'
          ]
        },
        {
          h2: 'ปุ่มควบคุม',
          list: [
            'W / A / S / D — เคลื่อนที่ในหอคอย',
            'E — โต้ตอบ / คุยกับอัศวินและ NPC',
            'Tab — เปิดเมนูโต๊ะกลม',
            'R — เปิดย้อนเวลา',
            'Space — ยืนยัน / ข้ามบทสนทนา',
            'Esc — เมนูหยุด / ตั้งค่า',
            'F — เซฟด่วนที่จุดตัดสินใจ',
            'L — เปิดบันทึกเควสต์',
            'M — เปิดแผนที่หอคอย'
          ]
        },
        {
          h2: 'กลไกสำคัญโดยสังเขป',
          paragraphs: [
            'ความสนิทอัศวินเพิ่มโดยเสิร์ฟอาหารโปรด ที่ความสนิทเต็ม อัศวินแปลงร่างเพิ่มพลังและปลดล็อกสายเรื่องพิเศษ สมดุลฝ่ายสำคัญมาก — เอียงฝ่ายใดมากเกินจะกบฏ อาจเสียอัศวินและเควสต์',
            'ย้อนเวลาใช้พลังงานไทม์ไลน์ แต่ละครั้งย้อนให้กลับจุดตัดสินใจและเลือกต่าง เป็นกุญแจสำหรับหาผลเควสต์ทั้ง 312 และไปถึงตอนจบหลายแบบโดยไม่ต้องเล่นใหม่'
          ]
        },
        {
          h2: 'เริ่มจากตรงไหน',
          paragraphs: [
            'เริ่มด้วยคู่มือเริ่มต้น เรียนรู้ปุ่มควบคุมในหน้านี้ แล้วตั้งสภาโต๊ะกลมแรกก่อนหาอัศวินชเชียลลิสต์'
          ]
        }
      ]
    },
    'romance-guide': {
      h1: 'คู่มือโรแมนซ์ Sovereign Tower',
      imgAlt: 'คู่มือโรแมนซ์ Sovereign Tower',
      imgVideoId: '',
      metaTitle: 'คู่มือโรแมนซ์ Sovereign Tower — เส้นทางทั้งหมด ความสนิท และการแปลงร่าง',
      metaDesc: 'คู่มือโรแมนซ์ Sovereign Tower: เส้นทางโรแมนซ์ทั้งหมด อาหารโปรดสำหรับความสนิท การปลดล็อกแปลงร่าง และวิธีไปถึงตอนจบโรแมนซ์',
      intro: 'โรแมนซ์ใน Sovereign Tower ผูกกับระบบความสนิทอัศวินโดยตรง เพิ่มความสนิทถึงขั้นต่ำโดยเสิร์ฟอาหารโปรด เลือกบทสนทนาที่ถูกใจ และมอบเควสต์ที่ตรงบุคลิก ที่ความสนิทเต็ม ปลดล็อกการแปลงร่างและตามล่าเรื่องโรแมนซ์เต็ม',
      callout: 'เคล็ดลับ: ตามล่าโรแมนซ์หลายเส้นทางในเพลย์เดียวด้วยย้อนเวลา — ย้อนไปจุดสำคัญและเลือกอัศวินอื่น แต่ละเส้นทางมีฉากพิเศษและส่งผลต่อตอนจบ',
      sections: [
        {
          h2: 'อัศวินที่มีโรแมนซ์',
          list: [
            'Galahad — Paladin ผู้บริสุทธิ์ใจ อาหารโปรด: ไก่ฟ่ายฮิเบิร์ โรแมนซ์ปลดล็อกที่ความสนิทสูงหลังเควสต์เลือกขั้นตำ',
            'Lancelot — แชมป์เปียนผู้มีอารมณ์ อาหารโปรด: สตูกวางเครื่องเทศ โรแมนซ์ก่อนละครคู่แข่งกับ Gawain',
            'Morgana — จอมเวทผู้ลึกลับ อาหารโปรด: ชากลีบจันทร์ โรแมนซ์เปิดเรื่องราวลึกของหอคอย',
            'Tristan — ทูตผู้โรแมนติก อาหารโปรด: นกกระทึ้งน้ำผึ้ง โรแมนซ์ผสมผ้านกับเควสต์สันติภาพ'
          ]
        },
        {
          h2: 'วิธีเพิ่มความสนิทเร็วที่สุด',
          paragraphs: [
            'ห้องเลี้ยงเป็นเครื่องมือเพิ่มความสนิทหลัก เสิร์ฟอาหารโปรดทุกตอนแล้วแถบความสนิทจะเติมทีละน้อย บทสนทนาในเควสต์ก็ช่วย — เลือกตัวเลือกที่ตรงบุคลิก (ศีลธรรมสำหรับ Galahad กล่าหาญสำหรับ Lancelot ลึกลับสำหรับ Morgana ทูตสำหรับ Tristan)',
            'อย่ามอบอัศวินให้เควสต์ที่ขัดค่านิยม ปล่อยให้ว่างดีกว่าทำให้ความสนิทตก ย้อนเวลาแก้ไขความสนิทผิดพลาดได้ แต่ทำให้ถูกตั้งแต่แรกดีกว่า'
          ]
        },
        {
          h2: 'การปลดล็อกแปลงร่าง',
          paragraphs: [
            'ที่ความสนิทเต็ม อัศวินที่มีโรแมนซ์จะแปลงร่างเพิ่มพลัง Galahad เป็น Holy Avatar, Lancelot ได้ Dragonheart, Morgana ปลดล็อก Timeless Veil, Tristan ได้ Harmonious Blade การแปลงร่างแต่ละแบบเปลี่ยนผลเควสต์และเปิดสายเรื่องพิเศษที่นำไปสู่ตอนจบต่าง ๆ'
          ]
        }
      ]
    }
  }
};
