/**
 * This is knapsack problem with recursion.
 * bascondition - if no items or max allowed weight is 0 then max profit is 0
 * decision - if weight of current item is less than or equal to max allowed weight we have a choice to either
 * include that item or not to include that item, otherwise we must not include that item
 *
 * This function can be solved by DP (memoization or bottom-up approach) because
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

function knapSackWithMemo(weights, values, W, n){
   const dp =  new Array(n + 1).fill([]).map(() => new Array(W + 1).fill(0));

    function knapSack(weights, values, W, n, cur) {
      // base condition
      if(W == 0 || n == 0) {
        dp[n][W] = dp[n][W] > cur ? dp[n][W] : cur;
        return dp[n][W];
      }

      if(dp[n][W] > cur){
        console.log("memoization helped..");
        return dp[n][W];
      } else {
        dp[n][W] = cur;
      }

      if(weights[n - 1] <= W){
        return Math.max(knapSack(weights, values, W - weights[n - 1], n - 1, cur + values[n-1]),
        knapSack(weights, values, W, n-1, cur));
      } else {
        return knapSack(weights, values, W, n-1, cur);
      }
    };
    
    const ans = knapSack(weights, values, W, n, 0);

    console.log("============ final ===================");
    // console.log(dp, dp[0][0]);
    return ans;
 }

//console.log(knapSackWithMemo([6, 3, 4, 1], [50, 30, 10, 20], 10, 4));
//console.log(knapSackWithMemo([1, 4, 3, 6], [20, 10, 30, 50], 10, 4));
//console.log(knapSackWithMemo([1, 3, 4, 6], [20, 30, 10, 50], 10, 4));
// console.log(knapSackWithMemo([6, 4, 1, 3], [50, 10, 20, 30], 10, 4));
//console.log(knapSackWithMemo([1, 6, 3, 4], [20, 50, 30, 10], 10, 4));

//console.log(knapSackWithMemo([4, 5, 1], [1, 2, 3], 4, 3));
console.log(knapSackWithMemo([6, 3, 4, 1], [50, 30, 10, 20], 10, 4));

