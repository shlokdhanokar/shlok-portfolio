/**
 * Streak Configuration
 * 
 * All streak values auto-increment by +1 per day from the base date.
 * To update: change the base values and set BASE_DATE to the current date.
 */

// The date these base values were recorded
const BASE_DATE = new Date('2026-04-29');

// Base values as of BASE_DATE
const BASE_STREAKS = {
  leetcode: 320,
  codechef: 268,
  duolingo: 151,
};

/**
 * Calculate the number of days elapsed since BASE_DATE
 */
function daysSinceBase(): number {
  const now = new Date();
  const diffMs = now.getTime() - BASE_DATE.getTime();
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

/**
 * Get current streak values (auto-incremented daily)
 */
export function getStreaks() {
  const elapsed = daysSinceBase();
  return {
    leetcode: BASE_STREAKS.leetcode + elapsed,
    codechef: BASE_STREAKS.codechef + elapsed,
    duolingo: BASE_STREAKS.duolingo + elapsed,
  };
}
