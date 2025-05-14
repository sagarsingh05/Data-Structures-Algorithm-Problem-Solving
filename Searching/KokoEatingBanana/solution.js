/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * https://leetcode.com/problems/koko-eating-bananas/submissions/1633400200/
 */

function canEatAllBananasInMidSpeed(piles, h, mid) {
    let totalHoursByKoko = 0;
    for(let i = 0; i < piles.length; i++) {
        totalHoursByKoko += Math.ceil(piles[i] / mid);
    }

    return totalHoursByKoko <= h;
}

var minEatingSpeed = function(piles, h) {
    let lo = 1;
    let hi = Math.max(...piles);
    let ans = 1;

    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if(canEatAllBananasInMidSpeed(piles, h, mid)) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }


    }
    return ans;
};