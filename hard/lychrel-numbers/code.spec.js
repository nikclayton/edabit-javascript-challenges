const lychrel = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(lychrel(33)).toEqual(0);
        expect(lychrel(65)).toEqual(1);
        expect(lychrel(348)).toEqual(3);
        expect(lychrel(196)).toEqual(true);
        expect(lychrel(89)).toEqual(24);
        expect(lychrel(7582)).toEqual(4);
        expect(lychrel(1945)).toEqual(true);
        expect(lychrel(3673)).toEqual(true);
        expect(lychrel(9485367)).toEqual(2);
        expect(lychrel(695)).toEqual(3);
    });
});
