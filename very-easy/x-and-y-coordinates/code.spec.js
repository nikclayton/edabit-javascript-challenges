const convertCartesian = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])).toEqual([[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]);
        expect(convertCartesian([9, 8, 3], [1, 1, 1])).toEqual([[9, 1], [8, 1], [3, 1]]);
        expect(convertCartesian([2, 5, 1], [7, 8, 9])).toEqual([[2, 7], [5, 8], [1, 9]]);
        expect(convertCartesian([3, 2, 2], [6, 1, 7])).toEqual([[3, 6], [2, 1], [2, 7]]);
    });
});
