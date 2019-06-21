const timeToEat = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(timeToEat('2:00 p.m.')).toEqual([5, 0]);
        expect(timeToEat('5:50 a.m.')).toEqual([1, 10]);
        expect(timeToEat('6:37 p.m.')).toEqual([0, 23]);
        expect(timeToEat('12:00 a.m.')).toEqual([7, 0]);
        expect(timeToEat('11:58 p.m.')).toEqual([7, 2]);
        expect(timeToEat('3:33 p.m.')).toEqual([3, 27]);
    });
});
