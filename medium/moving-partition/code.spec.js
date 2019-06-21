const movingPartition = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(movingPartition([1, 2, 3, 4, 5])).toEqual([[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]);
        expect(movingPartition([-1, -1, -1, -1])).toEqual([[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]);
        expect(movingPartition([8, 9, 10])).toEqual([[[8], [9, 10]], [[8, 9], [10]]]);
        expect(movingPartition([])).toEqual([]);
    });
});
