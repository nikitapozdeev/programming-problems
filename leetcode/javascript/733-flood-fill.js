/**
 * https://leetcode.com/problems/flood-fill/
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if (image[sr][sc] !== color) {
    traverse(image, sr, sc, image[sr][sc], color);
  }
  return image;
};

const traverse = (image, sr, sc, parentColor, fillColor) => {
  if (parentColor !== image[sr][sc]) {
    return;
  }
  
  image[sr][sc] = fillColor;
  if (sr >= 1) {
    traverse(image, sr - 1, sc, parentColor, fillColor);
  }
  if (sc >= 1) {
    traverse(image, sr, sc - 1, parentColor, fillColor);
  }
  if ((sr + 1) < image.length) {
    traverse(image, sr + 1, sc, parentColor, fillColor);
  }
  if ((sc + 1) < image[sr].length) {
    traverse(image, sr, sc + 1, parentColor, fillColor);
  }
}