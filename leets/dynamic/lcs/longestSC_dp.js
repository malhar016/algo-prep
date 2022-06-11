/**
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3. 
 */

function longestCommonSubsequence(S1, S2){
    const m = S1.length, n = S2.length;
    const dp = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0, 0 , 1));
    dp[0].fill(0);

    function lcsDP(S1, S2){
        for(let i = 1; i < dp.length; i++){
            for(let j = 1; j < dp[0].length; j++){
                if(S1[i - 1] === S2[j - 1]){
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }    
    }
    lcsDP(S1, S2);
    return dp[m][n];
}

//console.log(longestCommonSubsequence("ABCDGH", "ACDGHR"));
console.log(longestCommonSubsequence("pmjghexybyrgzczy","hafcdqbgncrcbihkd"));
