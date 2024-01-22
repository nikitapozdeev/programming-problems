/**
 * https://leetcode.com/problems/set-mismatch
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const seen = {};
  for (const num of nums) {
    seen[num] = (seen[num] || 0) + 1;
  }

  const total = Object.keys(seen).length;
  let duplicated = null;
  let missed = null;

  for (let i = 0; i <= total; i++) {
    const num = i + 1;
    if (seen[num] === undefined) {
      missed = num;
    } else if (seen[num] === 2) {
      duplicated = num;
    }
  }

  return [duplicated, missed];
};