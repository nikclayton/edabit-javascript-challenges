const matrix = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(matrix(3, 4, 0)).toEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
        expect(matrix(2, 3, '#')).toEqual([['#', '#', '#'], ['#', '#', '#']]);
        expect(matrix(2, 3, -4)).toEqual([[-4, -4, -4], [-4, -4, -4]]);
        expect(matrix(1, 2, 0)).toEqual([[0, 0]]);
    });
});
