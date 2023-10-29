/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        // storing difference of the target and the element at ith index of nums array
        let difference = target - nums[i];

        // if map contains the difference i.e. number required to reach sum = target, 
        // return the index of that number in the map
        if (map.has(difference)) return [map.get(difference), i];

        // else add number at ith index to map
        map.set(nums[i], i);
    }
};