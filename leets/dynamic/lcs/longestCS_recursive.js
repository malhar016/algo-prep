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

function longestCommonSubsequence(S1, S2, n = S1.length, m = S2.length){
    if(n == 0 || m == 0){
        return 0;
    }
    if(S1.charAt(n -1) === S2.charAt(m - 1)){
        return 1 + longestCommonSubsequence(S1.slice(0, -1), S2.slice(0, -1));
    } 
    return Math.max(longestCommonSubsequence(S1.slice(0, -1), S2),
    longestCommonSubsequence(S1, S2.slice(0, -1)));
}

console.log(longestCommonSubsequence("ABCDGH", "ACDGHR"));

