const minSwaps = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minSwaps('1001', '1001')).toEqual(0);
        expect(minSwaps('1100', '1001')).toEqual(1);
        expect(minSwaps('110011', '010111')).toEqual(1);
        expect(minSwaps('1100', '0011')).toEqual(2);
        expect(minSwaps('110011', '001111')).toEqual(2);
        expect(minSwaps('10011001', '01100101')).toEqual(3);
        expect(minSwaps('11111000001100', '10110010100110')).toEqual(3);
        expect(minSwaps('01100100100111', '10110010100110')).toEqual(3);
        expect(minSwaps('11110011001', '01100110111')).toEqual(3);
        expect(minSwaps('100110001', '010100110')).toEqual(3);
        expect(minSwaps('100101011', '011001101')).toEqual(3);
        expect(minSwaps('10011001', '01100110')).toEqual(4);
    });
});
