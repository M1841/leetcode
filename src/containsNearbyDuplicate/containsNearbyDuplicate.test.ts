import { containsNearbyDuplicate } from "./containsNearbyDuplicate";

describe("219. Contains Duplicate II", () => {
    test("Example 1", () => {
        expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toStrictEqual(true);
    });
    test("Example 2", () => {
        expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toStrictEqual(true);
    });
    test("Example 3", () => {
        expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toStrictEqual(
            false
        );
    });
});
