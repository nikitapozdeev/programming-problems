var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let count;
let nodes;
let argc = 0;

rl.on('line', function(line){
  if (argc === 0) {
    count = Number(line);
  } else if (argc === 1) {
    nodes = line.split(' ').map(Number);
    console.log(getTreeHeight(nodes));
  }
  argc++;
});

function getTreeHeight(nodes) {
  const heights = [];

  let maxHeight = 1;
  for (let i = 0; i < count; i++) {
    let height = 1;
    let j = i;

    while (true) {
      const parent = nodes[j];
      if (parent === -1) {
        heights[i] = height;
        break;
      }
      if (heights[parent]) {
        heights[i] = height + heights[parent];
        break;
      }
      j = parent;
      height++;
    }
    maxHeight = Math.max(heights[i], maxHeight);
  }
  return maxHeight;
}