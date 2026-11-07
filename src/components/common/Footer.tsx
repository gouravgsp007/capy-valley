'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/lib/constants';
import PixelBadge from './PixelBadge';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5ECD7] border-t-[3px] border-ink mt-20 pt-12 pb-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">♨️</span>
              <span className="font-pixel text-2xl font-bold text-ink">CAPY VALLEY</span>
              <PixelBadge variant="yuzu" size="sm">L2 GameFi</PixelBadge>
            </div>
            <p className="font-cozy text-ink/80 text-sm max-w-md leading-relaxed">
              A gentle onsen idle game where you raise Baby Capybaras, cultivate hillside yuzu groves, and share in a non-inflationary community reward vault.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-3 h-3 rounded-full bg-[#2ED573] animate-pulse border border-ink" />
              <span className="font-pixel text-xs text-ink/70">
                Reward Vault Reserves: 5,420,000 $CAPY (~$128,400)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-pixel text-sm font-bold text-ink uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 font-cozy text-sm font-bold text-ink/80">
              <li>
                <Link href="/" className="hover:text-matcha transition-colors">
                  The Valley Map
                </Link>
              </li>
              <li>
                <Link href="/capys" className="hover:text-matcha transition-colors">
                  Baby Capy Traits
                </Link>
              </li>
              <li>
                <Link href="/whitelist" className="hover:text-matcha transition-colors">
                  Join Whitelist
                </Link>
              </li>
              <li>
                <Link href="/#vault" className="hover:text-matcha transition-colors">
                  Reward Vault Mechanics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Community */}
          <div>
            <h4 className="font-pixel text-sm font-bold text-ink uppercase tracking-wider mb-3">
              Hot Springs Lounge
            </h4>
            <ul className="space-y-2 font-cozy text-sm font-bold text-ink/80">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-matcha transition-colors flex items-center gap-1.5"
                >
                  <span>𝕏</span> {SITE_METADATA.twitter}
                </a>
              </li>
              <li>
                <a
                  href={SITE_METADATA.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-matcha transition-colors flex items-center gap-1.5"
                >
                  <span>💬</span> Discord Community
                </a>
              </li>
              <li>
                <a
                  href={SITE_METADATA.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-matcha transition-colors flex items-center gap-1.5"
                >
                  <span>✈️</span> Telegram Lounge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t-[2px] border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-pixel text-ink/60">
          <div>
            © {new Date().getFullYear()} Capy Valley. Built for chill and yield.
          </div>
          <div>
            Contract verified • EIP-712 • Fair Play Checked
          </div>
        </div>
      </div>
    </footer>
  );
}
