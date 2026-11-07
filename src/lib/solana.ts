/**
 * Solana Address validation and formatting utilities
 */

// Base58 regex for Solana Ed25519 public keys (32 to 44 characters, excluding 0, O, I, l)
const SOLANA_ADDRESS_REGEX = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

export function isValidSolanaAddress(address: string): boolean {
  if (!address || typeof address !== 'string') {
    return false;
  }
  const clean = address.trim();
  return SOLANA_ADDRESS_REGEX.test(clean);
}

// Backward-compatible alias
export const isValidAddress = isValidSolanaAddress;
export const isValidEvmAddress = isValidSolanaAddress;

export function formatAddress(address: string): string {
  if (!address || typeof address !== 'string') {
    return '';
  }
  const clean = address.trim();
  if (clean.length < 10) {
    return clean;
  }
  return `${clean.slice(0, 4)}...${clean.slice(-4)}`;
}

export function sanitizeHandle(handle: string): string {
  if (!handle) return '';
  let clean = handle.trim();
  if (clean.startsWith('@')) {
    clean = clean.slice(1);
  }
  return clean.replace(/[^a-zA-Z0-9_]/g, '');
}
