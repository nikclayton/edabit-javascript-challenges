const mod = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(mod(-13, 64)).toEqual(51);
        expect(mod(50, 25)).toEqual(0);
        expect(mod(-6, 3)).toEqual(0);
        expect(mod(-45, 2)).not.toEqual(-1);
    });
});
