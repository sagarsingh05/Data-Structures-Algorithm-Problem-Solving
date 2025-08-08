/**
 * https://leetcode.com/problems/removing-stars-from-a-string/submissions/1727665731/
 */
import java.util.Stack;
class Solution {
    public String removeStars(String s) {
       Stack<Character> stack = new Stack<>(); 
       int i = 0;
       while(i < s.length()){
            if(s.charAt(i) != '*'){
                stack.push(s.charAt(i));
            }
            else if(s.charAt(i) == '*' && !stack.empty()){
                stack.pop();
            }
            i++;
       }
       String result = "";
       while(!stack.empty()){
        Character ch = stack.peek();
        stack.pop();
        result = ch + result;
       }
       return result;
    }
}