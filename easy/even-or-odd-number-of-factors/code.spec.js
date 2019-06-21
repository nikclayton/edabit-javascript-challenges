const factorGroup = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(factorGroup(33)).toEqual('even');
        expect(factorGroup(36)).toEqual('odd');
        expect(factorGroup(7)).toEqual('even');
        expect(factorGroup(1)).toEqual('odd');
        expect(factorGroup(19)).toEqual('even');
        expect(factorGroup(27)).toEqual('even');
        expect(factorGroup(100)).toEqual('odd');
        expect(factorGroup(18)).toEqual('even');
        expect(factorGroup(16)).toEqual('odd');
    });
});
