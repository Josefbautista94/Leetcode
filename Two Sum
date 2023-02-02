/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let i = 1;
    let j = 0;
    
 while( i < nums.length ){
        if(nums[i] + nums[j] == target){
            return [i,j]
        } 
        else {
            if(i === nums.length-1){
                j++;
                i= j+1;
            } 
            else {
                i++;
            }
        }   
    }   
};
