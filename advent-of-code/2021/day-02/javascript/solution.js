const fs = require('fs')

const input = fs.readFileSync('../input.txt', 'utf-8');
const commands = input.split('\n').map(str => {
  [direction, step] = str.split(' ');
  return { direction, step: Number(step) };
});

// part one
{
  let x = 0;
  let depth = 0;

  const commandMap = {
    'forward': (step) => x += step,
    'down': (step) => depth += step,
    'up': (step) => depth -= step
  };

  commands.forEach(({ direction, step }) => commandMap[direction](step));

  console.log(`Multiplying final horizontal position and depth is equals ${x * depth}`);
}

// part two
{
  let x = 0;
  let depth = 0;
  let aim = 0;

  const commandMap = {
    'forward': (step) => {
      x += step;
      depth += step * aim;
    },
    'down': (step) => aim += step,
    'up': (step) => aim -= step
  };

  commands.forEach(({ direction, step }) => commandMap[direction](step));

  console.log(`Multiplying final horizontal position and depth is equals ${x * depth}`);
}