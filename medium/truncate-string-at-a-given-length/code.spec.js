const truncate = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(truncate('Lorem ipsum dolor sit amet.', 11)).toEqual('Lorem ipsum');
        expect(truncate('Lorem ipsum dolor sit amet.', 16)).toEqual('Lorem ipsum');
        expect(truncate('Lorem ipsum', 20)).toEqual('Lorem ipsum');
        expect(truncate('Lorem ipsum', 4)).toEqual('');
        expect(truncate('Lorem ipsum', 0)).toEqual('');
        expect(truncate('', 30)).toEqual('');
    });
});
