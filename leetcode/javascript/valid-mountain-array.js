/**
 * https://leetcode.com/problems/valid-mountain-array/
 */

// dumb solution
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false;
  }
  
  let prev = arr[0];
  let decreasing = false;
  for (let i = 1; i < arr.length; i++) {
    if (!decreasing) {
      if (arr[i] <= prev) {
        if (i === 1) {
          return false;
        }
        
        decreasing = true;
      }
    }
    
    if (decreasing) {
      if (arr[i] >= prev) {
        return false;
      }
    }
    
    prev = arr[i];
  }
  
  return decreasing;
};