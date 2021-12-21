/**
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i] * 2] || seen[arr[i] / 2]) {
      return true;
    }
    
    seen[arr[i]] = true;
  }
  
  return false;
};