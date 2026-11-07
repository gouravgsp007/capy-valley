'use client';

import React, { useState } from 'react';
import BrutalButton from '../common/BrutalButton';
import { isValidSolanaAddress, sanitizeHandle } from '@/lib/solana';
import { WhitelistEntry } from '@/lib/types';
import { sound } from '@/lib/audio';
import { saveEntry } from '@/lib/storage';
import { AlertCircle, Wallet, AtSign, LinkIcon } from 'lucide-react';

interface WalletFormProps {
  tasksCompleted: boolean;
  onSuccess: (entry: WhitelistEntry) => void;
}

export default function WalletForm({ tasksCompleted, onSuccess }: WalletFormProps) {
  const [wallet, setWallet] = useState('');
  const [handle, setHandle] = useState('');
  const [proof, setProof] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!tasksCompleted) {
      setError('Please complete the community steps above before submitting.');
      sound.playBubblePop();
      return;
    }

    if (!isValidSolanaAddress(wallet)) {
      setError('Invalid Solana address. Must be a valid 32-44 character Base58 public key (Phantom, Solflare, Backpack).');
      sound.playBubblePop();
      return;
    }

    const cleanHandle = sanitizeHandle(handle);
    if (!cleanHandle) {
      setError('Please provide your X (Twitter) handle.');
      sound.playBubblePop();
      return;
    }

    setLoading(true);

    try {
      // Attempt backend API first
      const res = await fetch('/api/whitelist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: wallet.trim(),
          xHandle: cleanHandle,
          proofUrl: proof.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.entry) {
        sound.playSuccess();
        // Synchronize with local storage
        saveEntry(data.entry);
        onSuccess(data.entry);
      } else {
        if (data.error) {
          setError(data.error);
        } else {
          // Fallback to local storage
          const fallbackEntry = saveEntry({
            walletAddress: wallet.trim(),
            xHandle: cleanHandle,
            proofUrl: proof.trim(),
            tier: 'Guaranteed',
          });
          sound.playSuccess();
          onSuccess(fallbackEntry);
        }
      }
    } catch {
      // Network fallback to local storage
      const fallbackEntry = saveEntry({
        walletAddress: wallet.trim(),
        xHandle: cleanHandle,
        proofUrl: proof.trim(),
        tier: 'Guaranteed',
      });
      sound.playSuccess();
      onSuccess(fallbackEntry);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-black text-ink/70 uppercase flex items-center gap-1.5">
          <Wallet className="w-3.5 h-3.5 text-solana-purple" />
          Solana Public Key (Phantom / Solflare / Backpack)
        </label>
        <input
          type="text"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
          className="w-full px-4 py-3 rounded-xl border-[2.5px] border-ink bg-snow font-mono text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-solana-purple shadow-brutal-sm font-bold"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-black text-ink/70 uppercase flex items-center gap-1.5">
            <AtSign className="w-3.5 h-3.5 text-matcha" />
            Your X Handle
          </label>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="@capy_pioneer"
            className="w-full px-4 py-3 rounded-xl border-[2.5px] border-ink bg-snow text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-yuzu shadow-brutal-sm font-bold"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-black text-ink/70 uppercase flex items-center gap-1.5">
            <LinkIcon className="w-3.5 h-3.5 text-coral" />
            Proof of Repost / Tweet Link
          </label>
          <input
            type="text"
            value={proof}
            onChange={(e) => setProof(e.target.value)}
            placeholder="https://x.com/yourname/status/..."
            className="w-full px-4 py-3 rounded-xl border-[2.5px] border-ink bg-snow text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-yuzu shadow-brutal-sm font-bold"
          />
        </div>
      </div>

      {error && (
        <div className="p-3 bg-[#FF7675]/20 rounded-xl border-[2px] border-[#D63031] text-[#D63031] text-xs font-black flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <BrutalButton
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        className="w-full mt-2"
        soundType="success"
      >
        {loading ? 'Verifying on Solana...' : 'Claim Guaranteed Solana Whitelist Spot 🍊'}
      </BrutalButton>
    </form>
  );
}
