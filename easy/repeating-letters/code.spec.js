const doubleChar = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(doubleChar('String')).toEqual('SSttrriinngg');
        expect(doubleChar('Hello World!')).toEqual('HHeelllloo  WWoorrlldd!!');
        expect(doubleChar('1234!_ ')).toEqual('11223344!!__  ');
        expect(doubleChar('##^&%%*&%%$#@@!')).toEqual('####^^&&%%%%**&&%%%%$$##@@@@!!');
        expect(doubleChar('scandal')).toEqual('ssccaannddaall');
        expect(doubleChar('economics')).toEqual('eeccoonnoommiiccss');
        expect(doubleChar(' ')).toEqual('  ');
        expect(doubleChar('_______')).toEqual('______________');
        expect(doubleChar('equip gallon read')).toEqual('eeqquuiipp  ggaalllloonn  rreeaadd');
        expect(doubleChar('baby increase')).toEqual('bbaabbyy  iinnccrreeaassee');
    });
});
