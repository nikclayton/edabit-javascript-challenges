const divisible = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(divisible([3, 2, 4, 1])).toEqual(false);
        expect(divisible([4, 4, 4, 4])).toEqual(true);
        expect(divisible([4, 2, 6])).toEqual(true);
        expect(divisible([1, 1, 1, 1, 10])).toEqual(false);
        expect(divisible([10, 5, 10])).toEqual(true);
        expect(divisible([3, 5, 1])).toEqual(false);
    });
});
