import { NextRequest, NextResponse } from 'next/server';
import { isValidSolanaAddress, sanitizeHandle } from '@/lib/solana';
import { WhitelistEntry } from '@/lib/types';

// In-memory backing store for the mock API
const inMemoryStore: WhitelistEntry[] = [
  {
    id: 'entry-seed-1',
    walletAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    xHandle: 'onsen_enjoyer',
    proofUrl: 'https://x.com/onsen_enjoyer/status/189201',
    timestamp: Date.now() - 1000 * 60 * 15,
    pioneerId: 418,
    tier: 'Guaranteed',
  },
  {
    id: 'entry-seed-2',
    walletAddress: '8nB3Vq2w8eY47TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    xHandle: 'capy_king99',
    proofUrl: 'https://x.com/capy_king99/status/189202',
    timestamp: Date.now() - 1000 * 60 * 30,
    pioneerId: 419,
    tier: 'Guaranteed',
  },
  {
    id: 'entry-seed-3',
    walletAddress: '9mC4Wq3w9eZ58UXKTFqcE6kClifUrB94UASvKptkBtV',
    xHandle: 'chill_farmer',
    proofUrl: 'https://x.com/chill_farmer/status/189203',
    timestamp: Date.now() - 1000 * 60 * 65,
    pioneerId: 420,
    tier: 'Priority',
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = searchParams.get('format');

  if (format === 'csv') {
    const csvHeader = 'PioneerID,SolanaAddress,XHandle,Tier,Date\n';
    const csvRows = inMemoryStore.map(
      (e) => `${e.pioneerId},"${e.walletAddress}","@${e.xHandle}","${e.tier}","${new Date(e.timestamp).toISOString()}"`
    );
    const csvContent = csvHeader + csvRows.join('\n');

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="capy-valley-solana-whitelist.csv"',
      },
    });
  }

  return NextResponse.json({
    success: true,
    totalCount: inMemoryStore.length + 417,
    recentEntries: inMemoryStore.slice(0, 10),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { walletAddress, xHandle, proofUrl } = body;

    if (!walletAddress || !isValidSolanaAddress(walletAddress)) {
      return NextResponse.json(
        { success: false, error: 'Invalid Solana address. Must be a valid Base58 public key (e.g. from Phantom, Solflare, or Backpack).' },
        { status: 400 }
      );
    }

    const cleanHandle = sanitizeHandle(xHandle);
    if (!cleanHandle) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid X / Twitter handle.' },
        { status: 400 }
      );
    }

    // Check duplicate wallet
    const exists = inMemoryStore.some(
      (e) => e.walletAddress.toLowerCase() === walletAddress.toLowerCase()
    );

    if (exists) {
      return NextResponse.json(
        { success: false, error: 'This Solana wallet address is already registered on the whitelist!' },
        { status: 409 }
      );
    }

    const nextPioneerId = inMemoryStore.length + 421;
    const newEntry: WhitelistEntry = {
      id: `entry-${Date.now()}`,
      walletAddress,
      xHandle: cleanHandle,
      proofUrl: proofUrl || '',
      timestamp: Date.now(),
      pioneerId: nextPioneerId,
      tier: 'Guaranteed',
    };

    inMemoryStore.unshift(newEntry);

    return NextResponse.json({
      success: true,
      entry: newEntry,
      message: 'Successfully enrolled into Capy Valley Solana Pioneer Whitelist!',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error processing registration.' },
      { status: 500 }
    );
  }
}
