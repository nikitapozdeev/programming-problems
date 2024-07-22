/**
 * https://leetcode.com/problems/sort-the-people/
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  return names.map((name, index) => ({ name, index })).sort((a, b) => heights[b.index] - heights[a.index]).map(x => x.name);
};