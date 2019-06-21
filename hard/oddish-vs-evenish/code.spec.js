const oddishOrEvenish = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(oddishOrEvenish(43)).toEqual('Oddish');
        expect(oddishOrEvenish(373)).toEqual('Oddish');
        expect(oddishOrEvenish(55551)).toEqual('Oddish');
        expect(oddishOrEvenish(694)).toEqual('Oddish');
        expect(oddishOrEvenish(4433)).toEqual('Evenish');
        expect(oddishOrEvenish(11)).toEqual('Evenish');
        expect(oddishOrEvenish(211112)).toEqual('Evenish');
    });
});
