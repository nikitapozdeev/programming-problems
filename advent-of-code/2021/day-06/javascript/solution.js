const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8');
const initialTimers = input.split(',').map(Number);

class Simulator {
  fishesByTimer = {};

  constructor(initialTimers) {
    for (let i = 0; i <= 8; i++) {
      const count = initialTimers.filter(timer => timer === i).length;
      this.fishesByTimer[i] = count;
    }
  }

  simulate(days) {
    for (let day = 0; day < days; day++) {
      // simulate day
      const nextState = {};
      for (let i = 1; i <= 8; i++) {
        nextState[i - 1] = this.fishesByTimer[i]; 
      }
      // produce child fishes
      nextState[8] = this.fishesByTimer[0];

      // reset parent fishes
      nextState[6] += this.fishesByTimer[0];

      this.fishesByTimer = nextState;
    }
  }
}

// part one
{
  const simulator = new Simulator(initialTimers);
  const days = 80;
  simulator.simulate(days);
  const fishesCount = Object.values(simulator.fishesByTimer)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(`Fishes count after ${days} days is ${fishesCount}`);
}

// part two
{
  const simulator = new Simulator(initialTimers);
  const days = 256;
  simulator.simulate(days);

  const fishesCount = Object.values(simulator.fishesByTimer)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(`Fishes count after ${days} days is ${fishesCount}`);
}
