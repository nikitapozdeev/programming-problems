/**
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  const isPalindrome = (word) => {
    let l = 0;
    let r = word.length - 1;

    while (l < r) {
      if (word[l] !== word[r]) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }

  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return "";
};