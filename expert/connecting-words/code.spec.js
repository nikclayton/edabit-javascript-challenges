const join = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(join(['happy', 'python', 'honey', 'yelp', 'plank', 'lanky'])).toEqual(['happythoneyelplanky', 1]);
        expect(join(['move', 'over', 'very'])).toEqual(['movery', 3]);
        expect(join(['oven', 'envier', 'erase', 'serious'])).toEqual(['ovenvieraserious', 2]);
        expect(join(['to', 'ops', 'psy', 'syllable'])).toEqual(['topsyllable', 1]);
        expect(join(['aaa', 'bbb', 'ccc', 'ddd'])).toEqual(['aaabbbcccddd', 0]);
        expect(join(['abcde', 'bcdefghi', 'efghi', 'fghij', 'ghijklmnop'])).toEqual(['abcdefghijklmnop', 4]);
        expect(join(['aab', 'abcccd', 'cdeeef', 'effff'])).toEqual(['aabcccdeeeffff', 2]);
    });
});
