const nDifferences = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nDifferences([5, 1, 9, 3, 4, 0])).toEqual(-80);
        expect(nDifferences([8, 9, 2, 5, 4, 3, 3, 1, 6])).toEqual(-94);
        expect(nDifferences([5, 1, 9, 6, 1, 7, 3, 4])).toEqual(118);
        expect(nDifferences([1, 1, 1, 1])).toEqual(0);
        expect(nDifferences([5, 9, 7, 3])).toEqual(4);
        expect(nDifferences([1, 5, 3, 9, 7])).toEqual(-30);
        expect(nDifferences([5, 8, 8])).toEqual(-3);
        expect(nDifferences([4, 0, 0, 0, 1])).toEqual(5);
        expect(nDifferences([3, 5])).toEqual(2);
    });
});
