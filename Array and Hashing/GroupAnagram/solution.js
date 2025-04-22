/**
 * @param {string[]} strs
 * @return {string[][]}
 * https://leetcode.com/problems/group-anagrams/submissions/1614492510/
 */
var groupAnagrams = function(strs) {
    
    const map = {};

    for (let word of strs){
        const sorted = word.split('').sort().join('');
        if(map[sorted]){
            map[sorted].push(word);
        }
        else{
            map[sorted] = [word];
        }
    }
    return Object.values(map);
};