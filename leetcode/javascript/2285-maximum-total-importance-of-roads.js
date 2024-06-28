/**
 * https://leetcode.com/problems/maximum-total-importance-of-roads
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
  const count = new Array(n).fill(0);
  for (const [from, to] of roads) {
    count[from]++;
    count[to]++;
  }

  count.sort((a, b) => a - b);

  let sum = 0;
  let importance = 1;
  for (const c of count) {
    sum += importance * c;
    importance++;
  }

  return sum;
};