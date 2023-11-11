// https://leetcode.com/problems/valid-anagram/
// Solved: 12.11.2023
// 120/120 test cases passed
// Runtime: 90ms (Top 1.73% for Typescript)
// Memory Usage: 53.38MB (Top 25.87% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(n)

function groupAnagrams(strings: string[]): string[][] {
    let map = new Map();

    for (let str of strings) {
        let key = [...str].sort().join("");
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }

    return [...map.values()];
}

export { groupAnagrams };
