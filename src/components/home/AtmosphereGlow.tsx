'use client';

import React from 'react';
import { Sun, Sunset, Moon } from 'lucide-react';
import { AtmosphereMode } from '@/lib/types';
import { sound } from '@/lib/audio';

interface AtmosphereGlowProps {
  mode: AtmosphereMode;
  onChange: (mode: AtmosphereMode) => void;
}

export default function AtmosphereGlow({ mode, onChange }: AtmosphereGlowProps) {
  const modes: { id: AtmosphereMode; label: string; icon: React.ReactNode; bg: string }[] = [
    { id: 'day', label: 'Sunny Mist', icon: <Sun className="w-3.5 h-3.5" />, bg: 'bg-[#FFF9ED]' },
    { id: 'sunset', label: 'Sunset Amber', icon: <Sunset className="w-3.5 h-3.5" />, bg: 'bg-[#FFE8D6]' },
    { id: 'night', label: 'Starlight Onsen', icon: <Moon className="w-3.5 h-3.5" />, bg: 'bg-[#E3EBF4]' },
  ];

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-snow border-[2.5px] border-ink rounded-xl shadow-brutal-sm">
      {modes.map((m) => {
        const isSelected = mode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => {
              sound.playBubblePop();
              onChange(m.id);
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-pixel text-xs font-bold transition-all cursor-pointer select-none ${
              isSelected
                ? 'bg-yuzu text-ink border-[2px] border-ink shadow-brutal-sm'
                : 'text-ink/60 hover:text-ink hover:bg-sand/40'
            }`}
          >
            {m.icon}
            <span className="hidden sm:inline">{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
