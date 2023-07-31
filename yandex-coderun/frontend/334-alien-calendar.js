/** @returns string */
module.exports = function(inputString) {
  const matches = inputString.match(/\b(?<=ta')(So|Ko|Ta|Qa|Goo)\s*(\d*)\b/i);
  if (!matches || !matches[1] || !matches[2]) {
    return '0';
  }
  return `${matches[1].toLowerCase()} ${matches[2]}`;
}