/**
 * https://leetcode.com/problems/number-of-zero-filled-subarrays
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let answer = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
};