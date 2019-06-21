const isStrangePair = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isStrangePair('ratio', 'orator')).toEqual(true);
        expect(isStrangePair('sparkling', 'groups')).toEqual(true);
        expect(isStrangePair('mentee', 'eminem')).toEqual(true);
        expect(isStrangePair('yahtzee', 'easy')).toEqual(true);
        expect(isStrangePair('bush', 'hubris')).toEqual(false);
        expect(isStrangePair('edit', 'cheese')).toEqual(false);
        expect(isStrangePair('false', 'true')).toEqual(false);
        expect(isStrangePair('cupid', 'dionysus')).toEqual(false);
        expect(isStrangePair('futile', 'elephant')).toEqual(false);
        expect(isStrangePair('', '')).toEqual(true);
        expect(isStrangePair('', 'abc')).toEqual(false);
        expect(isStrangePair('a', 'a')).toEqual(true);
        expect(isStrangePair('a', 'b')).toEqual(false);
        expect(isStrangePair('&', '&')).toEqual(true);
        expect(isStrangePair('&!', '!&')).toEqual(true);
        expect(isStrangePair('5556', '65')).toEqual(true);
    });
});
