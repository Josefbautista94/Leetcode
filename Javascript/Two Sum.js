/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = {};

    for(let i = 0; i < nums.length; i++){
        let current = nums[i];
        let complement = target - current;
        if(map[complement] !== undefined){
            return [map[complement], i];
        }

        map[current] = i;
    }
}
