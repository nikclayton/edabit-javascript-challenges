const seq = require('./code');

describe('Tests', () => {
    test('If the formula is right, 0 can be an input.', () => {
        expect(seq(0)).toEqual(1);
    });
    
    test('the tests', () => {
        expect(seq(1)).toEqual(2);
        expect(seq(2)).toEqual(6);
        expect(seq(18)).toEqual(478);
        expect(seq(27)).toEqual(1081);
        expect(seq(6)).toEqual(52);
        expect(seq(99)).toEqual(14653);
    });
});
