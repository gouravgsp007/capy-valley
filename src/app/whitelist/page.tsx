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
      label: 'Follow @CapyValleyGame on 𝕏',
      description: 'Get live announcements, patch notes, and drop dates.',
      link: 'https://x.com',
      completed: false,
      type: 'x-follow',
    },
    {
      id: 'repost-announcement',
      label: 'Repost the Whitelist Trailer',
      description: 'Spread the cozy onsen vibes with your mutuals.',
      link: 'https://x.com',
      completed: false,
      type: 'x-repost',
    },
    {
      id: 'join-community',
      label: 'Join Hot Springs Telegram & Discord',
      description: 'Meet fellow valley pioneers and claim the role.',
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
          <PixelBadge variant="yuzu" size="md">
            EARLY PIONEER ACCESS
          </PixelBadge>
          <h1 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-tight">
            Earn your Lil Capy spot in three minutes.
          </h1>
          <p className="font-cozy text-lg text-ink/80 leading-relaxed">
            Guaranteed Pioneer mint allocation, dynamic trait boosts, and zero gas wars on Arbitrum & Base.
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
                <h3 className="font-pixel text-xl font-bold text-ink">
                  Pioneer Whitelist Application
                </h3>
              </div>
              <span className="font-pixel text-xs font-bold text-matcha bg-sand px-2.5 py-1 rounded border border-ink flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                1,200 Spots Left
              </span>
            </div>

            {/* Step 1: Social Checklist */}
            <SocialChecklist tasks={tasks} onToggleTask={handleToggleTask} />

            {/* Step 2: Wallet Submission */}
            <div className="space-y-3 pt-2 border-t-[2.5px] border-ink/10">
              <label className="font-pixel text-xs font-bold text-ink/70 uppercase block">
                Step 2: Submit EVM Wallet
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
