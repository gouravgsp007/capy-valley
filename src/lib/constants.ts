import { FaqItem, GrowthStageInfo, RoadmapMilestone } from './types';

export const SITE_METADATA = {
  title: 'Capy Valley: Cozy Idle Onsen & Farm on L2',
  description: 'Relax with chill Capybaras, harvest golden yuzu, and earn $CAPY from a public community reward vault. An idle Web3 clicker crafted for peace and yield.',
  token: '$CAPY',
  chain: 'Arbitrum / Base (EVM)',
  twitter: '@CapyValleyGame',
  discord: 'https://discord.gg/capyvalley',
  telegram: 'https://t.me/capyvalley',
};

export const GROWTH_STAGES: GrowthStageInfo[] = [
  {
    stage: 'Pup',
    ageDays: 'Day 1 - 7',
    keeperHours: 4,
    multiplier: '1.0x',
    description: 'A tiny, curious capybara learning to float with a small yuzu on its head. Keeps your groves producing for 4 hours while you sleep.',
    avatarColor: '#E2B887',
  },
  {
    stage: 'Sprout',
    ageDays: 'Day 8 - 21',
    keeperHours: 8,
    multiplier: '1.25x',
    description: 'Loves dipping into warm spring waters and carrying yuzu baskets. Expands offline grove auto-harvest to 8 hours.',
    avatarColor: '#BA8C63',
  },
  {
    stage: 'Keeper',
    ageDays: 'Day 22 - 60',
    keeperHours: 14,
    multiplier: '1.60x',
    description: 'A seasoned hot spring keeper wearing a hand-woven towel. Unlocks automated grove watering and a 14-hour keeper shift.',
    avatarColor: '#9A6B43',
  },
  {
    stage: 'Grand Elder',
    ageDays: 'Day 60+',
    keeperHours: 24,
    multiplier: '2.20x',
    description: 'Total inner peace achieved. Sits serenely in the steaming spring 24/7. Never rests, granting 24-hour continuous automated harvests and max vault share.',
    avatarColor: '#684323',
  },
];

export const DROP_TIERS = [
  {
    tier: 'Early Pioneers (GTD)',
    supply: '1,200',
    price: 'Free Claim (Gas only)',
    perks: 'Guaranteed Baby Capy NFT, Exclusive "Zen Onsen Master" trait, +25% permanent Farm Power boost.',
    badge: 'Guaranteed',
    highlight: true,
  },
  {
    tier: 'Whitelist Stage',
    supply: '3,800',
    price: '0.008 ETH (~$25)',
    perks: 'Priority 24h mint window, 1x Free Yuzu Basket in-game starter pack, discount from public.',
    badge: 'Priority',
    highlight: false,
  },
  {
    tier: 'Public Drop',
    supply: '5,000',
    price: '0.015 ETH (~$48)',
    perks: 'Open to everyone, dynamic random traits, direct integration with game launch.',
    badge: 'Public',
    highlight: false,
  },
];

export const ROADMAP_ITEMS: RoadmapMilestone[] = [
  {
    quarter: 'Phase 1: Genesis Bath',
    title: 'Concept & Community Whitelist',
    desc: 'Launch of Capy Valley showcase, Pioneer Whitelist campaign, smart contract security audits, and pixel art reveals.',
    status: 'in-progress',
    icon: 'Sparkles',
  },
  {
    quarter: 'Phase 2: The Baby Capys',
    title: 'Drop & Companion Mint',
    desc: 'Pioneers claim their Baby Capy NFTs. Reveal event with dynamic on-chain metadata and growth stage tracking.',
    status: 'upcoming',
    icon: 'Award',
  },
  {
    quarter: 'Phase 3: Hot Springs Open',
    title: 'Idle Web Game Launch',
    desc: 'Public reward vault funded. Groves open for harvesting. Put Capy Keepers to work and claim daily $CAPY rewards.',
    status: 'upcoming',
    icon: 'Waves',
  },
  {
    quarter: 'Phase 4: CapyDAO & Expansion',
    title: 'Community Vault Governance',
    desc: 'Capy holders vote on vault distributions, seasonal hot spring expansions, mini-games, and cross-chain groves.',
    status: 'upcoming',
    icon: 'Landmark',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'gameplay',
    question: 'How does Capy Valley idle gameplay work?',
    answer: 'You manage a cozy hillside farm with hot spring baths and yuzu fruit groves. Your groves generate Yuzu leaves every second. Tap groves to deliver harvests to the market, or assign a Capy Keeper to automate harvests while you sleep.',
  },
  {
    category: 'vault',
    question: 'Where do the $CAPY rewards come from?',
    answer: 'The game never mints inflationary reward tokens out of thin air. Instead, rewards are funded by a dedicated Community Public Reward Vault. Every day, the vault releases a percentage of its contents to players according to their Farm Power score.',
  },
  {
    category: 'capys',
    question: 'Do my Baby Capys really grow as I play?',
    answer: 'Yes! Baby Capys start as Pups and naturally level up as they soak in your onsen and work in your groves. As they evolve into Sprouts, Keepers, and Grand Elders, their offline keeper duration and farm multipliers significantly increase.',
  },
  {
    category: 'tokenomics',
    question: 'Can I play without spending hours at a screen?',
    answer: 'Capy Valley is intentionally designed as a calm, low-stress idle game. A few taps for 3 to 5 minutes a day is all it takes. Your Capy Keepers handle the hard work when you are offline.',
  },
  {
    category: 'vault',
    question: 'How do I claim my harvested tokens?',
    answer: 'Rewards accumulate securely inside your game profile on-chain. You can claim your accumulated $CAPY directly into your own Web3 wallet at any time after an initial 24-hour verification cooldown.',
  },
];
