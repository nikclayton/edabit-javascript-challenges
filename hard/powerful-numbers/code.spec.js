const isPowerful = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isPowerful(36)).toEqual(true);
        expect(isPowerful(27)).toEqual(true);
        expect(isPowerful(32)).toEqual(true);
        expect(isPowerful(72)).toEqual(true);
        expect(isPowerful(243)).toEqual(true);
        expect(isPowerful(968)).toEqual(true);
        expect(isPowerful(951)).toEqual(false);
        expect(isPowerful(144)).toEqual(true);
        expect(isPowerful(674)).toEqual(false);
        expect(isPowerful(600)).toEqual(false);
        expect(isPowerful(500)).toEqual(true);
        expect(isPowerful(320)).toEqual(false);
        expect(isPowerful(720)).toEqual(false);
    });
});
