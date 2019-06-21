const mysteryFunc = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mysteryFunc(152)).toEqual(10);
        expect(mysteryFunc(832)).toEqual(48);
        expect(mysteryFunc(5511)).toEqual(25);
        expect(mysteryFunc(19)).toEqual(9);
        expect(mysteryFunc(133)).toEqual(9);
    });
});
