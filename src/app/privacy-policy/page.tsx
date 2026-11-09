import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PixelBadge from '@/components/common/PixelBadge';
import { SITE_METADATA } from '@/lib/constants';
import { ShieldCheck, ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Capy Valley on Solana',
  description: 'Official Privacy Policy, cookie disclosures, and Google AdSense compliance details for Capy Valley.',
};

export default function PrivacyPolicyPage() {
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
          <PixelBadge variant="matcha" size="sm">
            LEGAL COMPLIANCE
          </PixelBadge>
          <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-bold text-ink/60">
            Last updated: {lastUpdated} • Capy Valley
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-snow p-6 sm:p-10 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg space-y-8 text-ink/80 text-sm sm:text-base leading-relaxed font-bold">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-ink flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-matcha" />
              1. Overview
            </h2>
            <p>
              Welcome to <strong>Capy Valley</strong> (accessible at our official domain). We are committed to protecting your privacy and being fully transparent regarding data handling, cookies, and advertising practices. This Privacy Policy outlines what information is collected, how it is used, and how third-party advertising partners (including Google AdSense) operate on our site.
            </p>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              2. Google AdSense & Third-Party Cookies
            </h2>
            <p>
              We may display third-party advertisements served by <strong>Google AdSense</strong> to support the free development and operation of this project:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites across the Internet.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve ads to our visitors based on their visit to our sites and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noreferrer"
                  className="text-solana-purple underline hover:text-ink inline-flex items-center gap-1"
                >
                  Google Ads Settings <ExternalLink className="w-3.5 h-3.5" />
                </a>{' '}
                or via the Network Advertising Initiative at{' '}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noreferrer"
                  className="text-solana-purple underline hover:text-ink inline-flex items-center gap-1"
                >
                  aboutads.info <ExternalLink className="w-3.5 h-3.5" />
                </a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              3. Solana Blockchain & Public Ledger Data
            </h2>
            <p>
              Capy Valley operates on the Solana public blockchain. When participating in the whitelist or game mechanics:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                You may submit a public Solana wallet address (Base58 public key). <strong>Public keys are public records on the blockchain ledger by design.</strong>
              </li>
              <li>
                <strong>We NEVER collect, ask for, or store private keys, seed phrases, or wallet passwords.</strong>
              </li>
              <li>
                Any on-chain transactions you choose to sign occur strictly in your external self-custody wallet (e.g. Phantom, Solflare, Backpack).
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              4. Log Files and Local Storage
            </h2>
            <p>
              Like most standard websites, we use standard server log files (IP addresses, browser type, ISP, referring/exit pages, and date/time stamps). None of this data is linked to personally identifiable information.
            </p>
            <p>
              We also use browser <code>localStorage</code> solely to remember client-side preferences (such as audio volume, atmosphere mode, and cookie banner dismissal) locally on your device.
            </p>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              5. Children&apos;s Privacy (COPPA)
            </h2>
            <p>
              Our website does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
            </p>
          </section>

          <section className="space-y-3 border-t-[2px] border-ink/10 pt-6">
            <h2 className="text-xl sm:text-2xl font-black text-ink">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or inquiries regarding our Privacy Policy or data handling, you can contact our official team lead directly on 𝕏 at{' '}
              <a
                href={SITE_METADATA.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="text-solana-purple underline hover:text-ink"
              >
                @{SITE_METADATA.twitterHandle}
              </a>{' '}
              or visit our <Link href="/contact" className="underline text-ink hover:text-matcha">Contact Page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
