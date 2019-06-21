const zipper = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2])).toEqual([4, 7]);
        expect(zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6])).toEqual([0, 0]);
        expect(zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6])).toEqual(false);
        expect(zipper([1, 5, 4, 3], [9, 8, 7, 5, 4, 3])).toEqual([0, 2]);
        expect(zipper([7, 8, 9, 9, 9], [8, 8, 9, 9, 9, 9, 9])).toEqual([1, 3]);
        expect(zipper([7, 8, 5, 1, 5], [6, 6, 5, 1, 5])).toEqual([1, 1]);
        expect(zipper([6, 6, 5, 1, 5], [6, 6, 5, 1, 5])).toEqual(true);
        expect(zipper([1, 1, 2, 6, 6, 5, 1, 5], [7, 8, 9, 4, 4, 6, 6, 5, 1, 5])).toEqual([2, 4]);
    });
});
