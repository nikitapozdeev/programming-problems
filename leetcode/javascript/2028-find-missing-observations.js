/**
 * https://leetcode.com/problems/find-missing-observations
 */

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
  const m = rolls.length;
  const len = n + m;
  const mSum = rolls.reduce((acc, curr) => acc += curr, 0);
  const nSum = mean * len - mSum;
  const int = Math.floor(nSum / n);
  const dec = Math.ceil(nSum % n);

  if (nSum > (6 * n) || nSum < n) {
    return [];
  } 

  const output = new Array(n).fill(int);
  for (let i = 0; i < dec; ++i) {
    output[i]++;
  }
  
  return output;
};