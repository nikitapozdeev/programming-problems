/**
 * https://leetcode.com/problems/find-eventual-safe-states
 */

/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const answer = [];
  const seen = {};
  const stack = new Array(graph.length).fill(false);

  const dfs = (i) => {
    if (stack[i]) {
      return true;
    }

    if (seen[i]) {
      return false;
    }

    stack[i] = true;
    seen[i] = true;
    for (const nei of graph[i]) {
      if (dfs(nei)) {
        return true;
      }
    }

    stack[i] = false;
    return false;
  }

  for (let i = 0; i < graph.length; i++) {
    dfs(i);
  }

  for (let i = 0; i < graph.length; i++) {
    if (!stack[i]) {
      answer.push(i);
    }
  }

  return answer;
};