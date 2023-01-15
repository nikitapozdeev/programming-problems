/**
 * https://leetcode.com/problems/number-of-good-paths
 */

/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
  const len = vals.length;
  const neighbors = [...new Array(len)].map(() => []);
  for (const [a, b] of edges) {
    neighbors[a].push(b);
    neighbors[b].push(a);
  }

  const valuesToNodesMap = {};
  for (let node = 0; node < len; node++) {
    const nodeValue = vals[node];
    if (!valuesToNodesMap[nodeValue]) {
      valuesToNodesMap[nodeValue] = [];
    }
    valuesToNodesMap[nodeValue].push(node);
  }

  let goodPaths = 0;
  const uf = new UnionFind(len);
  for (const [value, nodes] of Object.entries(valuesToNodesMap)) {
    for (const node of nodes) {
      if (!neighbors[node]) {
        continue;
      }

      for (const neighbor of neighbors[node]) {
        if (vals[node] >= vals[neighbor]) {
          uf.union(node, neighbor);
        }
      }
    }

    const group = {};
    for (const node of nodes) {
      const index = uf.find(node);
      group[index] = (group[index] || 0) + 1;
    }

    for (const size of Object.values(group)) {
      goodPaths += size * (size + 1) / 2;
    }
  }

  return goodPaths;
};

class UnionFind {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) {
      return;
    } else if (this.rank[x] < this.rank[y]) {
      this.parent[x] = y;
    } else if (this.rank[x] > this.rank[y]) {
      this.parent[y] = x;
    } else {
      this.parent[y] = x;
      this.rank[x]++;
    }
  }
}