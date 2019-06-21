const expand = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(expand(13)).toEqual('10 + 3');
        expect(expand(86)).toEqual('80 + 6');
        expect(expand(17000000)).toEqual('10000000 + 7000000');
        expect(expand(420370022)).toEqual('400000000 + 20000000 + 300000 + 70000 + 20 + 2');
        expect(expand(70304)).toEqual('70000 + 300 + 4');
        expect(expand(9000000)).toEqual('9000000');
        expect(expand(5325)).toEqual('5000 + 300 + 20 + 5');
        expect(expand(2096039485293)).toEqual('2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3');
        expect(expand(92093403034573)).toEqual('90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3');
    });
});
