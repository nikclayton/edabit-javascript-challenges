const reverseImage = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reverseImage([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toEqual([[0, 1, 1], [1, 0, 1], [1, 1, 0]]);
        expect(reverseImage([[1, 1, 1], [0, 0, 0]])).toEqual([[0, 0, 0], [1, 1, 1]]);
        expect(reverseImage([[1, 0, 0], [1, 0, 0]])).toEqual([[0, 1, 1], [0, 1, 1]]);
        expect(reverseImage([[1, 0, 0, 0, 0], [1, 0, 0, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0], [1, 1, 1, 0, 0]])).toEqual([[0, 1, 1, 1, 1], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 1, 1]]);
        expect(reverseImage([[1, 1], [1, 0], [1, 1], [1, 1], [1, 1]])).toEqual([[0, 0], [0, 1], [0, 0], [0, 0], [0, 0]]);
    });
});
