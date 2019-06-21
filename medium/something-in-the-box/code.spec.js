const inBox = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(inBox(['###', '# #', '###'])).toEqual(false);
        expect(inBox(['####', '#  #', '#  #', '####'])).toEqual(false);
        expect(inBox(['#####', '#   #', '#   #', '#   #', '#####'])).toEqual(false);
        expect(inBox(['###', '#*#', '###'])).toEqual(true);
        expect(inBox(['####', '# *#', '#  #', '####'])).toEqual(true);
        expect(inBox(['#####', '#  *#', '#   #', '#   #', '#####'])).toEqual(true);
        expect(inBox(['#####', '#   #', '# * #', '#   #', '#####'])).toEqual(true);
        expect(inBox(['#####', '#   #', '#   #', '# * #', '#####'])).toEqual(true);
        expect(inBox(['#####', '#*  #', '#   #', '#   #', '#####'])).toEqual(true);
    });
});
