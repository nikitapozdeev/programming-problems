/**
 * https://leetcode.com/problems/fraction-addition-and-subtraction
 */

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
  const numbers = expression.split(/(?=[-+])/);
  let numerator = 0;
  let denominator = 1;

  for (const number of numbers) {
    const [localNumrator, localDenominator] = number.split('/').map(Number);
    numerator = (numerator * localDenominator) + (localNumrator * denominator);
    denominator *= localDenominator;
  }

  const commonDenominator = Math.abs(gcd(numerator, denominator));

  numerator /= commonDenominator;
  denominator /= commonDenominator;

  return `${numerator}/${denominator}`;
};

const gcd = (a, b) => {
  // Euclidean algorithm
  if (a === 0) {
    return b;
  }

  let dividend = Math.max(a, b);
  let divider = Math.min(a, b);
  let remainder = dividend % divider;

  while (remainder !== 0) {
    dividend = divider;
    divider = remainder;
    remainder = dividend % divider;
  }

  return divider;
}