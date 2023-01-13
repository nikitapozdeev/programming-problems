/**
 * https://leetcode.com/problems/longest-path-with-different-adjacent-characters
 */

/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  const len = parent.length;
  const children = [...new Array(len)].map(() => []);
  for (let i = 1;  i < len; i++) {
    children[parent[i]].push(i);
  }

  let longestPath = 1;
  const dfs = (node) => {
    let longestFirst = 0;
    let longestSecond = 0;
    for (const child of children[node]) {
      const longestChild = dfs(child);
      if (s[node] === s[child]) {
        continue;
      }

      if (longestChild > longestFirst) {
        longestSecond = longestFirst;
        longestFirst = longestChild;
      } else if (longestChild > longestSecond) {
        longestSecond = longestChild;
      }
    }
    
    longestPath = Math.max(longestPath, longestFirst + longestSecond + 1);
    return longestFirst + 1;
  }

  dfs(0);
  return longestPath;
};