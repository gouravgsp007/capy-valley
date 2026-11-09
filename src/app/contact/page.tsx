import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PixelBadge from '@/components/common/PixelBadge';
import BrutalButton from '@/components/common/BrutalButton';
import { SITE_METADATA } from '@/lib/constants';
import { Mail, MessageCircle, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & About | Capy Valley',
  description: 'Official contact information, project transparency, and support for Capy Valley on Solana.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFF9ED] py-12 px-4 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-black text-ink hover:text-matcha transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Valley
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <PixelBadge variant="solana" size="sm">
            SUPPORT & TRANSPARENCY
          </PixelBadge>
          <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight">
            Contact & Community
          </h1>
          <p className="text-base font-bold text-ink/70">
            Have questions about the Solana whitelist, partnership inquiries, or advertising feedback? Reach out directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1: Official Twitter */}
          <div className="bg-snow p-6 rounded-3xl border-[3px] border-ink shadow-brutal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-yuzu border-[2.5px] border-ink flex items-center justify-center text-xl shadow-brutal-sm">
              𝕏
            </div>
            <div>
              <h3 className="text-xl font-black text-ink">Official 𝕏 Handle</h3>
              <p className="text-xs font-bold text-ink/70 mt-1">
                Fastest response for whitelist inquiries and community announcements.
              </p>
            </div>
            <a
              href={SITE_METADATA.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <BrutalButton variant="primary" size="sm" className="w-full gap-2">
                <span>DM @{SITE_METADATA.twitterHandle}</span>
                <ExternalLink className="w-4 h-4" />
              </BrutalButton>
            </a>
          </div>

          {/* Card 2: Partnerships & Support */}
          <div className="bg-snow p-6 rounded-3xl border-[3px] border-ink shadow-brutal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-onsen-light border-[2.5px] border-ink flex items-center justify-center text-xl shadow-brutal-sm">
              <Mail className="w-6 h-6 text-onsen-deep" />
            </div>
            <div>
              <h3 className="text-xl font-black text-ink">Inquiries & Ads</h3>
              <p className="text-xs font-bold text-ink/70 mt-1">
                For Google AdSense compliance, press inquiries, or technical support.
              </p>
            </div>
            <a
              href={`mailto:contact@${SITE_METADATA.twitterHandle.toLowerCase()}.com`}
              className="block"
            >
              <BrutalButton variant="secondary" size="sm" className="w-full gap-2">
                <span>Send Email</span>
                <Mail className="w-4 h-4" />
              </BrutalButton>
            </a>
          </div>
        </div>

        {/* Project Statement for Reviewers */}
        <div className="bg-sand/60 p-6 rounded-3xl border-[3px] border-ink space-y-3 font-bold text-sm text-ink/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-matcha" />
            <h4 className="font-black text-base text-ink">Publisher Statement</h4>
          </div>
          <p>
            Capy Valley is an original web experience built on Next.js 15, developed and maintained by independent creators. All game assets, pixel canvas routines, and formulas are natively coded. We adhere strictly to Google AdSense Webmaster Quality Guidelines, ensuring authentic visitor value, non-intrusive ad placement, and complete user privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
