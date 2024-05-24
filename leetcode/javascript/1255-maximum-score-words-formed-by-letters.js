/**
 * https://leetcode.com/problems/maximum-score-words-formed-by-letters
 */

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
  const charOffset = 'a'.charCodeAt(0);
  const frequency = new Array(26).fill(0);

  for (const char of letters) {
    frequency[char.charCodeAt(0) - charOffset]++;
  }

  const currentLetters = new Array(26).fill(0);

  const canBePicked = (set) => {
    for (let i = 0; i < 26; i++) {
      if (frequency[i] < set[i]) {
        return false;
      }
    }
    return true;
  }

  let maxScore = 0;

  const dfs = (i, currentScore) => {
    if (i === words.length) {
      maxScore = Math.max(maxScore, currentScore);
      return;
    }

    dfs(i + 1, currentScore);

    for (const char of words[i]) {
      const charIndex = char.charCodeAt(0) - charOffset;
      currentLetters[charIndex]++;
      currentScore += score[charIndex];
    }

    if (canBePicked(currentLetters)) {
      dfs(i + 1, currentScore);
    }

    for (const char of words[i]) {
      const charIndex = char.charCodeAt(0) - charOffset;
      currentLetters[charIndex]--;
      currentScore -= score[charIndex];
    }
  }

  dfs(0, 0);
  return maxScore;
};