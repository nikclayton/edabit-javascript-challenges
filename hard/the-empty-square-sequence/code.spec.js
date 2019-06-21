const emptySq = require('./code');

describe('Tests', () => {
    test('Even though the box is unexisting, the amount of empty squares is also 0.', () => {
        expect(emptySq(0)).toEqual(0);
    });
    
    test('the tests', () => {
        expect(emptySq(3)).toEqual(24);
        expect(emptySq(1)).toEqual(0);
        expect(emptySq(27)).toEqual(2808);
        expect(emptySq(3)).toEqual(24);
        expect(emptySq(10)).toEqual(360);
        expect(emptySq(19)).toEqual(1368);
        expect(emptySq(60)).toEqual(14160);
        expect(emptySq(7)).toEqual(168);
    });
});
