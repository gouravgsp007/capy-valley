'use client';

import React, { useState, useEffect } from 'react';
import BrutalButton from './BrutalButton';
import PixelBadge from './PixelBadge';
import { SITE_METADATA } from '@/lib/constants';
import { Sparkles, Gift, CheckCircle, ExternalLink, Users } from 'lucide-react';
import { sound } from '@/lib/audio';

export default function TwitterFollowBanner() {
  const [fomoIndex, setFomoIndex] = useState(0);

  const fomoTicker = [
    { handle: 'phantom_whale', time: '1m ago', action: 'followed @shreyahunt & secured GTD spot' },
    { handle: 'solana_queen', time: '3m ago', action: 'followed @shreyahunt & claimed +500 FP' },
    { handle: 'capy_degen', time: '5m ago', action: 'retweeted @shreyahunt pinned trailer' },
    { handle: 'zen_master', time: '7m ago', action: 'followed @shreyahunt for Pioneer Pass' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFomoIndex((prev) => (prev + 1) % fomoTicker.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [fomoTicker.length]);

  const handleFollowClick = () => {
    sound.playSuccess();
    window.open(SITE_METADATA.twitterFollowIntent, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-sand via-[#FFE0B2] to-[#FFF3E0] rounded-3xl border-[3.5px] border-ink p-6 sm:p-10 shadow-brutal-lg relative overflow-hidden">
          {/* Background Badge Watermark */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none text-9xl font-black select-none">
            𝕏
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Offer & Social Proof */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <PixelBadge variant="coral" size="sm">
                  🎁 COMMUNITY FOLLOWER AIRDROP
                </PixelBadge>
                <span className="text-xs font-black text-ink/70 bg-snow/80 px-2.5 py-1 rounded-lg border border-ink flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-solana-purple" />
                  Official Host: @{SITE_METADATA.twitterHandle}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ink leading-tight">
                Follow <span className="underline decoration-yuzu-gold decoration-[4px]">@{SITE_METADATA.twitterHandle}</span> on 𝕏 for <br className="hidden sm:inline" />
                Guaranteed Mint & 50 SOL Giveaway Entry!
              </h2>

              <p className="text-base sm:text-lg text-ink/80 font-bold max-w-2xl leading-relaxed">
                We are rewarding our early Solana pioneers! Follow our lead founder on 𝕏 to lock in your Free Claim Pioneer Pass, unlock +25% permanent in-game Farm Power, and qualify for our 50 SOL community drop.
              </p>

              {/* Live FOMO Activity Ticker */}
              <div className="inline-flex items-center gap-2 bg-snow/90 px-3.5 py-1.5 rounded-xl border-[2px] border-ink text-xs font-bold shadow-brutal-sm">
                <span className="w-2 h-2 rounded-full bg-solana-green animate-ping shrink-0" />
                <span className="text-ink font-black">@{fomoTicker[fomoIndex].handle}</span>
                <span className="text-ink/70">{fomoTicker[fomoIndex].action}</span>
                <span className="text-ink/40 font-mono">({fomoTicker[fomoIndex].time})</span>
              </div>
            </div>

            {/* Right Column: High-Converting CTA Box */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-stretch gap-3">
              <div className="bg-snow p-5 rounded-2xl border-[3px] border-ink shadow-brutal text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-yuzu border-[2px] border-ink flex items-center justify-center text-2xl mx-auto shadow-brutal-sm">
                  <Gift className="w-6 h-6 text-ink" />
                </div>
                <div className="text-xs font-black text-matcha uppercase tracking-wider">
                  Instant Whitelist Unlock
                </div>
                <div className="text-xl font-black text-ink">
                  1-Click Follow Intent
                </div>

                <BrutalButton
                  variant="primary"
                  size="lg"
                  onClick={handleFollowClick}
                  soundType="success"
                  className="w-full gap-2 text-base font-black shadow-brutal-lg"
                >
                  <span>𝕏</span>
                  Follow @{SITE_METADATA.twitterHandle}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </BrutalButton>

                <div className="text-[11px] font-black text-ink/60 flex items-center justify-center gap-1.5 pt-1">
                  <CheckCircle className="w-3.5 h-3.5 text-matcha" />
                  Opens official Twitter / 𝕏 modal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
