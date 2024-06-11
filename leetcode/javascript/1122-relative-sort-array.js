/**
 * https://leetcode.com/problems/relative-sort-array
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const counts = {};
  for (const num of arr2) {
    counts[num] = 0;
  }

  const rest = [];
  for (const num of arr1) {
    if (num in counts) {
      counts[num]++;
    } else {
      rest.push(num);
    }
  }

  const output = [];
  for (const num of arr2) {
    while (counts[num]) {
      output.push(num);
      counts[num]--;
    }
  }

  rest.sort((a, b) => a - b);
  return output.concat(rest);
};