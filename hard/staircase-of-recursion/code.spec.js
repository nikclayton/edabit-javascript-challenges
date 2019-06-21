const waysToClimb = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(waysToClimb(0)).toEqual(1);
        expect(waysToClimb(1)).toEqual(1);
        expect(waysToClimb(2)).toEqual(2);
        expect(waysToClimb(3)).toEqual(3);
        expect(waysToClimb(4)).toEqual(5);
        expect(waysToClimb(5)).toEqual(8);
        expect(waysToClimb(6)).toEqual(13);
        expect(waysToClimb(7)).toEqual(21);
        expect(waysToClimb(15)).toEqual(987);
        expect(waysToClimb(23)).toEqual(46368);
    });
});
