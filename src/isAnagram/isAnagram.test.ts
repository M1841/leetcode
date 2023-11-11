import { isAnagram } from "./isAnagram";

describe("242. Valid Anagram", () => {
    test("Example 1", () => {
        expect(isAnagram("anagram", "nagaram")).toStrictEqual(true);
    });
    test("Example 2", () => {
        expect(isAnagram("rat", "car")).toStrictEqual(false);
    });
    test("Example 3", () => {
        expect(isAnagram("a", "ab")).toStrictEqual(false);
    });
    test("Example 4", () => {
        expect(isAnagram("aacc", "ccac")).toStrictEqual(false);
    });
});
