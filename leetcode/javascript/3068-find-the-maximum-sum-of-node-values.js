/**
 * https://leetcode.com/problems/find-the-maximum-sum-of-node-values
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
  const diff = nums.map(n => (n ^ k) - n);
  diff.sort((a, b) => b - a);
  let sum = nums.reduce((acc, curr) => acc + curr);
  
  for (let i = 0; i < diff.length; i += 2) {
    if (i === diff.length - 1) {
      break;
    }

    if ((diff[i] + diff[i + 1]) <= 0) {
      break;
    }

    sum += diff[i] + diff[i + 1];
  }

  return sum;
};