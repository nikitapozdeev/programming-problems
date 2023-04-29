/**
 * https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
 */

/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
  const answer = new Array(queries.length);
  const uf = new UF(n);

  const indexedQueries = queries.map((q, i) => q.concat(i));
  indexedQueries.sort((a, b) => a[2] - b[2]);
  edgeList.sort((a, b) => a[2] - b[2]);

  let edgesIndex = 0;
  for (const [from, to, limit, originalIndex] of indexedQueries) {
    while (edgesIndex < edgeList.length && edgeList[edgesIndex][2] < limit) {
      uf.join(edgeList[edgesIndex][0], edgeList[edgesIndex][1]);
      edgesIndex++;
    }
    answer[originalIndex] = uf.areConnected(from, to);
  }
  return answer;
};

class UF {
  constructor(size) {
    this.group = [];
    this.rank = [];
    for (let i = 0; i < size; i++) {
      this.group[i] = i;
    }
  }

  find(node) {
    if (this.group[node] !== node) {
      this.group[node] = this.find(this.group[node]);
    }
    return this.group[node];
  }

  join(nodeA, nodeB) {
    const groupA = this.find(nodeA);
    const groupB = this.find(nodeB);

    if (groupA === groupB) {
      return;
    }

    if (this.rank[groupA] > this.rank[groupB]) {
      this.group[groupB] = groupA;
    } else if (this.rank[groupA] < this.rank[groupB]) {
      this.group[groupA] = groupB;
    } else {
      this.group[groupA] = groupB;
      this.rank[groupB]++;
    }
  }

  areConnected(nodeA, nodeB) {
    return this.find(nodeA) === this.find(nodeB);
  }
}