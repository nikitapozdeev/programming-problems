/**
 * https://leetcode.com/problems/design-underground-system
 */

var UndergroundSystem = function() {
  this.timestamps = {};
  this.customers = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.customers[id] = [stationName, t];
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const [startStation, startTime] = this.customers[id];
  const route = `${startStation}-${stationName}`;
  if (!this.timestamps[route]) {
    this.timestamps[route] = [];
  }

  this.timestamps[route].push(t - startTime);
  this.customers[id] = null;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const route = `${startStation}-${endStation}`;
  const timestamps = this.timestamps[route];
  return timestamps.reduce((acc, curr) => acc + curr, 0) / timestamps.length;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */