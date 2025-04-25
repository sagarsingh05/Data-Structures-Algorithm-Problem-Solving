function bubbleSort(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
         let isSwapped = false;
        for(let j = 0; j < n -i - 1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) return;

    }
}
const arr = [5,9,7,1,4,2];
bubbleSort(arr);
console.log(arr);