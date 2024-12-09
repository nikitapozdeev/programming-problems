/**
 * https://leetcode.com/problems/special-array-ii
 */

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
  const prefix = new Array(nums.length).fill(0);
  let value = 0;

  const isEven = (num) => num % 2 === 0;

  for (let i = 1; i < nums.length; ++i) {
    if (isEven(nums[i]) === isEven(nums[i - 1])) {
      value++;
    } 
    prefix[i] = value;
  }

  const output = new Array(queries.length);
  for (let i = 0; i < queries.length; ++i) {
    const [from, to] = queries[i];
    output[i] = prefix[from] === prefix[to];
  }

  return output;
};