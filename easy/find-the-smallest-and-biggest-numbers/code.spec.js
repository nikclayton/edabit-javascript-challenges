const minMax = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minMax([14, 35, 6, 1, 34, 54])).toEqual([1, 54]);
        expect(minMax([1.346, 1.6532, 1.8734, 1.8723])).toEqual([1.346, 1.8734]);
        expect(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])).toEqual([0.2345, 0.984]);
        expect(minMax([13, 72, 98, 43, 24, 65, 31])).toEqual([13, 98]);
        expect(minMax([-54, -23, -54, -21])).toEqual([-54, -21]);
        expect(minMax([-0.473, -0.6834, -0.1287, 0.5632])).toEqual([-0.6834, 0.5632]);
        expect(minMax([0, 0, 0, 0])).toEqual([0, 0]);
    });
});
