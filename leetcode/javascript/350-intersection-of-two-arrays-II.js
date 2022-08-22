/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  const seen = {};
  for (const num of nums1) {
    seen[num] = seen[num] ? seen[num] + 1 : 1;
  }
  
  const result = [];
  for (const num of nums2) {
    if (seen[num] > 0) {
      result.push(num);
      seen[num]--;
    }
  }
  
  return result;
};