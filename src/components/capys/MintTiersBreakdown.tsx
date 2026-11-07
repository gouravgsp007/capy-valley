'use client';

import React from 'react';
import Link from 'next/link';
import BrutalCard from '../common/BrutalCard';
import BrutalButton from '../common/BrutalButton';
import PixelBadge from '../common/PixelBadge';
import { DROP_TIERS } from '@/lib/constants';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function MintTiersBreakdown() {
  return (
    <section className="py-16">
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <PixelBadge variant="yuzu" size="md">
            MINT STRUCTURE & ALLOCATIONS
          </PixelBadge>
          <h2 className="font-pixel text-3xl sm:text-4xl font-extrabold text-ink">
            Baby Capy Drop Day
          </h2>
          <p className="font-cozy text-ink/80 text-base">
            Fair distribution on Arbitrum & Base L2 with zero gas wars and guaranteed pioneer allocations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DROP_TIERS.map((tier) => (
            <BrutalCard
              key={tier.tier}
              hoverable
              headerBg={tier.highlight ? 'bg-yuzu' : 'bg-sand'}
              header={
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-base font-bold text-ink">{tier.tier}</span>
                  <PixelBadge
                    variant={tier.highlight ? 'coral' : 'snow'}
                    size="sm"
                  >
                    {tier.badge}
                  </PixelBadge>
                </div>
              }
              className={`flex flex-col justify-between ${
                tier.highlight ? 'ring-4 ring-yuzu shadow-brutal-lg -translate-y-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="space-y-1 pb-3 border-b-[2px] border-ink/10">
                  <div className="font-pixel text-2xl font-black text-ink">{tier.price}</div>
                  <div className="font-pixel text-xs text-ink/60 font-bold">
                    Supply Limit: {tier.supply} Capys
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs font-cozy text-ink/80 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-matcha shrink-0 mt-0.5" />
                  <span>{tier.perks}</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t-[2px] border-ink/10">
                <Link href="/whitelist" className="block w-full">
                  <BrutalButton
                    variant={tier.highlight ? 'primary' : 'outline'}
                    size="md"
                    className="w-full gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    Reserve Spot
                  </BrutalButton>
                </Link>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
