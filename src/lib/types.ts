export type AtmosphereMode = 'day' | 'sunset' | 'night';

export interface CapyTrait {
  id: string;
  name: string;
  category: 'head' | 'expression' | 'body' | 'aura';
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  preview: string;
}

export interface CapyCompanion {
  id: string;
  name: string;
  level: number;
  stage: GrowthStage;
  traits: {
    head: string;
    expression: string;
    body: string;
    aura: string;
  };
  boostPercent: number;
}

export type GrowthStage = 'Pup' | 'Sprout' | 'Keeper' | 'Grand Elder';

export interface GrowthStageInfo {
  stage: GrowthStage;
  ageDays: string;
  keeperHours: number;
  multiplier: string;
  description: string;
  avatarColor: string;
}

export interface FarmInputs {
  capyCount: number;
  springBathLevel: number; // 1 to 5
  harvestStreakDays: number;
  lockedTokensUsd: number;
}

export interface FarmYieldResult {
  farmPower: number;
  dailyCapyYield: number;
  vaultSharePercent: number;
  estimatedMonthlyCapy: number;
  keeperOfflineHours: number;
}

export interface WhitelistEntry {
  id: string;
  walletAddress: string;
  xHandle: string;
  discordHandle?: string;
  telegramHandle?: string;
  proofUrl: string;
  timestamp: number;
  pioneerId: number;
  tier: 'Guaranteed' | 'Priority' | 'Public Raffle';
}

export interface SocialTask {
  id: string;
  label: string;
  description: string;
  link: string;
  completed: boolean;
  type: 'x-follow' | 'x-repost' | 'telegram' | 'discord';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'gameplay' | 'vault' | 'capys' | 'tokenomics';
}

export interface RoadmapMilestone {
  quarter: string;
  title: string;
  desc: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  icon: string;
}
