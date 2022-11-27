/**
 * https://leetcode.com/problems/decode-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
    } else {
      let str = '';
      while (stack[stack.length - 1] !== '[') {
        str = stack.pop() + str;
      }
      stack.pop();

      let k = '';
      while (stack.length && !Number.isNaN(parseInt(stack[stack.length - 1]))) {
        k = stack.pop() + k;
      }
      stack.push(str.repeat(Number(k)));

    }
  }
  
  return stack.join('');
};