/**
 * 
 * @typedef Replace
 * 
 * @property {string} from
 * @property {string} to
 */

/**
 * 
 * @param {string} message 
 * @param {Replace[]} replaces 
 * @returns {string}
 */

function decode(message, replaces) {
  replaces = replaces.filter(replace => !!replace.from);
  if (replaces.length === 0) {
    return message;
  }

  const maxFrom = replaces.reduce((acc, curr) => Math.max(acc, curr.from.length), -Infinity);
  
  let left = 0;
  while (left < message.length) {
    let rule = null;
    let right = 1;
    
    // found rule with max priority
    while ((right - left) <= maxFrom) {
      const from = message.substring(left, right);
      for (const replace of replaces) {
        if (from === replace.from) {
          rule = replace;
        }
      }
      right++;
    }
    
    if (!rule) {
      left++;
      continue;
    }

    message = message.slice(0, left) + rule.to + message.slice(left + rule.from.length);
    left += rule.to.length;
  }

  return message;
}

module.exports = { decode };