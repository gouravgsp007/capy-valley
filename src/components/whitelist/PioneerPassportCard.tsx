'use client';

import React from 'react';
import PixelBadge from '../common/PixelBadge';
import BrutalButton from '../common/BrutalButton';
import CapyPixelRenderer from '../canvas/CapyPixelRenderer';
import { WhitelistEntry } from '@/lib/types';
import { formatAddress } from '@/lib/evm';
import { Share2, Sparkles, CheckCircle2 } from 'lucide-react';

interface PioneerPassportCardProps {
  entry: WhitelistEntry;
  onReset?: () => void;
}

export default function PioneerPassportCard({ entry, onReset }: PioneerPassportCardProps) {
  const shareText = encodeURIComponent(
    `Just secured my Pioneer Whitelist spot for @CapyValleyGame! ♨️🍊\n\nPioneer Pass #${String(
      entry.pioneerId
    ).padStart(4, '0')} verified. Raising dynamic Baby Capys and harvesting $CAPY.\n\nJoin the Hot Springs:`
  );
  const shareUrl = encodeURIComponent('https://capyvalley.xyz/whitelist');

  return (
    <div className="bg-snow p-6 sm:p-8 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg max-w-xl mx-auto space-y-6 animate-bob">
      <div className="flex items-center justify-between pb-4 border-b-[2.5px] border-ink">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yuzu-gold" />
          <span className="font-pixel text-lg font-bold text-ink">
            VALLEY PIONEER PASSPORT
          </span>
        </div>
        <PixelBadge variant="yuzu" size="sm">
          VERIFIED
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
          <div className="font-pixel text-xs font-bold text-matcha uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Guaranteed Pioneer Pass
          </div>
          <div className="font-pixel text-3xl font-extrabold text-ink">
            Pioneer #{String(entry.pioneerId).padStart(4, '0')}
          </div>
          <div className="font-mono text-xs font-bold text-ink/70 bg-snow/80 px-2.5 py-1 rounded-lg border border-ink inline-block">
            {formatAddress(entry.walletAddress)}
          </div>
          <div className="font-pixel text-xs text-ink/80 block">
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
            className="w-full gap-2"
            soundType="chime"
          >
            <Share2 className="w-5 h-5" />
            Share Passport on 𝕏 to Claim +25 FP Bonus
          </BrutalButton>
        </a>

        {onReset && (
          <button
            onClick={onReset}
            className="w-full text-center font-pixel text-xs text-ink/50 hover:text-ink transition-colors cursor-pointer pt-2"
          >
            Register another wallet address
          </button>
        )}
      </div>
    </div>
  );
}
