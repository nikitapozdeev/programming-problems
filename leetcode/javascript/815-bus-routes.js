/**
 * https://leetcode.com/problems/bus-routes
 */

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) {
    return 0;
  }

  const graph = [];
  const seen = new Set();
  const targets = new Set();
  for (let i = 0; i < routes.length; i++) {
    routes[i].sort();
    graph[i] = [];

    if (routes[i].includes(source)) {
      seen.add(i);
    }

    if (routes[i].includes(target)) {
      targets.add(i);
    }
  }

  for (let i = 0; i < routes.length; i++) {
    for (let j = i + 1; j < routes.length; j++) {
      if (routes[i].some(route => routes[j].includes(route))) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  const queue = [...seen].map(node => [node, 1]);
  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    if (targets.has(node)) {
      return depth;
    }

    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        queue.push([neighbor, depth + 1]);
      }
    }
  }
  return -1;
};