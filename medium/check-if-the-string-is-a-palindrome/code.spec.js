const isPalindrome = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!')).toEqual(true);
        expect(isPalindrome('Neuquen')).toEqual(true);
        expect(isPalindrome('Not a palindrome')).toEqual(false);
    });
});
