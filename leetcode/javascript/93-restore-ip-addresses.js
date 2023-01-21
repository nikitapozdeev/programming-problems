/**
 * https://leetcode.com/problems/restore-ip-addresses
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const len = s.length;
  const addresses = [];
  if (len < 4 || len > 12) {
    return addresses;
  }

  const backtrack = (charIndex, dotsCount, currentIp) => {
    if (charIndex === len && dotsCount === 4) {
      addresses.push(currentIp.slice(0, currentIp.length - 1));
      return;
    }

    if (dotsCount > 4) {
      return;
    }

    for (let i = 0; i < Math.min(i + 3, len); i++) {
      const substr = s.slice(charIndex, i + 1);
      if (Number(substr) < 256 && substr.length > 0 && !(substr.length > 1 && substr[0] === '0')) {
        backtrack(i + 1, dotsCount + 1, currentIp + substr + '.')
      }
    }
  }

  backtrack(0, 0, '');
  return addresses;
};