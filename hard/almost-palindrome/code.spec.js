const almostPalindrome = require('./code');

describe('Tests', () => {
    test('Should return false if already palindrome.', () => {
        expect(almostPalindrome('ggggg')).toEqual(false);
    });

test('Should return false if already palindrome.', () => {
        expect(almostPalindrome('gggfggg')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(almostPalindrome('abcdcbg')).toEqual(true);
        expect(almostPalindrome('abccia')).toEqual(true);
        expect(almostPalindrome('abcdaaa')).toEqual(false);
        expect(almostPalindrome('gggfgig')).toEqual(true);
        expect(almostPalindrome('gggffff')).toEqual(false);
        expect(almostPalindrome('GIGGG')).toEqual(true);
        expect(almostPalindrome('ggggi')).toEqual(true);
        expect(almostPalindrome('1234312')).toEqual(false);
    });
});
