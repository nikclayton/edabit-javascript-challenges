const maskify = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(maskify('4556364607935616')).toEqual('############5616');
        expect(maskify('64607935616')).toEqual('#######5616');
        expect(maskify('1')).toEqual('1');
        expect(maskify('')).toEqual('');
        expect(maskify('tBy>L/cMe+?<j:6n;C~H')).toEqual('################;C~H');
        expect(maskify('12')).toEqual('12');
        expect(maskify('8Ikhlf6yoxPOwi5cB014eWbRumj7vJ')).toEqual('##########################j7vJ');
        expect(maskify('123')).toEqual('123');
        expect(maskify(')E$aCU=e"_')).toEqual('######=e"_');
        expect(maskify('2673951408')).toEqual('######1408');
        expect(maskify('1234')).toEqual('1234');
    });
});
