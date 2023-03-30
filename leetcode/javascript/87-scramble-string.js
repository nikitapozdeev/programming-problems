/**
 * https://leetcode.com/problems/scramble-string
 */

/**
 * It's too hard, just take this from editorial and translate to js.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  const len = s1.length;
  const cache = [...new Array(len + 1)]
    .map(() => [...new Array(len)]
      .map(() => [...new Array(len)]));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      cache[1][i][j] = s1[i] === s2[j];
    }
  }

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len + 1 - l; i++) {
      for (let j = 0; j < len + 1 - l; j++) {
        for (let nl = 1; nl < l; nl++) {
          const x = cache[nl][i];
          const y = cache[l - nl][i + nl];
          cache[l][i][j] |= x[j] && y[j + nl];
          cache[l][i][j] |= x[j + l - nl] && y[j];
        }
      }
    }
  }
  
  return cache[len][0][0];
};