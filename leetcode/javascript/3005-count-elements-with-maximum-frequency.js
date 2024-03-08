/**
 * https://leetcode.com/problems/count-elements-with-maximum-frequency/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const frequencies = {};
  let max = 0;
  let total = 0;

  for (const num of nums) {
    frequencies[num] = (frequencies[num] ?? 0) + 1;
    if (frequencies[num] > max) {
      max = frequencies[num];
      total = frequencies[num];
    } else if (max === frequencies[num]) {
      total += frequencies[num];
    }
  }
  
  return total;
};