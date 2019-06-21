const makeBox = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(makeBox(5)).toEqual(['#####', '#   #', '#   #', '#   #', '#####']);
        expect(makeBox(6)).toEqual(['######', '#    #', '#    #', '#    #', '#    #', '######']);
        expect(makeBox(4)).toEqual(['####', '#  #', '#  #', '####']);
        expect(makeBox(2)).toEqual(['##', '##']);
        expect(makeBox(1)).toEqual(['#']);
    });
});
