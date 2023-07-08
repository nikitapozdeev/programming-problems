/**
 * https://leetcode.com/problems/put-marbles-in-bags
 */

/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
  const pairs = new Array(weights.length);
  for (let i = 0; i < weights.length - 1; i++) {
    pairs[i] = weights[i] + weights[i + 1];
  }
  
  pairs.sort((a, b) => a - b);
  
  let diff = 0;
  for (let i = 0; i < k - 1; i++) {
    diff += pairs[weights.length - 2 - i] - pairs[i];
  }

  return diff;
};