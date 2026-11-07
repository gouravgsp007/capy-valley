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
        return <Landmark className="w-5 h-5 text-coral" />;
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
          <h2 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            The Valley Roadmap
          </h2>
          <p className="font-cozy text-ink/80 text-lg">
            From the initial Pioneer whitelist to dynamic on-chain Baby Capy evolutions and community DAO governance.
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
                  <div className="absolute top-0 right-0 bg-yuzu text-ink font-pixel text-[11px] font-bold px-3 py-1 border-b-[2px] border-l-[2px] border-ink">
                    CURRENT
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-cream border-[2px] border-ink flex items-center justify-center shadow-brutal-sm">
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-pixel text-xs font-bold text-ink/60 uppercase">
                      {item.quarter}
                    </span>
                  </div>

                  <h3 className="font-pixel text-lg font-bold text-ink leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-cozy text-sm text-ink/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t-[2px] border-ink/10 flex items-center justify-between text-xs font-pixel font-bold">
                  <span className="text-ink/60">Milestone #{index + 1}</span>
                  <span
                    className={
                      isCompleted
                        ? 'text-matcha'
                        : isInProgress
                        ? 'text-yuzu-gold font-extrabold'
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
