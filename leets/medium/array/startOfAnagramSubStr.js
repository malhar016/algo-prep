/** 
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {input} s 
 * @param {pattern} p 
 * @returns array with start indexs of anagrams
 */

const findAnagramStarts = (s, p) => {
  let result = [];
  let charsNeeded = {};

  // fulfil the charsNeeded object with number of occurences of each latter in search pattern
  // example: {'p': 3, 'k': 1, 'u': 2}
  for (let char of p) {
    // charsNeeded[char] = charsNeeded[char] ? charsNeeded[char]++ : 1; 
    if (char in charsNeeded) {
      charsNeeded[char]++;
    } else {
      charsNeeded[char] = 1;
    }
  }

  let left = 0,
    right = 0;
  let count = p.length;

  while (right < s.length) {
    // if any of the occurence decreses till 0 reduce the count as we found requred letter for the search pattern
    // why till 0 only? As beyond that (-1, -2, ...) are the unwanted occurences which we don't want in search
    if (charsNeeded[s[right]] > 0) count--;
    if (s[right] in charsNeeded) charsNeeded[s[right]]--;
    console.log(charsNeeded);

    right++;

    if (count === 0) {
      result.push(left);
    }

    if (right - left === p.length) {
      if (s[left] in charsNeeded) charsNeeded[s[left]]++;
      // same way if we move past to any of the required character and needed occurence is greater then 0 then increase the count
      // why greater than 0 only? As we didn't even want those negative (extra) occurences anyway so why to bother !
      if (charsNeeded[s[left]] > 0) count++;

      left++;
    }
    console.log(charsNeeded, right, left);
  }
  return result;
};

console.log(findAnagramStarts("cbaebabacd", "abc"));
