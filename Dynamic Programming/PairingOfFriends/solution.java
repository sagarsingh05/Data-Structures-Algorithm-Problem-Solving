class Solution {
    public long countFriendsPairings(int n) {
        // code here
        return f(n);
    }
    public static long f(int i){
        if(i == 0 || i == 1 || i == 2){
            return i;
        }
        
        return f(i -1) + (i - 1) * f(i - 2);
    }
}
