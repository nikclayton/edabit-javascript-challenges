const gcd = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(gcd(32, 8)).toEqual(8);
        expect(gcd(8, 12)).toEqual(4);
        expect(gcd(17, 13)).toEqual(1);
        expect(gcd(14, 7)).toEqual(7);
        expect(gcd(32, 16)).toEqual(16);
        expect(gcd(17, 100)).toEqual(1);
        expect(gcd(55, 20)).toEqual(5);
        expect(gcd(55, 22)).toEqual(11);
    });
});
