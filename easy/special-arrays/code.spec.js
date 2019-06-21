const isSpecialArray = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])).toEqual(true);
        expect(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])).toEqual(false);
        expect(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])).toEqual(false);
        expect(isSpecialArray([1, 1, 1, 2])).toEqual(false);
        expect(isSpecialArray([2, 2, 2, 2])).toEqual(false);
        expect(isSpecialArray([2, 1, 2, 1])).toEqual(true);
        expect(isSpecialArray([4, 5, 6, 7])).toEqual(true);
        expect(isSpecialArray([4, 5, 6, 7, 0, 5])).toEqual(true);
    });
});
