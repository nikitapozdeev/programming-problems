/**
 * https://leetcode.com/problems/minimum-common-value
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr1 < nums1.length && ptr2 < nums2.length) {
    if (nums1[ptr1] < nums2[ptr2]) {
      ptr1++;
    } else if (nums2[ptr2] < nums1[ptr1]) {
      ptr2++;
    } else {
      return nums1[ptr1];
    }
  }

  return -1;
};