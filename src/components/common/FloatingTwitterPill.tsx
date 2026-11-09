'use client';

import React, { useState } from 'react';
import { SITE_METADATA } from '@/lib/constants';
import { sound } from '@/lib/audio';
import { X, Sparkles, ExternalLink } from 'lucide-react';

export default function FloatingTwitterPill() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleFollowClick = () => {
    sound.playSuccess();
    window.open(SITE_METADATA.twitterFollowIntent, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-snow rounded-2xl border-[3px] border-ink p-3 shadow-brutal-lg flex items-center gap-3 max-w-sm select-none">
        <div className="w-10 h-10 rounded-xl bg-yuzu border-[2px] border-ink flex items-center justify-center text-lg font-black shrink-0 shadow-brutal-sm">
          🍊
        </div>

        <div className="flex-1 pr-1">
          <div className="flex items-center gap-1.5 text-xs font-black text-ink leading-tight">
            <span className="w-2 h-2 rounded-full bg-solana-green animate-ping" />
            <span>Follow @{SITE_METADATA.twitterHandle}</span>
          </div>
          <p className="text-[11px] text-ink/70 font-bold leading-tight mt-0.5">
            Get instant Solana drop alerts & +25% FP
          </p>
        </div>

        <button
          onClick={handleFollowClick}
          className="px-3 py-1.5 bg-solana-purple hover:bg-[#7e34d4] text-white rounded-xl border-[2px] border-ink font-black text-xs shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] cursor-pointer flex items-center gap-1 shrink-0"
        >
          <span>Follow</span>
          <ExternalLink className="w-3 h-3" />
        </button>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notification"
          className="w-6 h-6 rounded-lg hover:bg-sand/60 text-ink/40 hover:text-ink flex items-center justify-center cursor-pointer shrink-0 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
