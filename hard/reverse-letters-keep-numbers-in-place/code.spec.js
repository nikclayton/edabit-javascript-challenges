const reverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reverse('ab89c')).toEqual('cb89a');
        expect(reverse('jkl5mn923o')).toEqual('onm5lk923j');
        expect(reverse('123a45')).toEqual('123a45');
        expect(reverse('a1b1c')).toEqual('c1b1a');
    });
});
