const breakPoint = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(breakPoint(159780)).toEqual(true);
        expect(breakPoint(112)).toEqual(true);
        expect(breakPoint(10)).toEqual(false);
        expect(breakPoint(1034)).toEqual(true);
        expect(breakPoint(343)).toEqual(false);
        expect(breakPoint(1119444)).toEqual(true);
        expect(breakPoint(6666)).toEqual(true);
        expect(breakPoint(9777771)).toEqual(false);
    });
});
