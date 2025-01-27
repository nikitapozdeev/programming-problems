/**
 * https://leetcode.com/problems/3sum
 */

/**
 * Time: O(nlogn) + O(n^2) = O(n^2)
 * Memory: O(1) or O(n) depends on the sorting implementation
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};