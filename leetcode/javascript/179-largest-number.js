/**
 * https://leetcode.com/problems/largest-number
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = String(nums[i]);
  }

  nums.sort((a, b) => {
    if ((a + b) < (b + a)) {
      return 1;
    } else {
      return -1;
    }
  });

  return String(BigInt(nums.join('')));
};