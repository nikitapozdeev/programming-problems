/**
 * https://leetcode.com/problems/tallest-billboard
 */

/**
 * Just interpretation of official solution in JS
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
  let dp = { 0: 0 };
  for (const r of rods) {
    dpClone = {...dp};
    for (let [diff, taller] of Object.entries(dp)) {
      diff = Number(diff);
      taller = Number(taller);
      const shorter = taller - diff;
      dpClone[diff + r] = Math.max(taller + r, dpClone[diff + r] || 0);
      
      const newDiff = Math.abs(shorter + r - taller);
      const newTaller = Math.max(shorter + r, taller);
      dpClone[newDiff] = Math.max(newTaller, dpClone[newDiff] || 0);
    }
    dp = dpClone;
  }

  return dp[0] || 0;
};