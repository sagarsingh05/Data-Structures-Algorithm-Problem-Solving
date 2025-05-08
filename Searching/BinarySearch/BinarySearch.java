public class BinarySearch{
    public static int binarySearch(int[] arr, int x){
        int n = arr.length;
        int low = 0, hi = n - 1;
        int ans = n;
        while(low <= hi){
            int mid = low + (hi - low)/2;

            if(arr[mid] == x){
                ans= mid;
            }
            else if(arr[mid] < x){
                low = mid + 1;
            }
            else{
                hi = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,2,3,4,5,6,7,10};
        System.out.println(binarySearch(arr, 2));
    }
}