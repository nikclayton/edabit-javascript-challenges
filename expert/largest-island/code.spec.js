const largestIsland = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(largestIsland([[1, 0, 0], [0, 0, 0], [0, 0, 1]])).toEqual(1);
        expect(largestIsland([[1, 1, 0], [0, 1, 1], [0, 0, 1]])).toEqual(5);
        expect(largestIsland([[1, 0, 0], [1, 0, 0], [1, 0, 1]])).toEqual(3);
        expect(largestIsland([[0, 0, 0], [0, 1, 1], [0, 1, 1]])).toEqual(4);
        expect(largestIsland([[1, 0, 0], [0, 0, 1], [0, 0, 1]])).toEqual(2);
        expect(largestIsland([[1, 0, 0], [0, 1, 1], [0, 0, 1]])).toEqual(4);
        expect(largestIsland([[1, 0], [0, 1], [0, 0]])).toEqual(2);
        expect(largestIsland([[1]])).toEqual(1);
        expect(largestIsland([[1], [0], [1]])).toEqual(1);
        expect(largestIsland([[1, 1, 1], [0, 1, 1], [0, 0, 1]])).toEqual(6);
    });
});
