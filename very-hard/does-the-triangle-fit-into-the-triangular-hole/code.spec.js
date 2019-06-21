const doesTriangleFit = require('./code');

describe('Tests', () => {
    test('Same triangle', () => {
        expect(doesTriangleFit([1, 1, 1], [1, 1, 1])).toEqual(true);
    });

test('Smaller triangle', () => {
        expect(doesTriangleFit([1, 1, 1], [2, 2, 2])).toEqual(true);
    });

test('Not a triangle', () => {
        expect(doesTriangleFit([1, 6, 8], [1, 6, 8])).toEqual(false);
    });

test('too small hole', () => {
        expect(doesTriangleFit([12, 63, 42], [1, 6, 8])).toEqual(false);
    });

test('Hole is too big', () => {
        expect(doesTriangleFit([3, 6, 8], [23, 63, 42])).toEqual(true);
    });

test('impossible hole', () => {
        expect(doesTriangleFit([3, 6, 8], [1, 10, 8])).toEqual(false);
    });
});
