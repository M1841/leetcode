import { containsDuplicate } from "./containsDuplicate";

describe("217. Contains Duplicate", () => {
    test("Example 1", () => {
        expect(containsDuplicate([1, 2, 3, 1])).toStrictEqual(true);
    });
    test("Example 2", () => {
        expect(containsDuplicate([1, 2, 3, 4])).toStrictEqual(false);
    });
    test("Example 3", () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toStrictEqual(
            true
        );
    });
});
