const sortByLetter = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortByLetter(['932c', '832u32', '2344b'])).toEqual(['2344b', '932c', '832u32']);
        expect(sortByLetter(['99a', '78b', 'c2345', '11d'])).toEqual(['99a', '78b', 'c2345', '11d']);
        expect(sortByLetter(['572z', '5y5', '304q2'])).toEqual(['304q2', '5y5', '572z']);
        expect(sortByLetter([])).toEqual([]);
    });
});
