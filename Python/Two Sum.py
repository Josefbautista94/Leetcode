class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        map ={}

        for i in range(len(nums)):
            current = nums[i]
            complement = target - current
            if complement in map:
                return [map[complement],i]
                
            map[current] = i