/**
 * https://leetcode.com/problems/generate-fibonacci-sequence
 */

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let prev = 0;
  let curr = 1;

  while (true) {
    yield prev;
    const tmp = prev;
    prev = curr;
    curr += tmp;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */