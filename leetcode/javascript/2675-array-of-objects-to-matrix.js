/**
 * https://leetcode.com/problems/array-of-objects-to-matrix
 */

/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
  const keys = new Set();

  const isObject = (obj) => obj && typeof obj === 'object';

  const getKeys = (obj, path) => {
    for (const key of Object.keys(obj)) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getKeys(obj[key], newPath);
      } else {
        keys.add(newPath);
      }
    }
  }

  const getValues = (obj, path, kvMap) => {
    for (const key of Object.keys(obj)) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(obj[key])) {
        getValues(obj[key], newPath, kvMap);
      } else {
        kvMap[newPath] = obj[key];
      }
    }
    return kvMap;
  }

  for (const obj of arr) {
    getKeys(obj, '');
  }

  const matrix = [[...keys].sort()];
  for (const obj of arr) {
    const kvMap = getValues(obj, '', {});
    const row = matrix[0].map(key => key in kvMap ? kvMap[key] : '');
    matrix.push(row);
  }

  return matrix;
};