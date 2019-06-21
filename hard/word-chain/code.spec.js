const isWordChain = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isWordChain(['meal', 'seal', 'seat', 'beat', 'beet'])).toEqual(true);
        expect(isWordChain(['red', 'bed', 'bet', 'bat', 'sat'])).toEqual(true);
        expect(isWordChain(['heady', 'ready', 'beady', 'beads', 'meads', 'meats', 'seats', 'feats'])).toEqual(true);
        expect(isWordChain(['score', 'scare', 'stare', 'spare', 'spire'])).toEqual(true);
        expect(isWordChain(['more', 'mire', 'dire', 'dare', 'date'])).toEqual(true);
        expect(isWordChain(['read', 'red', 'led', 'lad', 'lady'])).toEqual(false);
        expect(isWordChain(['red', 'bat', 'cat', 'sat'])).toEqual(false);
        expect(isWordChain(['candy', 'candies', 'fat', 'rat'])).toEqual(false);
    });
});
