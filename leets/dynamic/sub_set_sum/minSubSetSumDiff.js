
function minSubSetSumDiff(nums, n) {
    if(!nums || nums.length === 0) return 0;
    const sum = nums.reduce((a, b) => a + b);

    const dp = new Array(n + 1).fill([]).map(() => new Array(sum + 1).fill(true, 0, 1));
    dp[0].fill(false, 1);

    for(let i = 1; i < n + 1; i ++){
        for(let j = 1; j < sum + 1; j++){
            if(nums[i - 1] < sum){
                dp[i][j] = dp[i-1][j - nums[i - 1]] || dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    
    let s1 = dp[n].slice(0, sum/2 + 1).lastIndexOf(true);
    return sum - 2*s1;
}

console.log(minSubSetSumDiff([45, 56, 12, 34, 90,34, 23, 66, 43, 11], 10));

