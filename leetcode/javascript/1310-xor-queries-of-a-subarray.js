/**
 * https://leetcode.com/problems/xor-queries-of-a-subarray
 */

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  const prefix = new Array(arr.length);
  prefix[0] = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    prefix[i] = arr[i] ^ prefix[i - 1];
  }

  const output = new Array(queries.length);
  for (let i = 0; i < queries.length; ++i) {
    const [from, to] = queries[i];
    const before = from > 0 ? prefix[from - 1] : 0;
    const current = prefix[to];
    output[i] = current ^ before;
  }

  return output;
};