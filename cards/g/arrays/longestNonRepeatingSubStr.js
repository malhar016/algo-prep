/**
 * Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/
optimization: can use map with char and index to avoid popping out till matched element
 */

var lengthOfLongestSubstring = function(s) {
  let max = 0;
  if(!s?.length) {
      return max;
  }

  let right = 0, left = 0;
  let bag = [];
  while(right < s.length){
    let newChar = s.charAt(right);
    if(bag.includes(newChar)) {
        while(bag[0] != newChar){
            oldChar = bag.shift();
            left ++;
        }
        oldChar = bag.shift();
        left ++;
    }
    bag.push(newChar);
    max = Math.max(max, bag.length);
    right ++;
  }
  return max;
};

console.log(lengthOfLongestSubstring("acabacdeaefbckla"));