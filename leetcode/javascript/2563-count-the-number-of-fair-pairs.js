/**
 * https://leetcode.com/problems/count-the-number-of-fair-pairs
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  const lowBound = (low, high, threshold) => {
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (nums[mid] >= threshold) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  nums.sort((a, b) => a - b);
  let pairs = 0;
  
  for (let i = 0; i < nums.length; ++i) {
    const l = lowBound(i + 1, nums.length - 1, lower - nums[i]);
    const r = lowBound(i + 1, nums.length - 1, upper - nums[i] + 1);
    pairs += (r - l);
  }

  return pairs;
};