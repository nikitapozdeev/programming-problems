/**
 * https://leetcode.com/problems/find-center-of-star-graph
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const [first, second] = edges;
  if (first[0] === second[0] || first[0] === second[1]) {
    return first[0];
  }

  return first[1];
};