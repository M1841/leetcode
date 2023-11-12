import { topKFrequent } from "./topKFrequent";

describe("347. Top K Frequent Elements", () => {
    test("Example 1", () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
    });
    test("Example 2", () => {
        expect(topKFrequent([1], 1)).toStrictEqual([1]);
    });
});
