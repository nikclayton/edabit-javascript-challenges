const advancedSort = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(advancedSort([1, 2, 1, 2])).toEqual([[1, 1], [2, 2]]);
        expect(advancedSort([2, 1, 2, 1])).toEqual([[2, 2], [1, 1]]);
        expect(advancedSort([3, 2, 1, 3, 2, 1])).toEqual([[3, 3], [2, 2], [1, 1]]);
        expect(advancedSort([5, 5, 4, 3, 4, 4])).toEqual([[5, 5], [4, 4, 4], [3]]);
        expect(advancedSort([80, 80, 4, 60, 60, 3])).toEqual([[80, 80], [4], [60, 60], [3]]);
        expect(advancedSort(['c', 'c', 'b', 'c', 'b', 1, 1])).toEqual([['c', 'c', 'c'], ['b', 'b'], [1, 1]]);
        expect(advancedSort([1234, 1235, 1234, 1235, 1236, 1235])).toEqual([[1234, 1234], [1235, 1235, 1235], [1236]]);
        expect(advancedSort(['1234', '1235', '1234', '1235', '1236', '1235'])).toEqual([['1234', '1234'], ['1235', '1235', '1235'], ['1236']]);
    });
});
