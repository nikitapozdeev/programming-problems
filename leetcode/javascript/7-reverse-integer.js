/**
 * https://leetcode.com/problems/reverse-integer/
 */

/**
 * TODO: this is dumb solution, need some research and rework.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let chars = Math.abs(x).toString().split('');
  let len = chars.length;

  for (let i = 0; i < len / 2; i++) {
    let tmp = chars[i];
    chars[i] = chars[len - 1 - i];
    chars[len - 1 - i] = tmp;
  }
  
  const int32Size = 2 ** 31;
  const sign = x >= 0 ? 1 : -1;
  const num = Number(chars.join('')) * sign;

  if (num >= -int32Size && num <= (int32Size - 1)) {
    return num;
  }
  
  return 0;
};