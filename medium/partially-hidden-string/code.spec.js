const partiallyHide = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(partiallyHide('Harry went to fight the basilisk')).toEqual('H---y w--t to f---t t-e b------k');
        expect(partiallyHide('She rolled her eyes')).toEqual('S-e r----d h-r e--s');
        expect(partiallyHide('skies were so beautiful')).toEqual('s---s w--e so b-------l');
        expect(partiallyHide('red is not my color')).toEqual('r-d is n-t my c---r');
        expect(partiallyHide('so many options')).toEqual('so m--y o-----s');
        expect(partiallyHide('the orient express')).toEqual('t-e o----t e-----s');
        expect(partiallyHide('went to the post office')).toEqual('w--t to t-e p--t o----e');
    });
});
