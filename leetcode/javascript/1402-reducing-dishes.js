/**
 * https://leetcode.com/problems/reducing-dishes
 */

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  let max = 0;
  let sum = 0;
  satisfaction.sort((a, b) => a - b);
  
  for (let i = satisfaction.length - 1; i >= 0 && sum + satisfaction[i] > 0; i--) {
    sum += satisfaction[i];
    max += sum;
  }

  return max;
};