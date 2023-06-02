/**
 * https://leetcode.com/problems/detonate-the-maximum-bombs
 */

/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  const adj = [...new Array(bombs.length)].map(() => []);
  for (let i = 0; i < bombs.length - 1; i++) {
    for (let j = i + 1; j < bombs.length; j++) {
      const [x1, y1, r1] = bombs[i];
      const [x2, y2, r2] = bombs[j];
      const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      if (d <= r1) {
        adj[i].push(j);
      }
      if (d <= r2) {
        adj[j].push(i);
      }
    }
  }

  const dfs = (i, seen) => {
    if (seen[i]) {
      return 0;
    }

    seen[i] = true;
    let count = 1;
    for (const nei of adj[i]) {
      count += dfs(nei, seen);
    }

    return count;
  }

  let max = 0;
  for (let i = 0; i < bombs.length; i++) {
    max = Math.max(max, dfs(i, {}));
  }

  return max;
};