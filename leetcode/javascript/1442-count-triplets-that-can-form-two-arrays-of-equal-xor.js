/**
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    ix = 0;
    for (let j = i + 1; j < arr.length; j++) {
      ix ^= arr[j - 1];
      jx = 0;
      for (let k = j; k < arr.length; k++) {
        jx ^= arr[k];
        count += Number(ix === jx);
      }
    }
  }

  return count;
};