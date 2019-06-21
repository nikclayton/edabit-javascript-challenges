const c_fuge = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(c_fuge(6, 4)).toEqual(true);
        expect(c_fuge(5, 1)).toEqual(false);
        expect(c_fuge(12, 7)).toEqual(true);
        expect(c_fuge(1, 1)).toEqual(false);
        expect(c_fuge(21, 18)).toEqual(true);
        expect(c_fuge(1, 0)).toEqual(false);
        expect(c_fuge(4, 2)).toEqual(true);
        expect(c_fuge(5, 3)).toEqual(false);
        expect(c_fuge(21, 13)).toEqual(false);
        expect(c_fuge(3, 3)).toEqual(true);
        expect(c_fuge(50, 1)).toEqual(false);
        expect(c_fuge(8, 6)).toEqual(true);
        expect(c_fuge(9, 5)).toEqual(false);
        expect(c_fuge(2, 1)).toEqual(false);
        expect(c_fuge(59, 59)).toEqual(true);
        expect(c_fuge(11, 4)).toEqual(false);
    });
});
