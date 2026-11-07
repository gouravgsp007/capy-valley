'use client';

import React from 'react';
import BrutalCard from '../common/BrutalCard';
import PixelBadge from '../common/PixelBadge';

export default function GameLoopSection() {
  const steps = [
    {
      num: '01',
      badge: 'EVERY VISIT',
      badgeVariant: 'matcha' as const,
      title: 'Tap your groves',
      desc: 'Baskets fill with golden yuzu fruit every minute. Tap a grove to deliver fresh citrus to the village market. With Solana 400ms speeds, every interaction is instant and feels like a native local game.',
      icon: '🌿',
      detail: 'Quick 2-minute daily check-in',
    },
    {
      num: '02',
      badge: 'WHILE YOU SLEEP',
      badgeVariant: 'yuzu' as const,
      title: 'Put a Capy to work',
      desc: 'Without a Keeper, groves stop after 2 hours. Assign a Baby Capy or Grand Elder to watch over the springs and keep your harvest flowing for up to 24 hours.',
      icon: '🛁',
      detail: 'Automated 4h - 24h offline harvest',
    },
    {
      num: '03',
      badge: 'EVERY 24 HOURS',
      badgeVariant: 'onsen' as const,
      title: 'Harvest $CAPY',
      desc: 'Every day the public Solana SPL vault pays out to all valleys based on Farm Power. Claim tokens directly into your Phantom or Solflare wallet whenever you choose.',
      icon: '💰',
      detail: 'Instant non-custodial wallet payouts',
    },
    {
      num: '04',
      badge: 'FARM POWER BOOST',
      badgeVariant: 'coral' as const,
      title: 'Lock in the Hot Springs Barn',
      desc: 'Locking tokens in the Barn gives bonus Farm Power. Every doubling adds +10% power. Your tokens are returned 100% when your lock expires.',
      icon: '🏛️',
      detail: 'Up to +100% boost multiplier',
    },
  ];

  return (
    <section id="how" className="py-20 px-4 lg:px-8 bg-sand/30 border-y-[3px] border-ink">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <PixelBadge variant="solana" size="md">
            COZY SOLANA GAMEPLAY
          </PixelBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
            A few taps a day. <br />
            A valley that keeps going.
          </h2>
          <p className="text-ink/80 text-lg font-bold">
            Ten terraced hot spring groves, a market at the foot of the hill, and chill Capybaras carrying yuzu fruit in between. You decide what to grow next.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <BrutalCard
              key={s.num}
              hoverable
              className="flex flex-col justify-between"
              header={
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-ink">{s.num}</span>
                  <PixelBadge variant={s.badgeVariant} size="sm">
                    {s.badge}
                  </PixelBadge>
                </div>
              }
            >
              <div className="space-y-4">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="text-xl font-black text-ink">{s.title}</h3>
                <p className="text-sm text-ink/80 leading-relaxed font-bold">{s.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t-[2px] border-ink/15 text-xs font-black text-matcha">
                ✓ {s.detail}
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
