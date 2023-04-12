/**
 * https://leetcode.com/problems/simplify-path
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  let buf = '';
  
  for (const char of (path + '/')) {
    if (char === '/') {
      if (buf === '..') {
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (buf !== '.' && buf !== '') {
        stack.push(buf);
      }
      buf = '';
    } else {
      buf += char;
    }
  }

  return '/' + stack.join('/')
};