/*

Given an array and a target value, find if any of is arrays's sub-set's sum is equal to target or not.

input - array and targt
output - true/false

*/


function hasSubSetWithSum(nums, target){
    let dp = new Array(nums.length + 1).fill([]).map(() => new Array(target + 1).fill(true, 0, 1));
    dp[0].fill(false, 1);

    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            if(nums[i - 1] <= j){
                dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    console.log(dp);
    return dp[nums.length][target];
}

console.log(hasSubSetWithSum([2, 3, 7, 8, 10], 11));


/*
    we can even find the subset by back tracking the matrix values

    if dp[n][target] is true
    1) find out when did dp[n][target] changed from false to true
    2) once found at dp[i][j] includ that nums[i] into answer sub-set
    3) now new_target will be target - nums[i] and then repeat step one and two til n == 0 || new_target == 0
    
*/