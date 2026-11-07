'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AudioController from './AudioController';
import BrutalButton from './BrutalButton';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'The Valley' },
    { href: '/capys', label: 'Baby Capys' },
    { href: '/#vault', label: '$CAPY Vault' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-cream/90 backdrop-blur-md border-b-[3px] border-ink px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group select-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-yuzu border-[2.5px] border-ink shadow-brutal-sm flex items-center justify-center font-pixel text-xl group-hover:rotate-6 transition-transform">
            🍊
          </div>
          <div>
            <span className="font-pixel text-xl font-bold tracking-tight text-ink block leading-none">
              CAPY VALLEY
            </span>
            <span className="font-cozy text-[11px] font-black uppercase text-matcha tracking-widest block mt-0.5">
              Cozy Idle Farm
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-snow px-3 py-1.5 rounded-2xl border-[2.5px] border-ink shadow-brutal-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-pixel text-sm px-3 py-1 rounded-xl transition-all font-semibold ${
                  isActive
                    ? 'bg-yuzu text-ink shadow-brutal-sm border-[2px] border-ink'
                    : 'text-ink/80 hover:text-ink hover:bg-cream'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5">
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
