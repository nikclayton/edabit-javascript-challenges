const nthSmallest = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nthSmallest([1, 3, 5, 7], 1)).toEqual(1);
        expect(nthSmallest([1, 3, 5, 7], 3)).toEqual(5);
        expect(nthSmallest([1, 3, 5, 7], 5)).toEqual(undefined);
        expect(nthSmallest([7, 3, 5, 1], 2)).toEqual(3);
        expect(nthSmallest([5, 4, 3, 2, 1, -3], 1)).toEqual(-3);
        expect(nthSmallest([5, 4, 3, 2, 1, -3], 5)).toEqual(4);
        expect(nthSmallest([4, 5], 3)).toEqual(undefined);
        expect(nthSmallest([4, 5], 2)).toEqual(5);
        expect(nthSmallest([4, 5], 1)).toEqual(4);
    });
});
