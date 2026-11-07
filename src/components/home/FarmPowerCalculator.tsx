'use client';

import React, { useState, useMemo } from 'react';
import BrutalCard from '../common/BrutalCard';
import PixelBadge from '../common/PixelBadge';
import { calculateFarmYield } from '@/lib/calculator';
import { sound } from '@/lib/audio';
import { Zap, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

export default function FarmPowerCalculator() {
  const [capyCount, setCapyCount] = useState<number>(3);
  const [springBathLevel, setSpringBathLevel] = useState<number>(2);
  const [harvestStreakDays, setHarvestStreakDays] = useState<number>(7);
  const [lockedTokensUsd, setLockedTokensUsd] = useState<number>(100);

  const yieldStats = useMemo(() => {
    return calculateFarmYield({
      capyCount,
      springBathLevel,
      harvestStreakDays,
      lockedTokensUsd,
    });
  }, [capyCount, springBathLevel, harvestStreakDays, lockedTokensUsd]);

  const lastSoundTimeRef = React.useRef<number>(0);

  const handleSliderChange = (setter: (val: number) => void, val: number) => {
    setter(val);
    const now = Date.now();
    // Throttle sound to once every 120ms to prevent audio context node flooding
    if (now - lastSoundTimeRef.current > 120) {
      sound.playBubblePop();
      lastSoundTimeRef.current = now;
    }
  };

  return (
    <section id="vault" className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <PixelBadge variant="onsen" size="md">
            TOKENOMICS & YIELD SIMULATOR
          </PixelBadge>
          <h2 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Calculate Your Valley Farm Power
          </h2>
          <p className="font-cozy text-ink/80 text-lg">
            See how your Baby Capys, bath upgrades, and hot spring locks boost your share of the 50,000 $CAPY daily public vault.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-snow p-6 sm:p-8 rounded-3xl border-[3px] border-ink shadow-brutal-lg space-y-6">
            <h3 className="font-pixel text-xl font-bold text-ink border-b-[2px] border-ink pb-3 flex items-center justify-between">
              <span>Valley Configuration</span>
              <span className="text-xs text-ink/60 font-cozy">Adjust sliders in real time</span>
            </h3>

            {/* Slider 1: Capy Count */}
            <div className="space-y-2">
              <div className="flex justify-between font-pixel text-sm font-bold text-ink">
                <span>Working Capys in Squad:</span>
                <span className="text-matcha bg-sand px-2 py-0.5 rounded border border-ink">
                  {capyCount} Capy{capyCount > 1 ? 's' : ''}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={capyCount}
                onChange={(e) => handleSliderChange(setCapyCount, Number(e.target.value))}
                className="w-full h-3 bg-cream rounded-lg appearance-none cursor-pointer border-[2px] border-ink accent-yuzu"
              />
              <div className="flex justify-between text-xs font-pixel text-ink/50">
                <span>1 Capy (Solitary)</span>
                <span>8 Capys (Full Squad)</span>
              </div>
            </div>

            {/* Slider 2: Onsen Bath Level */}
            <div className="space-y-2">
              <div className="flex justify-between font-pixel text-sm font-bold text-ink">
                <span>Onsen Bathhouse Tier:</span>
                <span className="text-onsen-deep bg-sand px-2 py-0.5 rounded border border-ink">
                  Tier {springBathLevel} (+{(springBathLevel - 1) * 20}%)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={springBathLevel}
                onChange={(e) => handleSliderChange(setSpringBathLevel, Number(e.target.value))}
                className="w-full h-3 bg-cream rounded-lg appearance-none cursor-pointer border-[2px] border-ink accent-onsen"
              />
              <div className="flex justify-between text-xs font-pixel text-ink/50">
                <span>Tier 1 (Wooden Tub)</span>
                <span>Tier 5 (Imperial Springs)</span>
              </div>
            </div>

            {/* Slider 3: Daily Streak */}
            <div className="space-y-2">
              <div className="flex justify-between font-pixel text-sm font-bold text-ink">
                <span>Daily Harvest Streak:</span>
                <span className="text-[#E67E22] bg-sand px-2 py-0.5 rounded border border-ink">
                  {harvestStreakDays} Days (+{Math.min(30, harvestStreakDays * 2)}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={harvestStreakDays}
                onChange={(e) => handleSliderChange(setHarvestStreakDays, Number(e.target.value))}
                className="w-full h-3 bg-cream rounded-lg appearance-none cursor-pointer border-[2px] border-ink accent-coral"
              />
              <div className="flex justify-between text-xs font-pixel text-ink/50">
                <span>0 Days</span>
                <span>30 Days (Max +30%)</span>
              </div>
            </div>

            {/* Slider 4: Locked in Barn */}
            <div className="space-y-2">
              <div className="flex justify-between font-pixel text-sm font-bold text-ink">
                <span>Barn Lock Commitment:</span>
                <span className="text-ink bg-sand px-2 py-0.5 rounded border border-ink">
                  ${lockedTokensUsd} USD (+{Math.min(100, Math.round((lockedTokensUsd / 50) * 10))}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                step="25"
                value={lockedTokensUsd}
                onChange={(e) => handleSliderChange(setLockedTokensUsd, Number(e.target.value))}
                className="w-full h-3 bg-cream rounded-lg appearance-none cursor-pointer border-[2px] border-ink accent-matcha"
              />
              <div className="flex justify-between text-xs font-pixel text-ink/50">
                <span>$0 (Free player)</span>
                <span>$500 (Max Boost)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 space-y-4">
            <BrutalCard
              header="PROJECTED VAULT HARVEST"
              headerBg="bg-yuzu"
              className="bg-cream"
            >
              <div className="space-y-5">
                {/* Total Farm Power */}
                <div className="p-4 bg-snow rounded-2xl border-[2.5px] border-ink shadow-brutal-sm">
                  <div className="flex items-center justify-between text-xs font-pixel font-bold text-ink/60 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-yuzu-gold" />
                      TOTAL FARM POWER
                    </span>
                    <span className="text-matcha font-extrabold">Active Score</span>
                  </div>
                  <div className="font-pixel text-4xl font-extrabold text-ink">
                    {yieldStats.farmPower.toLocaleString()}{' '}
                    <span className="text-sm font-bold text-ink/60">FP</span>
                  </div>
                </div>

                {/* Projected Earnings */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 bg-snow rounded-xl border-[2px] border-ink shadow-brutal-sm">
                    <div className="text-xs font-pixel font-bold text-ink/60">Daily Yield</div>
                    <div className="font-pixel text-2xl font-extrabold text-matcha">
                      ~{yieldStats.dailyCapyYield.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-pixel text-ink/50">$CAPY / day</div>
                  </div>

                  <div className="p-3.5 bg-snow rounded-xl border-[2px] border-ink shadow-brutal-sm">
                    <div className="text-xs font-pixel font-bold text-ink/60">Monthly Yield</div>
                    <div className="font-pixel text-2xl font-extrabold text-onsen-deep">
                      ~{yieldStats.estimatedMonthlyCapy.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-pixel text-ink/50">$CAPY / mo</div>
                  </div>
                </div>

                {/* Vault share & Offline Keeper */}
                <div className="space-y-2 pt-2 border-t-[2px] border-ink/15 font-pixel text-xs">
                  <div className="flex items-center justify-between text-ink/80">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-yuzu" />
                      Public Vault Share:
                    </span>
                    <span className="font-extrabold text-ink">{yieldStats.vaultSharePercent}% of pool</span>
                  </div>

                  <div className="flex items-center justify-between text-ink/80">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-onsen" />
                      Keeper Sleep Protection:
                    </span>
                    <span className="font-extrabold text-ink">{yieldStats.keeperOfflineHours} Hours</span>
                  </div>

                  <div className="flex items-center justify-between text-ink/80">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-matcha" />
                      Fair Play Protection:
                    </span>
                    <span className="font-extrabold text-matcha">Verified 1-Wallet Rule</span>
                  </div>
                </div>
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </section>
  );
}
