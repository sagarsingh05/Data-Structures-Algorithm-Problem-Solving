package Searching.UpperBound;

public class UpperBound {
    public static int upperBound(int[] arr, int x){
        int n = arr.length;
        int low = 0, high = n - 1;
        int ans = n;

        while(low <= high){
            int mid = low + (high - low)/2;

            if(arr[mid] <= x){
                low = mid + 1;
            }
            else{
                ans = mid;
                high = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {1,1,2,2,3,3,3,4,5,6,7,8,10};
        System.out.println(upperBound(arr, 4));
    }
}
