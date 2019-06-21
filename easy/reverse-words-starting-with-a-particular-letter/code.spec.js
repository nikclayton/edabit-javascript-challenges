const specialReverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(specialReverse('word searches are super fun', 's')).toEqual('word sehcraes are repus fun');
        expect(specialReverse('first man to walk on the moon', 'm')).toEqual('first nam to walk on the noom');
        expect(specialReverse('peter piper picked pickled peppers', 'p')).toEqual('retep repip dekcip delkcip sreppep');
        expect(specialReverse('he went to climb mount everest', 'p')).toEqual('he went to climb mount everest');
    });
});
