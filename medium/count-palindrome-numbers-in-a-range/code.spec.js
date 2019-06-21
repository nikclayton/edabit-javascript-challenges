const countPalindromes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countPalindromes(1, 10)).toEqual(9);
        expect(countPalindromes(555, 556)).toEqual(1);
        expect(countPalindromes(878, 898)).toEqual(3);
        expect(countPalindromes(8, 34)).toEqual(5);
        expect(countPalindromes(1550, 1556)).toEqual(1);
    });
});
