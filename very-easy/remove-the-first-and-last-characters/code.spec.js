const removeFirstLast = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeFirstLast('hello')).toEqual('ell');
        expect(removeFirstLast('benefit')).toEqual('enefi');
        expect(removeFirstLast('wordy')).toEqual('ord');
        expect(removeFirstLast('maybe')).toEqual('ayb');
        expect(removeFirstLast('to')).toEqual('to');
        expect(removeFirstLast('a')).toEqual('a');
        expect(removeFirstLast('')).toEqual('');
    });
});
