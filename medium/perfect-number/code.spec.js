const checkPerfect = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(checkPerfect(6)).toEqual(true);
        expect(checkPerfect(28)).toEqual(true);
        expect(checkPerfect(496)).toEqual(true);
        expect(checkPerfect(8128)).toEqual(true);
        expect(checkPerfect(33550336)).toEqual(true);
        expect(checkPerfect(12)).toEqual(false);
        expect(checkPerfect(97)).toEqual(false);
        expect(checkPerfect(481)).toEqual(false);
        expect(checkPerfect(1001)).toEqual(false);
        expect(checkPerfect(55555)).toEqual(false);
    });
});
