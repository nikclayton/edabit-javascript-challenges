const isRectangle = require('./code');

describe('Tests', () => {
    test('A line is not a rectangle!', () => {
        expect(isRectangle(['(0, 0)', '(0, 1)'])).toEqual(false);
    });

test('Neither is a triangle!', () => {
        expect(isRectangle(['(0, 0)', '(0, 1)', '(1,0)'])).toEqual(false);
    });

test('A parallelogram, but not a rectangle!', () => {
        expect(isRectangle(['(0, 0)', '(9, 0)', '(7,5)', '(16, 5)'])).toEqual(false);
    });

test('One of the points is identical (really only 3 coordinates)', () => {
        expect(isRectangle(['(0, 0)', '(1, 0)', '(0, 1)', '(0, 0)'])).toEqual(false);
    });

test('Too many sides (among other things)!', () => {
        expect(isRectangle(['(1, 0)', '(1, 2)', '(2, 1)', '(2, 3)', '(3, 3)'])).toEqual(false);
    });
    
    test('the tests', () => {
        expect(isRectangle(['(-4, 3)', '(4, 3)', '(4, -3)', '(-4,-3)'])).toEqual(true);
        expect(isRectangle(['(-2, 2)', '(-2, -1)', '(5, -1)', '(5, 2)'])).toEqual(true);
    });
});
