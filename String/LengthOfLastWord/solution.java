/**
 * https://leetcode.com/problems/length-of-last-word/submissions/1670728377/
 */
class Solution {
    public int lengthOfLastWord(String s) {
        String str = s.trim();
        int n = str.length();
        int i = n - 1;
        int count = 0;

        while (i >= 0 && str.charAt(i) != ' ') {
            count++;
            i--;
        }
        return count;
    }
}
