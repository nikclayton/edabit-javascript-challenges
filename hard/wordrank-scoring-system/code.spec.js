const wordRank = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(wordRank('If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?')).toEqual('chocolate');
        expect(wordRank('The memory we used to share is no longer coherent.')).toEqual('memory');
        expect(wordRank('He didn’t want to go to the dentist, yet he went anyway.')).toEqual('dentist');
        expect(wordRank('What was the person thinking when they discovered cow’s milk was fine for human consumption... and why did they do it in the first place!?')).toEqual('consumption');
        expect(wordRank('Mary plays the piano.')).toEqual('plays');
        expect(wordRank('I hear that Nancy is very pretty.')).toEqual('pretty');
        expect(wordRank('If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.')).toEqual('sounds');
        expect(wordRank('She works two jobs to make ends meet; at least, that was her reason for not having time to join us.')).toEqual('works');
        expect(wordRank('Wednesday is hump day, but has anyone asked the camel if he’s happy about it?')).toEqual('Wednesday');
        expect(wordRank('The body may perhaps compensates for the loss of a true metaphysics.')).toEqual('metaphysics');
        expect(wordRank('The clock within this blog and the clock on my laptop are 1 hour different from each other.')).toEqual('different');
        expect(wordRank('Check back tomorrow; I will see if the book has arrived.')).toEqual('tomorrow');
    });
});
