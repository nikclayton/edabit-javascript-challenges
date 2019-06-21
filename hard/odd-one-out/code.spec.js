const oddOneOut = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(oddOneOut(['silly', 'mom', 'let', 'the'])).toEqual(true);
        expect(oddOneOut(['swanky', 'rhino', 'moment'])).toEqual(true);
        expect(oddOneOut(['the', 'them', 'theme'])).toEqual(false);
        expect(oddOneOut(['very', 'to', 'an', 'some'])).toEqual(false);
        expect(oddOneOut(['very', 'to', 'then', 'some'])).toEqual(true);
    });
});
