'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import GameLoopSection from '@/components/home/GameLoopSection';
import FarmPowerCalculator from '@/components/home/FarmPowerCalculator';
import VaultStatsPreview from '@/components/home/VaultStatsPreview';
import RoadmapTimeline from '@/components/home/RoadmapTimeline';
import FaqAccordion from '@/components/home/FaqAccordion';
import AtmosphereCanvas from '@/components/canvas/AtmosphereCanvas';
import { AtmosphereMode } from '@/lib/types';

export default function HomePage() {
  const [atmosphere, setAtmosphere] = useState<AtmosphereMode>('day');

  const bgClasses = {
    day: 'bg-[#FFF9ED]',
    sunset: 'bg-[#FFE8D6]',
    night: 'bg-[#E7EEF5]',
  }[atmosphere];

  return (
    <div className={`transition-colors duration-700 min-h-screen ${bgClasses}`}>
      <AtmosphereCanvas mode={atmosphere} />
      <HeroSection atmosphere={atmosphere} onAtmosphereChange={setAtmosphere} />
      <GameLoopSection />
      <FarmPowerCalculator />
      <VaultStatsPreview />
      <RoadmapTimeline />
      <FaqAccordion />
    </div>
  );
}
