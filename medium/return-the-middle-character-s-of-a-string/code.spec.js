const getMiddle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getMiddle('test')).toEqual('es');
        expect(getMiddle('testing')).toEqual('t');
        expect(getMiddle('middle')).toEqual('dd');
        expect(getMiddle('A')).toEqual('A');
        expect(getMiddle('inhabitant')).toEqual('bi');
        expect(getMiddle('brown')).toEqual('o');
        expect(getMiddle('pawn')).toEqual('aw');
        expect(getMiddle('cabinet')).toEqual('i');
        expect(getMiddle('fresh')).toEqual('e');
        expect(getMiddle('shorts')).toEqual('or');
    });
});
