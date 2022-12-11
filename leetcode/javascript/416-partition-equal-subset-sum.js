/**
 * https://leetcode.com/problems/partition-equal-subset-sum
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((acc, curr) => acc += curr);
  if (sum % 2 !== 0) {
    return false;
  }

  const target = sum / 2;
  const sums = new Set();
  sums.add(0);

  for (const num of nums) {
    for (const s of [...sums]) {
      sums.add(num + s);
    }
  }

  return sums.has(target);
};