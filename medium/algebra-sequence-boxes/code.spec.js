const boxSeq = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(boxSeq(5)).toEqual(7);
        expect(boxSeq(0)).toEqual(0);
        expect(boxSeq(6)).toEqual(6);
        expect(boxSeq(99)).toEqual(101);
        expect(boxSeq(2)).toEqual(2);
        expect(boxSeq(1)).toEqual(3);
    });
});
