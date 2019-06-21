const sameLine = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sameLine([[0, 0], [1, 1], [3, 3]])).toEqual(true);
        expect(sameLine([[-2, -1], [2, 1], [0, 0]])).toEqual(true);
        expect(sameLine([[-2, 0], [-10, 0], [-8, 0]])).toEqual(true);
        expect(sameLine([[0, 0], [0, 5], [0, 7]])).toEqual(true);
        expect(sameLine([[9, 9], [8, 8], [6, 6]])).toEqual(true);
        expect(sameLine([[0, 0], [1, 1], [1, 2]])).toEqual(false);
        expect(sameLine([[3, 4], [3, 5], [6, 6]])).toEqual(false);
        expect(sameLine([[9, 8], [8, 8], [6, 6]])).toEqual(false);
    });
});
