/**
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const seen = {};
  
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    
    if (seen[remainder] !== undefined) {
      return [seen[remainder], i];
    }
    
    seen[nums[i]] = i; 
  }
};