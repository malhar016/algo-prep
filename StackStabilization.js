/*
There's a stack of NN inflatable discs, with the iith disc from the top having an initial radius of R_iR 
i
​
  inches.
The stack is considered unstable if it includes at least one disc whose radius is larger than or equal to that of the disc directly under it. In other words, for the stack to be stable, each disc must have a strictly smaller radius than that of the disc directly under it.
As long as the stack is unstable, you can repeatedly choose any disc of your choice and deflate it down to have a radius of your choice which is strictly smaller than the disc’s prior radius. The new radius must be a positive integer number of inches.
Determine the minimum number of discs which need to be deflated in order to make the stack stable, if this is possible at all. If it is impossible to stabilize the stack, return -1−1 instead.
Constraints
1 \le N \le 501≤N≤50
1 \le R_i \le 1{,}000{,}000{,}0001≤R 
i
​
 ≤1,000,000,000
Sample Test Case #1
N = 5
R = [2, 5, 3, 6, 5]
Expected Return Value = 3
Sample Test Case #2
N = 3
R = [100, 100, 100]
Expected Return Value = 2
Sample Test Case #3
N = 4
R = [6, 5, 4, 3]
Expected Return Value = -1
Sample Explanation
In the first case, the discs (from top to bottom) have radii of [2"2", 5"5", 3"3", 6"6", 5"5"]. One optimal way to stabilize the stack is by deflating disc 11 from 2"2" to 1"1", deflating disc 22 from 5"5" to 2"2", and deflating disc 44 from 6"6" to 4"4". This yields final radii of [1"1", 2"2", 3"3", 4"4", 5"5"].
In the second case, one optimal way to stabilize the stack is by deflating disc 11 from 100"100" to 1"1" and disc 22 from 100"100" to 10"10".
In the third case, it is impossible to make the stack stable after any number of deflations.

*/

function getMinimumDeflatedDiscCount(N, R) {
  let defalte = 0;
  for (let i = R.length - 1; i >= 0; i--) {
    if (R[i] >= R[i + 1]) {
      defalte++;
      R.splice(i, 1, R[i + 1] - 1);
    }
    if (R[i] <= 0) {
      console.log(R);
      return -1;
    }
  }
  console.log(R);
  return defalte;
}

console.log(getMinimumDeflatedDiscCount(0, [25, 45, 12, 6, 78, 5, 19, 27, 70]));

/*
 R.reduceRight((acc, cur) => {
    if (cur >= acc) {
      defalte++;
      acc = cur - 1;
    } else {
      acc = cur;
    }
    if (acc <= 0) {
      return -1;
    }
    return acc;
  });
*/
