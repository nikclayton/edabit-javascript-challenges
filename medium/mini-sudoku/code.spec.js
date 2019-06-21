const isMiniSudoku = require('./code');

describe('Tests', () => {
    test('1 is included twice.', () => {
        expect(isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]])).toEqual(false);
    });

test('0 is not in range 1-9.', () => {
        expect(isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]])).toEqual(false);
    });

test('7 is included twice.', () => {
        expect(isMiniSudoku([[2, 3, 4], [6, 7, 7], [8, 9, 1]])).toEqual(false);
    });

test('6 is included twice.', () => {
        expect(isMiniSudoku([[4, 3, 5], [8, 6, 2], [9, 6, 7]])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]])).toEqual(true);
        expect(isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]])).toEqual(true);
        expect(isMiniSudoku([[6, 5, 9], [4, 3, 8], [2, 1, 7]])).toEqual(true);
        expect(isMiniSudoku([[4, 3, 5], [8, 1, 2], [9, 6, 7]])).toEqual(true);
    });
});
