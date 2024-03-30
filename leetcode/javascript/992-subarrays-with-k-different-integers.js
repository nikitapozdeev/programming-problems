/**
 * https://leetcode.com/problems/subarrays-with-k-different-integers
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
  const seen = new Map();
  let result = 0;
  let leftNear = 0;
  let leftFar = 0;

  for (let right = 0; right < nums.length; right++) {
    const count = (seen.get(nums[right]) || 0) + 1;
    seen.set(nums[right], count);

    while (seen.size > k) {
      const count = seen.get(nums[leftNear]) - 1;
      if (count === 0) {
        seen.delete(nums[leftNear]);
      } else {
        seen.set(nums[leftNear], count);
      }
      leftNear++;
      leftFar = leftNear;
    }

    while (true) {
      const count = seen.get(nums[leftNear]);
      if (count <= 1) {
        break;
      }
      seen.set(nums[leftNear], count - 1);
      leftNear++;
    }

    if (seen.size === k) {
      result += leftNear - leftFar + 1;
    }
  }

  return result;
};