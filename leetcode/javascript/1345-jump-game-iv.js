/**
 * https://leetcode.com/problems/jump-game-iv
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  const graph = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in graph) {
      graph[arr[i]].push(i);
    } else {
      graph[arr[i]] = [i];
    }
  }

  let curr = [0];
  const seen = {};
  let step = 0;

  while (curr.length) {
    const next = [];
    for (node of curr) {
      if (node === arr.length - 1) {
        return step;
      }
      
      for (const child of graph[arr[node]]) {
        if (!seen[child]) {
          seen[child] = true;
          next.push(child);
        }
      }

      graph[arr[node]] = [];

      if (node + 1 < arr.length && !seen[node + 1]) {
        seen[node + 1] = true;
        next.push(node + 1);
      }

      if (node - 1 >= 0 && !seen[node - 1]) {
        seen[node - 1] = true;
        next.push(node - 1);
      }
    }

    curr = next;
    step++;
  }

  return -1;
};