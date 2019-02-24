const verifySubstrs = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(verifySubstrs('Onomatopeia', 'on', 'mato', 'ia')).toEqual('Incomplete.');
        expect(verifySubstrs('Baby', 'B', 'ab', 'y')).toEqual('My head, body, and tail.');
        expect(verifySubstrs('Centipede', 'Cent', 'tip', 'pede')).toEqual('My head, body, and tail.');
        expect(verifySubstrs('Hey, you, stop that.', 'Hey', ', y ou, st ', '.')).toEqual('Incomplete.');
        expect(verifySubstrs('apple', 'AP', 'PPL', 'LE')).toEqual('Incomplete.');
    });
});
