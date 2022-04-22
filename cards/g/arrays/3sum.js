/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * 
 * URL: https://leetcode.com/problems/3sum/
 * Another approach: sort the array and find low and high matching elements
 */

function twoSum(nums, target){
    const ans = [];
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        let req = map.get(nums[i]);
        if(req >= 0){
            ans.push([nums[req], nums[i]]);
        }
        map.set(target - nums[i], i);
    }

    return ans;
}

function threeSum(nums, target = 0){
    const triplets = [];
    nums.sort((a, b) => a - b);
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        let twins = twoSum(nums.slice(i + 1), target - nums[i]);
        let newTriplets = twins.map(([b, c]) => [nums[i], b, c]);
        let filteredTriplets = [];
        for(let triplet of newTriplets){
            let key = triplet.join('');
            if(!set.has(key)){
                filteredTriplets.push(triplet);
                set.add(key);
            }
        }
        triplets.push(...filteredTriplets);

    }
    return triplets;
}

console.log(threeSum([-1,0,1,2,-1,-4]));