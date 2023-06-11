/**
 * https://leetcode.com/problems/snapshot-array
 */

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.arr = [...new Array(length)].map(() => [[0, 0]]);
  this.snapshotId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.arr[index].push([val, this.snapshotId]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  return this.snapshotId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const history = this.arr[index];
  let low = 0;
  let high = history.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const [val, snapshotId] = history[mid];

    if (snapshotId <= snap_id) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high >= 0 
    ? history[high][0] 
    : 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */