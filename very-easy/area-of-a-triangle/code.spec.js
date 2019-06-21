const triArea = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(triArea(3, 2)).toEqual(3);
        expect(triArea(5, 4)).toEqual(10);
        expect(triArea(10, 10)).toEqual(50);
        expect(triArea(0, 60)).toEqual(0);
        expect(triArea(12, 11)).toEqual(66);
    });
});
