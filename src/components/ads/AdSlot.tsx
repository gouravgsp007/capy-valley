'use client';

import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSlot({
  slotId = '1234567890',
  format = 'auto',
  responsive = true,
  className = '',
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushedRef = useRef<boolean>(false);

  const publisherId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX';

  useEffect(() => {
    // Only push once when ad element is mounted in DOM
    if (typeof window !== 'undefined' && adRef.current && !isPushedRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushedRef.current = true;
      } catch (err) {
        // Silently capture adblocker or initialization errors
      }
    }
  }, []);

  return (
    <div
      className={`w-full max-w-5xl mx-auto my-8 overflow-hidden rounded-2xl border-[2.5px] border-ink/20 bg-cream/40 p-3 text-center ${className}`}
    >
      <div className="text-[10px] uppercase tracking-widest font-black text-ink/40 mb-1">
        Sponsored Advertisement
      </div>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
