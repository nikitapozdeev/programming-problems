/**
 * https://leetcode.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  k = k % nums.length;
  if (k === 0) {
    return;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

var reverse = function(nums, start, end) {
  let buf;
  while (start < end) {
    buf = nums[end];
    nums[end] = nums[start];
    nums[start] = buf;
    start++;
    end--;
  }
  return nums;
}