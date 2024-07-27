/**
 * https://leetcode.com/problems/minimum-cost-to-convert-string-i
 */

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
  const adj = {};
  for (let i = 0; i < original.length; ++i) {
    if (!adj[original[i]]) {
      adj[original[i]] = [];
    }

    adj[original[i]].push([changed[i], cost[i]]);
  }  

  const dijkstra = (src) => {
    const map = {};
    const minHeap = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    minHeap.enqueue([src, 0]);

    while (minHeap.size()) {
      const [node, cost] = minHeap.dequeue();
      if (node in map) {
        continue;
      }

      map[node] = cost;
      for (const [neiNode, neiCost] of adj[node] ?? []) {
        minHeap.enqueue([neiNode, cost + neiCost]);
      }
    }

    return map;
  }

  const maps = {};
  for (const char of new Set([...source])) {
    maps[char] = dijkstra(char);
  }


  let minCost = 0;
  for (let i = 0; i < source.length; ++i) {
    const srcChar = source[i];
    const targetChar = target[i];
    if (!(targetChar in maps[srcChar])) {
      return -1;
    }

    minCost += maps[srcChar][targetChar];
  }

  return minCost;
};