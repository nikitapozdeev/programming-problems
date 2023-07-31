class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let index = this.size() - 1;

    while (true) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex < 0 || this.heap[index] >= this.heap[parentIndex]) {
        break;
      }

      const tmp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[index];
      this.heap[index] = tmp;
      index = parentIndex;
    }
  }

  pop() {
    let value = this.top();
    this.heap[0] = this.heap[this.size() - 1];
    let index = 0;

    while (true) {
      let minChildIndex = (index * 2) + 1;
      if (minChildIndex >= this.size()) {
        break;
      }

      const rightChildIndex = (index * 2) + 2;
      if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[minChildIndex]) {
        minChildIndex = rightChildIndex;
      }

      if (this.heap[index] < this.heap[minChildIndex]) {
        break;
      }

      const tmp = this.heap[index];
      this.heap[index] = this.heap[minChildIndex];
      this.heap[minChildIndex] = tmp;

      index = minChildIndex;
    }

    this.heap.pop();
    return value;
  }

  top() {
    if (this.size() === 0) {
      return null;
    }

    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

/**
* @param {number} N - целое число, количество сотрудников, готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
*/
module.exports = function (N, staff, K) {
  if (N === K) {
    return staff.reduce((acc, curr) => acc + curr, 0);
  }

  let level = 0;
  const heap = new MinHeap();

  for (const grade of staff) {
    if (heap.top() < grade || heap.size() < K) {
      heap.push(grade);
      level += grade;
    }

    if (heap.size() > K) {
      level -= heap.pop();
    }
  }

  return level;
}