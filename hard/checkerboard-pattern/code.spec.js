const isCheckerboard = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isCheckerboard([[1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1]])).toEqual(true);
        expect(isCheckerboard([[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0]])).toEqual(true);
        expect(isCheckerboard([[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 1, 1], [0, 1, 0, 1, 0]])).toEqual(false);
        expect(isCheckerboard([[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [1, 1, 0, 1, 0]])).toEqual(false);
        expect(isCheckerboard([[1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 1, 1]])).toEqual(false);
        expect(isCheckerboard([[0, 1], [1, 0]])).toEqual(true);
        expect(isCheckerboard([[1, 1], [1, 0]])).toEqual(false);
        expect(isCheckerboard([[1, 1], [0, 1]])).toEqual(false);
        expect(isCheckerboard([[1, 0], [0, 1]])).toEqual(true);
        expect(isCheckerboard([[1, 0, 1], [0, 1, 0], [1, 0, 1]])).toEqual(true);
    });
});
