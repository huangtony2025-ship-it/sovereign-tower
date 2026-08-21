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
  tagline: 'Knights, Quests & Time Reversal Guides',
  description: 'Fan-made Sovereign Tower reference: knights, quests, walkthroughs, and beginner guides for the narrative Round Table Knight simulation RPG by WILD WITS GAMES.',
  url: 'https://sovereign-tower.site',
  officialLink: 'https://store.steampowered.com/app/4113940/Sovereign_Tower/',
  brand: 'SOVEREIGN<span>TOWER</span>',
  footerTitle: 'Sovereign Tower Guides',
  footerDesc: 'Fan-made reference for Sovereign Tower by WILD WITS GAMES. Not affiliated with the developer or publisher.',
  footerOfficial: 'Steam Page',
  footerAbout: 'About',
  theme: {
    light: 'hsl(270 60% 50%)',
    dark: 'hsl(270 60% 38%)'
  }
};

export const gameStats: GameStat[] = [
  {
    label: 'Released',
    value: 'Aug 7, 2026'
  },
  {
    label: 'Price',
    value: '$19.99'
  },
  {
    label: 'Developer',
    value: 'WILD WITS GAMES'
  },
  {
    label: 'Reviews',
    value: 'Mostly Positive'
  },
  {
    label: 'CCU',
    value: '1,131'
  },
  {
    label: 'Genre',
    value: 'Narrative RPG'
  }
];

export const codes: Codes = {
  working: [
    {
      code: 'W / A / S / D',
      reward: 'Move the ruler character in the tower',
      isNew: false
    },
    {
      code: 'E',
      reward: 'Interact / Talk to knights and NPCs',
      isNew: false
    },
    {
      code: 'Tab',
      reward: 'Open the Round Table council menu',
      isNew: false
    },
    {
      code: 'R',
      reward: 'Activate Time Reversal mechanic',
      isNew: false
    },
    {
      code: 'Space',
      reward: 'Confirm / Advance dialogue',
      isNew: false
    },
    {
      code: 'Esc',
      reward: 'Pause menu / System settings',
      isNew: false
    },
    {
      code: 'F',
      reward: 'Quick-save at current decision point',
      isNew: false
    },
    {
      code: 'L',
      reward: 'Open quest log',
      isNew: false
    },
    {
      code: 'M',
      reward: 'Open tower map',
      isNew: false
    }
  ],
  expired: [],
  redeemSteps: [
    'Talk to the first knight at the Round Table to begin your reign.',
    'Assign each knight to a task matching their personality and faction.',
    'Check the quest log (L) regularly for new events triggered by knight assignments.',
    'When a decision leads to a bad outcome, press R to reverse time and try a different path.',
    'Build affinity with knights by serving their favorite meals at the banquet hall.'
  ]
};

export const weapons: Weapon[] = [
  {
    name: 'Chester',
    tier: 'S',
    synergy: 'Balanced leader, boosts all factions equally',
    playstyle: 'Diplomat',
    difficulty: 'Early',
    note: 'Confirmed knight. A charismatic and balanced knight who excels at keeping the Round Table united. Pairs well with any faction and has strong affinity outcomes.'
  },
  {
    name: 'Zolta',
    tier: 'S',
    synergy: 'High quest success rate, unlocks secret endings',
    playstyle: 'Strategist',
    difficulty: 'Mid-game',
    note: 'Confirmed knight. A mysterious strategist with knowledge of hidden tower passages. Assign Zolta to intelligence quests for the best results and to uncover deep lore.'
  },
  {
    name: 'Galahad',
    tier: 'S',
    synergy: 'Pure-heart quests, romance option',
    playstyle: 'Paladin',
    difficulty: 'Early',
    note: 'A virtuous knight who shines in moral-choice quests. High affinity unlocks a transformation and a romance route. Favorite meal: Herb-Roasted Pheasant.'
  },
  {
    name: 'Lancelot',
    tier: 'A',
    synergy: 'Combat quests, rival of Gawain',
    playstyle: 'Champion',
    difficulty: 'Early',
    note: 'The tower\'s strongest fighter. Dominates battle-type quests but may cause faction tension with Gawain\'s faction. Favorite meal: Spiced Venison Stew.'
  },
  {
    name: 'Percival',
    tier: 'A',
    synergy: 'Exploration quests, discovers secrets',
    playstyle: 'Seeker',
    difficulty: 'Mid-game',
    note: 'An inquisitive knight who finds hidden rooms and lore fragments. Essential for 100% completion. Favorite meal: Wild Mushroom Pie.'
  },
  {
    name: 'Morgana',
    tier: 'A',
    synergy: 'Magic quests, time reversal enhancements',
    playstyle: 'Enchantress',
    difficulty: 'Late-game',
    note: 'A powerful sorceress who can extend time reversal duration. Crucial for reaching endings that require multiple timeline revisions. Favorite meal: Moonpetal Tea.'
  },
  {
    name: 'Gawain',
    tier: 'A',
    synergy: 'Defense quests, faction stabilizer',
    playstyle: 'Guardian',
    difficulty: 'Early',
    note: 'A steadfast knight who holds the line during crises. Rival of Lancelot — keeping both happy is a key diplomatic challenge. Favorite meal: Solar Bread.'
  },
  {
    name: 'Tristan',
    tier: 'B',
    synergy: 'Romance quests, envoy missions',
    playstyle: 'Diplomat',
    difficulty: 'Mid-game',
    note: 'A romantic knight skilled in persuasion and cross-faction negotiation. Best envoy for peacekeeping quests. Favorite meal: Honeyed Quail.'
  },
  {
    name: 'Bedivere',
    tier: 'B',
    synergy: 'Loyalty quests, never abandons the table',
    playstyle: 'Loyalist',
    difficulty: 'Early',
    note: 'The most dependable knight. Never leaves the Round Table even in the worst timeline. Good for stability when other knights defect. Favorite meal: Barley Porridge.'
  },
  {
    name: 'Nimue',
    tier: 'B',
    synergy: 'Lore quests, reveals tower backstory',
    playstyle: 'Scholar',
    difficulty: 'Late-game',
    note: 'The Lady of the Lake\'s representative. Unlocks deep lore about the Sovereign Tower\'s origins. Favorite meal: Crystal Spring Water.'
  },
  {
    name: 'Kay',
    tier: 'B',
    synergy: 'Management quests, resource efficiency',
    playstyle: 'Steward',
    difficulty: 'Early',
    note: 'A practical knight who improves resource yields and task efficiency. Sarcastic personality but mechanically strong for tower management. Favorite meal: Hearty Beef Stew.'
  },
  {
    name: 'Mordred',
    tier: 'B',
    synergy: 'Chaos quests, unlocks dark ending',
    playstyle: 'Usurper',
    difficulty: 'Late-game',
    note: 'The controversial knight. Recruiting Mordred opens the dark ending path but destabilizes the Round Table. Handle with care — or reverse time if things go wrong. Favorite meal: Blackthorn Wine.'
  }
];

export const weaponMechanics: WeaponMechanic[] = [
  {
    mechanic: 'Knight Affinity',
    desc: 'Serve knights their favorite meals at the banquet hall to raise affinity. High affinity unlocks transformations, romance routes, and special quest outcomes.',
    priority: 'Core'
  },
  {
    mechanic: 'Faction Balance',
    desc: 'Knights belong to factions. Favoring one faction too much causes others to rebel. Balance assignments to keep the Round Table stable.',
    priority: 'Core'
  },
  {
    mechanic: 'Time Reversal',
    desc: 'Press R to rewind decisions. Each reversal costs timeline energy — manage it or you\'ll be locked into a bad ending.',
    priority: 'Core'
  },
  {
    mechanic: 'Knight Transformations',
    desc: 'At max affinity, certain knights gain powerful transformations that change their quest performance and unlock exclusive story branches.',
    priority: 'High'
  },
  {
    mechanic: 'Quest-Knight Pairing',
    desc: '312 quests exist, and many have special outcomes only when the right knight is assigned. Experiment and reverse time to find the optimal pairing.',
    priority: 'High'
  },
  {
    mechanic: 'Multiple Endings',
    desc: 'The game has multiple endings shaped by your decisions. Time reversal lets you explore different paths without starting over.',
    priority: 'Medium'
  }
];

export const loadoutPriority: LoadoutUpgrade[] = [
  {
    upgrade: 'Recruit Chester & Galahad',
    effect: 'A balanced diplomat and a pure-hearted paladin to start',
    when: 'First hour — stable foundation'
  },
  {
    upgrade: 'Recruit Lancelot & Gawain',
    effect: 'Combat and defense covered, but manage their rivalry',
    when: 'Early game — military strength'
  },
  {
    upgrade: 'Unlock Time Reversal',
    effect: 'Rewind bad decisions and explore alternate paths',
    when: 'After first major story branch'
  },
  {
    upgrade: 'Recruit Zolta',
    effect: 'Intelligence and secret-finding quests unlocked',
    when: 'Mid game — information advantage'
  },
  {
    upgrade: 'Recruit Morgana',
    effect: 'Extended time reversal and magic quests',
    when: 'Mid-late game — timeline mastery'
  },
  {
    upgrade: 'Max Affinity & Transformations',
    effect: 'Unlock knight transformations and romance routes',
    when: 'Late game — peak power'
  },
  {
    upgrade: 'Recruit Mordred (Optional)',
    effect: 'Opens dark ending path but destabilizes the table',
    when: 'Late game — high risk / high reward'
  }
];

export const skillTreeOrder: SkillTreeItem[] = [
  {
    priority: 1,
    skill: 'Recruit Core Knights (Chester, Galahad, Kay)'
  },
  {
    priority: 2,
    skill: 'Recruit Military Knights (Lancelot, Gawain)'
  },
  {
    priority: 3,
    skill: 'Unlock Time Reversal'
  },
  {
    priority: 4,
    skill: 'Recruit Specialist Knights (Zolta, Percival)'
  },
  {
    priority: 5,
    skill: 'Banquet Hall & Affinity System'
  },
  {
    priority: 6,
    skill: 'Recruit Magic Knights (Morgana, Nimue)'
  },
  {
    priority: 7,
    skill: 'Knight Transformations'
  },
  {
    priority: 8,
    skill: 'Recruit Controversial Knights (Mordred)'
  }
];

export const worlds: World[] = [
  {
    name: 'The Sovereign Tower',
    note: 'Your seat of power. Each floor holds quest-givers, knight quarters, and secrets that unfold as you ascend.'
  },
  {
    name: 'The Round Table Chamber',
    note: 'Where you assign knights to quests and manage faction balance. The heart of every strategic decision.'
  },
  {
    name: 'The Banquet Hall',
    note: 'Serve favorite meals to raise knight affinity. Unlocks transformations and romance at max affinity.'
  },
  {
    name: 'Knight Quests (312 total)',
    note: 'Combat, diplomacy, exploration, magic, and management quests. Many have knight-specific special outcomes.'
  },
  {
    name: 'Time Reversal Pathways',
    note: 'Rewind decisions to explore alternate timelines. Costs timeline energy — use wisely or get locked into outcomes.'
  },
  {
    name: 'Hidden Passages',
    note: 'Secret rooms throughout the tower. Assign Percival or Zolta to intelligence quests to reveal them.'
  },
  {
    name: 'Faction Territories',
    note: 'Each faction controls tower sections. Imbalance triggers rebellion — keep all factions satisfied.'
  },
  {
    name: 'Romance Routes',
    note: 'Multiple romance options tied to knight affinity. Galahad and others have full romance storylines.'
  },
  {
    name: 'Knight Transformations',
    note: 'Power-up states unlocked at max affinity. Change quest performance and unlock exclusive story branches.'
  },
  {
    name: 'Multiple Endings',
    note: 'Your decisions across all timelines determine the ending. Time reversal lets you explore different paths.'
  },
  {
    name: 'Lore Fragments',
    note: 'Scattered backstory pieces about the tower\'s origin. Collect them all for the true ending.'
  },
  {
    name: 'Achievement System',
    note: 'Track your progress across quests, affinities, endings, and secrets. Some achievements require time reversal to reach.'
  }
];

export const navLinks: NavLink[] = [
  {
    label: 'Controls',
    href: '/codes'
  },
  {
    label: 'Knights',
    href: '/weapons'
  },
  {
    label: 'Tier List',
    href: '/tier-list'
  },
  {
    label: 'Guides',
    href: '/guides'
  },
  {
    label: 'Walkthrough',
    href: '/builds'
  },
  {
    label: 'Quests & Secrets',
    href: '/worlds'
  }
];

export const videos: Video[] = [];

export const pageContent: PageContent = {
  home: {
    metaTitle: 'Sovereign Tower — Knights, Quests & Time Reversal Guides',
    metaDesc: 'Fan-made Sovereign Tower reference: knights, quests, walkthroughs, and beginner guides for the narrative Round Table Knight simulation RPG by WILD WITS GAMES.',
    videosTitle: 'Latest Videos',
    popularTitle: 'Popular Pages',
    aboutTitle: 'What is Sovereign Tower?'
  },
  hero: {
    eyebrow: 'Round Table Knight Simulation RPG',
    title: 'SOVEREIGN TOWER',
    ctaCodes: 'Controls & Keys',
    ctaBeginner: 'Beginner Guide',
    ctaTier: 'Knight Tier List'
  },
  homeAbout: [
    'Sovereign Tower is a narrative-focused Round Table Knight simulation RPG by WILD WITS GAMES. You play as the ruler of a magic tower, recruiting knights with different personalities, assigning them to quests, balancing faction politics, and writing the kingdom\'s destiny together. With 312 quests, multiple endings, and a time reversal mechanic, every decision matters — and can be rewritten.',
    'Recruit knights like Chester and Zolta, serve their favorite meals at the banquet hall to raise affinity, unlock powerful transformations, and pursue romance routes. When fate doesn\'t go your way, reverse time to uncover secrets and try again. These guides cover everything from your first Round Table session to achieving the true ending.'
  ],
  popularPages: [
    {
      tag: 'Beginner',
      title: 'Beginner Guide',
      href: '/guides/beginner-guide',
      desc: 'Your first hour: recruit knights, assign quests, balance factions, and learn time reversal.',
      videoId: ''
    },
    {
      tag: 'Knights',
      title: 'All Knights & Roles',
      href: '/weapons',
      desc: 'Every recruitable knight, their affinity meals, faction, and special quest outcomes.',
      videoId: ''
    },
    {
      tag: 'Tier',
      title: 'Knight Tier List',
      href: '/tier-list',
      desc: 'Which knights matter most and the optimal recruitment order.',
      videoId: ''
    },
    {
      tag: 'Walkthrough',
      title: 'Quest Walkthrough',
      href: '/builds',
      desc: 'The 312 quests, optimal knight assignments, and special outcomes.',
      videoId: ''
    },
    {
      tag: 'Quests',
      title: 'Quests & Secrets',
      href: '/worlds',
      desc: 'Hidden passages, lore fragments, achievement guides, and secret endings.',
      videoId: ''
    },
    {
      tag: 'Romance',
      title: 'Romance Guide',
      href: '/guides/romance-guide',
      desc: 'All romance routes, affinity thresholds, and transformation unlocks.',
      videoId: ''
    }
  ],
  codes: {
    h1: 'Sovereign Tower Controls & Keyboard Shortcuts',
    desc: 'Sovereign Tower has no redeem codes — it is a single-player narrative RPG. What you need are the controls that drive exploration, knight management, and time reversal. Here is the keyboard reference for the full release.',
    workingIntro: 'These are the core keys you will use throughout your reign. Tap <strong>Copy</strong> to keep them handy.',
    expiredIntro: '',
    moreCodes: 'Controls are for the full release build. Time reversal (R) is unlocked after the first major story branch. Check the How to Play guide for the full decision loop.',
    metaTitle: 'Sovereign Tower Controls & Keyboard Shortcuts',
    metaDesc: 'Sovereign Tower keyboard controls: WASD to move, E to interact, Tab for Round Table, R for time reversal, L for quest log, M for map.',
    workingTitle: 'Core Controls',
    expiredTitle: 'Removed Controls',
    redeemTitle: 'How to Set Up Your First Round Table Session',
    moreTitle: 'Notes'
  },
  weapons: {
    h1: 'Sovereign Tower — All Knights & Roles',
    desc: 'Each knight brings a unique personality, faction loyalty, and quest specialty to the Round Table. Knowing their strengths and rivalries helps you assign the right knight to the right quest — and keep the table from fracturing.',
    imgAlt: 'Sovereign Tower knights and roles',
    mechanicsH2: 'Core Knight Mechanics',
    imgVideoId: '',
    metaTitle: 'Sovereign Tower Knights — Chester, Zolta, Galahad & All Recruits',
    metaDesc: 'Every Sovereign Tower knight explained: Chester, Zolta, Galahad, Lancelot, Percival, Morgana, Gawain, and more. Affinity meals, factions, and quest specialties.',
    allTitle: 'All Knights',
    mechCol: 'Mechanic',
    descCol: 'Description',
    priorityCol: 'Priority',
    bestWith: 'Synergy',
    playstyle: 'Role',
    difficulty: 'Recruit'
  },
  tierList: {
    h1: 'Sovereign Tower Knight Tier List',
    desc: 'Knights ranked by how much they advance your campaign. Chester and Zolta are the anchors — Chester keeps factions stable and Zolta unlocks the deepest secrets. Build your Round Table around them first.',
    imgAlt: 'Sovereign Tower knight tier list',
    metaH2: 'The Meta: Stable Core First',
    metaPara: 'Recruit Chester and Galahad first for a stable diplomatic and moral foundation. Add Lancelot and Gawain for military coverage, then unlock Time Reversal before pursuing specialists. The table can fracture if you rush controversial knights like Mordred too early.',
    imgVideoId: '',
    metaTitle: 'Sovereign Tower Tier List — Best Knights & Recruitment Order',
    metaDesc: 'Sovereign Tower tier list: Chester and Zolta lead the meta, followed by Galahad, Lancelot, Percival, and Morgana. The optimal recruitment order explained.',
    tierS: 'S-Tier (Core)',
    tierA: 'A-Tier (Strong)',
    tierB: 'B-Tier (Situational)',
    bestWith: 'Synergy',
    playstyle: 'Role'
  },
  builds: {
    h1: 'Sovereign Tower Quest Walkthrough',
    desc: 'With 312 quests, the right knight assignment makes the difference between a standard outcome and a hidden one. Follow the order below and every chapter reveals its secrets — especially when you pair the right knight with the right quest.',
    imgAlt: 'Sovereign Tower quest walkthrough',
    pathH2: 'The Campaign Path (In Order)',
    treeH2: 'Knight Recruitment Order',
    strategyH2: 'The Affinity-First Strategy',
    strategyPara: 'Before pushing story quests, raise affinity with your active knights by serving their favorite meals at the banquet hall. High affinity unlocks transformations that dramatically improve quest outcomes and open romance routes. A knight at max affinity is worth two at base affinity — and you can always reverse time to fix a missed meal.',
    imgVideoId: '',
    metaTitle: 'Sovereign Tower Quest Walkthrough — All 312 Quests & Optimal Assignments',
    metaDesc: 'Sovereign Tower quest walkthrough: 312 quests, optimal knight assignments, special outcomes, and the affinity-first strategy for transformations and romance.',
    upgradeCol: 'Step',
    effectCol: 'What Happens',
    whenCol: 'When',
    priorityCol: 'Order',
    skillCol: 'Recruitment'
  },
  worlds: {
    h1: 'Sovereign Tower Quests & Secrets',
    desc: 'The Sovereign Tower is full of hidden passages, lore fragments, and secret endings. Here is every discoverable element and how to reach it — often by assigning the right knight or reversing time to try a different path.',
    imgAlt: 'Sovereign Tower quests and secrets',
    voidH2: 'Key Quest & Secret Categories',
    voidPara: '312 quests span combat, diplomacy, exploration, magic, and management. Many have knight-specific special outcomes — assign Percival to exploration, Zolta to intelligence, Morgana to magic. Hidden passages and lore fragments unlock the true ending. Time reversal lets you revisit any decision point.',
    imgVideoId: '',
    metaTitle: 'Sovereign Tower Quests & Secrets — 312 Quests, Hidden Passages & Endings',
    metaDesc: 'Sovereign Tower quests and secrets: 312 quests, hidden passages, lore fragments, multiple endings, and how to reach them with the right knight assignments.',
    cardTag: 'Category'
  },
  guidesIndex: {
    h1: 'Sovereign Tower Guides',
    desc: 'From your first Round Table session to the true ending — walkthroughs for every stage of your reign.',
    imgAlt: 'Sovereign Tower guides',
    imgVideoId: '',
    metaTitle: 'Sovereign Tower Guides — Beginner, How to Play, Romance',
    metaDesc: 'Sovereign Tower guides: the beginner guide, how to play, and romance guide. Learn the Round Table Knight simulation RPG step by step.',
    cards: [
      {
        title: 'Beginner Guide',
        href: '/guides/beginner-guide',
        desc: 'Your first hour: recruit knights, assign quests, balance factions, and learn time reversal.'
      },
      {
        title: 'How to Play',
        href: '/guides/how-to-play',
        desc: 'Controls, the Round Table system, affinity mechanics, and time reversal explained.'
      },
      {
        title: 'Romance Guide',
        href: '/guides/romance-guide',
        desc: 'All romance routes, affinity thresholds, favorite meals, and transformation unlocks.'
      }
    ]
  },
  about: {
    title: 'About Sovereign Tower Guides',
    paragraphs: [
      'Sovereign Tower Guides is a fan-made community reference for Sovereign Tower, the narrative Round Table Knight simulation RPG by WILD WITS GAMES. We collect knight profiles, quest walkthroughs, tier lists, and guides to help players build the best Round Table and reach every ending.',
      'This site is not affiliated with, endorsed, or sponsored by WILD WITS GAMES, Steam, or any platform. Game names, logos, and trademarks belong to their respective owners.'
    ],
    officialLinkText: 'Play Sovereign Tower on Steam',
    metaTitle: 'About — Sovereign Tower Guides',
    metaDesc: 'Sovereign Tower Guides is a fan-made reference for the narrative RPG Sovereign Tower by WILD WITS GAMES.',
    officialTitle: 'Official Links'
  },
  guides: {
    'beginner-guide': {
      h1: 'Sovereign Tower Beginner Guide',
      imgAlt: 'Sovereign Tower beginner guide',
      imgVideoId: '',
      metaTitle: 'Sovereign Tower Beginner Guide — First Round Table & Recruitment Order',
      metaDesc: 'Sovereign Tower beginner guide: recruit Chester and Galahad, assign quests, balance factions, and unlock time reversal in your first session.',
      intro: 'Sovereign Tower throws a lot of systems at you at once — knights with personalities, faction politics, 312 quests, and a time reversal mechanic. The first hour comes down to one simple loop: recruit your core knights, assign them to quests that match their strengths, and keep factions balanced while you learn the ropes.',
      callout: 'Quick answer: recruit Chester and Galahad first, assign quests matching their specialties, serve their favorite meals at the banquet hall, and unlock Time Reversal before exploring specialist knights.',
      sections: [
        {
          h2: 'The Core Loop',
          paragraphs: [
            'Every chapter follows the same rhythm: recruit knights, assign them to quests, manage faction balance, and react to story events. When a decision goes wrong, Time Reversal (R) lets you rewind and try a different path. Think of your first playthrough as a reconnaissance run — you can always reverse time later.',
            'The mistake that hurts new players most is ignoring affinity. A knight at max affinity performs dramatically better and may unlock a transformation. Always serve favorite meals at the banquet hall before pushing hard quests.'
          ]
        },
        {
          h2: 'Your First Round Table Session',
          paragraphs: [
            'Set up this session and you have a working Round Table before the first crisis hits.'
          ],
          table: {
            headers: [
              'Step',
              'What To Do'
            ],
            rows: [
              [
                '1',
                'Recruit Chester — your balanced diplomat keeps factions stable'
              ],
              [
                '2',
                'Recruit Galahad — your paladin handles moral-choice quests'
              ],
              [
                '3',
                'Open the Round Table (Tab) and assign each knight to matching quests'
              ],
              [
                '4',
                'Visit the Banquet Hall and serve their favorite meals to start affinity'
              ],
              [
                '5',
                'Complete 2-3 quests to unlock Time Reversal (R)'
              ]
            ]
          }
        },
        {
          h2: 'Early Recruitment Order',
          paragraphs: [
            'Recruit in this order and your Round Table stays stable through the early chapters.'
          ],
          table: {
            headers: [
              'Priority',
              'Knight & Reason'
            ],
            rows: [
              [
                '1',
                'Chester (Diplomat — keeps factions balanced)'
              ],
              [
                '2',
                'Galahad (Paladin — moral quests and early romance)'
              ],
              [
                '3',
                'Kay (Steward — improves resource efficiency)'
              ],
              [
                '4',
                'Lancelot & Gawain (Military — but manage their rivalry)'
              ],
              [
                '5',
                'Unlock Time Reversal after first story branch'
              ],
              [
                '6',
                'Zolta (Strategist — intelligence quests and secrets)'
              ],
              [
                '7',
                'Percival (Seeker — exploration and hidden passages)'
              ],
              [
                '8',
                'Hold off on Mordred until late game'
              ]
            ]
          }
        },
        {
          h2: 'Early Tips',
          paragraphs: [
            'Never assign Lancelot and Gawain to the same quest — their rivalry tanks the outcome. Serve favorite meals at the banquet hall every chapter; affinity compounds over time. Unlock Time Reversal as soon as possible — it\'s the safety net that lets you experiment freely. And don\'t rush recruiting Mordred; the dark ending path is always accessible via time reversal later.'
          ]
        }
      ]
    },
    'how-to-play': {
      h1: 'How to Play Sovereign Tower',
      imgAlt: 'How to play Sovereign Tower',
      imgVideoId: '',
      metaTitle: 'How to Play Sovereign Tower — Core Loop, Controls & Mechanics',
      metaDesc: 'How to play Sovereign Tower: the Round Table system, knight affinity, faction balance, time reversal, and the quest assignment loop.',
      intro: 'Sovereign Tower is a narrative RPG where you rule a magic tower and lead the Round Table of Knights. You recruit knights, assign them to quests, manage faction politics, and shape the kingdom\'s destiny. When things go wrong, time reversal lets you rewrite fate.',
      sections: [
        {
          h2: 'The Core Loop',
          list: [
            'Recruit knights at the Round Table Chamber',
            'Assign each knight to quests matching their specialty',
            'Serve favorite meals at the Banquet Hall to raise affinity',
            'Balance factions so none rebel against your rule',
            'Use Time Reversal (R) when a decision leads to a bad outcome',
            'Pursue romance routes and transformations at max affinity'
          ]
        },
        {
          h2: 'Controls',
          list: [
            'W / A / S / D — move the ruler in the tower',
            'E — interact / talk to knights and NPCs',
            'Tab — open the Round Table council menu',
            'R — activate Time Reversal',
            'Space — confirm / advance dialogue',
            'Esc — pause menu / system settings',
            'F — quick-save at current decision point',
            'L — open quest log',
            'M — open tower map'
          ]
        },
        {
          h2: 'Key Mechanics At A Glance',
          paragraphs: [
            'Knight Affinity is raised by serving favorite meals. At max affinity, knights gain transformations that dramatically boost quest performance and unlock exclusive story branches. Faction Balance is critical — favor one faction too much and others rebel, potentially costing you knights and quests.',
            'Time Reversal costs timeline energy. Each rewind lets you revisit a decision point and choose differently. It\'s the key to finding all 312 quest outcomes and reaching multiple endings without replaying from scratch.'
          ]
        },
        {
          h2: 'Where To Start',
          paragraphs: [
            'Start with the Beginner Guide, learn the controls on this page, and set up your first Round Table session before pushing into specialist knights.'
          ]
        }
      ]
    },
    'romance-guide': {
      h1: 'Sovereign Tower Romance Guide',
      imgAlt: 'Sovereign Tower romance guide',
      imgVideoId: '',
      metaTitle: 'Sovereign Tower Romance Guide — All Routes, Affinity & Transformations',
      metaDesc: 'Sovereign Tower romance guide: all romance routes, favorite meals for affinity, transformation unlocks, and how to reach each romance ending.',
      intro: 'Romance in Sovereign Tower is tied directly to the Knight Affinity system. Raise a knight\'s affinity to the threshold by serving their favorite meals, making dialogue choices they appreciate, and assigning them to quests that align with their personality. At max affinity, you unlock their transformation and can pursue the full romance storyline.',
      callout: 'Tip: you can pursue multiple romance routes in a single playthrough using Time Reversal — reverse to a key branch and choose a different knight. Each route has unique scenes and affects the ending.',
      sections: [
        {
          h2: 'Romance-Eligible Knights',
          list: [
            'Galahad — the pure-hearted paladin. Favorite meal: Herb-Roasted Pheasant. Romance unlocks at high affinity after moral-choice quests.',
            'Lancelot — the passionate champion. Favorite meal: Spiced Venison Stew. Romance path triggers rivalry drama with Gawain.',
            'Morgana — the enigmatic enchantress. Favorite meal: Moonpetal Tea. Romance path reveals deep tower lore.',
            'Tristan — the romantic envoy. Favorite meal: Honeyed Quail. Romance is intertwined with peacekeeping questlines.'
          ]
        },
        {
          h2: 'How To Raise Affinity Fast',
          paragraphs: [
            'The banquet hall is your primary affinity engine. Serve a knight\'s favorite meal every chapter and their affinity bar fills steadily. Dialogue choices during quests also contribute — choose options that align with the knight\'s personality (moral for Galahad, bold for Lancelot, mysterious for Morgana, diplomatic for Tristan).',
            'Avoid assigning a knight to quests that contradict their values. It\'s better to leave them idle than to tank their affinity with a bad assignment. Time reversal can fix affinity mistakes, but it\'s more efficient to get it right the first time.'
          ]
        },
        {
          h2: 'Transformation Unlocks',
          paragraphs: [
            'At max affinity, romance-eligible knights gain a powerful transformation. Galahad becomes a Holy Avatar, Lancelot gains the Dragonheart form, Morgana unlocks the Timeless Veil, and Tristan achieves the Harmonious Blade. Each transformation changes their quest performance and opens exclusive story branches that lead to unique ending variants.'
          ]
        }
      ]
    }
  }
};
