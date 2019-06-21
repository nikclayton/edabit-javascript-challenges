const highLow = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(highLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toEqual('542 -214');
        expect(highLow('1 -1')).toEqual('1 -1');
        expect(highLow('1 1')).toEqual('1 1');
        expect(highLow('-1 -1')).toEqual('-1 -1');
        expect(highLow('1 -1 0')).toEqual('1 -1');
        expect(highLow('1 1 0')).toEqual('1 0');
        expect(highLow('-1 -1 0')).toEqual('0 -1');
        expect(highLow('42')).toEqual('42 42');
    });
});
