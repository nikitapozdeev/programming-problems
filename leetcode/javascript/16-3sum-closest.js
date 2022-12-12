/**
 * https://leetcode.com/problems/3sum-closest
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = +Infinity;

  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
    }
  }

  return closestSum;
};