/**
 * https://leetcode.com/problems/solving-questions-with-brainpower
 */

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const cache = new Array(questions.length);
  const solve = (q) => {
    if (q >= questions.length) {
      return 0;
    }

    if (cache[q] !== undefined) {
      return cache[q];
    }

    const [points, brainpower] = questions[q];
    cache[q] = Math.max(points + solve(q + brainpower + 1), solve(q + 1));
    return cache[q];
  }

  return solve(0);
};