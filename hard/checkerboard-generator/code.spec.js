const checkerBoard = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(checkerBoard(3, 'A', 'B')).toEqual([['A', 'B', 'A'], ['B', 'A', 'B'], ['A', 'B', 'A']]);
        expect(checkerBoard(2, 7, 6)).toEqual([[7, 6], [6, 7]]);
        expect(checkerBoard(3, 1, 0)).toEqual([[1, 0, 1], [0, 1, 0], [1, 0, 1]]);
        expect(checkerBoard(3, 0, 1)).toEqual([[0, 1, 0], [1, 0, 1], [0, 1, 0]]);
        expect(checkerBoard(4, 'c', 'd')).toEqual([['c', 'd', 'c', 'd'], ['d', 'c', 'd', 'c'], ['c', 'd', 'c', 'd'], ['d', 'c', 'd', 'c']]);
        expect(checkerBoard(4, 'c', 'c')).toEqual('invalid');
    });
});
