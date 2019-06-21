const isPalindrome = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPalindrome(838)).toEqual(true);
        expect(isPalindrome(77)).toEqual(true);
        expect(isPalindrome(95159)).toEqual(true);
        expect(isPalindrome(839)).toEqual(false);
        expect(isPalindrome(4234)).toEqual(false);
        expect(isPalindrome(13)).toEqual(false);
    });
});
