/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/delete-and-earn/submissions/1696674353/
 */
var deleteAndEarn = function(nums) {
    const maxVal = Math.max(...nums);
    const points = new Array(maxVal + 1).fill(0);
    for (const num of nums) {
        points[num] += num;
    }
    const dp = new Array(maxVal + 1).fill(-1);

    function f(i) {
        if (i < 0) return 0;
        if (dp[i] !== -1) return dp[i];

        const pick = points[i] + f(i - 2);
        const skip = f(i - 1);

        dp[i] = Math.max(pick, skip);
        return dp[i];
    }

    return f(maxVal);
};
