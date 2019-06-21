const findEvenNums = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(findEvenNums(4)).toEqual([2, 4]);
        expect(findEvenNums(8)).toEqual([2, 4, 6, 8]);
        expect(findEvenNums(2)).toEqual([2]);
        expect(findEvenNums(1)).toEqual([]);
        expect(findEvenNums(9)).toEqual([2, 4, 6, 8]);
        expect(findEvenNums(11)).toEqual([2, 4, 6, 8, 10]);
    });
});
