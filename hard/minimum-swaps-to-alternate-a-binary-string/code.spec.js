const minSwaps = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minSwaps('10')).toEqual(0);
        expect(minSwaps('0101')).toEqual(0);
        expect(minSwaps('101010')).toEqual(0);
        expect(minSwaps('1100')).toEqual(1);
        expect(minSwaps('111000')).toEqual(1);
        expect(minSwaps('100101')).toEqual(1);
        expect(minSwaps('100011')).toEqual(1);
        expect(minSwaps('010110')).toEqual(1);
        expect(minSwaps('10001110')).toEqual(1);
        expect(minSwaps('11001100')).toEqual(2);
        expect(minSwaps('11110000')).toEqual(2);
        expect(minSwaps('1001001011')).toEqual(2);
        expect(minSwaps('100100100111')).toEqual(3);
        expect(minSwaps('101100000111')).toEqual(3);
        expect(minSwaps('111000000111')).toEqual(3);
        expect(minSwaps('111111000000')).toEqual(3);
        expect(minSwaps('11000000011111')).toEqual(3);
        expect(minSwaps('11111110000000')).toEqual(3);
        expect(minSwaps('1111111100000000')).toEqual(4);
    });
});
