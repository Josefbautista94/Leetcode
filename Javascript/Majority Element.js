/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {


  let frequency = {};
  let maxKey = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    frequency[key] = (frequency[key] || 0) + 1;
    if (frequency[key] > frequency[maxKey]) {
      maxKey = key;
    }
  }

  return maxKey;

};
