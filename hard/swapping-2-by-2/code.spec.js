const swapTwo = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(swapTwo('ABCDEFGH')).toEqual('CDABGHEF');
        expect(swapTwo('AABBCCDDEEFF')).toEqual('BBAADDCCFFEE');
        expect(swapTwo('oompaloompa')).toEqual('mpooooalmpa');
        expect(swapTwo('munchkins')).toEqual('ncmuinhks');
        expect(swapTwo('FFGGHHI')).toEqual('GGFFHHI');
        expect(swapTwo('FFG')).toEqual('FFG');
        expect(swapTwo('')).toEqual('');
    });
});
