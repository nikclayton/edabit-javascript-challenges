const calculateExponent = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(calculateExponent(5, 5)).toEqual(3125);
        expect(calculateExponent(3, 3)).toEqual(27);
        expect(calculateExponent(10, 10)).toEqual(10000000000);
    });
});
