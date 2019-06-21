const final = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(final(2, 2, ['0r', '0r', '0r', '1c'])).toEqual([[3, 4], [0, 1]]);
        expect(final(2, 2, ['0c'])).toEqual([[1, 0], [1, 0]]);
        expect(final(3, 3, ['0c', '1c', '1c', '2c', '2c', '2c'])).toEqual([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
        expect(final(3, 3, ['2r', '2c', '1r', '0c'])).toEqual([[1, 0, 1], [2, 1, 2], [2, 1, 2]]);
        expect(final(1, 1, [])).toEqual([[0]]);
        expect(final(3, 3, ['0r', '2c', '1r', '2c', '1c', '1r', '1r'])).toEqual([[1, 2, 3], [3, 4, 5], [0, 1, 2]]);
        expect(final(3, 3, [])).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
        expect(final(3, 4, ['1r', '1r', '1r', '3c', '3c', '3c'])).toEqual([[0, 0, 0, 3], [3, 3, 3, 6], [0, 0, 0, 3]]);
        expect(final(10, 1, ['1r', '2r', '3r', '0c'])).toEqual([[1], [2], [2], [2], [1], [1], [1], [1], [1], [1]]);
        expect(final(2, 5, ['1r', '1r', '1r', '1c', '0c', '0c', '1r', '0c', '1r', '0c'])).toEqual([[4, 1, 0, 0, 0], [9, 6, 5, 5, 5]]);
    });
});
