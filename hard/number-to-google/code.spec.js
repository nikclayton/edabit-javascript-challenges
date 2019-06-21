const numToGoogle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numToGoogle(['12213467'])).toEqual('Google.');
        expect(numToGoogle(['12213467', '321'])).toEqual('Google.log');
        expect(numToGoogle(['12213467', '321', '122906'])).toEqual('Google.log');
        expect(numToGoogle(['15', '2502', '15', 345])).toEqual('GOOGLE');
        expect(numToGoogle(['15', '2502', '15', 35, 45])).toEqual('GOOGLE');
        expect(numToGoogle([15, 202, 1, 3, 4])).toEqual('Google');
        expect(numToGoogle(['1221348'])).toEqual('elgoog');
        expect(numToGoogle(['15345678'])).toEqual('.ELG');
        expect(numToGoogle(['218', '6', '12', 6, 1, 2])).toEqual('go.go.go');
    });
});
