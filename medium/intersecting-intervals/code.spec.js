const countOverlapping = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countOverlapping([[1, 2], [2, 3], [3, 4]], 5)).toEqual(0);
        expect(countOverlapping([[1, 2], [5, 6], [5, 7]], 5)).toEqual(2);
        expect(countOverlapping([[1, 2], [5, 8], [6, 9]], 7)).toEqual(2);
        expect(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 5)).toEqual(5);
        expect(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 6)).toEqual(2);
        expect(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 2)).toEqual(2);
        expect(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 1)).toEqual(1);
    });
});
