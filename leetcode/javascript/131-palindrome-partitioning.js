/**
 * https://leetcode.com/problems/palindrome-partitioning
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const partitions = [];
  const charCount = s.length;

  const isPalindrome = (str) => {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  const backtrack = (startIndex, palindromes) => {
    if (startIndex === charCount) {
      partitions.push(palindromes);
      return;
    }

    for (let endIndex = startIndex; endIndex < charCount; endIndex++) {
      const substr = s.slice(startIndex, endIndex + 1);
      if (isPalindrome(substr)) {
        palindromes.push(substr);
        backtrack(endIndex + 1, [...palindromes]);
        palindromes.pop();
      }
    }
  }

  backtrack(0, []);
  return partitions;
};