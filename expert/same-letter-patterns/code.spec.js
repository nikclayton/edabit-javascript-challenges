const sameLetterPattern = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sameLetterPattern('ABAB', 'CDCD')).toEqual(true);
        expect(sameLetterPattern('AAABBB', 'CCCDDD')).toEqual(true);
        expect(sameLetterPattern('ABCBA', 'BCDCB')).toEqual(true);
        expect(sameLetterPattern('AAAA', 'BBBB')).toEqual(true);
        expect(sameLetterPattern('BAAB', 'ABBA')).toEqual(true);
        expect(sameLetterPattern('BAAB', 'QZZQ')).toEqual(true);
        expect(sameLetterPattern('TTZZVV', 'PPSSBB')).toEqual(true);
        expect(sameLetterPattern('ZYX', 'ABC')).toEqual(true);
        expect(sameLetterPattern('AABAA', 'SSCSS')).toEqual(true);
        expect(sameLetterPattern('AABAABAA', 'SSCSSCSS')).toEqual(true);
        expect(sameLetterPattern('UBUBUBUB', 'WEWEWEWE')).toEqual(true);
        expect(sameLetterPattern('FFGG', 'FFG')).toEqual(false);
        expect(sameLetterPattern('FFGG', 'CDCD')).toEqual(false);
        expect(sameLetterPattern('FFFG', 'GGHI')).toEqual(false);
        expect(sameLetterPattern('FFFF', 'ABCD')).toEqual(false);
        expect(sameLetterPattern('ABCA', 'ABCD')).toEqual(false);
        expect(sameLetterPattern('ABCAAA', 'DDABCD')).toEqual(false);
    });
});
