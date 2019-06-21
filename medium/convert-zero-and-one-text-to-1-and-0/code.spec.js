const textToNumberBinary = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(textToNumberBinary('one one one one zero zero zero zero')).toEqual('11110000');
        expect(textToNumberBinary('one Zero zero one zero zero one one one one one zero oNe one one zero one zerO')).toEqual('1001001111101110');
        expect(textToNumberBinary('one zero one')).toEqual('');
        expect(textToNumberBinary('one zero zero one zero ten one one one one two')).toEqual('10010111');
        expect(textToNumberBinary('One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero')).toEqual('1001011101100001011101100001011101100001011101100001011101100001');
        expect(textToNumberBinary('TWO one zero one one zero one zero')).toEqual('');
        expect(textToNumberBinary('TWO one zero one one zero one zero one')).toEqual('10110101');
    });
});
