const concatName = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(concatName('John', 'Doe')).toEqual('Doe, John');
        expect(concatName('First', 'Last')).toEqual('Last, First');
        expect(concatName('A', 'B')).toEqual('B, A');
        expect(concatName(',', ',')).toEqual(',, ,');
    });
});
