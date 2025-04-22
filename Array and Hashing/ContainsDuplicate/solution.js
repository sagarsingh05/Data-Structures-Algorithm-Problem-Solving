/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate/submissions/1614368995/
 */
var containsDuplicate = function(nums) {
    const mp = {};

    for(let i = 0; i< nums.length; i++){
        if(mp[nums[i]]){
            return true;
        }
        else{
            mp[nums[i]] = true;
        }
    }
    return false;

};