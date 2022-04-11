/*

Given an array and a target value, find if any of is arrays's sub-set's sum is equal to target or not.

input - array and targt
output - true/false

*/

function subSetOfSum(nums, target, n){
    if(target === 0) {
        return true;
    }

    if(n === 0) {
        return false;
    }

    if(nums[n - 1] <= target) {
        return subSetOfSum(nums, target - nums[n - 1], n -1) || subSetOfSum(nums, target, n - 1);
    } else {
        return subSetOfSum(nums, target, n - 1);
    }
}

console.log(subSetOfSum([2, 3, 7, 8, 10], 11, 5));