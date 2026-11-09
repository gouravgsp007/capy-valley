'use client';

import React from 'react';
import PixelBadge from '../common/PixelBadge';
import { BookOpen, Sparkles, Sun, Citrus, ShieldCheck } from 'lucide-react';

export default function ValleyLoreGuide() {
  return (
    <section id="lore" className="py-20 px-4 lg:px-8 bg-[#FFFDF7] border-b-[3px] border-ink">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <PixelBadge variant="yuzu" size="md">
            VALLEY CHRONICLES & GAME GUIDE
          </PixelBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            The Legend of the Mountain Onsen
          </h2>
          <p className="text-ink/80 text-base sm:text-lg font-bold leading-relaxed">
            A comprehensive guide to raising Baby Capybaras, managing hillside groves, and understanding decentralized idle game mechanics.
          </p>
        </div>

        {/* Narrative Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1: Origin & Mountain Springs */}
          <article className="p-7 rounded-3xl bg-snow border-[3.5px] border-ink shadow-brutal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-yuzu border-[2px] border-ink flex items-center justify-center text-xl shadow-brutal-sm">
              <Sun className="w-6 h-6 text-ink" />
            </div>
            <h3 className="text-2xl font-black text-ink">
              1. The Origin of the Warm Springs
            </h3>
            <p className="text-ink/80 text-sm leading-relaxed font-bold">
              Nestled high between the volcanic ridges of the Solana highland lies Capy Valley, a serene sanctuary naturally heated by subterranean thermal vents. Centuries ago, wandering capybaras discovered that floating fresh golden yuzu citrus in the mineral-rich waters created a soothing balm. In our idle simulation, each bath level you construct enhances the natural relaxation rate of your capybara companions, directly boosting their energy and daily productivity.
            </p>
          </article>

          {/* Article 2: Yuzu Groves & Harvest Cycles */}
          <article className="p-7 rounded-3xl bg-snow border-[3.5px] border-ink shadow-brutal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-matcha-light border-[2px] border-ink flex items-center justify-center text-xl shadow-brutal-sm">
              <Citrus className="w-6 h-6 text-matcha-dark" />
            </div>
            <h3 className="text-2xl font-black text-ink">
              2. Cultivating Hillside Yuzu Groves
            </h3>
            <p className="text-ink/80 text-sm leading-relaxed font-bold">
              Yuzu trees are the lifeblood of the valley economy. Players water their groves daily, collecting ripe citrus that feeds into the community juicer. As your trees mature through seasonal rainfall cycles, they yield rarer variants—ranging from crisp mountain citrus to radiant golden fruit. Stacking grove output alongside active soaking sessions multiplies your overall Farm Power, establishing a steady harvest routine.
            </p>
          </article>

          {/* Article 3: Keepers & Offline Protection */}
          <article className="p-7 rounded-3xl bg-snow border-[3.5px] border-ink shadow-brutal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-onsen-light border-[2px] border-ink flex items-center justify-center text-xl shadow-brutal-sm">
              <ShieldCheck className="w-6 h-6 text-onsen-deep" />
            </div>
            <h3 className="text-2xl font-black text-ink">
              3. Companion Keepers & Rest Mechanics
            </h3>
            <p className="text-ink/80 text-sm leading-relaxed font-bold">
              No valley caretaker can stay online twenty-four hours a day. Baby Capys evolve from gentle hatchlings into dedicated Keepers. While you are away, your assigned Keeper attends the groves and keeps the hot spring fires burning. Unassigned springs slow down after two hours of inactivity, whereas an experienced Elder Capy companion maintains optimal grove production for up to twelve hours uninterrupted.
            </p>
          </article>

          {/* Article 4: Community Vault Architecture */}
          <article className="p-7 rounded-3xl bg-snow border-[3.5px] border-ink shadow-brutal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sand border-[2px] border-ink flex items-center justify-center text-xl shadow-brutal-sm">
              <Sparkles className="w-6 h-6 text-yuzu-gold" />
            </div>
            <h3 className="text-2xl font-black text-ink">
              4. Fair Reward Vault Distribution
            </h3>
            <p className="text-ink/80 text-sm leading-relaxed font-bold">
              Traditional games frequently suffer from runaway token inflation that devalues player effort over time. Capy Valley resolves this through a fixed, program-controlled public reward vault on Solana. Daily distributions are calculated proportionally based on aggregate Farm Power across all active valleys, ensuring transparent allocations and rewarding consistent community participation.
            </p>
          </article>
        </div>

        {/* Editorial Footnote for Search & AdSense Bots */}
        <div className="p-6 rounded-2xl bg-cream border-[2.5px] border-ink text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-ink font-black text-sm">
            <BookOpen className="w-4 h-4 text-yuzu-gold" />
            <span>Capy Valley Knowledge Base & Documentation</span>
          </div>
          <p className="text-xs text-ink/70 font-bold max-w-2xl mx-auto">
            This guide is maintained by the Capy Valley community lead (@shreyahunt). All gameplay mechanics, formulas, and digital collectibles are subject to on-chain governance and community verification on the Solana network.
          </p>
        </div>
      </div>
    </section>
  );
}
