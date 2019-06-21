const sumTwoSmallestNums = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sumTwoSmallestNums([19, 5, 42, 2, 77])).toEqual(7);
        expect(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])).toEqual(3453455);
        expect(sumTwoSmallestNums([2, 9, 6, -1])).toEqual(8);
        expect(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])).toEqual(563);
        expect(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])).toEqual(4519);
        expect(sumTwoSmallestNums([280, 134, 108])).toEqual(242);
        expect(sumTwoSmallestNums([280, 134, 108, 1])).toEqual(109);
        expect(sumTwoSmallestNums([321, 406, -176])).toEqual(727);
        expect(sumTwoSmallestNums([1, 1, 1, 1])).toEqual(2);
        expect(sumTwoSmallestNums([-1, -1, 1, 1])).toEqual(2);
    });
});
