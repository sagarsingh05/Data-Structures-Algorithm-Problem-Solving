public class mergeSortedArray{
    public static void mergesortedarray(int[] nums1, int[] nums2, int m, int n){
        int i = 0, j = 0, k = 0;
        int [] result = new int[m + n];

        while (i < m && j < n){
            if(nums1[i] <= nums2[j]){
                result[k] = nums1[i];
                k++;
                i++;
            }
            else{
                result[k] = nums2[j];
                k++;
                j++;
            }
        }
        
        while(j < n){
            result[k] = nums2[j];
            k++;
            j++;
        }
    
        while(i < m){
            result[k] = nums1[i];
            k++;
            i++;
        }
        k=0;
        while(k < m + n){
            nums1[k] = result[k];
            k++;
        }
    }
}