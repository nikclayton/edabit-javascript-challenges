const whoGoesFree = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(whoGoesFree(9, 2)).toEqual(2);
        expect(whoGoesFree(9, 3)).toEqual(0);
        expect(whoGoesFree(7, 2)).toEqual(6);
        expect(whoGoesFree(7, 3)).toEqual(3);
        expect(whoGoesFree(15, 4)).toEqual(12);
        expect(whoGoesFree(14, 3)).toEqual(1);
        expect(whoGoesFree(53, 7)).toEqual(21);
        expect(whoGoesFree(543, 21)).toEqual(455);
        expect(whoGoesFree(673, 13)).toEqual(303);
    });
});
