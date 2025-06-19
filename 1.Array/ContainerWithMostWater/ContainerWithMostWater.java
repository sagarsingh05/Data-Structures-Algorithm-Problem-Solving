/**
 * https://leetcode.com/problems/container-with-most-water/submissions/1669037116/
 */
class Solution {
    public int maxArea(int[] height) {
       int i = 0;
       int n = height.length;
       int j = n - 1;
       int ans = 0;

       while(i < j){
        int w = j - i;
        int h = Math.min(height[i], height[j]);
        int area = w*h;
        ans = Math.max(ans, area);

        if(height[i] < height[j]){
            i++;
        }
        else{
            j--;
       }
       } 
       return ans;
    }
}