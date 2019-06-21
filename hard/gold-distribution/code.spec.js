const piratesKilled = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 5])).toEqual(false);
        expect(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1])).toEqual(true);
        expect(piratesKilled([3, 3, 10], [7, 7, 0])).toEqual(false);
        expect(piratesKilled([3, 3, 10], [6, 6, 0])).toEqual(true);
        expect(piratesKilled([3, 3, 3], [0, 0, 0])).toEqual(false);
        expect(piratesKilled([3, 3, 4, 4], [0, 0, 1, 1])).toEqual(true);
        expect(piratesKilled([3, 3, 4, 4], [1, 1, 0, 0])).toEqual(false);
        expect(piratesKilled([3, 3, 4, 4], [0, 0, 0, 1])).toEqual(true);
        expect(piratesKilled([3, 3, 4, 4, 5], [0, 0, 0, 1, 1])).toEqual(true);
    });
});
