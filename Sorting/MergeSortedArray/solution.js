/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * https://leetcode.com/problems/merge-sorted-array/submissions/1617488062/
 */
var merge = function(nums1, m, nums2, n) {
    let result = Array(m + n);
    let i = 0, j = 0, k = 0;

    while (i < m && j < n){
        if(nums1[i] <= nums2[j]){
            result[k] = nums1[i];
            k++
            i++;
        }
        else{
            result[k] = nums2[j];
            k++
            j++;
        }
    }
    
    while(j < n){
        result[k] = nums2[j];
        k++;
        j++;
    }

    while(i < m){
        result[k] = nums1[i];
        k++
        i++;
    }
    k=0;
    while(k < m + n){
        nums1[k] = result[k];
        k++;
    }
};