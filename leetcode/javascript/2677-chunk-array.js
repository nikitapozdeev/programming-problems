/**
 * https://leetcode.com/problems/chunk-array
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let ptr = 0;
  const chunks = [];
  while (ptr < arr.length) {
    chunks.push(arr.slice(ptr, ptr + size));
    ptr += size;
  }
  return chunks;
};