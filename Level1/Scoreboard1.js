/*
You are spectating a programming contest with NN competitors, each trying to independently solve the same set of programming problems. Each problem has a point value, which is either 1 or 2.
On the scoreboard, you observe that the iith competitor has attained a score of S_iS 
i
​
 , which is a positive integer equal to the sum of the point values of all the problems they have solved.
The scoreboard does not display the number of problems in the contest, nor their point values. Using the information available, you would like to determine the minimum possible number of problems in the contest.
Constraints
1 \le N \le 500{,}0001≤N≤500,000
1 \le S_i \le 1{,}000{,}000{,}0001≤S 
i
​
 ≤1,000,000,000
Sample Test Case #1
N = 6
S = [1, 2, 3, 4, 5, 6]
Expected Return Value = 4
Sample Test Case #2
N = 4
S = [4, 3, 3, 4]
Expected Return Value = 3
Sample Test Case #3
N = 4
S = [2, 4, 6, 8]
Expected Return Value = 4
Sample Explanation
In the first case, it's possible that there are as few as 44 problems in the contest, for example with point values [1, 1, 2, 2][1,1,2,2]. The 66 competitors could have solved the following subsets of problems:
Problem 11 (11 point)
Problem 33 (22 points)
Problems 22 and 33 (1 + 2 = 31+2=3 points)
Problems 11, 22, and 44 (1 + 1 + 2 = 41+1+2=4 points)
Problems 22, 33, and 44 (1 + 2 + 2 = 51+2+2=5 points)
All 44 problems (1 + 1 + 2 + 2 = 61+1+2+2=6 points)
It is impossible for all 66 competitors to have achieved their scores if there are fewer than 44 problems.
In the second case, one optimal set of point values is [1, 1, 2][1,1,2].
In the third case, one optimal set of point values is [2, 2, 2, 2][2,2,2,2].
*/

function getMinProblemCount(N, S) {
  let hasOdds = false;
  let max = 0;
  S.forEach((cur) => {
    hasOdds = hasOdds ? hasOdds : !(cur % 2 === 0);
    max = cur > max ? cur : max;
  });
  max = Math.floor(max / 2);
  return hasOdds ? max + 1 : max;
}

console.log(
  getMinProblemCount(0, [12, 15, 16, 5, 1, 39, 20, 7, 5, 9, 2, 1, 29])
);
