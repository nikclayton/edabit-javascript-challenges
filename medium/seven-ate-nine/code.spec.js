const sevenAte9 = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(sevenAte9('165561786121789797')).toEqual('16556178612178977');
        expect(sevenAte9('797')).toEqual('77');
        expect(sevenAte9('7')).toEqual('7');
        expect(sevenAte9('9')).toEqual('9');
        expect(sevenAte9('16797')).toEqual('1677');
        expect(sevenAte9('77')).toEqual('77');
        expect(sevenAte9('x779')).toEqual('x779');
        expect(sevenAte9('7927')).toEqual('7927');
        expect(sevenAte9('1779')).toEqual('1779');
        expect(sevenAte9('17797a')).toEqual('1777a');
        expect(sevenAte9('1679 7')).toEqual('167 7');
    });
});
