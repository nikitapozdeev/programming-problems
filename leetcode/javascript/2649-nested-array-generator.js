/**
 * https://leetcode.com/problems/nested-array-generator
 */

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  for (const el of arr) {
    if (Array.isArray(el)) {
      yield* inorderTraversal(el);
    } else {
      yield el;
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */