/**
 * https://leetcode.com/problems/maximum-subsequence-score
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
  const nums = new Array(nums1.length);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums1[i], nums2[i]];
  }
  nums.sort((a, b) => b[1] - a[1]);

  const heap = new PriorityQueue({ compare: (a, b) => a - b});
  let sum = 0;
  let score = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i][0];
    heap.enqueue(nums[i][0]);

    if (heap.size() > k) {
      sum -= heap.dequeue(nums[i][0]);
    }
    
    if (heap.size() === k) {
      score = Math.max(score, sum * nums[i][1]);
    } 
  }

  return score;
};