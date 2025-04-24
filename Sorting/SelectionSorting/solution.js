function selectionSorting (arr){
    let n = arr.length
    for (let i = 0; i< n-1; i++ ){
        let min_inx = findMinValue(arr, i)
        if(min_inx != i){
            const temp = arr[i];
            arr[i] = arr[min_inx];
            arr[min_inx] = temp;
        }
    }
}

function findMinValue (arr, i){
    let min_inx = i;

    for (let j = i+1; j<arr.length; j++){
        if(arr[j] < arr[min_inx]){
            min_inx = j;
        }
    }
return min_inx;
}

const arr = [4,5,3,2,7,-2,7,10];

selectionSorting(arr);
console.log(arr);