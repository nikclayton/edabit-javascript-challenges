const semiprime = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(semiprime(49)).toEqual('Semiprime');
        expect(semiprime(15)).toEqual('Squarefree Semiprime');
        expect(semiprime(19)).toEqual('Neither');
        expect(semiprime(75)).toEqual('Neither');
        expect(semiprime(169)).toEqual('Semiprime');
        expect(semiprime(203)).toEqual('Squarefree Semiprime');
        expect(semiprime(177)).toEqual('Squarefree Semiprime');
        expect(semiprime(125)).toEqual('Neither');
        expect(semiprime(70)).toEqual('Neither');
    });
});
