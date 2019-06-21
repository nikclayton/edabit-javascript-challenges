const digitDistance = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(digitDistance(121, 599)).toEqual(19);
        expect(digitDistance(12, 12)).toEqual(0);
        expect(digitDistance(10, 20)).toEqual(1);
        expect(digitDistance(12345678, 23456789)).toEqual(8);
        expect(digitDistance(5555, 6666)).toEqual(4);
        expect(digitDistance(105, 777)).toEqual(15);
    });
});
