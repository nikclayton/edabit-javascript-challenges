const checkEnding = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(checkEnding('abc', 'bc')).toEqual(true);
        expect(checkEnding('abc', 'd')).toEqual(false);
        expect(checkEnding('samurai', 'zi')).toEqual(false);
        expect(checkEnding('feminine', 'nine')).toEqual(true);
        expect(checkEnding('convention', 'tio')).toEqual(false);
        expect(checkEnding('cooperative', 'ooper')).toEqual(false);
        expect(checkEnding('extraterrestrial', 'xtraterrestrial')).toEqual(true);
        expect(checkEnding('access', 'ss')).toEqual(true);
        expect(checkEnding('motorist', 'is')).toEqual(false);
        expect(checkEnding('landowner', 'landowner')).toEqual(true);
    });
});
