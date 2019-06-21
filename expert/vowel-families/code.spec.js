const sameVowelGroup = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sameVowelGroup(['hoops', 'chuff', 'bot', 'bottom'])).toEqual(['hoops', 'bot', 'bottom']);
        expect(sameVowelGroup(['crop', 'nomnom', 'bolo', 'yodeller'])).toEqual(['crop', 'nomnom', 'bolo']);
        expect(sameVowelGroup(['semantic', 'aimless', 'beautiful', 'meatless icecream'])).toEqual(['semantic', 'aimless', 'meatless icecream']);
        expect(sameVowelGroup(['many', 'carriage', 'emit', 'apricot', 'animal'])).toEqual(['many']);
        expect(sameVowelGroup(['toe', 'ocelot', 'maniac'])).toEqual(['toe', 'ocelot']);
        expect(sameVowelGroup(['a', 'apple', 'flat', 'map', 'shark'])).toEqual(['a', 'flat', 'map', 'shark']);
        expect(sameVowelGroup(['a', 'aa', 'ab', 'abc', 'aaac', 'abe'])).toEqual(['a', 'aa', 'ab', 'abc', 'aaac']);
    });
});
