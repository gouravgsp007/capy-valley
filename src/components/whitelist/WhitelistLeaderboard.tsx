'use client';

import React, { useState, useEffect } from 'react';
import PixelBadge from '../common/PixelBadge';
import { WhitelistEntry } from '@/lib/types';
import { formatAddress } from '@/lib/solana';
import { getStoredEntries, exportToCsv } from '@/lib/storage';
import { sound } from '@/lib/audio';
import { Download, Users } from 'lucide-react';

export default function WhitelistLeaderboard() {
  const [entries, setEntries] = useState<WhitelistEntry[]>([]);

  useEffect(() => {
    // Read local cache first
    const local = getStoredEntries();
    setEntries(local);

    // Fetch live API entries and merge
    fetch('/api/whitelist')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.recentEntries && Array.isArray(data.recentEntries)) {
          const combined = [...data.recentEntries];
          local.forEach((loc) => {
            if (!combined.some((c) => c.walletAddress.toLowerCase() === loc.walletAddress.toLowerCase())) {
              combined.push(loc);
            }
          });
          setEntries(combined);
        }
      })
      .catch(() => {});
  }, []);

  const handleDownloadCsv = () => {
    sound.playBubblePop();
    const csvData = exportToCsv(entries);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'capy-valley-solana-whitelist.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-snow p-6 sm:p-8 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b-[2.5px] border-ink">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-sand border-[2px] border-ink flex items-center justify-center">
            <Users className="w-5 h-5 text-ink" />
          </div>
          <div>
            <h3 className="text-xl font-black text-ink">
              Recent Solana Registrations
            </h3>
            <span className="text-xs text-ink/60 font-bold">
              Live Solana pioneer stream
            </span>
          </div>
        </div>

        <button
          onClick={handleDownloadCsv}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cream border-[2px] border-ink text-xs font-black text-ink shadow-brutal-sm hover:bg-sand active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all"
        >
          <Download className="w-4 h-4 text-matcha" />
          Download Solana Whitelist CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-bold">
          <thead>
            <tr className="border-b-[2px] border-ink text-ink/60 uppercase">
              <th className="pb-2">Pass #</th>
              <th className="pb-2">Solana Address</th>
              <th className="pb-2">𝕏 Handle</th>
              <th className="pb-2 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {entries.slice(0, 7).map((e) => (
              <tr key={e.id} className="hover:bg-cream/40 transition-colors">
                <td className="py-3 font-black text-ink">
                  #{String(e.pioneerId).padStart(4, '0')}
                </td>
                <td className="py-3 font-mono text-ink/80 font-black">
                  {formatAddress(e.walletAddress)}
                </td>
                <td className="py-3 text-ink/70">@{e.xHandle}</td>
                <td className="py-3 text-right">
                  <PixelBadge variant={e.tier === 'Guaranteed' ? 'solana' : 'matcha'} size="sm">
                    {e.tier}
                  </PixelBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
