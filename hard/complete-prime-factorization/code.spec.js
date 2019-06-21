const completeFactorization = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(completeFactorization(30)).toEqual([2, 3, 5]);
        expect(completeFactorization(12)).toEqual([2, 2, 3]);
        expect(completeFactorization(15)).toEqual([3, 5]);
        expect(completeFactorization(48)).toEqual([2, 2, 2, 2, 3]);
        expect(completeFactorization(311)).toEqual([311]);
        expect(completeFactorization(17)).toEqual([17]);
        expect(completeFactorization(44)).toEqual([2, 2, 11]);
        expect(completeFactorization(10)).toEqual([2, 5]);
        expect(completeFactorization(9)).toEqual([3, 3]);
        expect(completeFactorization(72)).toEqual([2, 2, 2, 3, 3]);
    });
});
