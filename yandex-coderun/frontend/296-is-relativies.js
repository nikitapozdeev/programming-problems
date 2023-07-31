/**
 * @param {string} genA
 * @param {string} genB
 * @param {number} level
 * @returns {boolean}
*/
function isRelativies(genA, genB, level) {
  const dp = new Array(genA.length + 1).fill()
    .map(() => new Array(genB.length + 1).fill(0));

  let max = 0;
  for (let i = 0; i <= genA.length; i++) {
    for (let j = 0; j <= genB.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (genA[i - 1] === genB[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  if (max === 0) {
    return false;
  }

  return (Math.max(genA.length, genB.length) - max) <= level;
}

exports.isRelativies = isRelativies;