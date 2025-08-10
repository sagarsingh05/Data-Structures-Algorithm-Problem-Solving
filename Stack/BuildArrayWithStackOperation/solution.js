/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 * https://leetcode.com/problems/build-an-array-with-stack-operations/submissions/1730188836/
 */
var buildArray = function(target, n) {
    const ans = [];
    let i = 1;
    for(const idx in target){
        const element = target[idx];
        while(i < element){
            ans.push("Push");
            ans.push("Pop");
            i++;
        }
        ans.push("Push");
        i++;
    }
    return ans;
};