/**
 * https://leetcode.com/problems/asteroid-collision/submissions/1727886901/
 */
package Stack.AsteriodCollision;
import java.util.Stack;
class Solution {
    public int[] asteroidCollision(int[] ast) {
        Stack<Integer> stack = new Stack<>();
        int i = 0;
        while(i < ast.length){
            if(stack.isEmpty()){
                stack.push(ast[i]);
                i++;
            }
            else{
                if(stack.peek() > 0 && ast[i] < 0){
                    if(Math.abs(stack.peek()) == Math.abs(ast[i])){
                        stack.pop();
                        i++;
                    }
                    else{
                        if(Math.abs(stack.peek()) > Math.abs(ast[i])){
                            i++;
                        }
                        else{
                            while(!stack.isEmpty() && stack.peek() > 0 && ast[i] < 0 && Math.abs(stack.peek()) < Math.abs(ast[i])){
                                stack.pop();
                            }
                        }
                    }
                }
                else{
                    stack.push(ast[i]);
                    i++;
                }
            }
        }
        int[] result = new int[stack.size()];
        for(int idx = result.length - 1; idx >= 0; idx--){
            result[idx] = stack.peek();
            stack.pop();
        }
        return result;
    }
}
