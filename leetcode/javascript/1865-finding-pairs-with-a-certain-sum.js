/**
 * https://leetcode.com/problems/finding-pairs-with-a-certain-sum
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.nums2counter = {};
    for (const num of nums2) {
        this.nums2counter[num] = (this.nums2counter[num] || 0) + 1;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.nums2counter[this.nums2[index]] = (this.nums2counter[this.nums2[index]] || 0) - 1;
    this.nums2[index] += val;
    this.nums2counter[this.nums2[index]] = (this.nums2counter[this.nums2[index]] || 0) + 1;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let count = 0;
    for (const num of this.nums1) {
        const remainder = tot - num;
        count += (this.nums2counter[remainder] || 0);
    }
    return count;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */