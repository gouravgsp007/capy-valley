'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BrutalButton from './BrutalButton';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consentGiven = localStorage.getItem('capy_cookie_consent');
      if (!consentGiven) {
        setShowBanner(true);
      }
    } catch {
      // Ignore localStorage read errors in private browsing
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('capy_cookie_consent', 'accepted');
    } catch {
      // Ignore
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('capy_cookie_consent', 'declined');
    } catch {
      // Ignore
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-snow p-5 rounded-2xl border-[3px] border-ink shadow-brutal-lg space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yuzu border-[2px] border-ink flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4 text-ink" />
            </div>
            <h4 className="font-black text-sm text-ink leading-tight">
              Cookie & Privacy Preferences
            </h4>
          </div>
          <button
            onClick={handleDecline}
            aria-label="Close cookie consent banner"
            className="text-ink/60 hover:text-ink cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs font-bold text-ink/80 leading-relaxed">
          We use cookies and third-party advertising partners (such as Google AdSense) to deliver relevant ads and remember your onsen game settings. Read our{' '}
          <Link href="/privacy-policy" className="underline decoration-ink hover:text-matcha">
            Privacy Policy
          </Link>.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <BrutalButton
            variant="primary"
            size="sm"
            onClick={handleAccept}
            className="flex-1 py-1.5 text-xs"
          >
            Got it, chill! 🍊
          </BrutalButton>
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-xl border-[2px] border-ink/40 text-xs font-black text-ink/70 hover:bg-cream"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
