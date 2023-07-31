/**
* @param {string[]} field - описание поля в виде массива строк
* @param {string} moves - строка со всеми движениями змейки
* @returns {[number[], number]}
*/
module.exports = function (field, moves) {
  let headX = 2;
  let headY = 0;
  let size = 3;
  const food = {
    'Y': 1, 
    'A': 1, 
    'N': 1,
    'D': 1, 
    'E': 1, 
    'X': 1
  };

  moves = moves.split(' ');
  for (let i = 0; i < moves.length; i += 2) {
    const direction = moves[i];
    const steps = moves[i + 1];
    for (let j = 0; j < steps; j++) {
      if (direction === 'U') {
        headY--;
      } else if (direction === 'R') {
        headX++;
      } else if (direction === 'L') {
        headX--;
      } else if (direction === 'D') {
        headY++;
      }

      if (food[field[headY][headX]]) {
        size++;
      }
    }
  }
  
  return [[headY, headX], size];
}