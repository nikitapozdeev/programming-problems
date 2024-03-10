/**
 * https://leetcode.com/problems/intersection-of-two-arrays
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const seen = {};
  const output = [];

  for (const num of nums1) {
    seen[num] = true;
  }

  for (const num of nums2) {
    if (num in seen) {
      output.push(num);
      delete seen[num];
    }
  }

  return output;
};