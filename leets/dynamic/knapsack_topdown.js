/**
 * This is knapsack problem with recursion.
 * bascondition - if no items or max allowed weight is 0 then max profit is 0
 * decision - if weight of current item is less than or equal to max allowed weight we have a choice to either
 * include that item or not to include that item, otherwise we must not include that item
 *
 * This function can be solved by DP (memoization or top-down approach) because
 *  1) we have choice to make - so could be recursive
 *  2) we have new sub-problem at each step which depends on result of previous sub-problem -
 * and could be repetative as well
 *  3) we need optimal (maximized, minimized, largest, shortest etc.) output
 *
 * @param {item weights} weights
 * @param {item values} values
 * @param {max allowed weight} W
 * @param {total number of items} n
 */

 function knapSackWithDP(weights, values, W, n){
    const dp = new Array(n + 1).fill([]).map(() => new Array(W + 1).fill(0, 0, 1));
    dp[0].fill(0);

    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            if(weights[i - 1] <= j){
                dp[i][j] = Math.max(values[i - 1] + dp[i - 1][j - weights[i - 1]], dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    // console.log(dp);
    return dp[n][W]; 
}

console.log(knapSackWithDP([6, 3, 4, 1], [50, 30, 10, 20], 10, 4));


/*
mapping from recursion to topdown

 base condition
 if (n === 0 || W === 0) {
    return 0;
  }

  is converted to 
 filling first row and colum with zeroes as n or W (i or j) would be zero there

  Then IF condition stays as it is.

  choice diagram
 if possible to include then we might include or we might not
 return Math.max(
      values[n - 1] + knapSack(weights, values, W - weights[n - 1], n - 1),
      knapSack(weights, values, W, n - 1)
 if not possible to include
 return knapSack(weights, values, W, n - 1)

  is converted to
 if possibl to include we will include that value along with the best value without that weight or just take best value without it
 dp[i][j] = Math.max(values[i - 1] + dp[i - 1][j - weights[i - 1]], dp[i - 1][j]);
 if not possible to include
 dp[i][j] = weights[i - 1]], dp[i - 1][j])

really wonderful explanation ---


*/