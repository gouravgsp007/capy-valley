import type { FarmInputs, FarmYieldResult } from './types';

/**
 * Calculates Farm Power and projected $CAPY yield based on player inputs.
 */
export function calculateFarmYield(inputs: FarmInputs): FarmYieldResult {
  const { capyCount, springBathLevel, harvestStreakDays, lockedTokensUsd } = inputs;

  // Base power: each capy contributes 100 base power
  const basePower = Math.max(1, capyCount) * 100;

  // Onsen Bath multiplier: +20% per bath tier (Level 1 = 1.0x, Level 5 = 1.8x)
  const bathMultiplier = 1 + (springBathLevel - 1) * 0.20;

  // Streak bonus: up to +30% for consistent daily check-ins
  const streakBonus = Math.min(30, harvestStreakDays * 2) / 100;

  // Locked tokens multiplier: every $50 adds 10% farm power, capped at 100%
  const lockBonus = Math.min(1.0, (lockedTokensUsd / 50) * 0.10);

  // Total Farm Power
  const farmPower = Math.round(basePower * bathMultiplier * (1 + streakBonus + lockBonus));

  // Yield model: Public vault distributes 50,000 $CAPY per day across all active valleys
  // Assuming a baseline total valley network power of 25,000
  const estimatedNetworkPower = 25000 + farmPower;
  const vaultSharePercent = Number(((farmPower / estimatedNetworkPower) * 100).toFixed(2));
  
  const dailyCapyYield = Math.round((50000 * vaultSharePercent) / 100);
  const estimatedMonthlyCapy = dailyCapyYield * 30;

  // Keeper offline duration based on highest keeper in squad
  const keeperOfflineHours = capyCount > 0 ? Math.min(24, 4 + capyCount * 2) : 2;

  return {
    farmPower,
    dailyCapyYield,
    vaultSharePercent,
    estimatedMonthlyCapy,
    keeperOfflineHours,
  };
}
