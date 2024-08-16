/**
 * https://leetcode.com/problems/maximum-distance-in-arrays
 */

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let distance = 0;

  for (let i = 1; i < arrays.length; ++i) {
    distance = Math.max(distance, arrays[i][arrays[i].length - 1] - min, max - arrays[i][0]);
    min = Math.min(min, arrays[i][0]);
    max = Math.max(max, arrays[i][arrays[i].length - 1]);
  }

  return distance;
};