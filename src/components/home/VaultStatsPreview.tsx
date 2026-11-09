'use client';

import React from 'react';
import PixelBadge from '../common/PixelBadge';
import { Shield, Coins, Lock } from 'lucide-react';

export default function VaultStatsPreview() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-snow border-b-[3px] border-ink">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <PixelBadge variant="solana" size="md">
            TRANSPARENT SOLANA SPL VAULT
          </PixelBadge>
          <h2 className="text-3xl sm:text-4xl font-black text-ink">
            The game never mints out of thin air. <br />
            It pays from a fixed Solana public vault.
          </h2>
          <p className="text-ink/80 text-base font-bold">
            Unlike hyper-inflationary games, Capy Valley rewards flow exclusively from a dedicated Solana Program Public Reward Vault (SPL Token) verified on-chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-cream rounded-2xl border-[3px] border-ink shadow-brutal space-y-3">
            <div className="w-12 h-12 rounded-xl bg-yuzu border-[2px] border-ink flex items-center justify-center text-2xl shadow-brutal-sm">
              <Coins className="w-6 h-6 text-ink" />
            </div>
            <h3 className="text-xl font-black text-ink">Fixed SPL Supply</h3>
            <p className="text-sm text-ink/70 leading-relaxed font-bold">
              10,000,000 $CAPY SPL tokens allocated directly to the valley reward program on Solana. Payouts scale dynamically to active players, preventing sudden market dilution.
            </p>
          </div>

          <div className="p-6 bg-cream rounded-2xl border-[3px] border-ink shadow-brutal space-y-3">
            <div className="w-12 h-12 rounded-xl bg-solana-purple border-[2px] border-ink flex items-center justify-center text-2xl shadow-brutal-sm text-white">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-ink">In-Game Inventory Protection</h3>
            <p className="text-sm text-ink/70 leading-relaxed font-bold">
              When you lock tokens in the Barn for a Farm Power multiplier, tokens stay under your control. They unlock directly back into your game inventory when the lock duration completes.
            </p>
          </div>

          <div className="p-6 bg-cream rounded-2xl border-[3px] border-ink shadow-brutal space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#2ED573] border-[2px] border-ink flex items-center justify-center text-2xl shadow-brutal-sm text-white">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-ink">Non-Custodial In-Game Rewards</h3>
            <p className="text-sm text-ink/70 leading-relaxed font-bold">
              Harvested in-game items and tokens belong to your decentralized Solana account. Trading your Capy NFT on Magic Eden or Tensor never takes your accumulated in-game rewards with it.
            </p>
          </div>
        </div>

        {/* Gaming Entertainment Disclaimer for AdSense */}
        <div className="text-center pt-2">
          <p className="text-xs text-ink/60 font-bold max-w-xl mx-auto border border-ink/20 rounded-xl py-2 px-4 bg-sand/40">
            🎮 <strong>Disclaimer:</strong> Capy Valley is a casual digital game for entertainment. Farm Power and in-game $CAPY are virtual utility mechanics with no promised monetary value and do not constitute financial advice.
          </p>
        </div>
      </div>
    </section>
  );
}
