const charCount = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(charCount('a', 'edabit')).toEqual(1);
        expect(charCount('b', 'big fat bubble')).toEqual(4);
        expect(charCount('c', 'Chamber of secrets')).toEqual(1);
        expect(charCount('f', 'frank and his friends have offered five foxes for sale')).toEqual(7);
        expect(charCount('x', 'edabit')).toEqual(0);
        expect(charCount('a', 'Adam and Eve bit the apple and found a snake')).toEqual(6);
        expect(charCount('s', 'sssssssssssssssssssssssss')).toEqual(25);
        expect(charCount('7', '10795426697')).toEqual(2);
    });
});
