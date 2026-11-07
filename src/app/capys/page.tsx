'use client';

import React from 'react';
import TraitCustomizer from '@/components/capys/TraitCustomizer';
import GrowthStagesGrid from '@/components/capys/GrowthStagesGrid';
import MintTiersBreakdown from '@/components/capys/MintTiersBreakdown';
import PixelBadge from '@/components/common/PixelBadge';
import AtmosphereCanvas from '@/components/canvas/AtmosphereCanvas';

export default function CapysPage() {
  return (
    <div className="min-h-screen bg-[#FFF9ED] py-12 px-4 lg:px-8">
      <AtmosphereCanvas mode="day" />
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <PixelBadge variant="solana" size="md">
            BABY CAPYS ON SOLANA
          </PixelBadge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight">
            Baby Capys. <br />
            Born small, raised by you.
          </h1>
          <p className="text-lg text-ink/80 leading-relaxed font-bold">
            10,000 dynamic Solana Core NFT companions across six distinct onsen trait layers. They are your farm companions, your offline Keepers, and your key to higher daily $CAPY vault allocations.
          </p>
        </div>

        {/* Trait Customizer Lab */}
        <TraitCustomizer />

        {/* Growth Stages */}
        <GrowthStagesGrid />

        {/* Mint Tiers Breakdown */}
        <MintTiersBreakdown />
      </div>
    </div>
  );
}
