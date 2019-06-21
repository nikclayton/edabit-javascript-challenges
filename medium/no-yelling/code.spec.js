const noYelling = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(noYelling('What went wrong?????????')).toEqual('What went wrong?');
        expect(noYelling('Oh my goodness!!!')).toEqual('Oh my goodness!');
        expect(noYelling('WHAT!')).toEqual('WHAT!');
        expect(noYelling('WHAT?')).toEqual('WHAT?');
        expect(noYelling('Oh my goodness!')).toEqual('Oh my goodness!');
        expect(noYelling('I just cannot believe it.')).toEqual('I just cannot believe it.');
        expect(noYelling('I just!!! can!!! not!!! believe!!! it!!!')).toEqual('I just!!! can!!! not!!! believe!!! it!');
        expect(noYelling('That\'s a ton!! of cheese!!!!')).toEqual('That\'s a ton!! of cheese!');
    });
});
