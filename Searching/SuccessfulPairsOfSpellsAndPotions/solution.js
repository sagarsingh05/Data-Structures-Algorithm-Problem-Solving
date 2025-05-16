/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/submissions/1635328745/
 */

 function lowerBound (spells, potions, success){
    let n = potions.length;
    let lo = 0;
    let hi = n - 1
    let ans = potions.length;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);

        if(BigInt(spells) * BigInt(potions[mid]) >= BigInt(success)){
            ans = mid;
            hi = mid - 1;
        }
        else{
            lo = mid + 1;
        }
    }
    return ans;
 }
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a-b)
    let n = spells.length;
    let m = potions.length;
    let res = Array(n);
    for (let i = 0; i < n; i++){
        let spell = spells[i];
        let idx = lowerBound(spell, potions, success);
        res[i] = m - idx;
    }
    return res;
};