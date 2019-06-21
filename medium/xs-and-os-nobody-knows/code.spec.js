const XO = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(XO('ooxx')).toEqual(true);
        expect(XO('xooxx')).toEqual(false);
        expect(XO('ooxXm')).toEqual(true);
        expect(XO('zpzpzpp')).toEqual(true);
        expect(XO('zzoo')).toEqual(false);
        expect(XO('Xo')).toEqual(true);
        expect(XO('x')).toEqual(false);
        expect(XO('o')).toEqual(false);
        expect(XO('xxxoo')).toEqual(false);
        expect(XO('')).toEqual(true);
    });
});
