const isSymmetrical = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isSymmetrical(23)).toEqual(false);
        expect(isSymmetrical(9562)).toEqual(false);
        expect(isSymmetrical(10019)).toEqual(false);
        expect(isSymmetrical(1)).toEqual(true);
        expect(isSymmetrical(3223)).toEqual(true);
        expect(isSymmetrical(95559)).toEqual(true);
        expect(isSymmetrical(66566)).toEqual(true);
    });
});
