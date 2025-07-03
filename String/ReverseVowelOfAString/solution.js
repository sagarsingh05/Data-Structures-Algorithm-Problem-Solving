/**
 * @param {string} s
 * @return {string}
 */
var isVowel = function(s){
    if(s==='a' || s==='e' || s==='i' || s==='o' || s==='u' || s==='A' ||s==='E' || s==='I' || s==='O' || s==='U'){
        return true;
    }
    return false
}
var reverseVowels = function(s) {
    let i = 0
    let j = s.length-1

    arr = s.split('')

    while(i<j) {
        if(isVowel(arr[i])==false){
            i++;
            continue
        }
        if(isVowel(arr[j])==false){
            j--;
            continue
        }
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
        j--;
    }

    return arr.join('')
};
