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
      title: 'Tap your Groves',
      desc: 'Baskets fill with golden yuzu fruit every minute. Tap a grove to deliver fresh citrus to the village market, then spend citrus on grove expansions up the cliff.',
      icon: '🌿',
      detail: 'Quick 2-minute daily check-in',
    },
    {
      num: '02',
      badge: 'WHILE YOU SLEEP',
      badgeVariant: 'yuzu' as const,
      title: 'Put a Capy to Work',
      desc: 'Without a Keeper, groves stop after 2 hours. Assign a Baby Capy or Grand Elder to watch over the springs and keep your harvest flowing for up to 24 hours.',
      icon: '🛁',
      detail: 'Automated 4h - 24h offline harvest',
    },
    {
      num: '03',
      badge: 'EVERY 24 HOURS',
      badgeVariant: 'onsen' as const,
      title: 'Harvest $CAPY',
      desc: 'Every day the public vault pays out to all valleys based on Farm Power. Claim tokens directly into your own Web3 wallet whenever you choose.',
      icon: '💰',
      detail: 'Direct non-custodial wallet payouts',
    },
    {
      num: '04',
      badge: 'FARM POWER BOOST',
      badgeVariant: 'coral' as const,
      title: 'Lock in the Hot Springs Barn',
      desc: 'Locking tokens in the Barn gives bonus Farm Power. Every doubling adds +10% power. Your tokens are returned in full when your lock expires.',
      icon: '🏛️',
      detail: 'Up to +100% boost multiplier',
    },
  ];

  return (
    <section id="how" className="py-20 px-4 lg:px-8 bg-sand/30 border-y-[3px] border-ink">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <PixelBadge variant="yuzu" size="md">
            COZY GAMEPLAY
          </PixelBadge>
          <h2 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            A few taps a day. <br />
            A valley that keeps going.
          </h2>
          <p className="font-cozy text-ink/80 text-lg">
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
                  <span className="font-pixel text-2xl font-black text-ink">{s.num}</span>
                  <PixelBadge variant={s.badgeVariant} size="sm">
                    {s.badge}
                  </PixelBadge>
                </div>
              }
            >
              <div className="space-y-4">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="font-pixel text-xl font-bold text-ink">{s.title}</h3>
                <p className="font-cozy text-sm text-ink/80 leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t-[2px] border-ink/15 font-pixel text-xs font-bold text-matcha">
                ✓ {s.detail}
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
