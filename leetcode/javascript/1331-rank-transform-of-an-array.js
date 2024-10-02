/**
 * https://leetcode.com/problems/rank-transform-of-an-array
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const ranks = {};

  let rank = 1;
  for (let i = 0; i < sorted.length; ++i) {
    ranks[sorted[i]] = rank;
    if (sorted[i] !== sorted[i + 1]) {
      rank++;
    }
  }

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = ranks[arr[i]];
  }

  return arr;
};