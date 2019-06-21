const freedPrisoners = require('./code');

describe('Tests', () => {
    test('once first prisoner freed, all cells become locked', () => {
        expect(freedPrisoners([1, 1, 1])).toEqual(1);
    });

test('first cell locked, so cannot switch', () => {
        expect(freedPrisoners([0, 0, 0])).toEqual(0);
    });

test('first cell locked, cannot switch', () => {
        expect(freedPrisoners([0, 1, 1, 1])).toEqual(0);
    });
    
    test('the tests', () => {
        expect(freedPrisoners([1, 1, 0, 0, 0, 1, 0])).toEqual(4);
        expect(freedPrisoners([1, 0, 0, 0, 0, 0, 0])).toEqual(2);
        expect(freedPrisoners([1, 1, 1, 0, 0, 0])).toEqual(2);
        expect(freedPrisoners([1, 0, 1, 0, 1, 0])).toEqual(6);
    });
});
