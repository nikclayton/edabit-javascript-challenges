const youtubeId = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(youtubeId('https://www.youtube.com/watch?v=XPEr1cArWRg')).toEqual('XPEr1cArWRg');
        expect(youtubeId('http://www.youtube.com/watch?v=-SNQGyVW_YI&t=8871')).toEqual('-SNQGyVW_YI');
        expect(youtubeId('https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4')).toEqual('vxP3bY-XxY4');
        expect(youtubeId('www.youtube.com/watch?list=PL3QZUm48uWnsdFakp3A2fI-NzmfH1jyQe&v=yv56ncTdTmU&index=8')).toEqual('yv56ncTdTmU');
        expect(youtubeId('https://youtu.be/BCDEDi5gDPo')).toEqual('BCDEDi5gDPo');
        expect(youtubeId('https://www.youtube.com/watch?feature=youtu.be&v=jOxnoDi9IYg&t=3311s')).toEqual('jOxnoDi9IYg');
        expect(youtubeId('https://www.youtube-nocookie.com/embed/2w9SQjdn9U4')).toEqual('2w9SQjdn9U4');
    });
});
