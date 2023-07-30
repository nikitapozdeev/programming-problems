/**
 * https://leetcode.com/problems/strange-printer
 */

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  const len = s.length;
  const cache = new Array(len).fill().map(() => new Array(len));

  const turn = (left, right) => {
    if (cache[left][right] !== undefined) {
      return cache[left][right];
    }

    cache[left][right] = len;
    let j = -1;

    for (let i = left; i < right; i++) {
      if (s[i] !== s[right] && j === -1) {
        j = i;
      }

      if (j !== -1) {
        cache[left][right] = Math.min(
          cache[left][right],
          1 + turn(j, i) + turn(i + 1, right)
        );
      }
    }

    if (j === -1) {
      cache[left][right] = 0;
    }

    return cache[left][right];
  }

  return 1 + turn(0, len - 1);
};