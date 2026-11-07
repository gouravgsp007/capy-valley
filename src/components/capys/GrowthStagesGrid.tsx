'use client';

import React from 'react';
import BrutalCard from '../common/BrutalCard';
import PixelBadge from '../common/PixelBadge';
import { GROWTH_STAGES } from '@/lib/constants';
import CapyPixelRenderer from '../canvas/CapyPixelRenderer';

export default function GrowthStagesGrid() {
  const headByStage = ['yuzu', 'flower', 'towel', 'frog'];
  const expressionByStage = ['zen', 'star', 'munch', 'shades'];

  return (
    <section className="py-16">
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <PixelBadge variant="onsen" size="md">
            EVOLVING NFT MECHANICS
          </PixelBadge>
          <h2 className="font-pixel text-3xl sm:text-4xl font-extrabold text-ink">
            Raised, Not Just Stored in a Wallet.
          </h2>
          <p className="font-cozy text-ink/80 text-base">
            Baby Capys grow up as they soak in your onsen springs and work in your groves. Each stage increases offline duration and multiplies your Farm Power.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROWTH_STAGES.map((s, idx) => (
            <BrutalCard
              key={s.stage}
              hoverable
              header={
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-base font-bold text-ink">
                    Stage {idx + 1}: {s.stage}
                  </span>
                  <span className="font-pixel text-xs bg-snow px-2 py-0.5 rounded border border-ink">
                    {s.multiplier}
                  </span>
                </div>
              }
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-28 h-28 rounded-xl bg-sand/40 border-[2px] border-ink flex items-center justify-center p-2">
                  <CapyPixelRenderer
                    head={headByStage[idx]}
                    expression={expressionByStage[idx]}
                    bodyColor={s.avatarColor}
                    size={100}
                    inWater={true}
                  />
                </div>

                <div className="text-center space-y-2">
                  <div className="font-pixel text-xs font-bold text-matcha uppercase">
                    Timeline: {s.ageDays}
                  </div>
                  <p className="font-cozy text-xs text-ink/70 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="w-full pt-3 border-t-[2px] border-ink/10 flex items-center justify-between font-pixel text-xs font-bold text-ink/80">
                  <span>Offline Keeper:</span>
                  <span className="text-onsen-deep font-extrabold">{s.keeperHours} Hours</span>
                </div>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
