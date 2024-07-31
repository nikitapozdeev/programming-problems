/**
 * https://leetcode.com/problems/filling-bookcase-shelves
 */

/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
  const cache = {};

  const fit = (i) => {
    if (i === books.length) {
      return 0;
    }

    if (i in cache) {
      return cache[i];
    }

    let remainingWidth = shelfWidth;
    let shelftHeight = 0;
    let totalHeight = +Infinity;

    for (let j = i; j < books.length; ++j) {
      const [bookWidth, bookHeight] = books[j];
      if (remainingWidth < bookWidth) {
        break;
      }

      remainingWidth -= bookWidth;
      shelftHeight = Math.max(shelftHeight, bookHeight);
      totalHeight = Math.min(totalHeight, shelftHeight + fit(j + 1))
    }

    cache[i] = totalHeight;
    return cache[i];
  }

  return fit(0);
};