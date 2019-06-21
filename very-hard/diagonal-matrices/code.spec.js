const diagonalize = require('./code');

describe('Tests', () => {
    test('It should work for the upper left corner.', () => {
        expect(diagonalize(3, 'ul')).toEqual([[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
    });

test('It should work for the upper right corner.', () => {
        expect(diagonalize(4, 'ur')).toEqual([[3, 2, 1, 0], [4, 3, 2, 1], [5, 4, 3, 2], [6, 5, 4, 3]]);
    });

test('It should work for the lower left corner.', () => {
        expect(diagonalize(3, 'll')).toEqual([[2, 3, 4], [1, 2, 3], [0, 1, 2]]);
    });

test('It should work for the lower right corner.', () => {
        expect(diagonalize(5, 'lr')).toEqual([[8, 7, 6, 5, 4], [7, 6, 5, 4, 3], [6, 5, 4, 3, 2], [5, 4, 3, 2, 1], [4, 3, 2, 1, 0]]);
    });
});
