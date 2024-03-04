/**
 * https://leetcode.com/problems/bag-of-tokens/
 */

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  tokens.sort((a, b) => a - b);
  let maxScore = 0;
  let score = 0;
  let small = 0;
  let big = tokens.length - 1; 
  
  while (small <= big) {
    if (power >= tokens[small]) {
      power -= tokens[small];
      score++;
      small++;
      maxScore = Math.max(maxScore, score);
    } else if (score > 0) {
      power += tokens[big];
      score--;
      big--;
    } else {
      break;
    }
  }

  return maxScore;
};