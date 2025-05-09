package Searching.FindFirstAndLastElement;
class solution {
    public static int lowerBound(int[] arr, int x){
        int n = arr.length;
        int low = 0, high = n - 1;
        int ans = n;

        while(low <= high){
            int mid = low + (high - low)/2;

            if(arr[mid] < x){
                low = mid + 1;
            }
            else{
                ans = mid;
                high = mid - 1;
            }
        }
        return ans;
    }

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

    public int[] searchRange(int[] nums, int target) {
        int lb = lowerBound(nums, target);
        int[] result =  new int[2];
        if(lb == nums.length || nums[lb] != target){
            result[0] = -1;
            result[1] = -1;
            return result;
        }   
        int ub = upperBound(nums, target);
        result[0] = lb;
        result[1] = ub -1;
        return result;
    }
}