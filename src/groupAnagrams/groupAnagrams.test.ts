import { groupAnagrams } from "./groupAnagrams";

describe("49. Group Anagrams", () => {
    test("Example 1", () => {
        expect(
            groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
        ).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
    });
    test("Example 2", () => {
        expect(groupAnagrams([""])).toStrictEqual([[""]]);
    });
    test("Example 3", () => {
        expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
    });
    test("Example 4", () => {
        expect(groupAnagrams(["", "", ""])).toStrictEqual([["", "", ""]]);
    });
});
