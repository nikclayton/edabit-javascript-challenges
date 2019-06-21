const sameAscii = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sameAscii('a', 'a')).toEqual(true);
        expect(sameAscii('A', 'a')).toEqual(false);
        expect(sameAscii('!', 'g')).toEqual(false);
        expect(sameAscii('aAAAaaAA', '~~~aa,')).toEqual(true);
        expect(sameAscii('aUGSIGHIhiSJGijs', '~~~~~~~~~FF,')).toEqual(false);
        expect(sameAscii('~~Tga2', '{}[]()I')).toEqual(true);
    });
});
