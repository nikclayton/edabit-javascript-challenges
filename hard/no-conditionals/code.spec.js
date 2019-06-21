const flip = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(flip(0)).toEqual(1);
        expect(flip(1)).toEqual(0);
    });
});
