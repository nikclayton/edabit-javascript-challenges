const getHashTags = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getHashTags('How the Avocado Became the Fruit of the Global Trade')).toEqual(['#avocado', '#became', '#global']);
        expect(getHashTags('Why You Will Probably Pay More for Your Christmas Tree This Year')).toEqual(['#christmas', '#probably', '#will']);
        expect(getHashTags('Hey Parents, Surprise, Fruit Juice Is Not Fruit')).toEqual(['#surprise', '#parents', '#fruit']);
        expect(getHashTags('Visualizing Science')).toEqual(['#visualizing', '#science']);
        expect(getHashTags('Minecraft Stars on Youtube Share Secrets to Their Fame')).toEqual(['#minecraft', '#youtube', '#secrets']);
        expect(getHashTags('Are You an Elite Entrepreneur?')).toEqual(['#entrepreneur', '#elite', '#are']);
    });
});
