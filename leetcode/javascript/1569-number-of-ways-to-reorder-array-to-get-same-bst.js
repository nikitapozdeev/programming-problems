/**
 * https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
  const mod = BigInt(1e9 + 7);
  const size = nums.length;
  const table = new Array(size + 1)
    .fill()
    .map(() => new Array(size + 1));

  for (let i = 0; i < size; i++) {
    table[i][0] = table[i][i] = BigInt(1);
  }

  for (let i = 2; i < size; i++) {
    for (let j = 1; j < i; j++) {
      table[i][j] = BigInt(table[i - 1][j - 1] + table[i - 1][j]) % mod;
    }
  }

  const dfs = (nodes) => {
    if (nodes.length < 3) {
      return 1;
    }

    const left = [];
    const right = [];
    for (const node of nodes) {
      if (node < nodes[0]) {
        left.push(node);
      } else if (node > nodes[0]){
        right.push(node);
      }
    }
    const leftCount = BigInt(dfs(left)) % mod;
    const rightCount = BigInt(dfs(right)) % mod;
    return BigInt(((leftCount * rightCount) % mod) * table[nodes.length - 1][left.length]) % mod;
  }

  return Number((BigInt(dfs(nums)) - BigInt(1)) % mod);
};