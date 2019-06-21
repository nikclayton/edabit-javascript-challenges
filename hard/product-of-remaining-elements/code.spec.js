const canPartition = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canPartition([-1, -10, 1, -2, 20])).toEqual(false);
        expect(canPartition([-1, -20, 5, -1, -2, 2])).toEqual(true);
        expect(canPartition([2, 8, 4, 1])).toEqual(true);
        expect(canPartition([1, 1, -1, 1])).toEqual(false);
        expect(canPartition([-1, -1, 1, 1])).toEqual(true);
        expect(canPartition([0, 5, 1, -1])).toEqual(false);
        expect(canPartition([0, 1, 1, -1])).toEqual(false);
        expect(canPartition([0, 1, 1, 1])).toEqual(false);
        expect(canPartition([0, 0, 1, 1])).toEqual(true);
        expect(canPartition([0, 0, 1])).toEqual(true);
        expect(canPartition([0, 0, 0])).toEqual(true);
        expect(canPartition([5, 5, 25, 100])).toEqual(false);
        expect(canPartition([-1, 5, 20, 100])).toEqual(false);
        expect(canPartition([1, 1, 1, 1])).toEqual(true);
        expect(canPartition([-1, 1, -1])).toEqual(true);
        expect(canPartition([-1, 1, 1])).toEqual(false);
    });
});
