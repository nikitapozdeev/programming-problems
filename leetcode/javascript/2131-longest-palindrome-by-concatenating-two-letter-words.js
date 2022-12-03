/**
 * https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  const hashmap = {};
  for (const word of words) {
    hashmap[word] = (hashmap[word] || 0) + 1;
  }

  let answer = 0;
  let central = false;
  for (const [word, count] of Object.entries(hashmap)) {
    const isPalindrome = word[0] === word[1];
    if (isPalindrome) {
      if (count % 2 === 0) {
        answer += count;
      } else {
        answer += count - 1;
        central = true;
      }
    } else if (word[0] < word[1]) {
      const reversed = `${word[1]}${word[0]}`;
      if (hashmap[reversed]) {
        answer += 2 * Math.min(count, hashmap[reversed]);
      }
    }
  }
  
  if (central) {
    answer++;
  }
  
  return 2 * answer;
};