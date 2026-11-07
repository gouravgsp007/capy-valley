'use client';

import React from 'react';
import PixelBadge from '../common/PixelBadge';
import { ROADMAP_ITEMS } from '@/lib/constants';
import { Sparkles, Award, Waves, Landmark } from 'lucide-react';

export default function RoadmapTimeline() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-yuzu-gold" />;
      case 'Award':
        return <Award className="w-5 h-5 text-matcha" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-onsen" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-solana-purple" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-sand/20 border-b-[3px] border-ink">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <PixelBadge variant="yuzu" size="md">
            PROJECT HORIZONS
          </PixelBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
            The Solana Valley Roadmap
          </h2>
          <p className="text-ink/80 text-lg font-bold">
            From the initial Solana Pioneer whitelist to dynamic Metaplex / Solana Core Baby Capy evolutions and community Realms DAO governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_ITEMS.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in-progress';

            return (
              <div
                key={item.quarter}
                className="p-6 bg-snow rounded-2xl border-[3px] border-ink shadow-brutal flex flex-col justify-between relative overflow-hidden"
              >
                {isInProgress && (
                  <div className="absolute top-0 right-0 bg-yuzu text-ink text-[11px] font-black px-3 py-1 border-b-[2px] border-l-[2px] border-ink">
                    CURRENT
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-cream border-[2px] border-ink flex items-center justify-center shadow-brutal-sm">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-black text-ink/60 uppercase">
                      {item.quarter}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-ink leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink/70 leading-relaxed font-bold">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t-[2px] border-ink/10 flex items-center justify-between text-xs font-black">
                  <span className="text-ink/60">Milestone #{index + 1}</span>
                  <span
                    className={
                      isCompleted
                        ? 'text-matcha'
                        : isInProgress
                        ? 'text-yuzu-gold font-black'
                        : 'text-ink/40'
                    }
                  >
                    {isCompleted ? '✓ Completed' : isInProgress ? '● In Progress' : '○ Upcoming'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
