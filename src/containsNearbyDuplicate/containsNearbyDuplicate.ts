// https://leetcode.com/problems/contains-duplicate-ii/
// Solved: 10.11.2023
// 58/58 test cases passed
// Runtime: 76ms (Top 4.39% for Typescript)
// Memory Usage: 53.6MB (Top 22.12% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (set.size > k) {
            set.delete(nums[i - k - 1]);
        }

        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }

    return false;
}

export { containsNearbyDuplicate };
