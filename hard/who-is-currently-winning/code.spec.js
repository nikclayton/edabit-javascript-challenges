const currentlyWinning = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(currentlyWinning([10, 10, 22, 30, 5, 40])).toEqual(['T', 'O', 'O']);
        expect(currentlyWinning([5, 1, 2, 10])).toEqual(['Y', 'O']);
        expect(currentlyWinning([10, 10, 5, 5, 2, 2, 1, 3, 100, 5])).toEqual(['T', 'T', 'T', 'O', 'Y']);
        expect(currentlyWinning([5, 15, 17, 35, 16, 40, 66, 12, 10, 9])).toEqual(['O', 'O', 'O', 'Y', 'Y']);
        expect(currentlyWinning([33, 22, 4, 9, 12, 15, 32, 7, 9, 10, 70, 100])).toEqual(['Y', 'Y', 'Y', 'Y', 'Y', 'O']);
    });
});
