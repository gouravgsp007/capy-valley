import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PixelBadge from '@/components/common/PixelBadge';
import { SITE_METADATA } from '@/lib/constants';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Capy Valley on Solana',
  description: 'Terms of Service, entertainment disclaimer, and acceptable use policy for Capy Valley.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'November 10, 2026';

  return (
    <div className="min-h-screen bg-[#FFF9ED] py-12 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-black text-ink hover:text-matcha transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Valley
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <PixelBadge variant="onsen" size="sm">
            USER AGREEMENT
          </PixelBadge>
          <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm font-bold text-ink/60">
            Last updated: {lastUpdated} • Capy Valley
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-snow p-6 sm:p-10 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg space-y-8 text-ink/80 text-sm sm:text-base leading-relaxed font-bold">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-onsen-deep" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Capy Valley website, digital companion tools, or whitelist participation interfaces, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              2. Entertainment & Game Mechanics Only (No Financial Advice)
            </h2>
            <p>
              Capy Valley is a community entertainment idle game built around the Solana ecosystem. 
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No Investment Contract:</strong> In-game points, Farm Power, yields, and token references are purely gaming mechanics and do not constitute securities, shares, or financial instruments.
              </li>
              <li>
                <strong>No Financial Advice:</strong> Nothing on this website or in our communications constitutes investment, legal, tax, or financial advice.
              </li>
              <li>
                <strong>Play for Fun:</strong> Digital assets and on-chain collectibles carry inherent volatility. Play solely for enjoyment and community engagement.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              3. User Responsibilities & Fair Play
            </h2>
            <p>
              When participating in whitelist events, community social quests, or interactive features:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You are solely responsible for safeguarding your personal wallet credentials.
              </li>
              <li>
                Sybil attacks, automated bot registration, and fraudulent multi-accounting to manipulate community allocations are strictly prohibited.
              </li>
              <li>
                We reserve the right to disqualify any wallet addresses suspected of abusive bot behavior.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              4. Third-Party Links & Advertisements
            </h2>
            <p>
              This website may display advertisements served through Google AdSense or external links to third-party platforms (e.g. 𝕏 / Twitter, Solana blockchain explorers). We do not control and are not responsible for third-party products, services, or privacy policies.
            </p>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              5. Contact Information
            </h2>
            <p>
              For legal notices or questions about these terms, reach out via our official community lead on 𝕏:{' '}
              <a
                href={SITE_METADATA.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="text-solana-purple underline hover:text-ink"
              >
                @{SITE_METADATA.twitterHandle}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
