/**
 * @param {string} s
 * @return {string}
 * https://leetcode.com/problems/reverse-words-in-a-string/submissions/1671354239/
 */
var reverseWords = function(s) {
    s = s.trim();
    let result = '';
    let i = s.length - 1;

    while(i >= 0){
        while(i >= 0 && s[i] == ' '){
            i--;
        }
        if(i < 0) {
            break;
        }
        let j = i;
        while(i >= 0 && s[i] != ' '){
            i--;
        }
        if(result.length > 0){
            result += ' ';
        }
        result += s.slice(i + 1, j + 1);
    }
    return result;
};