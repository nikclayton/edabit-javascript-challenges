const split = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(split(25)).toEqual(8748);
        expect(split(1)).toEqual(1);
        expect(split(10)).toEqual(36);
        expect(split(5)).toEqual(6);
        expect(split(15)).toEqual(243);
        expect(split(20)).toEqual(1458);
    });
});
