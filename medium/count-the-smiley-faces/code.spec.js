const countSmileys = require('./code');

describe('Tests', () => {
    test('An empty array should return 0', () => {
        expect(countSmileys([])).toEqual(0);
    });
    
    test('the tests', () => {
        expect(countSmileys([':)', ';(', ';}', ':-D'])).toEqual(2);
        expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toEqual(3);
        expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
        expect(countSmileys([';(', ':>', ':}', ':]'])).toEqual(0);
        expect(countSmileys([':)', ':)', ':)', ':)', ':)', ':)', ':)', ':)', ':)', ':)', ':)', ':)', ':)'])).toEqual(13);
        expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toEqual(2);
        expect(countSmileys([':-)', ';~D', ':-D', ':_D'])).toEqual(3);
        expect(countSmileys([':---)', '))', ';~~D', ';D'])).toEqual(1);
        expect(countSmileys([';~)', ':)', ':-)', ':--)'])).toEqual(3);
        expect(countSmileys([':o)', ':--D', ';-~)'])).toEqual(0);
    });
});
