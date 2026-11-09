'use client';

import React from 'react';
import PixelBadge from '../common/PixelBadge';
import BrutalButton from '../common/BrutalButton';
import CapyPixelRenderer from '../canvas/CapyPixelRenderer';
import { WhitelistEntry } from '@/lib/types';
import { formatAddress } from '@/lib/solana';
import { SITE_METADATA } from '@/lib/constants';
import { Share2, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

interface PioneerPassportCardProps {
  entry: WhitelistEntry;
  onReset?: () => void;
}

export default function PioneerPassportCard({ entry, onReset }: PioneerPassportCardProps) {
  const shareText = encodeURIComponent(
    `Just secured my Solana Pioneer Whitelist spot for @${SITE_METADATA.twitterHandle}'s Capy Valley! ♨️🍊\n\nPioneer Pass #${String(
      entry.pioneerId
    ).padStart(4, '0')} verified on Solana. Follow @${SITE_METADATA.twitterHandle} and drop your Solana wallet below to get whitelisted:`
  );
  const shareUrl = encodeURIComponent('https://capyvalleysol.xyz/whitelist');

  return (
    <div className="bg-snow p-6 sm:p-8 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg max-w-xl mx-auto space-y-6 animate-bob">
      <div className="flex items-center justify-between pb-4 border-b-[2.5px] border-ink">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yuzu-gold" />
          <span className="text-lg font-black text-ink">
            VALLEY PIONEER PASSPORT
          </span>
        </div>
        <PixelBadge variant="solana" size="sm">
          SOLANA VERIFIED
        </PixelBadge>
      </div>

      <div className="p-6 bg-gradient-to-br from-sand via-cream to-onsen-light rounded-2xl border-[3px] border-ink shadow-brutal flex flex-col sm:flex-row items-center gap-6">
        <div className="w-28 h-28 rounded-xl bg-snow border-[2.5px] border-ink flex items-center justify-center p-2 shrink-0 shadow-brutal-sm">
          <CapyPixelRenderer
            head="yuzu"
            expression="star"
            bodyColor="#BA8C63"
            size={100}
            inWater={true}
          />
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <div className="text-xs font-black text-matcha uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Guaranteed Solana Pioneer Pass
          </div>
          <div className="text-3xl font-black text-ink">
            Pioneer #{String(entry.pioneerId).padStart(4, '0')}
          </div>
          <div className="font-mono text-xs font-black text-ink/70 bg-snow/80 px-2.5 py-1 rounded-lg border border-ink inline-block">
            {formatAddress(entry.walletAddress)}
          </div>
          <div className="text-xs text-ink/80 block font-black">
            Owner: @{entry.xHandle}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noreferrer"
          className="block w-full"
        >
          <BrutalButton
            variant="secondary"
            size="lg"
            className="w-full gap-2 text-sm sm:text-base font-black"
            soundType="chime"
          >
            <Share2 className="w-5 h-5" />
            Share on 𝕏 (Tagging @{SITE_METADATA.twitterHandle} for +25 FP)
          </BrutalButton>
        </a>

        <a
          href={SITE_METADATA.twitterFollowIntent}
          target="_blank"
          rel="noreferrer"
          className="block w-full"
        >
          <BrutalButton
            variant="outline"
            size="md"
            className="w-full gap-2 text-xs font-black"
          >
            <span>𝕏</span>
            Follow @{SITE_METADATA.twitterHandle} for Direct Mint Ping
            <ExternalLink className="w-3.5 h-3.5" />
          </BrutalButton>
        </a>

        {onReset && (
          <button
            onClick={onReset}
            className="w-full text-center text-xs text-ink/50 hover:text-ink transition-colors cursor-pointer pt-2 font-bold"
          >
            Register another Solana wallet address
          </button>
        )}
      </div>
    </div>
  );
}
