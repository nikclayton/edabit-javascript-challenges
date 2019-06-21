const subReddit = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(subReddit('https://www.reddit.com/r/relationships/')).toEqual('relationships');
        expect(subReddit('https://www.reddit.com/r/mildlyinteresting/')).toEqual('mildlyinteresting');
        expect(subReddit('https://www.reddit.com/r/funny/')).toEqual('funny');
        expect(subReddit('https://www.reddit.com/r/CrappyDesign/')).toEqual('CrappyDesign');
        expect(subReddit('https://www.reddit.com/r/confession/')).toEqual('confession');
        expect(subReddit('https://www.reddit.com/r/AskMen/')).toEqual('AskMen');
        expect(subReddit('https://www.reddit.com/r/comics/')).toEqual('comics');
        expect(subReddit('https://www.reddit.com/r/lifehacks/')).toEqual('lifehacks');
        expect(subReddit('https://www.reddit.com/r/wholesomememes/')).toEqual('wholesomememes');
        expect(subReddit('https://www.reddit.com/r/iamverysmart/')).toEqual('iamverysmart');
        expect(subReddit('https://www.reddit.com/r/starterpacks/')).toEqual('starterpacks');
        expect(subReddit('https://www.reddit.com/r/awww/')).toEqual('awww');
    });
});
