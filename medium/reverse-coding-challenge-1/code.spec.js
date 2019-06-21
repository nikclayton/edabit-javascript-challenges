const mysteryFunc = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mysteryFunc('A4B5C2')).toEqual('AAAABBBBBCC');
        expect(mysteryFunc('C2F1E5')).toEqual('CCFEEEEE');
        expect(mysteryFunc('T4S2V2')).toEqual('TTTTSSVV');
        expect(mysteryFunc('A1B2C3D4')).toEqual('ABBCCCDDDD');
    });
});
