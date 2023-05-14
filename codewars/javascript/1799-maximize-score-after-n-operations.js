/**
 * https://leetcode.com/problems/maximize-score-after-n-operations
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const cache = {};
  const dfs = (mask, op) => {
    if (mask in cache) {
      return cache[mask];
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (((1 << i) & mask) || ((1 << j) & mask)) {
          continue;
        }

        const score = op * gcd(nums[i], nums[j]);
        cache[mask] = Math.max(
          cache[mask] || 0,
          score + dfs(mask | (1 << i) | (1 << j), op + 1)
        );
      }
    }

    return cache[mask] || 0;
  }

  return dfs(0, 1);
};

function gcd(a, b) {
  // Euclidean algorithm
  let dividend = Math.max(a, b);
  let divider = Math.min(a, b);
  let remainder = dividend % divider;

  while (remainder !== 0) {
    dividend = divider;
    divider = remainder;
    remainder = dividend % divider;
  }
  
  return divider;
}