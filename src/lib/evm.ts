/**
 * EVM Address validation and formatting utilities
 */

export function isValidEvmAddress(address: string): boolean {
  if (!address || typeof address !== 'string') {
    return false;
  }
  const clean = address.trim();
  // Standard EVM address regex: 0x followed by exactly 40 hexadecimal characters
  return /^0x[a-fA-F0-9]{40}$/.test(clean);
}

export function formatAddress(address: string): string {
  if (!isValidEvmAddress(address)) {
    return address;
  }
  const clean = address.trim();
  return `${clean.slice(0, 6)}...${clean.slice(-4)}`;
}

export function sanitizeHandle(handle: string): string {
  if (!handle) return '';
  let clean = handle.trim();
  if (clean.startsWith('@')) {
    clean = clean.slice(1);
  }
  return clean.replace(/[^a-zA-Z0-9_]/g, '');
}
