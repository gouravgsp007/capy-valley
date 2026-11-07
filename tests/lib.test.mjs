import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEvmAddress, formatAddress, sanitizeHandle } from '../src/lib/evm.ts';
import { calculateFarmYield } from '../src/lib/calculator.ts';

test('EVM Address Validation', async (t) => {
  await t.test('accepts valid EVM addresses', () => {
    assert.equal(isValidEvmAddress('0x71C7656EC7ab88b098defB751B7401B5f6d8976F'), true);
    assert.equal(isValidEvmAddress('0x0000000000000000000000000000000000000000'), true);
    assert.equal(isValidEvmAddress('0xabcdefabcdefabcdefabcdefabcdefabcdefabcd'), true);
  });

  await t.test('rejects invalid EVM addresses', () => {
    assert.equal(isValidEvmAddress(''), false);
    assert.equal(isValidEvmAddress('0x123'), false);
    assert.equal(isValidEvmAddress('71C7656EC7ab88b098defB751B7401B5f6d8976F'), false); // missing 0x
    assert.equal(isValidEvmAddress('0x71C7656EC7ab88b098defB751B7401B5f6d8976G'), false); // invalid hex 'G'
    assert.equal(isValidEvmAddress('random text'), false);
  });

  await t.test('formats address correctly with ellipsis', () => {
    assert.equal(formatAddress('0x71C7656EC7ab88b098defB751B7401B5f6d8976F'), '0x71C7...976F');
    assert.equal(formatAddress('invalid'), 'invalid');
  });

  await t.test('sanitizes handles properly', () => {
    assert.equal(sanitizeHandle('@capy_master'), 'capy_master');
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
