package Sorting.BuubleSort;

public class Bubblesort {
    public static void bubbleSort(int[] arr){
        int n = arr.length;

        for(int i = 0; i < n; i++){
            boolean isSwapped = false;
            for(int j = 0; j < n - i - 1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
                }
            }
            if(isSwapped == false) return;
        }
    }

    public static void main(String[] args) {
        int[] arr = {4,6,3,9,2,1};

        bubbleSort(arr);
        for(int i: arr){
            System.out.println(i);
        }
    }
    
}
