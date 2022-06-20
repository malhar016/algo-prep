/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
 
URL: https://leetcode.com/explore/interview/card/google/59/array-and-strings/345

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let result = "";
  if (t.length === 0 || t.length > s.length) {
    return result;
  }
  // prepare occurance map of required characters
  const countMap = t.split("").reduce((acc, cur) => {
    if (acc.set(cur, acc.has(cur) ? acc.get(cur) + 1 : 1));
    return acc;
  }, new Map());

  // total characters required for full match
  let charsToMatch = countMap.size;

  // running minimum window size - initialized with 0 and maxlength + 1
  let minWindow = [0, s.length + 1];

  // sliding window
  let left = 0,
    right = 0;

  while (right < s.length) {
    if (countMap.has(s[right])) {
      countMap.set(s[right], countMap.get(s[right]) - 1);
      if (countMap.get(s[right]) === 0) {
        charsToMatch--;
      }
    }
    right++;

    while (charsToMatch === 0) {
      if (right - left < minWindow[1] - minWindow[0]) {
        minWindow = [left, right];
      }

      if (countMap.has(s[left])) {
        countMap.set(s[left], countMap.get(s[left]) + 1);
        if (countMap.get(s[left]) > 0) {
          charsToMatch++;
        }
      }
      left++;
    }
  }

  const [start, end] = [...minWindow];

  if (end - start <= s.length) {
    result = s.substring(start, end);
  }

  return result;
};

console.log(minWindow("ba", "ab"));
