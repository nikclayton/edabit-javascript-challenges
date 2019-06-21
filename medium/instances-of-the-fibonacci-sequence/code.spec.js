const fibSeq = require('./code');

describe('Tests', () => {
    test('An empty input has to return undefined', () => {
        expect(fibSeq()).toEqual(undefined);
    });
    
    test('the tests', () => {
        expect(fibSeq(2)).toEqual([0, 1]);
        expect(fibSeq(4)).toEqual([0, 1, 1, 2]);
        expect(fibSeq(0)).toEqual([]);
        expect(fibSeq(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
        expect(fibSeq(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
        expect(fibSeq(1)).toEqual([0]);
    });
});
