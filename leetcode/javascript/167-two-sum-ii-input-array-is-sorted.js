/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  const remainders = {};
  let remainder;
  
  for (let i = 0; i < numbers.length; i++) {
    remainder = remainders[numbers[i]];
    if (remainder) {
      return [remainder, i + 1];
    }
    remainders[target - numbers[i]] = i + 1;
  }
};