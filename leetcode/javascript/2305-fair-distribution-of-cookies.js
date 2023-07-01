/**
 * https://leetcode.com/problems/fair-distribution-of-cookies
 */

/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const distribution = new Array(k).fill(0);
  const len = cookies.length;

  const dfs = (i, count) => {
    if (len - i < count) {
      return +Infinity;
    }

    if (i === len) {
      let max = -Infinity;
      for (const d of distribution) {
        max = Math.max(max, d);
      }
      return max;
    }

    let answer = +Infinity;
    for (let j = 0; j < distribution.length; j++) {
      if (distribution[j] === 0) {
        count--;
      }
      distribution[j] += cookies[i];

      answer = Math.min(answer, dfs(i + 1, count));

      distribution[j] -= cookies[i];
      if (distribution[j] === 0) {
        count++;
      }
    }

    return answer;
  }

  return dfs(0);
};