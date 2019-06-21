const evenOddPartition = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(evenOddPartition([5, 8, 9, 2, 0])).toEqual([[8, 2, 0], [5, 9]]);
        expect(evenOddPartition([1, 0, 1, 0, 1, 0])).toEqual([[0, 0, 0], [1, 1, 1]]);
        expect(evenOddPartition([8, 8, 4, 2])).toEqual([[8, 8, 4, 2], []]);
        expect(evenOddPartition([1, 3, 5, 7, 9])).toEqual([[], [1, 3, 5, 7, 9]]);
        expect(evenOddPartition([])).toEqual([[], []]);
    });
});
