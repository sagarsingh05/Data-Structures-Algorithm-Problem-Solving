/**
 * https://leetcode.com/problems/build-an-array-with-stack-operations/submissions/1730211522/
 */
import java.util.*;
class Solution {
    public List<String> buildArray(int[] target, int n) {
       Stack<String> stack = new Stack<>();
       int i = 1;
       for(int idx = 0; idx < target.length; idx++){
        int element = target[idx];
        while(i < element){
            stack.push("Push");
            stack.push("Pop");
            i++;
        }
        stack.push("Push");
        i++;
       }
       return stack;
    }
}