package Searching.PerfectSquare;
/**
 * https://leetcode.com/problems/valid-perfect-square/submissions/1629266802/
 * @param num
 * @return
 */
class Solution {
    public boolean isPerfectSquare(int num) {
        long lo = 1;
        long hi = num;
        while(lo <= hi){
            long mid = lo + (hi - lo)/2;
            if(mid * mid == num){
                return true;
            }
            else if(mid * mid < num){
                 lo = mid + 1;
            }
            else{
                hi = mid - 1;
            }
        }
        return false;
    }
}
