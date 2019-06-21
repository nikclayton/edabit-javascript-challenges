const flash = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(flash([3, 'x', 7])).toEqual(21);
        expect(flash([5, '+', 7])).toEqual(12);
        expect(flash([10, '-', 9])).toEqual(1);
        expect(flash([10, '/', 0])).toEqual(undefined);
        expect(flash([10, '/', 3])).toEqual(3.33);
        expect(flash([2, 'x', 0])).toEqual(0);
        expect(flash([0, '/', 5])).toEqual(0);
        expect(flash([0, '+', 0])).toEqual(0);
        expect(flash([0, '-', 0])).toEqual(0);
        expect(flash([8, '-', 0])).toEqual(8);
        expect(flash([0, '/', 0])).toEqual(undefined);
        expect(flash([3, '/', 8])).toEqual(0.38);
    });
});
