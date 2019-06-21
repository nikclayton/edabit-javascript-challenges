const minTurns = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minTurns('4089', '5672')).toEqual(9);
        expect(minTurns('1732', '4444')).toEqual(9);
        expect(minTurns('7109', '2332')).toEqual(13);
        expect(minTurns('2391', '4984')).toEqual(10);
        expect(minTurns('1234', '3456')).toEqual(8);
        expect(minTurns('1111', '1100')).toEqual(2);
        expect(minTurns('1111', '0000')).toEqual(4);
        expect(minTurns('0000', '9999')).toEqual(4);
    });
});
