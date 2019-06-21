const reverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
        expect(reverse([5, 6, 7])).toEqual([7, 6, 5]);
        expect(reverse([9, 9, 2, 3, 4])).toEqual([4, 3, 2, 9, 9]);
        expect(reverse([3, 3])).toEqual([3, 3]);
        expect(reverse([-1, -1, -1])).toEqual([-1, -1, -1]);
        expect(reverse([])).toEqual([]);
    });
});
