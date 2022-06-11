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
    var cache = new Array(S1.length + 1).fill([]).map(() => new Array(S2.length + 1).fill(-1));
    function lcsMemo(S1, S2, m = S1.length, n = S2.length){
        if(m === 0 || n === 0){
            return 0;
        }

        if(cache[m][n] !== -1){
            return cache[m][n];
        }

        if(S1[m - 1] === S2[n - 1]){
            return cache[m][n] = 1 + lcsMemo(S1.slice(0, -1), S2.slice(0, -1)); 
        }

        return cache[m][n] = Math.max(lcsMemo(S1.slice(0, -1), S2), lcsMemo(S1, S2.slice(0, -1)));
    }
    let ans = lcsMemo(S1, S2);
    return cache[S1.length][S2.length];
}

console.log(longestCommonSubsequence("pmjghexybyrgzczy","hafcdqbgncrcbihkd"));