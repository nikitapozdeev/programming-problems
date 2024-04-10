/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order
 */

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  const output = new Array(deck.length);
  const queue = Array.from({ length: deck.length }, (_, i) => i)
  deck.sort((a, b) => a - b);

  for (const card of deck) {
    const index = queue.shift();
    output[index] = card;

    if (queue.length) {
      queue.push(queue.shift());
    }
  }

  return output;
};