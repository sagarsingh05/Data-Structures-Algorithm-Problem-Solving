/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-palindrome/submissions/1579527632/
 */
var isAlphaNumeric = function(s,i){
    if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122)return true
    if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57)return true
    return false
}
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length-1;

    while(i<j){
        if(isAlphaNumeric(s,i)== false){
            i++;
            continue;
        }
        if(isAlphaNumeric(s,j)== false){
            j--;
            continue;
        }
        if(s[i] != s[j])return false;
        i++;
        j--;
    }
    return true;
};