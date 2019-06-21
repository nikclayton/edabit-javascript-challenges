const bucketize = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bucketize('she sells sea shells by the sea', 2)).toEqual([]);
        expect(bucketize('ab bc cd', 1)).toEqual([]);
        expect(bucketize('she sells sea shells by the sea', 10)).toEqual(['she sells', 'sea shells', 'by the sea']);
        expect(bucketize('the mouse jumped over the cheese', 7)).toEqual(['the', 'mouse', 'jumped', 'over', 'the', 'cheese']);
        expect(bucketize('fairy dust coated the air', 20)).toEqual(['fairy dust coated', 'the air']);
        expect(bucketize('do the hokey pokey', 6)).toEqual(['do the', 'hokey', 'pokey']);
        expect(bucketize('do the hokey pokey', 12)).toEqual(['do the hokey', 'pokey']);
        expect(bucketize('rich magnificent trees dotted the landscape', 12)).toEqual(['rich', 'magnificent', 'trees dotted', 'the', 'landscape']);
        expect(bucketize('rich magnificent trees dotted the landscape', 15)).toEqual(['rich', 'magnificent', 'trees dotted', 'the landscape']);
        expect(bucketize('rich magnificent trees dotted the landscape', 18)).toEqual(['rich magnificent', 'trees dotted the', 'landscape']);
        expect(bucketize('rich magnificent trees dotted the landscape', 22)).toEqual(['rich magnificent trees', 'dotted the landscape']);
        expect(bucketize('rich magnificent trees dotted the landscape', 40)).toEqual(['rich magnificent trees dotted the', 'landscape']);
        expect(bucketize('rich magnificent trees dotted the landscape', 43)).toEqual(['rich magnificent trees dotted the landscape']);
        expect(bucketize('beep bo bee bop bee bo bo bop', 6)).toEqual(['beep', 'bo bee', 'bop', 'bee bo', 'bo bop']);
        expect(bucketize('beep bo bee bop bee bo bo bop', 10)).toEqual(['beep bo', 'bee bop', 'bee bo bo', 'bop']);
        expect(bucketize('a b c d e', 3)).toEqual(['a b', 'c d', 'e']);
        expect(bucketize('a b c d e', 2)).toEqual(['a', 'b', 'c', 'd', 'e']);
        expect(bucketize('a b c d e', 1)).toEqual(['a', 'b', 'c', 'd', 'e']);
        expect(bucketize('a b c d e', 2)).toEqual(['a', 'b', 'c', 'd', 'e']);
        expect(bucketize('a b c d e', 1)).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
});
