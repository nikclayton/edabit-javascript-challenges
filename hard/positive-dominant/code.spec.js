const isPositiveDominant = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPositiveDominant([1, 1, 1, 1, -3, -4])).toEqual(false);
        expect(isPositiveDominant([5, 99, 832, -3, -4])).toEqual(true);
        expect(isPositiveDominant([5, 0])).toEqual(true);
        expect(isPositiveDominant([0, -4, -1])).toEqual(false);
        expect(isPositiveDominant([1, 2, 3, -1])).toEqual(true);
        expect(isPositiveDominant([1, 0, 0, -1])).toEqual(false);
        expect(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2])).toEqual(true);
        expect(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4])).toEqual(false);
        expect(isPositiveDominant([3, 3, 3, 3, -1, -1, -1])).toEqual(false);
    });
});
