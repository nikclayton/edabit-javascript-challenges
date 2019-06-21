const posNegSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(posNegSort([6, 3, -2, 5, -8, 2, -2])).toEqual([2, 3, -2, 5, -8, 6, -2]);
        expect(posNegSort([6, 5, 4, -1, 3, 2, -1, 1])).toEqual([1, 2, 3, -1, 4, 5, -1, 6]);
        expect(posNegSort([-5, -5, -5, -5, 7, -5])).toEqual([-5, -5, -5, -5, 7, -5]);
        expect(posNegSort([-5, -5, -5, -5, -4, -5])).toEqual([-5, -5, -5, -5, -4, -5]);
        expect(posNegSort([-5, 4, -8, 3, -1, 2, 1, -7])).toEqual([-5, 1, -8, 2, -1, 3, 4, -7]);
        expect(posNegSort([-5, 4, 3])).toEqual([-5, 3, 4]);
        expect(posNegSort([])).toEqual([]);
    });
});
