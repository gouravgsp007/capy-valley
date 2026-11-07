'use client';

import React, { useState } from 'react';
import PixelBadge from '@/components/common/PixelBadge';
import SocialChecklist from '@/components/whitelist/SocialChecklist';
import WalletForm from '@/components/whitelist/WalletForm';
import PioneerPassportCard from '@/components/whitelist/PioneerPassportCard';
import WhitelistLeaderboard from '@/components/whitelist/WhitelistLeaderboard';
import AtmosphereCanvas from '@/components/canvas/AtmosphereCanvas';
import { SocialTask, WhitelistEntry } from '@/lib/types';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function WhitelistPage() {
  const [tasks, setTasks] = useState<SocialTask[]>([
    {
      id: 'follow-x',
      label: 'Follow @CapyValleySol on 𝕏',
      description: 'Get live Solana announcements, drop dates, and patch notes.',
      link: 'https://x.com',
      completed: false,
      type: 'x-follow',
    },
    {
      id: 'repost-announcement',
      label: 'Repost the Solana Whitelist Announcement',
      description: 'Spread the cozy onsen vibes with your mutuals.',
      link: 'https://x.com',
      completed: false,
      type: 'x-repost',
    },
    {
      id: 'join-community',
      label: 'Join Hot Springs Telegram & Discord',
      description: 'Meet fellow Solana valley pioneers and claim early roles.',
      link: 'https://t.me',
      completed: false,
      type: 'telegram',
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
            Earn your Lil Capy spot in three minutes.
          </h1>
          <p className="text-lg text-ink/80 leading-relaxed font-bold">
            Guaranteed Pioneer mint allocation on Solana with sub-cent network fees, no gas wars, and dynamic on-chain metadata evolution.
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

            {/* Step 1: Social Checklist */}
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

        {/* Live Leaderboard & CSV Download */}
        <WhitelistLeaderboard />
      </div>
    </div>
  );
}
