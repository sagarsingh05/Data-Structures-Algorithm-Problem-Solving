package String.ValidPalindrome;
/**
 * https://leetcode.com/problems/valid-palindrome/submissions/1687327822/
 */

class Solution {
    public boolean isAlphaNumeric(String s, int i){
        char ch = s.charAt(i);
        if (ch >= 97 && ch <= 122) return true;
        if (ch >= 48 && ch <= 57) return true;
        return false;
    }
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int i = 0;
        int j = s.length() - 1;

        while(i < j){
            if(isAlphaNumeric(s,i) == false){
                i++;
                continue;
             }
            if(isAlphaNumeric(s,j) == false){
                j--;
                continue;
            }
            if(s.charAt(i) != s.charAt(j)){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
