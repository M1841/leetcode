// https://leetcode.com/problems/group-anagrams/
// Solved: 12.11.2023
// 120/120 test cases passed
// Runtime: 90ms (Top 1.73% for Typescript)
// Memory Usage: 53.38MB (Top 25.87% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(n)

function groupAnagrams(strings: string[]): string[][] {
    let hashTable: {
        [key: string]: string[];
    } = {};

    for (let str of strings) {
        let key = [...str].sort().join("");
        if (key in hashTable) {
            hashTable[key].push(str);
        } else {
            hashTable[key] = [str];
        }
    }

    return Object.values(hashTable);
}

export { groupAnagrams };
