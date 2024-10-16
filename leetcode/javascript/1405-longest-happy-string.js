/**
 * https://leetcode.com/problems/longest-happy-string
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  const chars = [];
  const stack = [];
  const heap = new PriorityQueue({ compare: (a, b) => b.count - a.count });

  const pushHeap = (char, count) => {
    if (!count) return;
    heap.enqueue({ char, count });
  }

  pushHeap('a', a);
  pushHeap('b', b);
  pushHeap('c', c);

  let prev = null;
  
  while (heap.size()) {
    let { char, count } = heap.dequeue();
    chars.push(char);
    count--;

    if (prev) {
      pushHeap(prev.char, prev.count);
      prev = null;
    }

    if (count) {
      if (chars[chars.length - 1] === char && chars[chars.length - 2] === char) {
        prev = { char, count };
      } else {
        pushHeap(char, count);
      }
    }
  }

  return chars.join('');
};