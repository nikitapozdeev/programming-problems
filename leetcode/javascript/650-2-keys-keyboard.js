/**
 * https://leetcode.com/problems/2-keys-keyboard
 */

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n === 1) {
    return 0;
  }

  const cache = new Array(n + 1).fill().map(() => new Array(Math.trunc(n / 2) + 1));

  const dfs = (count, clipboard) => {
    if (count > n) {
      return +Infinity;
    }

    if (count === n) {
      return 0;
    }

    if (cache[count][clipboard]) {
      return cache[count][clipboard];
    }

    cache[count][clipboard] = Math.min(
      2 + dfs(count * 2, count),
      1 + dfs(count + clipboard, clipboard)
    );

    return cache[count][clipboard];
  }

  return 1 + dfs(1, 1);
}