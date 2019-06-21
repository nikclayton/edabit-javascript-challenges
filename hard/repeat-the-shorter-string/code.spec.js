const lengthen = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(lengthen('abcdefg', 'ab')).toEqual('abababa');
        expect(lengthen('ingenius', 'forest')).toEqual('forestfo');
        expect(lengthen('skipping', 'clap')).toEqual('clapclap');
        expect(lengthen('k', 'champagne')).toEqual('kkkkkkkkk');
        expect(lengthen('DUH', 'champagne')).toEqual('DUHDUHDUH');
    });
});
