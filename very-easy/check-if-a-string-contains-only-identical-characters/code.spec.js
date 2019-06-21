const isIdentical = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isIdentical('kkkkk')).toEqual(true);
        expect(isIdentical('ckkkk')).toEqual(false);
        expect(isIdentical('kkkkck')).toEqual(false);
        expect(isIdentical('aabc')).toEqual(false);
        expect(isIdentical('ccc')).toEqual(true);
        expect(isIdentical('aabbbb')).toEqual(false);
        expect(isIdentical('bbbbbb')).toEqual(true);
    });
});
