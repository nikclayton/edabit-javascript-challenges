const sumDigProd = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sumDigProd(8, 16, 89, 3)).toEqual(6);
        expect(sumDigProd(16, 28)).toEqual(6);
        expect(sumDigProd(9)).toEqual(9);
        expect(sumDigProd(26, 497, 62, 841)).toEqual(6);
        expect(sumDigProd(0)).toEqual(0);
        expect(sumDigProd(17737, 98723, 2)).toEqual(6);
        expect(sumDigProd(123, -99)).toEqual(8);
        expect(sumDigProd(9, 8)).toEqual(7);
        expect(sumDigProd(167, 167, 167, 167, 167, 3)).toEqual(8);
        expect(sumDigProd(111111111)).toEqual(1);
        expect(sumDigProd(98526, 54, 863, 156489, 45, 6156)).toEqual(2);
        expect(sumDigProd(999, 999)).toEqual(8);
        expect(sumDigProd(1, 2, 3, 4, 5, 6)).toEqual(2);
        expect(sumDigProd(999, 2222)).toEqual(2);
        expect(sumDigProd(8618, -2)).toEqual(6);
    });
});
