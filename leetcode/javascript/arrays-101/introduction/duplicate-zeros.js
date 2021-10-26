/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
 */

// dumb solution with high O(N^2) complexity

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let index = 0;
  let len = arr.length;

  while (index < len - 1) {
    if (arr[index] === 0) {
      for (let i = len - 1; i > index + 1; i--) {
        arr[i] = arr[i - 1];
      }
      arr[index + 1] = 0;
      index++;
    }
    index++;
  }
};
