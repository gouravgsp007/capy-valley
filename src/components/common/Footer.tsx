'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/constants';
import PixelBadge from './PixelBadge';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5ECD7] border-t-[3px] border-ink mt-20 pt-12 pb-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">♨️</span>
              <span className="text-2xl font-black text-ink">Capy Valley</span>
              <PixelBadge variant="solana" size="sm">Solana GameFi</PixelBadge>
            </div>
            <p className="text-ink/80 text-sm max-w-md leading-relaxed font-bold">
              A gentle onsen idle game on Solana where you raise Baby Capybaras, cultivate hillside yuzu groves, and share in a non-inflationary community SPL reward vault.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-3 h-3 rounded-full bg-solana-green animate-pulse border border-ink" />
              <span className="text-xs text-ink/70 font-black">
                Solana In-Game Reward Pool: 5,420,000 $CAPY (In-Game Utility)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation matching user image */}
          <div>
            <h4 className="text-sm font-black text-ink uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-black text-ink/80">
              <li>
                <Link href="/" className="hover:text-matcha transition-colors">
                  The valley
                </Link>
              </li>
              <li>
                <Link href="/capys#growth" className="hover:text-matcha transition-colors">
                  Growing up
                </Link>
              </li>
              <li>
                <Link href="/capys#traits" className="hover:text-matcha transition-colors">
                  Traits
                </Link>
              </li>
              <li>
                <Link href="/capys#drop" className="hover:text-matcha transition-colors">
                  The drop
                </Link>
              </li>
              <li>
                <Link href="/whitelist" className="hover:text-matcha transition-colors">
                  Solana Whitelist
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal (Google AdSense Required) */}
          <div>
            <h4 className="text-sm font-black text-ink uppercase tracking-wider mb-3">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-sm font-black text-ink/80">
              <li>
                <Link href="/privacy-policy" className="hover:text-matcha transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-matcha transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-matcha transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <a
                  href="/ads.txt"
                  target="_blank"
                  className="hover:text-matcha transition-colors text-xs text-ink/60"
                >
                  ads.txt specification
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Creator */}
          <div>
            <h4 className="text-sm font-black text-ink uppercase tracking-wider mb-3">
              Community Lead
            </h4>
            <ul className="space-y-2 text-sm font-black text-ink/80">
              <li>
                <a
                  href={SITE_METADATA.twitterFollowIntent}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-matcha transition-colors flex items-center gap-1.5"
                >
                  <span>𝕏</span> Follow @{SITE_METADATA.twitterHandle}
                </a>
              </li>
              <li>
                <a
                  href={SITE_METADATA.twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-matcha transition-colors flex items-center gap-1.5"
                >
                  <span>📢</span> Announcement Tweet
                </a>
              </li>
              <li>
                <Link href="/whitelist" className="hover:text-matcha transition-colors flex items-center gap-1.5 text-solana-purple">
                  <span>✨</span> Join Solana Whitelist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t-[2px] border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-black text-ink/60">
          <div>
            © {new Date().getFullYear()} Capy Valley on Solana. Built for chill and yield.
          </div>
          <div className="flex items-center gap-2">
            <span>Solana Program Verified</span>
            <span>•</span>
            <span>Anchor Framework</span>
            <span>•</span>
            <span>SPL Token standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
