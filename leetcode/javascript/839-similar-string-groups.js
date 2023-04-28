/**
 * https://leetcode.com/problems/similar-string-groups
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const isSimilar = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff++;
      }
    }
    return diff === 0 || diff === 2;
  }

  const adj = {};
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (isSimilar(strs[i], strs[j])) {
        adj[i] = (adj[i] || []).concat(j);
        adj[j] = (adj[j] || []).concat(i);
        console.log(adj)
      }
    }
  }

  const seen = {};
  const dfs = (index) => {
    seen[index] = true;
    for (const nei of adj[index] || []) {
      if (!seen[nei]) {
        dfs(nei);
      }
    }
  }

  let groups = 0;
  for (let i = 0; i < strs.length; i++) {
    if (!seen[i]) {
      dfs(i);
      groups++;
    }
  }

  return groups;
};