'use client';

import React from 'react';
import PixelBadge from '../common/PixelBadge';
import { Shield, Coins, Lock, Sparkles } from 'lucide-react';

export default function VaultStatsPreview() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-snow border-b-[3px] border-ink">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <PixelBadge variant="matcha" size="md">
            TRANSPARENT REWARD VAULT
          </PixelBadge>
          <h2 className="font-pixel text-3xl sm:text-4xl font-extrabold text-ink">
            The game never mints out of thin air. <br />
            It pays from a fixed public vault.
          </h2>
          <p className="font-cozy text-ink/80 text-base">
            Unlike hyper-inflationary games, Capy Valley rewards flow exclusively from a dedicated community reward vault deployed on-chain with timelock protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-cream rounded-2xl border-[3px] border-ink shadow-brutal space-y-3">
            <div className="w-12 h-12 rounded-xl bg-yuzu border-[2px] border-ink flex items-center justify-center text-2xl shadow-brutal-sm">
              <Coins className="w-6 h-6 text-ink" />
            </div>
            <h3 className="font-pixel text-xl font-bold text-ink">Fixed Reward Supply</h3>
            <p className="font-cozy text-sm text-ink/70 leading-relaxed">
              10,000,000 $CAPY allocated directly to the valley reward vault. Payouts scale dynamically to match active players, preventing sudden market dilution.
            </p>
          </div>

          <div className="p-6 bg-cream rounded-2xl border-[3px] border-ink shadow-brutal space-y-3">
            <div className="w-12 h-12 rounded-xl bg-onsen border-[2px] border-ink flex items-center justify-center text-2xl shadow-brutal-sm text-white">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-pixel text-xl font-bold text-ink">Principal Return Guarantee</h3>
            <p className="font-cozy text-sm text-ink/70 leading-relaxed">
              When you lock tokens in the Barn for a Farm Power multiplier, your tokens never vanish. They unlock and return 100% to your wallet when the lock duration ends.
            </p>
          </div>

          <div className="p-6 bg-cream rounded-2xl border-[3px] border-ink shadow-brutal space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#2ED573] border-[2px] border-ink flex items-center justify-center text-2xl shadow-brutal-sm text-white">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-pixel text-xl font-bold text-ink">Non-Custodial Earnings</h3>
            <p className="font-cozy text-sm text-ink/70 leading-relaxed">
              Your harvested earnings are held in your game account contract. Selling or trading an NFT never takes your accrued earnings with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
