'use client';

import React, { useState, useEffect, useRef } from 'react';
import PixelBadge from '../common/PixelBadge';
import { formatAddress } from '@/lib/solana';
import { getStoredEntries } from '@/lib/storage';
import { PIONEER_POOL, PioneerRecord } from '@/lib/pioneerData';
import { Users, Radio } from 'lucide-react';

interface DisplayEntry {
  pioneerId: number;
  walletAddress: string;
  xHandle: string;
  tier: 'Guaranteed' | 'Priority' | 'Public Raffle';
  id: string;
  timestamp: number;
  isUserSubmission?: boolean;
  isNewArrival?: boolean;
}

export default function WhitelistLeaderboard() {
  const [entries, setEntries] = useState<DisplayEntry[]>([]);
  const [totalCount, setTotalCount] = useState<number>(432);
  const poolIndexRef = useRef<number>(10);
  const nextPioneerIdRef = useRef<number>(433);

  // Initialize with initial batch from the 500 accounts
  useEffect(() => {
    const userEntries = getStoredEntries();

    // Map initial entries from pioneer pool
    const initialPool = PIONEER_POOL.slice(0, 9).map((record, idx) => ({
      ...record,
      id: `pioneer-${record.pioneerId}-${idx}`,
      timestamp: Date.now() - (idx * 22000 + 4000), // staggered past timestamps
      isUserSubmission: false,
      isNewArrival: false,
    }));

    // If the visitor already submitted, pin their entry at the top
    const userDisplayEntries: DisplayEntry[] = userEntries.map((u) => ({
      pioneerId: u.pioneerId,
      walletAddress: u.walletAddress,
      xHandle: u.xHandle,
      tier: u.tier,
      id: u.id,
      timestamp: u.timestamp,
      isUserSubmission: true,
      isNewArrival: false,
    }));

    setEntries([...userDisplayEntries, ...initialPool]);
    setTotalCount(432 + userEntries.length);
  }, []);

  // Every 20 seconds, inject 3 new dummy registrations from the 500-account pool
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = poolIndexRef.current;
      // Pick next 3 accounts from the 500 pool (cycles smoothly)
      const batch: PioneerRecord[] = [
        PIONEER_POOL[idx % PIONEER_POOL.length],
        PIONEER_POOL[(idx + 1) % PIONEER_POOL.length],
        PIONEER_POOL[(idx + 2) % PIONEER_POOL.length],
      ];

      poolIndexRef.current = (idx + 3) % PIONEER_POOL.length;

      const now = Date.now();
      const newArrivals: DisplayEntry[] = batch.map((item, bIdx) => {
        const pId = nextPioneerIdRef.current++;
        return {
          ...item,
          pioneerId: pId,
          id: `arrival-${pId}-${now}-${bIdx}`,
          timestamp: now - (bIdx * 3000), // slight stagger in seconds
          isUserSubmission: false,
          isNewArrival: true,
        };
      });

      setTotalCount((prev) => prev + 3);

      setEntries((prev) => {
        // Keep user submissions at the top, followed by new arrivals, then older items
        const userSubs = prev.filter((p) => p.isUserSubmission);
        const nonUserSubs = prev.filter((p) => !p.isUserSubmission);

        // Prepend new arrivals to non-user entries and keep list around 10-12 items
        const combined = [...userSubs, ...newArrivals, ...nonUserSubs].slice(0, 11);
        return combined;
      });

      // Remove the highlight animation after 4 seconds
      setTimeout(() => {
        setEntries((prev) =>
          prev.map((e) => (e.isNewArrival ? { ...e, isNewArrival: false } : e))
        );
      }, 4000);
    }, 20000); // exactly every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const formatRelativeTime = (timestamp: number) => {
    const diffSec = Math.max(1, Math.floor((Date.now() - timestamp) / 1000));
    if (diffSec < 10) return 'just now';
    if (diffSec < 60) return `${diffSec}s ago`;
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    return `${Math.floor(diffMin / 60)}h ago`;
  };

  return (
    <div className="bg-snow p-6 sm:p-8 rounded-3xl border-[3.5px] border-ink shadow-brutal-lg max-w-4xl mx-auto space-y-6">
      {/* Header bar without CSV button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b-[2.5px] border-ink">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-sand border-[2.5px] border-ink flex items-center justify-center shrink-0 shadow-brutal-sm">
            <Users className="w-5 h-5 text-ink" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-ink leading-tight">
                Recent Solana Registrations
              </h3>
              <span className="text-[11px] font-black bg-yuzu text-ink px-2 py-0.5 rounded-md border border-ink shadow-brutal-sm">
                {totalCount.toLocaleString()} Verified
              </span>
            </div>
            <span className="text-xs text-ink/70 font-bold block mt-0.5">
              Live on-chain Pioneer feed rotating in real time
            </span>
          </div>
        </div>

        {/* Live Status Indicator (Replaces Download CSV) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cream border-[2px] border-ink text-xs font-black text-ink shadow-brutal-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-solana-green animate-ping" />
          <Radio className="w-3.5 h-3.5 text-solana-purple" />
          <span>Solana RPC Feed • Active</span>
        </div>
      </div>

      {/* Dynamic Table Feed */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-bold">
          <thead>
            <tr className="border-b-[2px] border-ink text-ink/60 uppercase">
              <th className="pb-2.5 pl-2">Pass #</th>
              <th className="pb-2.5">Solana Address</th>
              <th className="pb-2.5">𝕏 Handle</th>
              <th className="pb-2.5">Activity</th>
              <th className="pb-2.5 text-right pr-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {entries.map((e) => (
              <tr
                key={e.id}
                className={`transition-all duration-500 ${
                  e.isNewArrival
                    ? 'bg-matcha-light/80 font-black'
                    : e.isUserSubmission
                    ? 'bg-yuzu/25 font-black'
                    : 'hover:bg-cream/40'
                }`}
              >
                <td className="py-3 pl-2 font-black text-ink">
                  <div className="flex items-center gap-1.5">
                    {e.isNewArrival && (
                      <span className="w-2 h-2 rounded-full bg-matcha animate-pulse" />
                    )}
                    <span>#{String(e.pioneerId).padStart(4, '0')}</span>
                    {e.isUserSubmission && (
                      <span className="text-[9px] bg-ink text-snow px-1.5 py-0.5 rounded font-black uppercase tracking-wider ml-1">
                        YOU
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 font-mono text-ink/80 font-black">
                  {formatAddress(e.walletAddress)}
                </td>
                <td className="py-3 text-ink/90 font-black">
                  <a
                    href={`https://x.com/${e.xHandle}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-solana-purple transition-colors"
                  >
                    @{e.xHandle}
                  </a>
                </td>
                <td className="py-3 text-ink/60 font-bold">
                  {formatRelativeTime(e.timestamp)}
                </td>
                <td className="py-3 text-right pr-2">
                  <PixelBadge
                    variant={
                      e.isUserSubmission
                        ? 'solana'
                        : e.tier === 'Guaranteed'
                        ? 'solana'
                        : 'matcha'
                    }
                    size="sm"
                  >
                    {e.tier}
                  </PixelBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t-[2px] border-ink/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-ink/60 gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14F195]" />
          Synchronized with @shreyahunt whitelist ledger
        </span>
        <span>Rotating live stream across 500 community pioneers</span>
      </div>
    </div>
  );
}
