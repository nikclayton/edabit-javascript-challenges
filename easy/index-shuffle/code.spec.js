const indexShuffle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(indexShuffle('abcdef')).toEqual('acebdf');
        expect(indexShuffle('abababab')).toEqual('aaaabbbb');
        expect(indexShuffle('it was a beautiful day')).toEqual('i a  euiu atwsabatfldy');
        expect(indexShuffle('maybe')).toEqual('myeab');
        expect(indexShuffle('holiday')).toEqual('hldyoia');
    });
});
