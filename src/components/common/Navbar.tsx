'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AudioController from './AudioController';
import BrutalButton from './BrutalButton';
import { SITE_METADATA } from '@/lib/constants';
import { Sparkles, Menu, X, ExternalLink } from 'lucide-react';
import { sound } from '@/lib/audio';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items matching exact user reference image
  const navLinks = [
    { href: '/', label: 'The valley' },
    { href: '/capys#growth', label: 'Growing up' },
    { href: '/capys#traits', label: 'Traits' },
    { href: '/capys#drop', label: 'The drop' },
    { href: '/#faq', label: 'FAQ' },
  ];

  const toggleMobileMenu = () => {
    sound.playBubblePop();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7C75D] border-b-[3px] border-ink px-4 lg:px-8 py-3.5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 sm:gap-3 group select-none cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-snow border-[2.5px] border-ink shadow-brutal-sm flex items-center justify-center text-lg sm:text-xl group-hover:rotate-6 transition-transform shrink-0">
            🍊
          </div>
          <div>
            <span className="font-black text-lg sm:text-xl tracking-tight text-[#3E1D0C] block leading-none">
              Capy Valley
            </span>
            <span className="text-[10px] sm:text-[11px] font-black uppercase text-[#3E1D0C]/80 tracking-widest block mt-0.5">
              by @{SITE_METADATA.twitterHandle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[17px] sm:text-[18px] font-black tracking-tight transition-all duration-150 ${
                  isActive
                    ? 'text-[#3E1D0C] underline decoration-[3px] underline-offset-4 decoration-[#3E1D0C]'
                    : 'text-[#3E1D0C] hover:opacity-75'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <AudioController />

          {/* Follow on 𝕏 Button */}
          <a
            href={SITE_METADATA.twitterFollowIntent}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-[2.5px] border-ink bg-snow hover:bg-sand text-ink text-xs font-black shadow-brutal-sm transition-all"
          >
            <span>𝕏</span>
            <span>Follow @{SITE_METADATA.twitterHandle}</span>
            <ExternalLink className="w-3 h-3 text-ink/60" />
          </a>
          
          <Link href="/whitelist" className="hidden sm:inline-flex">
            <BrutalButton variant="primary" size="sm">
              <Sparkles className="w-4 h-4 mr-1 text-ink" />
              Whitelist
            </BrutalButton>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border-[2.5px] border-ink bg-snow text-ink shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 pb-2 border-t-[2.5px] border-ink/20 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="px-4 py-2.5 rounded-xl font-black text-base text-[#3E1D0C] bg-white/40 hover:bg-white/70 active:bg-white/90 border-[2px] border-ink/30 hover:border-ink transition-all"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={SITE_METADATA.twitterFollowIntent}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl font-black text-base text-white bg-solana-purple flex items-center justify-between border-[2px] border-ink shadow-brutal-sm"
          >
            <span className="flex items-center gap-2">
              <span>𝕏</span> Follow @{SITE_METADATA.twitterHandle}
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="pt-2 sm:hidden">
            <Link href="/whitelist" onClick={closeMenu} className="block w-full">
              <BrutalButton variant="primary" size="md" className="w-full gap-1.5">
                <Sparkles className="w-4 h-4" />
                Join Solana Whitelist
              </BrutalButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
