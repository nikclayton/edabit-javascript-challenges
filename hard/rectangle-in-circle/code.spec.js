const rectangleInCircle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(rectangleInCircle(5, 12, 7)).toEqual(true);
        expect(rectangleInCircle(5, 12, 6)).toEqual(false);
        expect(rectangleInCircle(3, 7, 4)).toEqual(true);
        expect(rectangleInCircle(4, 7, 4)).toEqual(false);
        expect(rectangleInCircle(11, 1, 6)).toEqual(true);
        expect(rectangleInCircle(21, 12, 12)).toEqual(false);
    });
});
