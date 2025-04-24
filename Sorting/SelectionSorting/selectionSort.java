import java.util.*;

public class selectionSort{
    
    public static void selectionsort(int[] arr){
        for(int i = 0; i< arr.length -1; i++){
            int min_idx = findMinValue(arr, i);
            if(min_idx != i){
                int temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;

            }
        }
    }


    public static int findMinValue(int[] arr, int i){
        int min_idx = i;
        for(int j = i+1; j<arr.length; j++){
            if(arr[j] < arr[min_idx]){
                min_idx = j;
            }
        }
        return min_idx;
    }

    public static void main(String[] args) {
        int[] arr = {4,7,5,2,15,1,6,0,};
        selectionsort(arr);

        for(int i = 0 ; i<arr.length; i++){
            System.out.println(arr[i]);
        }

    }
}