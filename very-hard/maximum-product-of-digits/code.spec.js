const maxProduct = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(maxProduct(8)).toEqual([8]);
        expect(maxProduct(21)).toEqual([9, 19]);
        expect(maxProduct(26)).toEqual([26]);
        expect(maxProduct(27)).toEqual([27]);
        expect(maxProduct(43)).toEqual([39]);
        expect(maxProduct(90)).toEqual([89]);
        expect(maxProduct(199)).toEqual([99, 199]);
        expect(maxProduct(211)).toEqual([99, 199]);
        expect(maxProduct(455)).toEqual([399]);
        expect(maxProduct(917)).toEqual([899]);
        expect(maxProduct(1578)).toEqual([999]);
        expect(maxProduct(9578)).toEqual([8999]);
        expect(maxProduct(11111)).toEqual([9999]);
        expect(maxProduct(41111)).toEqual([39999]);
    });
});
