module.exports = function(nums, k) {
  const remainders = {};
  for (const num of nums) {
    if (num in remainders) {
      return true;
    }
    remainders[k - num] = true;
  }
  return false;
}