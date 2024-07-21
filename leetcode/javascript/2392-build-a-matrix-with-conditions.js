/**
 * https://leetcode.com/problems/build-a-matrix-with-conditions
 */

/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
  const sort = (array, n) => {
    const adj = new Array(n + 1).fill().map(() => ([]));
    const deg = new Array(n + 1).fill(0);
    const order = [];

    for (const x of array) {
      adj[x[0]].push(x[1]);
      deg[x[1]]++;
    }

    const queue = [];
    for (let i = 1; i <= n; ++i) {
      if (!deg[i]) {
        queue.push(i);
      }
    }

    while (queue.length) {
      const item = queue.shift();
      order.push(item);
      n--;
      for (const v of adj[item]) {
        deg[v]--;
        if (!deg[v]) {
          queue.push(v);
        }
      }
    }

    if (n) {
      return [];
    }

    return order;
  }

  const rows = sort(rowConditions, k);
  const cols = sort(colConditions, k);
  if (!rows.length || !cols.length) {
    return [];
  }

  const matrix = new Array(k).fill().map(() => new Array(k).fill(0));
  for (let r = 0; r < k; ++r) {
    for (let c = 0; c < k; ++c) {
      if (rows[r] === cols[c]) {
        matrix[r][c] = rows[r];
      }
    }
  }

  return matrix;
};