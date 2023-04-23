/**
 * https://leetcode.com/problems/restore-the-array
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) {
  const cache = new Array(s.length + 1);

  const dfs = (left) => {
    if (cache[left] !== undefined) {
      return cache[left];
    }

    if (left === s.length) {
      return 1;
    }

    // skip leading zeros
    if (s[left] === '0') {
      return 0;
    }

    let count = 0;
    for (let right = left; right < s.length; right++) {
      if (Number(s.substring(left, right + 1)) > k) {
        break;
      }

      count = ((count + dfs(right + 1)) % (1e9 + 7));
    }

    cache[left] = count
    return cache[left];
  }

  return dfs(0);
};