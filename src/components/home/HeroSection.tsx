'use client';

import React from 'react';
import Link from 'next/link';
import BrutalButton from '../common/BrutalButton';
import PixelBadge from '../common/PixelBadge';
import CapyPixelRenderer from '../canvas/CapyPixelRenderer';
import AtmosphereGlow from './AtmosphereGlow';
import { AtmosphereMode } from '@/lib/types';
import { Sparkles, ArrowRight, Heart, Zap } from 'lucide-react';

interface HeroSectionProps {
  atmosphere: AtmosphereMode;
  onAtmosphereChange: (mode: AtmosphereMode) => void;
}

export default function HeroSection({ atmosphere, onAtmosphereChange }: HeroSectionProps) {
  return (
    <section id="valley" className="relative pt-8 pb-16 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Announcement Bar & Glow Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-snow border-[2px] border-ink shadow-brutal-sm text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-solana-green animate-ping" />
            <span className="text-ink">SOLANA PIONEER WHITELIST IS LIVE</span>
            <span className="text-ink/40">•</span>
            <span className="text-matcha font-extrabold">1,200 FREE GTD SPOTS</span>
          </div>

          <AtmosphereGlow mode={atmosphere} onChange={onAtmosphereChange} />
        </div>

        {/* Main Grid: Headline & Interactive Pixel Hero Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <PixelBadge variant="solana" size="sm">
                ⚡ SOLANA IDLE ON-CHAIN GAMING
              </PixelBadge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-[1.08] tracking-tight">
              Raise Capys. <br />
              Grow the valley. <br />
              Harvest <span className="bg-yuzu px-2 py-0.5 rounded-lg border-[3px] border-ink shadow-brutal-sm inline-block rotate-1">$CAPY</span>.
            </h1>

            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed max-w-xl font-bold">
              A cozy idle farm on Solana where your Capybaras run the hillside groves. Play a few minutes a day, earn your share of a community public reward vault, and watch your Baby Capy grow with instant, sub-cent Solana transactions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/whitelist">
                <BrutalButton variant="primary" size="lg" soundType="success" className="gap-2">
                  <Sparkles className="w-5 h-5" />
                  Join Solana Whitelist
                  <ArrowRight className="w-5 h-5 ml-1" />
                </BrutalButton>
              </Link>
              <Link href="/capys">
                <BrutalButton variant="outline" size="lg" soundType="pop">
                  Meet The Capys 🍊
                </BrutalButton>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t-[2.5px] border-ink/15 max-w-lg">
              <div className="p-3 bg-snow rounded-xl border-[2px] border-ink shadow-brutal-sm">
                <div className="text-xs text-ink/60 font-bold uppercase">Public Vault</div>
                <div className="text-lg sm:text-xl font-black text-ink">5.4M $CAPY</div>
              </div>
              <div className="p-3 bg-snow rounded-xl border-[2px] border-ink shadow-brutal-sm">
                <div className="text-xs text-ink/60 font-bold uppercase">Solana Speed</div>
                <div className="text-lg sm:text-xl font-black text-solana-purple flex items-center gap-1">
                  <Zap className="w-4 h-4" /> 400ms
                </div>
              </div>
              <div className="p-3 bg-snow rounded-xl border-[2px] border-ink shadow-brutal-sm">
                <div className="text-xs text-ink/60 font-bold uppercase">Max Multiplier</div>
                <div className="text-lg sm:text-xl font-black text-[#F77F00]">2.20x Yield</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Pixel Diorama Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 bg-snow rounded-3xl border-[3.5px] border-ink shadow-brutal-lg">
              {/* Badge header */}
              <div className="flex items-center justify-between pb-4 border-b-[2.5px] border-ink mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E74C3C] border border-ink" />
                  <span className="w-3 h-3 rounded-full bg-yuzu border border-ink" />
                  <span className="w-3 h-3 rounded-full bg-solana-green border border-ink" />
                  <span className="text-xs font-black text-ink/70 ml-2">SOLANA ONSEN GROVE #01</span>
                </div>
                <span className="text-xs font-black px-2 py-0.5 rounded bg-sand border border-ink">
                  SOLANA CORE
                </span>
              </div>

              {/* Pixel Diorama Scene */}
              <div className="relative rounded-2xl bg-gradient-to-b from-onsen-light via-[#FDECC4] to-[#C8D6AF] p-8 border-[2.5px] border-ink overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                {/* Floating Onsen Leaves and steam */}
                <div className="absolute top-3 left-4 text-xs font-bold text-ink/70 bg-snow/80 px-2 py-1 rounded border border-ink">
                  ♨️ 41°C Onsen
                </div>
                <div className="absolute top-3 right-4 text-xs font-bold text-[#E67E22] bg-snow/80 px-2 py-1 rounded border border-ink flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-[#E67E22]" /> Happiness 100%
                </div>

                {/* Animated Capybara in hot spring bath */}
                <div className="animate-bob relative z-10">
                  <CapyPixelRenderer
                    head="yuzu"
                    expression="zen"
                    bodyColor="#BA8C63"
                    size={200}
                    inWater={true}
                  />
                </div>

                {/* Floating Leaf / Harvest notification */}
                <div className="absolute bottom-3 bg-snow px-3.5 py-1.5 rounded-xl border-[2px] border-ink shadow-brutal-sm text-xs font-black text-ink flex items-center gap-2">
                  <span>🍊 Yuzu Harvested:</span>
                  <span className="text-matcha font-black">+142 $CAPY/hr</span>
                </div>
              </div>

              {/* Diorama Footer Info */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold text-ink/80">
                <span>Keeper: Grand Elder Capy</span>
                <span className="text-solana-purple font-black">Solana Rent: Exempt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
