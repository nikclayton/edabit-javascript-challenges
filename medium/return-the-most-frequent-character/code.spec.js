const mostFrequentChar = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mostFrequentChar(['apple', 'bandage', 'yodel', 'make'])).toEqual(['a', 'e']);
        expect(mostFrequentChar(['music', 'madness', 'maniac', 'motion'])).toEqual(['m']);
        expect(mostFrequentChar(['the', 'hills', 'are', 'alive', 'with', 'the', 'sound', 'of', 'music'])).toEqual(['e', 'h', 'i']);
        expect(mostFrequentChar(['let', 'them', 'eat', 'cake'])).toEqual(['e']);
        expect(mostFrequentChar(['potion', 'master', 'professor', 'snape'])).toEqual(['o', 's']);
    });
});
