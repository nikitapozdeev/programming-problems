/**
 * https://leetcode.com/problems/most-stones-removed-with-same-row-or-column
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const seen = {};
  let answer = 0;

  const dfs = (si) => {
    seen[`r${stones[si][0]}c${stones[si][1]}`] = true;
    for (let i = 0; i < stones.length; i++) {
      if (!seen[`r${stones[i][0]}c${stones[i][1]}`]) {
        if (stones[si][0] === stones[i][0] || stones[si][1] === stones[i][1]) {
          dfs(i);
        }
      }
    }
  }

  for (let i = 0; i < stones.length; i++) {
    if (!seen[`r${stones[i][0]}c${stones[i][1]}`]) {
      dfs(i);
      answer++;
    }
  }

  return stones.length - answer;
};