const charAppears = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(charAppears('She sells sea shells by the seashore.', 's')).toEqual([1, 2, 1, 2, 0, 0, 2]);
        expect(charAppears('Peter Piper picked a peck of pickled peppers.', 'p')).toEqual([1, 2, 1, 0, 1, 0, 1, 3]);
        expect(charAppears('She hiked in the morning, then swam in the river.', 't')).toEqual([0, 0, 0, 1, 0, 1, 0, 0, 1, 0]);
        expect(charAppears('I scream, you scream, we all scream for ice cream.', 'f')).toEqual([0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
        expect(charAppears('Snap, crackle, pop!', 'p')).toEqual([1, 0, 2]);
        expect(charAppears('What a wonderful world.', 'w')).toEqual([1, 0, 1, 1]);
    });
});
