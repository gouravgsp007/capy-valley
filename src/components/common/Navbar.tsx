'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AudioController from './AudioController';
import BrutalButton from './BrutalButton';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Navigation items matching exact user reference image:
  // "The valley    Growing up    Traits    The drop    FAQ"
  const navLinks = [
    { href: '/', label: 'The valley' },
    { href: '/capys#growth', label: 'Growing up' },
    { href: '/capys#traits', label: 'Traits' },
    { href: '/capys#drop', label: 'The drop' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-sand/90 backdrop-blur-md border-b-[3px] border-ink px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group select-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-yuzu border-[2.5px] border-ink shadow-brutal-sm flex items-center justify-center text-xl group-hover:rotate-6 transition-transform">
            🍊
          </div>
          <div>
            <span className="font-black text-xl tracking-tight text-ink block leading-none">
              Capy Valley
            </span>
            <span className="text-[11px] font-black uppercase text-matcha tracking-widest block mt-0.5">
              on Solana
            </span>
          </div>
        </Link>

        {/* Navigation Links - matching the exact legible rounded font in user's image */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[17px] font-black tracking-tight transition-all duration-150 hover:text-matcha ${
                  isActive
                    ? 'text-ink underline decoration-[3px] underline-offset-4 decoration-yuzu-gold'
                    : 'text-ink/90'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          <AudioController />
          <Link href="/whitelist">
            <BrutalButton variant="primary" size="sm" className="hidden sm:inline-flex">
              <Sparkles className="w-4 h-4 mr-1 text-ink" />
              Whitelist
            </BrutalButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
