const isAvgWhole = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isAvgWhole([3, 5, 9])).toEqual(false);
        expect(isAvgWhole([1, 1, 1, 1])).toEqual(true);
        expect(isAvgWhole([1, 2, 3, 4, 5])).toEqual(true);
        expect(isAvgWhole([5, 2, 4])).toEqual(false);
        expect(isAvgWhole([11, 22])).toEqual(false);
        expect(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4])).toEqual(false);
    });
});
