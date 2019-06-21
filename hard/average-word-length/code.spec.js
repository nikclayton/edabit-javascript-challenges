const averageWordLength = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(averageWordLength('A B C.')).toEqual(1);
        expect(averageWordLength('What a gorgeous day.')).toEqual(4);
        expect(averageWordLength('Dude, this is so awesome!')).toEqual(3.8);
        expect(averageWordLength('Working on my tan right now.')).toEqual(3.67);
        expect(averageWordLength('Having a blast partying in Las Vegas.')).toEqual(4.29);
        expect(averageWordLength('Have you ever wondered what Saturn looks like?')).toEqual(4.75);
        expect(averageWordLength('I just planted a young oak tree, wonder how tall it will grow in a few years?')).toEqual(3.47);
    });
});
