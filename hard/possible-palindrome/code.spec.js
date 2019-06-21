const possiblePalindrome = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(possiblePalindrome('acabbaa')).toEqual(true);
        expect(possiblePalindrome('aacbdbc')).toEqual(true);
        expect(possiblePalindrome('aacbdb')).toEqual(false);
        expect(possiblePalindrome('abacbb')).toEqual(false);
        expect(possiblePalindrome('abb')).toEqual(true);
        expect(possiblePalindrome('bbb')).toEqual(true);
        expect(possiblePalindrome('bbaa')).toEqual(true);
        expect(possiblePalindrome('bbaacc')).toEqual(true);
        expect(possiblePalindrome('bbaaccd')).toEqual(true);
        expect(possiblePalindrome('bbaacd')).toEqual(false);
        expect(possiblePalindrome('abc')).toEqual(false);
        expect(possiblePalindrome('ab')).toEqual(false);
        expect(possiblePalindrome('aabbccddef')).toEqual(false);
    });
});
