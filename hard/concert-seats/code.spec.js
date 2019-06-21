const canSeeStage = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canSeeStage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(true);
        expect(canSeeStage([[1, 2, 2], [1, 2, 3], [4, 4, 4]])).toEqual(false);
        expect(canSeeStage([[1, 1, 2], [5, 2, 3], [4, 4, 4]])).toEqual(false);
        expect(canSeeStage([[1, 1, 2], [5, 2, 3], [6, 4, 4]])).toEqual(true);
        expect(canSeeStage([[0, 0, 0], [1, 1, 1], [2, 2, 2]])).toEqual(true);
        expect(canSeeStage([[2, 0, 0], [1, 1, 1], [2, 2, 2]])).toEqual(false);
        expect(canSeeStage([[1, 0, 0], [1, 1, 1], [2, 2, 2]])).toEqual(false);
        expect(canSeeStage([[1, 2, 3, 2, 1, 1], [2, 4, 4, 3, 2, 2], [5, 5, 5, 5, 4, 4], [6, 6, 7, 6, 5, 5]])).toEqual(true);
        expect(canSeeStage([[1, 2, 3, 2, 1, 1], [2, 4, 4, 3, 2, 2], [5, 5, 5, 10, 4, 4], [6, 6, 7, 6, 5, 5]])).toEqual(false);
    });
});
