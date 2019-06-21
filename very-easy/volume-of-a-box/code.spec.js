const volumeOfBox = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(volumeOfBox({width: 11, length: 1, height: 2})).toEqual(22);
        expect(volumeOfBox({width: 1, length: 5, height: 3})).toEqual(15);
        expect(volumeOfBox({width: 2, length: 1, height: 1})).toEqual(2);
        expect(volumeOfBox({width: 2, length: 6, height: 5})).toEqual(60);
        expect(volumeOfBox({width: 2, length: 5, height: 3})).toEqual(30);
        expect(volumeOfBox({width: 2, length: 5, height: 1})).toEqual(10);
    });
});
