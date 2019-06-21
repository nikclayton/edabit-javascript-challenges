const removeSmallest = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
        expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
        expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
        expect(removeSmallest([3, 1, 6, 7, 3, 7, 6])).toEqual([3, 6, 7, 3, 7, 6]);
        expect(removeSmallest([4, 4, 4, 1])).toEqual([4, 4, 4]);
        expect(removeSmallest([5, 4, 5, 3, 1, 1])).toEqual([5, 4, 5, 3, 1]);
        expect(removeSmallest([1, 5, 3])).toEqual([5, 3]);
        expect(removeSmallest([])).toEqual([]);
        expect(removeSmallest([6, 2, 5, 4, 8, 6, 3, 2, 7])).toEqual([6, 5, 4, 8, 6, 3, 2, 7]);
        expect(removeSmallest([3])).toEqual([]);
    });
});
