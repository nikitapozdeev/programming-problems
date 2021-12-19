const fs =  require('fs');

const input = fs.readFileSync('../input.txt', 'utf-8');
const lines = input.split('\n').map(line => {
  [start, end] = line.split(' -> ');
  [x1, y1] = start.split(',');
  [x2, y2] = end.split(',');

  return {
    x1: Number(x1), 
    y1: Number(y1), 
    x2: Number(x2), 
    y2: Number(y2)
  };
});

// part one
{
  const points = {};
  lines.forEach(({ x1, y1, x2, y2 }) => {
    if (x1 === x2) {
      // vertical line
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        const hash = `${x1}_${y}`;
        let count = points[hash] ?? 0;
        count++;
        points[hash] = count;
      }
    } else if (y1 === y2) {
      // horizontal line
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        const hash = `${x}_${y1}`;
        let count = points[hash] ?? 0;
        count++;
        points[hash] = count;
      }
    }
  });

  // find number of overlapping points
  let overlappingPointsCount = 0; 
  Object.values(points).forEach(overlaps => {
    if (overlaps >= 2) {
      overlappingPointsCount++;
    }
  });

  console.log(`Points overlaps ${overlappingPointsCount} times.`);
}

// part two
{
  const points = {};
  lines.forEach(({ x1, y1, x2, y2 }) => {
    if (x1 === x2) {
      // vertical line
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        const hash = `${x1}_${y}`;
        let count = points[hash] ?? 0;
        count++;
        points[hash] = count;
      }
    } else if (y1 === y2) {
      // horizontal line
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        const hash = `${x}_${y1}`;
        let count = points[hash] ?? 0;
        count++;
        points[hash] = count;
      }
    } else {
      if (x1 > x2) { 
        [x1, x2] = [x2, x1];
        [y1, y2] = [y2, y1];
      }

      let currentX = x1;
      let currentY = y1;
      let endX = x2;
      let endY = y2;

      if (currentY < endY) {
        while (currentX <= endX && currentY <= endY) {
          const hash = `${currentX}_${currentY}`;
          let count = points[hash] ?? 0;
          count++;
          points[hash] = count;
  
          currentX++;
          currentY++;
        }
      } else if (currentY > endY) {
        while (currentX <= endX && currentY >= endY) {
          const hash = `${currentX}_${currentY}`;
          let count = points[hash] ?? 0;
          count++;
          points[hash] = count;
  
          currentX++;
          currentY--;
        }
      }
    }
  });

  // find number of overlapping points
  let overlappingPointsCount = 0; 
  Object.values(points).forEach(overlaps => {
    if (overlaps >= 2) {
      overlappingPointsCount++;
    }
  });

  console.log(`Points overlaps ${overlappingPointsCount} times.`);
}