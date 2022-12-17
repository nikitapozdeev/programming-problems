/**
 * https://leetcode.com/problems/number-of-provinces
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const seen = new Set();
  let provinces = 0;
  
  const dfs = (province) => {
    seen.add(province);
    for (let i = 0; i < isConnected.length; i++) {
      if (province !== i && isConnected[i][province] === 1) {
        if (!seen.has(i)) {
          dfs(i);
        }
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (!seen.has(i)) {
      dfs(i);
      provinces++;
    }
  }

  return provinces;
};