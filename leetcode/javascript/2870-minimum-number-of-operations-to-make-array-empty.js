/**
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const counts = {};
  for (const num of nums) {
    counts[num] = (counts[num] ?? 0) + 1;
  }  

  let operations = 0;
  for (const count of Object.values(counts)) {
    if (count === 1) {
      return -1;
    }

    operations += Math.ceil(count / 3);
  }

  return operations;
};