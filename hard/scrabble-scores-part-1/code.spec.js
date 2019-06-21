const bestWords = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bestWords(['got', 'test', 'oh', 'sat', 'rents'])).toEqual(['oh', 'rents']);
        expect(bestWords(['digest', 'divest', 'verge', 'honey', 'money'])).toEqual(['honey']);
        expect(bestWords(['wig', 'jury', 'interim', 'size', 'hunter'])).toEqual(['jury']);
        expect(bestWords(['berry', 'whiz', 'laughed', 'ghetto', 'psychic'])).toEqual(['whiz', 'psychic']);
        expect(bestWords(['library', 'index', 'memory', 'ghosts', 'quit'])).toEqual(['library', 'index', 'memory', 'quit']);
        expect(bestWords(['singing', 'swine', 'llamas', 'crunchy', 'creamy'])).toEqual(['crunchy']);
    });
});
