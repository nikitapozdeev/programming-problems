/**
 * https://leetcode.com/problems/third-maximum-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
  let firstMax = null;
  let secondMax = null;
  let thirdMax = null;
  
  let current;
  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    if (firstMax === current || secondMax === current || thirdMax === current) {
      continue;
    }
    
    if (firstMax === null || current > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = current;
    } else if (secondMax === null || current > secondMax) {
      thirdMax = secondMax;
      secondMax = current;
    } else if (thirdMax === null || current > thirdMax) {
      thirdMax = current;
    }
  }
  
  return thirdMax !== null ? thirdMax : firstMax;
};