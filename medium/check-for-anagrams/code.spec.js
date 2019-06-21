const isAnagram = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isAnagram('cristian', 'Cristina')).toEqual(true);
        expect(isAnagram('Dave Barry', 'Ray Adverb')).toEqual(true);
        expect(isAnagram('Nope', 'Note')).toEqual(false);
        expect(isAnagram('Apple', 'Appeal')).toEqual(false);
    });
});
