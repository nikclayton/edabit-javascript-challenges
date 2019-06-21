const getPrimeFactorization = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getPrimeFactorization(2)).toEqual([[2, 1]]);
        expect(getPrimeFactorization(4)).toEqual([[2, 2]]);
        expect(getPrimeFactorization(10)).toEqual([[2, 1], [5, 1]]);
        expect(getPrimeFactorization(11)).toEqual([[11, 1]]);
        expect(getPrimeFactorization(29)).toEqual([[29, 1]]);
        expect(getPrimeFactorization(60)).toEqual([[2, 2], [3, 1], [5, 1]]);
        expect(getPrimeFactorization(100)).toEqual([[2, 2], [5, 2]]);
        expect(getPrimeFactorization(151)).toEqual([[151, 1]]);
        expect(getPrimeFactorization(323)).toEqual([[17, 1], [19, 1]]);
        expect(getPrimeFactorization(997)).toEqual([[997, 1]]);
        expect(getPrimeFactorization(3349)).toEqual([[17, 1], [197, 1]]);
        expect(getPrimeFactorization(5040)).toEqual([[2, 4], [3, 2], [5, 1], [7, 1]]);
        expect(getPrimeFactorization(6097)).toEqual([[7, 1], [13, 1], [67, 1]]);
        expect(getPrimeFactorization(8192)).toEqual([[2, 13]]);
        expect(getPrimeFactorization(9870)).toEqual([[2, 1], [3, 1], [5, 1], [7, 1], [47, 1]]);
        expect(getPrimeFactorization(9973)).toEqual([[9973, 1]]);
        expect(getPrimeFactorization(9999)).toEqual([[3, 2], [11, 1], [101, 1]]);
    });
});
