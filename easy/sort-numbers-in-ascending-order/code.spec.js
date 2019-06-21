const sortNumsAscending = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortNumsAscending([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50]);
        expect(sortNumsAscending([80, 29, 4, -95, -24, 85])).toEqual([-95, -24, 4, 29, 80, 85]);
        expect(sortNumsAscending(undefined)).toEqual([]);
        expect(sortNumsAscending([])).toEqual([]);
        expect(sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27])).toEqual([-85, -27, -17, -16, -16, -8, 47, 47, 51, 91]);
        expect(sortNumsAscending([-51, -73, 65, 69, -76, 74, -14])).toEqual([-76, -73, -51, -14, 65, 69, 74]);
        expect(sortNumsAscending([45, 98, 35, 65, 97, 21, 33])).toEqual([21, 33, 35, 45, 65, 97, 98]);
        expect(sortNumsAscending([-23, -69, -54, -2, -32])).toEqual([-69, -54, -32, -23, -2]);
        expect(sortNumsAscending([-21, -9, -96])).toEqual([-96, -21, -9]);
        expect(sortNumsAscending([0])).toEqual([0]);
    });
});
