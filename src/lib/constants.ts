import { FaqItem, GrowthStageInfo, RoadmapMilestone } from './types';

export const SITE_METADATA = {
  title: 'Capy Valley: Cozy Idle Onsen & Farm on Solana',
  description: 'Relax with chill Capybaras, harvest golden yuzu, and earn $CAPY from a public Solana community reward vault. Follow @shreyahunt for drop updates and guaranteed Pioneer whitelist access.',
  token: '$CAPY',
  chain: 'Solana',
  twitterHandle: 'shreyahunt',
  twitter: '@shreyahunt',
  twitterUrl: 'https://x.com/shreyahunt',
  twitterFollowIntent: 'https://x.com/intent/follow?screen_name=shreyahunt',
  discord: 'https://discord.gg/capyvalleysol',
  telegram: 'https://t.me/capyvalleysol',
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
    description: 'A seasoned hot spring keeper wearing a hand-woven towel. Unlocks automated grove watering and a 14-hour keeper shift on Solana.',
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
    price: 'Free Claim (Solana rent only)',
    perks: 'Guaranteed Baby Capy Solana NFT, Exclusive "Zen Onsen Master" trait, +25% permanent Farm Power boost for @shreyahunt followers.',
    badge: 'Guaranteed',
    highlight: true,
  },
  {
    tier: 'Whitelist Stage',
    supply: '3,800',
    price: '0.18 SOL',
    perks: 'Priority 24h mint window on Magic Eden / Tensor, 1x Free Yuzu Basket in-game starter pack.',
    badge: 'Priority',
    highlight: false,
  },
  {
    tier: 'Public Drop',
    supply: '5,000',
    price: '0.35 SOL',
    perks: 'Open to everyone with a Phantom, Solflare or Backpack wallet. Instant in-game staking utility.',
    badge: 'Public',
    highlight: false,
  },
];

export const ROADMAP_ITEMS: RoadmapMilestone[] = [
  {
    quarter: 'Phase 1: Genesis Bath',
    title: 'Solana Whitelist & @shreyahunt Community',
    desc: 'Launch of Capy Valley showcase, official @shreyahunt follower whitelist campaign, Anchor program audits, and pixel art reveals.',
    status: 'in-progress',
    icon: 'Sparkles',
  },
  {
    quarter: 'Phase 2: The Baby Capys',
    title: 'Metaplex / Solana Core Mint',
    desc: 'Pioneers mint their Baby Capy NFTs on Solana. Dynamic on-chain metadata evolution tracking growth stages.',
    status: 'upcoming',
    icon: 'Award',
  },
  {
    quarter: 'Phase 3: Hot Springs Open',
    title: 'Idle Web Game & SPL Vault',
    desc: 'Solana public reward vault deployed. Groves open for harvesting. Put Capy Keepers to work and claim instant $CAPY payouts.',
    status: 'upcoming',
    icon: 'Waves',
  },
  {
    quarter: 'Phase 4: CapyDAO & Expansion',
    title: 'Solana Realms Governance',
    desc: 'Capy holders vote via Realms on vault distributions, seasonal hot spring expansions, and community grove upgrades.',
    status: 'upcoming',
    icon: 'Landmark',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'gameplay',
    question: 'How do I get guaranteed access to the Pioneer Whitelist?',
    answer: 'Follow @shreyahunt on 𝕏, complete the community rituals on the Whitelist page, and submit your Solana wallet address. The first 1,200 followers receive Guaranteed Free Claim spots.',
  },
  {
    category: 'vault',
    question: 'Where do the $CAPY rewards come from?',
    answer: 'The game never mints inflationary reward tokens out of thin air. Instead, rewards flow from a dedicated Solana Program Public Reward Vault (SPL Token). Every day, the vault releases a transparent share to players based on their Farm Power.',
  },
  {
    category: 'capys',
    question: 'Do my Baby Capys really grow as I play?',
    answer: 'Yes! Baby Capys are minted as dynamic NFTs on Solana (Metaplex / Solana Core). They start as Pups and level up on-chain as they soak in your onsen and harvest groves, extending offline keeper duration up to 24 hours.',
  },
  {
    category: 'tokenomics',
    question: 'Which Solana wallets can I use?',
    answer: 'You can use any standard Solana wallet including Phantom, Solflare, Backpack, and Ledger. Your Solana public key is all you need to participate in the Pioneer Whitelist.',
  },
  {
    category: 'vault',
    question: 'How do I claim my harvested $CAPY tokens?',
    answer: 'Rewards accumulate securely inside your game profile on Solana. You can claim your accumulated $CAPY directly into your Phantom or Solflare wallet at any time with instant finality.',
  },
];
