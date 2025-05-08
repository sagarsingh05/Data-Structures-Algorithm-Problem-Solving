/**
 * 
 * @param {The given input where we need to find the element} arr 
 * @param {The element need to find which is in the arr} x 
 */
function binarySearch (arr, x){
    let n = arr.length;
    let low = 0;
    let high = n - 1;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(x == arr[mid]){
            return mid; //we found the element.
        }
        else if(arr[mid] < x){
            low = mid + 1;
        }
        else{
            high = mid - 1; 
        }
    }
    return -1;
}

let arr = [-4,1,4,8,18,19,25,26];
console.log(binarySearch(arr, 26));