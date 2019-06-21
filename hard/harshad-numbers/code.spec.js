const harshad = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(harshad(5)).toEqual([10, 5]);
        expect(harshad(133)).toEqual([2, 2]);
        expect(harshad(82)).toEqual([0, 0]);
        expect(harshad(72)).toEqual([1, 1]);
        expect(harshad(12751223)).toEqual([6, 4]);
        expect(harshad(5831)).toEqual([3, 1]);
        expect(harshad(10309)).toEqual([4, 3]);
        expect(harshad(7384)).toEqual([0, 0]);
        expect(harshad(2584)).toEqual([1, 1]);
    });
});
