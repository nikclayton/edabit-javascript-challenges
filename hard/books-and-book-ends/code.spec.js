const countUniqueBooks = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countUniqueBooks('AZYWABBCATTTA', 'A')).toEqual(4);
        expect(countUniqueBooks('$AA$BBCATT$C$$B$', '$')).toEqual(3);
        expect(countUniqueBooks('ZZABCDEF', 'Z')).toEqual(0);
        expect(countUniqueBooks('A#BBCD##GGA##!#', '#')).toEqual(6);
        expect(countUniqueBooks('&AAAAAAAAAAAA&', '&')).toEqual(1);
        expect(countUniqueBooks('&&&&&&&&', '&')).toEqual(0);
        expect(countUniqueBooks('&A&&&&&&C&', '&')).toEqual(2);
        expect(countUniqueBooks('&A&33333&C&', '&')).toEqual(2);
        expect(countUniqueBooks('&3&3&3&', '&')).toEqual(1);
        expect(countUniqueBooks('&4&3&3&', '&')).toEqual(2);
        expect(countUniqueBooks('&AA&', 'A')).toEqual(0);
        expect(countUniqueBooks('AZAAABDZCCZZ', 'Z')).toEqual(3);
        expect(countUniqueBooks('AZAAABDZCCZZ', 'A')).toEqual(1);
    });
});
