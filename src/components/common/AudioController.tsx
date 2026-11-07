'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '@/lib/audio';

export default function AudioController() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(sound.getMuted());
  }, []);

  const toggleSound = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <button
      onClick={toggleSound}
      title={muted ? 'Unmute cozy sounds' : 'Mute sounds'}
      aria-label="Toggle cozy sounds"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-[2.5px] border-ink bg-snow text-ink font-pixel text-xs font-bold shadow-brutal-sm hover:bg-sand active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer select-none"
    >
      {muted ? (
        <>
          <VolumeX className="w-4 h-4 text-[#E74C3C]" />
          <span>MUTED</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-matcha" />
          <span>CHILL SFX</span>
        </>
      )}
    </button>
  );
}
