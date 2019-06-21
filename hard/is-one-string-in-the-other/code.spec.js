const overlap = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(overlap('ABC', 'Ican\'tsingmyABC')).toEqual(true);
        expect(overlap('abc', 'Ican\'tsingmyABC')).toEqual(true);
        expect(overlap('Ican\'tsingmyABC', 'abc')).toEqual(true);
        expect(overlap('*bc', 'Ican\'tsingmyABC')).toEqual(true);
        expect(overlap('abc', 'Ican\'tsingmy***')).toEqual(true);
        expect(overlap('ab', 'Ican\'tsingmy**c')).toEqual(false);
        expect(overlap('hello world', 'hello')).toEqual(false);
        expect(overlap('+=', 'this should work too +=')).toEqual(true);
        expect(overlap('don\'t forget hyphens-', '-')).toEqual(true);
        expect(overlap('don\'t forget periods ', '.')).toEqual(false);
        expect(overlap('this will always be true', '*')).toEqual(true);
        expect(overlap('this will always be false', 'F')).toEqual(false);
        expect(overlap('hey', '*********')).toEqual(true);
        expect(overlap('a*c', '*b*')).toEqual(true);
        expect(overlap('last test', 'congrats you passed the last test')).toEqual(true);
    });
});
