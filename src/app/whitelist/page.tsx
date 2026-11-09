'use client';

import React, { useState } from 'react';
import PixelBadge from '@/components/common/PixelBadge';
import SocialChecklist from '@/components/whitelist/SocialChecklist';
import WalletForm from '@/components/whitelist/WalletForm';
import PioneerPassportCard from '@/components/whitelist/PioneerPassportCard';
import WhitelistLeaderboard from '@/components/whitelist/WhitelistLeaderboard';
import AtmosphereCanvas from '@/components/canvas/AtmosphereCanvas';
import AdSlot from '@/components/ads/AdSlot';
import { SocialTask, WhitelistEntry } from '@/lib/types';
import { SITE_METADATA } from '@/lib/constants';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function WhitelistPage() {
  const [tasks, setTasks] = useState<SocialTask[]>([
    {
      id: 'follow-x',
      label: `Follow @${SITE_METADATA.twitterHandle} on 𝕏`,
      description: 'Mandatory: Opens official 1-click Twitter follow intent to unlock GTD spot.',
      link: SITE_METADATA.twitterFollowIntent,
      completed: false,
      type: 'x-follow',
    },
    {
      id: 'like-repost-announcement',
      label: `Like and Repost @${SITE_METADATA.twitterHandle}'s Announcement tweet`,
      description: `Like and repost @${SITE_METADATA.twitterHandle}'s pinned announcement tweet to boost your entry priority.`,
      link: SITE_METADATA.twitterUrl,
      completed: false,
      type: 'x-repost',
    },
  ]);

  const [registeredEntry, setRegisteredEntry] = useState<WhitelistEntry | null>(null);

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const allTasksCompleted = tasks.every((t) => t.completed);

  return (
    <div className="min-h-screen bg-[#FFF9ED] py-12 px-4 lg:px-8">
      <AtmosphereCanvas mode="day" />
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <PixelBadge variant="solana" size="md">
            SOLANA PIONEER ACCESS
          </PixelBadge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-tight">
            Earn your Lil Capy spot in two minutes.
          </h1>
          <p className="text-lg text-ink/80 leading-relaxed font-bold">
            Follow <a href={SITE_METADATA.twitterFollowIntent} target="_blank" rel="noreferrer" className="underline decoration-solana-purple decoration-[3px] text-ink hover:text-solana-purple">@{SITE_METADATA.twitterHandle} on 𝕏</a> and like & repost the announcement tweet for guaranteed Pioneer mint allocation on Solana.
          </p>
        </div>

        {/* Form or Passport Card */}
        {registeredEntry ? (
          <PioneerPassportCard
            entry={registeredEntry}
            onReset={() => setRegisteredEntry(null)}
          />
        ) : (
          <div className="bg-snow p-6 sm:p-10 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg max-w-2xl mx-auto space-y-8">
            <div className="flex items-center justify-between pb-4 border-b-[2.5px] border-ink">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yuzu-gold" />
                <h3 className="text-xl font-black text-ink">
                  Solana Pioneer Whitelist
                </h3>
              </div>
              <span className="text-xs font-black text-matcha bg-sand px-2.5 py-1 rounded-lg border border-ink flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                1,200 Spots Left
              </span>
            </div>

            {/* Step 1: Social Checklist (Twitter only) */}
            <SocialChecklist tasks={tasks} onToggleTask={handleToggleTask} />

            {/* Step 2: Wallet Submission */}
            <div className="space-y-3 pt-2 border-t-[2.5px] border-ink/10">
              <label className="text-xs font-black text-ink/70 uppercase block">
                Step 2: Submit Solana Public Key
              </label>
              <WalletForm
                tasksCompleted={allTasksCompleted}
                onSuccess={(entry) => setRegisteredEntry(entry)}
              />
            </div>
          </div>
        )}

        {/* Live Dynamic Solana Pioneer Leaderboard */}
        <WhitelistLeaderboard />

        {/* AdSense Compliance Slot */}
        <div className="max-w-4xl mx-auto">
          <AdSlot slotId="capy-whitelist-footer-banner" />
        </div>
      </div>
    </div>
  );
}
