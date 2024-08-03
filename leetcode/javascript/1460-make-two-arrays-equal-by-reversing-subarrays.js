/**
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays
 */

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  const counter = {};
  for (const num of arr) {
    counter[num] = (counter[num] || 0) + 1;
  }

  for (const num of target) {
    if (!counter[num]) return false;
    counter[num]--;
  }

  for (const count of Object.values(counter)) {
    if (count > 0) return false;
  }

  return true;
};