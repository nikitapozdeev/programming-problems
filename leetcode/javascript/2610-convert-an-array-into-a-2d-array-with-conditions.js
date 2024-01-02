/**
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  const rows = [];
  const map = {};

  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1;
    const count = map[num];
    if (rows.length < count) {
      rows.push([]);
    }

    rows[count - 1].push(num);
  }

  return rows;
};