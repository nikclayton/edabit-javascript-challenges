const numInStr = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numInStr(['abc', 'abc10'])).toEqual(['abc10']);
        expect(numInStr(['abc', 'ab10c', 'a10bc', 'bcd'])).toEqual(['ab10c', 'a10bc']);
        expect(numInStr(['1', 'a', ' ', 'b'])).toEqual(['1']);
        expect(numInStr(['rct', 'ABC', 'Test', 'xYz'])).toEqual([]);
        expect(numInStr(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])).toEqual(['10xYZ', 'xy2K77', 'Z1K2W0']);
        expect(numInStr(['-/>', '10bc', 'abc '])).toEqual(['10bc']);
    });
});
