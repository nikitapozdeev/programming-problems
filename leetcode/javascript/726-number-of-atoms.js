/**
 * https://leetcode.com/problems/number-of-atoms
 */

/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  const stack = [{}];

  for (const match of formula.matchAll(/([A-Z][a-z]*)(\d*)|(\()|(\))(\d*)/g)) {
    const [_, atom, count, left, right, multiplier ] = match;
    if (atom) {
      const top = stack[stack.length - 1];
      top[atom] = (top[atom] || 0) + Number(count || 1);
    } else if (left) {
      stack.push({});
    } else if (right) {
      const current = stack.pop();
      if (multiplier) {
        for (const atom of Object.keys(current)) {
          current[atom] = (current[atom] || 0) * Number(multiplier);
        }
      }

      const top = stack[stack.length - 1];
      for (const atom of Object.keys(current)) {
        top[atom] = (top[atom] || 0) + current[atom];
      }
    }
  }

  const entries = Object.entries(stack[0]).sort((a, b) => a[0].localeCompare(b[0]));
  let output = [];

  for (const [atom, count] of entries) {
    output.push(atom);
    if (count > 1) {
      output.push(count);
    }
  }

  return output.join('');
};