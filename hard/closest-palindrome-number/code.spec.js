const closestPalindrome = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(closestPalindrome(887)).toEqual(888);
        expect(closestPalindrome(888)).toEqual(888);
        expect(closestPalindrome(27)).toEqual(22);
        expect(closestPalindrome(519)).toEqual(515);
        expect(closestPalindrome(4892)).toEqual(4884);
        expect(closestPalindrome(1)).toEqual(1);
        expect(closestPalindrome(100)).toEqual(99);
        expect(closestPalindrome(33344)).toEqual(33333);
        expect(closestPalindrome(123456)).toEqual(123321);
        expect(closestPalindrome(978215236)).toEqual(978212879);
    });
});
