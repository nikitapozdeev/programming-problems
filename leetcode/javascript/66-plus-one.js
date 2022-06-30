/**
 * https://leetcode.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) { 
  let overflow = 1;
  let index = digits.length - 1;
  let sum = 0;
  
  while (overflow > 0 && index >= 0) {
    sum = digits[index] + overflow;
    digits[index] = sum % 10;
    if (sum <= 9) {
      overflow = 0;
    }
    index--;
  }
  
  if (overflow === 1) {
    digits.unshift(overflow);
  }
  
  return digits;
};