/**
 * https://leetcode.com/problems/task-scheduler/
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const counter = {};
  for (const task of tasks) {
    counter[task] = (counter[task] || 0) + 1;
  }
  
  const heap = new MaxPriorityQueue();
  for (const count of Object.values(counter)) {
    heap.enqueue(count);  
  }
  
  const queue = [];
  let time = 0;
  
  while (heap.size() || queue.length) {
    time += 1;
    
    if (heap.size()) {
      const count = heap.dequeue().element - 1;
      if (count) {
        queue.push([count, time + n]);
      }
    }
    
    if (queue.length && queue[0][1] === time) {
      heap.enqueue(queue.shift()[0]);
    }
  }
  
  return time;
};