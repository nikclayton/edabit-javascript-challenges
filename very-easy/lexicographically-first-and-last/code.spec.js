const firstAndLast = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(firstAndLast('marmite')).toEqual(['aeimmrt', 'trmmiea']);
        expect(firstAndLast('bench')).toEqual(['bcehn', 'nhecb']);
        expect(firstAndLast('scoop')).toEqual(['coops', 'spooc']);
        expect(firstAndLast('fanatic')).toEqual(['aacfint', 'tnifcaa']);
    });
});
