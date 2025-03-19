/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/length-of-last-word/submissions/1579533508/
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let len = s.length;
    let i = len-1;
    let count = 0;
 
    while(i>=0 && s[i] != " "){
     count++;
     i--;
    } 
    return count;
 };