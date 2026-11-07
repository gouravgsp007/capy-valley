import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidSolanaAddress, formatAddress, sanitizeHandle } from '../src/lib/solana.ts';
import { calculateFarmYield } from '../src/lib/calculator.ts';

test('Solana Address Validation', async (t) => {
  await t.test('accepts valid Solana Base58 public keys', () => {
    // Standard 44-char base58 Solana public key
    assert.equal(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'), true);
    assert.equal(isValidSolanaAddress('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), true);
    assert.equal(isValidSolanaAddress('11111111111111111111111111111111'), true); // System program (32 chars)
  });

  await t.test('rejects invalid Solana addresses', () => {
    assert.equal(isValidSolanaAddress(''), false);
    assert.equal(isValidSolanaAddress('0x71C7656EC7ab88b098defB751B7401B5f6d8976F'), false); // EVM 0x address rejected
    assert.equal(isValidSolanaAddress('7xKXtg'), false); // Too short (<32)
    assert.equal(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU000000000000000000000'), false); // Too long (>44)
    assert.equal(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAs0'), false); // '0' is not in Base58
    assert.equal(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsI'), false); // 'I' is not in Base58
    assert.equal(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsO'), false); // 'O' is not in Base58
    assert.equal(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsl'), false); // 'l' is not in Base58
  });

  await t.test('formats Solana address correctly with ellipsis', () => {
    assert.equal(formatAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'), '7xKX...gAsU');
    assert.equal(formatAddress('short'), 'short');
  });

  await t.test('sanitizes social handles properly', () => {
    assert.equal(sanitizeHandle('@capy_solana'), 'capy_solana');
    assert.equal(sanitizeHandle('capy_pioneer!'), 'capy_pioneer');
  });
});

test('Farm Yield Calculations', async (t) => {
  await t.test('calculates correct yield for 1 Capy at base level', () => {
    const res = calculateFarmYield({
      capyCount: 1,
      springBathLevel: 1,
      harvestStreakDays: 0,
      lockedTokensUsd: 0,
    });
    assert.equal(res.farmPower, 100);
    assert.equal(res.keeperOfflineHours, 6);
    assert.ok(res.dailyCapyYield > 0);
    assert.ok(res.vaultSharePercent > 0);
  });

  await t.test('increases power with higher bath levels and streak', () => {
    const base = calculateFarmYield({
      capyCount: 3,
      springBathLevel: 1,
      harvestStreakDays: 0,
      lockedTokensUsd: 0,
    });

    const upgraded = calculateFarmYield({
      capyCount: 3,
      springBathLevel: 5,
      harvestStreakDays: 10,
      lockedTokensUsd: 100,
    });

    assert.ok(upgraded.farmPower > base.farmPower);
    assert.ok(upgraded.dailyCapyYield > base.dailyCapyYield);
  });
});
