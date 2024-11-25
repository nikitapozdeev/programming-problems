/**
 * https://leetcode.com/problems/sliding-puzzle
 */

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const reference = '123450';
  const state = board.flat().join('');
  const moves = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4],
  }

  const seen = { [state]: true }; 
  const queue = [[state.indexOf(0), state, 0]];
  
  while (queue.length) {
    const [index, currentState, movesCount] = queue.shift();
    if (currentState === reference) {
      return movesCount;
    }

    seen[currentState] = true;
    for (const move of moves[index]) {
      const arr = currentState.split('');
      const tmp = arr[index];
      arr[index] = arr[move];
      arr[move] = tmp;

      const nextState = arr.join('');
      if (!seen[nextState]) {
        queue.push([move, nextState, movesCount + 1]);
      }
    }
  }

  return -1;
};