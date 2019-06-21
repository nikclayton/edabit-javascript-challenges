const availableSpots = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(availableSpots([0, 4, 6, 8], 9)).toEqual(0);
        expect(availableSpots([0, 4, 6, 8], 6)).toEqual(3);
        expect(availableSpots([1, 2, 3, 4], 6)).toEqual(3);
        expect(availableSpots([1, 2, 3, 4], 5)).toEqual(3);
        expect(availableSpots([1, 1, 1, 4], 7)).toEqual(3);
        expect(availableSpots([1, 1, 4, 4], 7)).toEqual(2);
        expect(availableSpots([1, 4, 4, 4], 7)).toEqual(1);
        expect(availableSpots([4, 4, 4, 4], 7)).toEqual(0);
        expect(availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32)).toEqual(3);
        expect(availableSpots([4, 4], 8)).toEqual(1);
    });
});
