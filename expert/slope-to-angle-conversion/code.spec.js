const convert = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(convert(0)).toEqual(90);
        expect(convert(1)).toEqual(45);
        expect(convert(-1)).toEqual(135);
        expect(convert(3)).toEqual(18);
        expect(convert(100)).toEqual(1);
        expect(convert(-20)).toEqual(177);
    });
});
