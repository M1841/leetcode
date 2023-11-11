// https://leetcode.com/problems/valid-anagram/
// Solved: 11.11.2023
// 42/42 test cases passed
// Runtime: 62ms (Top 7.14% for Typescript)
// Memory Usage: 43.5MB (Top 1.53% for Typescript)
// Time Complexity: O(n)
// Space Complexity: O(1)

function isAnagram(stringOne: string, stringTwo: string): boolean {
    if (stringOne.length != stringTwo.length) {
        return false;
    }

    const ENGLISH_LETTER_COUNT = "z".charCodeAt(0) - "a".charCodeAt(0) + 1;
    const CHAR_CODE_OFFSET = "a".charCodeAt(0);

    let charCodeFreq = new Array<number>(ENGLISH_LETTER_COUNT);
    charCodeFreq.fill(0);

    for (let i = 0; i < stringOne.length; i++) {
        let charCodeOne = stringOne.charCodeAt(i) - CHAR_CODE_OFFSET;
        let charCodeTwo = stringTwo.charCodeAt(i) - CHAR_CODE_OFFSET;
        charCodeFreq[charCodeOne]++;
        charCodeFreq[charCodeTwo]--;
    }

    for (let i = 0; i < ENGLISH_LETTER_COUNT; i++) {
        if (charCodeFreq[i] != 0) {
            return false;
        }
    }

    return true;
}

export { isAnagram };
