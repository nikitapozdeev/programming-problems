/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }
  const charMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const combinations = [];

  const dfs = (i, combination) => {
    if (combination.length === digits.length) {
      combinations.push(combination.join(''));
      return;
    }

    const chars = charMap[digits[i]];
    for (const char of chars) {
      combination.push(char);
      dfs(i + 1, combination);
      combination.pop();
    }
  }

  dfs(0, []);

  return combinations;
};