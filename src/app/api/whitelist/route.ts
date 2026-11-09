import { NextRequest, NextResponse } from 'next/server';
import { isValidSolanaAddress, sanitizeHandle } from '@/lib/solana';
import { WhitelistEntry } from '@/lib/types';
import { PIONEER_POOL } from '@/lib/pioneerData';

// In-memory store starting with pioneer pool sample
const inMemoryStore: WhitelistEntry[] = PIONEER_POOL.slice(0, 15).map((p, idx) => ({
  id: `entry-seed-${idx}`,
  walletAddress: p.walletAddress,
  xHandle: p.xHandle,
  proofUrl: `https://x.com/${p.xHandle}/status/18920${idx}`,
  timestamp: Date.now() - (idx * 25000 + 5000),
  pioneerId: p.pioneerId,
  tier: p.tier,
}));

export async function GET() {
  return NextResponse.json({
    success: true,
    totalCount: inMemoryStore.length + 420,
    recentEntries: inMemoryStore.slice(0, 12),
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

    const nextPioneerId = inMemoryStore.length + 433;
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
