const noIntersectingOnes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(noIntersectingOnes([[0, 1], [1, 0]])).toEqual(true);
        expect(noIntersectingOnes([[1, 1], [0, 0]])).toEqual(false);
        expect(noIntersectingOnes([[0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0]])).toEqual(true);
        expect(noIntersectingOnes([[0, 0, 0, 1], [1, 0, 0, 0], [0, 0, 0, 1]])).toEqual(false);
        expect(noIntersectingOnes([[0, 0, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]])).toEqual(false);
        expect(noIntersectingOnes([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])).toEqual(true);
        expect(noIntersectingOnes([[1, 0, 0], [0, 1, 0], [0, 0, 1]])).toEqual(true);
        expect(noIntersectingOnes([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])).toEqual(true);
        expect(noIntersectingOnes([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]])).toEqual(false);
    });
});
