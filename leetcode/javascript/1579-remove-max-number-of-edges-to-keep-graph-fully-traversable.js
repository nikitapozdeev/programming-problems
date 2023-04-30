/**
 * https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  const aliceUF = new UF(n);
  const bobUF = new UF(n);
  let count = 0;
  
  for (const [type, from, to] of edges) {
    if (type === 3) {
      const aliceJoined = aliceUF.join(from, to);
      const bobJoined = bobUF.join(from, to);
      count += (aliceJoined | bobJoined);
    }
  }

  for (const [type, from, to] of edges) {
    if (type === 2) {
      if (bobUF.join(from, to)) {
        count++;
      }
    } else if (type === 1) {
      if (aliceUF.join(from, to)) {
        count++;
      }
    }
  }

  if (aliceUF.isConnected() && bobUF.isConnected()) {
    return edges.length - count;
  }

  return -1;
};

class UF {
  constructor(size) {
    this.size = size;
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
      return false;
    }

    if (this.rank[groupA] > this.rank[groupB]) {
      this.group[groupB] = groupA;
    } else if (this.rank[groupA] < this.rank[groupB]) {
      this.group[groupA] = groupB;
    } else {
      this.group[groupA] = groupB;
      this.rank[groupB]++;
    }

    this.size--;
    return true;
  }

  isConnected() {
    return this.size === 1
  }
}