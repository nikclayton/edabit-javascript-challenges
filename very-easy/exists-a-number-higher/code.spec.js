const existsHigher = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(existsHigher([5, 3, 15, 22, 4], 10)).toEqual(true);
        expect(existsHigher([1, 2, 3, 4, 5], 8)).toEqual(false);
        expect(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)).toEqual(true);
        expect(existsHigher([2, 2, 2, 2], 5)).toEqual(false);
        expect(existsHigher([], 0)).toEqual(false);
    });
});
