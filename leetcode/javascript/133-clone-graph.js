/**
 * https://leetcode.com/problems/clone-graph
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) {
    return node;
  }

  const clones = {};
  const clone = (curr) => {
    if (clones[curr.val]) {
      return clones[curr.val];
    }

    const nodeClone = new Node(curr.val);
    clones[curr.val] = nodeClone;
    for (const neighbor of curr.neighbors) {
      nodeClone.neighbors.push(clone(neighbor));
    }
    return nodeClone;
  }

  return clone(node);
};