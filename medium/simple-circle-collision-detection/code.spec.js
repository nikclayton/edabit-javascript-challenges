const isCircleCollision = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isCircleCollision([10, 0, 0], [10, 10, 10])).toEqual(true);
        expect(isCircleCollision([10, 0, 0], [5, 0, 0])).toEqual(true);
        expect(isCircleCollision([1, 0, 0], [1, 0, 0])).toEqual(true);
        expect(isCircleCollision([5, 0, 0], [5, 10, 10])).toEqual(false);
        expect(isCircleCollision([1, 0, 0], [1, 10, 10])).toEqual(false);
    });
});
