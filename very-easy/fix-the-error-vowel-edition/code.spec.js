const removeVowels = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeVowels('ben')).toEqual('bn');
        expect(removeVowels('many')).toEqual('mny');
        expect(removeVowels('candy')).toEqual('cndy');
        expect(removeVowels('hello')).toEqual('hll');
        expect(removeVowels('apple')).toEqual('ppl');
        expect(removeVowels('fever')).toEqual('fvr');
    });
});
