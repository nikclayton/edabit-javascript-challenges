const numType = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numType(6)).toEqual('Perfect');
        expect(numType(2924)).toEqual('Amicable');
        expect(numType(5010)).toEqual('Neither');
        expect(numType(8128)).toEqual('Perfect');
        expect(numType(10744)).toEqual('Amicable');
        expect(numType(17296)).toEqual('Amicable');
        expect(numType(498)).toEqual('Neither');
        expect(numType(66992)).toEqual('Amicable');
        expect(numType(5566)).toEqual('Neither');
    });
});
