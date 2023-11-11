// https://leetcode.com/problems/two-sum/
// Solved: 11.11.2023
// 50/50 test cases passed
// Runtime: 56ms (Top 12.98% for Typescript)
// Memory Usage: 43.5MB (Top 35.31% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSum(nums: number[], target: number): number[] {
    let hashTable: {
        [key: number]: number;
    } = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in hashTable) {
            return [hashTable[target - nums[i]], i];
        } else {
            hashTable[nums[i]] = i;
        }
    }

    return [];
}

export { twoSum };
