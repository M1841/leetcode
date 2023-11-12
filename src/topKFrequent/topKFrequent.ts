// https://leetcode.com/problems/top-k-frequent-elements/
// Solved: 12.11.2023
// 21/21 test cases passed
// Runtime: 56ms (Top 2.72% for Typescript)
// Memory Usage: 45.9MB (Top 43.80% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(n)

function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    let results = new Array<number>();

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    for (let entry of [...map.entries()].sort(
        (a: [number, number], b: [number, number]): number => b[1] - a[1]
    )) {
        results.push(entry[0]);
        if (results.length === k) {
            return results;
        }
    }

    return [];
}

export { topKFrequent };
