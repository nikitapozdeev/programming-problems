/**
 * https://leetcode.com/problems/bulls-and-cows/
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const map = {};
  
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (map[secret[i]] < 0) {
        cows++;
      }
      if (map[guess[i]] > 0) {
        cows++;
      }
      map[secret[i]] = (map[secret[i]] || 0) + 1;
      map[guess[i]] = (map[guess[i]] || 0) - 1;
    }
  }
  return `${bulls}A${cows}B`;
};