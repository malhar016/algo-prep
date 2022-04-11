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

let knapSackWithMemo = (weights, values, W, n) => {
  const dp = new Array(W + 1).fill(new Array(n + 1).fill(-1));
  
  console.log(dp);

  let knapSack = (weights, values, W, n) => {
    // base condition
    if (n === 0 || W === 0) {
      return 0;
    }

    // check if already computed (and memoized)
    if (dp[W][n] !== -1) {
      return dp[W][n];
    }

    // decision making
    if (weights[n - 1] <= W) {
      // recursion with choice
      dp[W][n] = Math.max(
        values[n - 1] + knapSack(weights, values, W - weights[n - 1], n - 1),
        knapSack(weights, values, W, n - 1)
      );
    } else {
      dp[W][n] = knapSack(weights, values, W, n - 1);
    }
    return dp[W][n];
  };
  knapSack(weights, values, W, n);
  console.log(dp);
  return dp[W][n];
};

console.log(knapSackWithMemo([6, 3, 4, 1], [50, 30, 10, 20], 10, 4));