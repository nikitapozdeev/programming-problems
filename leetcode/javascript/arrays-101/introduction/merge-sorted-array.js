/**
 * https://leetcode.com/problems/merge-sorted-array/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  let current = m + n - 1;

  while (current >= 0) {
    if (right < 0 || nums1[left] > nums2[right]) {
      nums1[current] = nums1[left];
      left--;
    } else {
      nums1[current] = nums2[right];
      right--;
    }
    current--;
  }
};