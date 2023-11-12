// https://leetcode.com/problems/contains-duplicate/
// Solved: 10.11.2023
// 75/75 test cases passed
// Runtime: 76ms (Top 17.80% for Typescript)
// Memory Usage: 55.5MB (Top 58.88% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicate(nums: number[]): boolean {
    const occurences = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (occurences.has(nums[i])) {
            return true;
        } else {
            occurences.add(nums[i]);
        }
    }

    return false;
}

export { containsDuplicate };
