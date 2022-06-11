/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

URL: https://leetcode.com/problems/coin-change/
 */

function findMinCoins(coins, amount){
    let n = coins.length;
    let dp = new Array(n + 1).fill([]).map(() => new Array(amount + 1).fill(0, 0, 1));
    dp[0].fill(amount + 1);

    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            if(coins[i - 1] <= j){
                dp[i][j] = Math.min(1 + dp[i][j - coins[i - 1]], dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    if(dp[n][amount] > amount){
        return -1;
    } else {
        return dp[n][amount];
    }
}

console.log(findMinCoins([5,2,1], 100));