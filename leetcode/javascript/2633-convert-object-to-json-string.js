/**
 * https://leetcode.com/problems/convert-object-to-json-string
 */

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
  if (object && typeof object === 'object' && !Array.isArray(object)) {
    return '{' + Object.entries(object)
      .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
      .join(',') + '}';
  } else if (object && Array.isArray(object)) {
    return '[' + object.map(item => jsonStringify(item))
      .join(',') + ']';
  } else if (typeof object === 'string') {
    return `"${object}"`;
  } else {
    return String(object);
  }
};