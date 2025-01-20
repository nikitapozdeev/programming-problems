const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let coordsCount;
const heights = [];

let roadsCount;
const roads = [];

rl.on('line', line => {
  if (coordsCount === undefined) {
    coordsCount = Number(line);
  } else {
    if (heights.length < coordsCount) {
      const [_, y] = line.split(' ');
      heights.push(Number(y));
      return;
    }

    if (roadsCount === undefined) {
      roadsCount = Number(line);
    } else {
      if (roads.length < roadsCount) {
        const [start, end] = line.split(' ').map(Number);
        roads.push({ start, end });
      } 
      
      if (roads.length === roadsCount) {
        const prefixUp = new Array(coordsCount).fill(0);
        const prefixDown = new Array(coordsCount).fill(0);
        for (let i = 1; i < coordsCount; ++i) {
          if (heights[i - 1] < heights[i]) {
            prefixUp[i] = prefixUp[i - 1] + (heights[i] - heights[i - 1]);
            prefixDown[i] = prefixDown[i - 1];
          } else {
            prefixUp[i] = prefixUp[i - 1];
            prefixDown[i] = prefixDown[i - 1] + (heights[i - 1] - heights[i]);
          }
        }

        for (const { start, end } of roads) {
          if (start <= end) {
            console.log(prefixUp[end - 1] - prefixUp[start - 1]);
          } else {
            console.log(prefixDown[start - 1] - prefixDown[end - 1]);
          }
        }
        rl.close();
      }
    }
  }
});