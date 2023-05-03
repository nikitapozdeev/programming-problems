/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const distinct1 = new Set();
  const distinct2 = new Set();

  const nums2Set = new Set(nums2);
  for (const num of nums1) {
    if (!nums2Set.has(num)) {
      distinct1.add(num);
    }
  }

  const nums1Set = new Set(nums1);
  for (const num of nums2) {
    if (!nums1Set.has(num)) {
      distinct2.add(num);
    }
  }

  return [[...distinct1], [...distinct2]];
};