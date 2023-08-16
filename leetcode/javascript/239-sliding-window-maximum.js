/**
 * https://leetcode.com/problems/sliding-window-maximum
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const max = [];
  const queue = [];
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[right]) {
      queue.pop();
    }
    queue.push(right);

    if (left > queue[0]) {
      queue.shift();
    }

    if ((right + 1) >= k) {
      max.push(nums[queue[0]]);
      left++;
    }
  }

  return max;
};