import { WhitelistEntry } from './types';

const STORAGE_KEY = 'capy_whitelist_entries_solana';

// Initial mock entries for the live Solana leaderboard
const INITIAL_ENTRIES: WhitelistEntry[] = [
  {
    id: 'entry-1',
    walletAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    xHandle: 'onsen_enjoyer',
    proofUrl: 'https://x.com/onsen_enjoyer/status/189201',
    timestamp: Date.now() - 1000 * 60 * 12,
    pioneerId: 419,
    tier: 'Guaranteed',
  },
  {
    id: 'entry-2',
    walletAddress: '8nB3Vq2w8eY47TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    xHandle: 'capy_king99',
    proofUrl: 'https://x.com/capy_king99/status/189202',
    timestamp: Date.now() - 1000 * 60 * 35,
    pioneerId: 420,
    tier: 'Guaranteed',
  },
  {
    id: 'entry-3',
    walletAddress: '9mC4Wq3w9eZ58UXKTFqcE6kClifUrB94UASvKptkBtV',
    xHandle: 'chill_farmer',
    proofUrl: 'https://x.com/chill_farmer/status/189203',
    timestamp: Date.now() - 1000 * 60 * 78,
    pioneerId: 421,
    tier: 'Priority',
  },
];

export function getStoredEntries(): WhitelistEntry[] {
  if (typeof window === 'undefined') {
    return INITIAL_ENTRIES;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ENTRIES));
      return INITIAL_ENTRIES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_ENTRIES;
  }
}

export function saveEntry(entry: Omit<WhitelistEntry, 'id' | 'timestamp' | 'pioneerId'>): WhitelistEntry {
  const current = getStoredEntries();

  // Check duplicate wallet
  const existing = current.find(
    (e) => e.walletAddress.toLowerCase() === entry.walletAddress.toLowerCase()
  );
  if (existing) {
    return existing;
  }

  // Use reduce instead of Math.max(...spread) to avoid call stack limits
  const maxId = current.reduce((max, e) => (e.pioneerId > max ? e.pioneerId : max), 420);
  const nextId = maxId + 1;

  const newEntry: WhitelistEntry = {
    ...entry,
    id: `entry-${Date.now()}`,
    timestamp: Date.now(),
    pioneerId: nextId,
  };

  const updated = [newEntry, ...current];
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Storage fallback
    }
  }
  return newEntry;
}

export function exportToCsv(entries: WhitelistEntry[]): string {
  const header = 'PioneerID,SolanaWallet,XHandle,Tier,Timestamp\n';
  const rows = entries.map(
    (e) => `${e.pioneerId},"${e.walletAddress}","@${e.xHandle}","${e.tier}","${new Date(e.timestamp).toISOString()}"`
  );
  return header + rows.join('\n');
}
