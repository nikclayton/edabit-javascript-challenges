const count = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(count(['??????', '?####?', '?#&!#?', '@#^Z#?', '$####?'])).toEqual(4);
        expect(count(['??????', '?####?', '?#ZZ#?', '@#ZZ#?', '$####?', 'AAAAAA'])).toEqual(1);
        expect(count(['??????', '?####?', '?#  #?', '@#  #?', '$####?', 'AAAAAA'])).toEqual(0);
        expect(count(['??????Z', 'Z?####?V', '$?#  #?X', '$@#BA#?P', '$T####?T', 'ZAAAAAAT'])).toEqual(2);
        expect(count(['??????Z', 'Z?####?V', '$?#BB#?X', '$@#BA#?P', '$T####?T', 'ZAAAAAAT'])).toEqual(2);
        expect(count(['!!Z', '###', '#B#', '#B#', '###'])).toEqual(1);
        expect(count(['!!Z', '###', '#B#', '# #', '###'])).toEqual(1);
        expect(count(['AAAAA', 'AAA##', 'AAA##', 'AAAAA', 'AAAAA'])).toEqual(0);
        expect(count(['AAAAAAA', 'AAA###A', 'AAA#!#A', 'AAA###A', 'AAAAAAA'])).toEqual(1);
        expect(count(['#AAAAAABC', 'AAA#####C', 'ZAA#!%@#C', 'AAA#####C', '#AAAAAABC'])).toEqual(3);
    });
});
