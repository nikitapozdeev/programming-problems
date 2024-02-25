/**
 * https://leetcode.com/problems/greatest-common-divisor-traversal
 */

class UF {
  constructor(n) {
    this.parent = new Array(n - 1);
    this.size = new Array(n).fill(1);
    this.count = n;
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(node) {
    if (node !== this.parent[node]) {
      this.parent[node] = this.find(this.parent[node]);
    }

    return this.parent[node];
  }

  union(nodeA, nodeB) {
    const aParent = this.find(nodeA);
    const bParent = this.find(nodeB);
    
    if (aParent === bParent) {
      return;
    }

    if (this.size[aParent] < this.size[bParent]) {
      this.parent[aParent] = bParent;
      this.size[bParent] += this.size[aParent];
    } else {
      this.parent[bParent] = aParent;
      this.size[aParent] += this.size[bParent];
    }

    this.count--;
  }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums) {
  const uf = new UF(nums.length);
  const factorMap = {};

  for (let i = 0; i < nums.length; i++) {
    let f = 2;
    let num = nums[i];
    
    while (f * f <= num) {
      if (num % f === 0) {
        if (f in factorMap) {
          uf.union(i, factorMap[f]);
        } else {
          factorMap[f] = i;
        }

        while (num % f === 0) {
          num = Math.trunc(num / f);
        }
      }

      f++;
    }

    if (num > 1) {
      if (num in factorMap) {
        uf.union(i, factorMap[num]);
      } else {
        factorMap[num] = i;
      }
    }
  }

  return uf.count === 1;
};