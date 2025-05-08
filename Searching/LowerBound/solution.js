function lowerBound (arr, x){
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let ans = arr.length;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

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

let arr = [0,1,2,2,4,5,6,6,7,8,9,10];

console.log(lowerBound(arr, ))