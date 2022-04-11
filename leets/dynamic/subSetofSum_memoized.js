/*

Given an array and a target value, find if any of is arrays's sub-set's sum is equal to target or not.

input - array and targt
output - true/false


** not working **
*/
function subSetofSumMemoized(nums, target, n) {
  const dp =  new Array(n + 1).fill([]).map(() => new Array(target + 1).fill(false));

  function subSetOfSum(nums, target, n) {
    if (target === 0) {
      dp[n][target] = true;
      return true;
    }

    if (n === 0) {
      return false;
    }

    if(dp[n][target]){
        console.log("memoization at work...");
        return true;
    }

    if (nums[n - 1] <= target) {
      return (
        subSetOfSum(nums, target - nums[n - 1], n - 1) ||
        subSetOfSum(nums, target, n - 1)
      );
    } else {
      return subSetOfSum(nums, target, n - 1);
    }
  }

  let ans = subSetOfSum(nums, target, n);
  console.log(dp);
  return ans;

}
console.log(subSetofSumMemoized([1, 1, 1, 1, 1], 2, 5));
