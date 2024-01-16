/**
 * https://leetcode.com/problems/insert-delete-getrandom-o1
 */


var RandomizedSet = function() {
  this.map = new Map();
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) {
    return false;
  }

  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) {
    return false;
  }

  const unoccupiedIndex = this.map.get(val);
  const last = this.arr[this.arr.length - 1];

  this.arr[unoccupiedIndex] = last;
  this.arr.pop();
  this.map.set(last, unoccupiedIndex);
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const min = 0;
  const max = this.arr.length;
  const index = Math.floor(Math.random() * (max - min) + min);
  return this.arr[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */