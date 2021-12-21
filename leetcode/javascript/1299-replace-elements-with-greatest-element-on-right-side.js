/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
  let lastIndex = arr.length - 1;
  let max = arr[lastIndex];
  arr[lastIndex] = -1;
  
  for (let i = lastIndex - 1; i >= 0; i--) {
    let buf = arr[i];
    arr[i] = max;
    if (buf > max) {
      max = buf;
    }
  }
  
  return arr;
};