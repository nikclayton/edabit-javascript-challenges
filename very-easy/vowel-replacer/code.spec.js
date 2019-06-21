const replaceVowels = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(replaceVowels('the aardvark', '#')).toEqual('th# ##rdv#rk');
        expect(replaceVowels('minnie mouse', '?')).toEqual('m?nn?? m??s?');
        expect(replaceVowels('shakespeare', '*')).toEqual('sh*k*sp**r*');
        expect(replaceVowels('all is fair in love and war', '<')).toEqual('<ll <s f<<r <n l<v< <nd w<r');
    });
});
