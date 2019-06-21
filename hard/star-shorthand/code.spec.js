const toStarShorthand = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(toStarShorthand('abbccc')).toEqual('ab*2c*3');
        expect(toStarShorthand('haaaappyyyyy')).toEqual('ha*4p*2y*5');
        expect(toStarShorthand('77777geff')).toEqual('7*5gef*2');
        expect(toStarShorthand('11223344')).toEqual('1*22*23*24*2');
        expect(toStarShorthand('abc')).toEqual('abc');
        expect(toStarShorthand('')).toEqual('');
    });
});
