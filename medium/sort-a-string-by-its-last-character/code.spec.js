const sortByLast = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortByLast('herb camera dynamic')).toEqual('camera herb dynamic');
        expect(sortByLast('stab traction artist approach')).toEqual('stab approach traction artist');
        expect(sortByLast('sample partner autonomy swallow trend')).toEqual('trend sample partner swallow autonomy');
        expect(sortByLast('dividend platform pupil conclusion silence breakfast')).toEqual('dividend silence pupil platform conclusion breakfast');
        expect(sortByLast('harm')).toEqual('harm');
        expect(sortByLast('card warrant opinion medium illustrate')).toEqual('card illustrate medium opinion warrant');
        expect(sortByLast('cause fine virtue')).toEqual('cause fine virtue');
        expect(sortByLast('introduce fashionable cause sacrifice reality')).toEqual('introduce fashionable cause sacrifice reality');
        expect(sortByLast('brick moral institution loud talk resign worth')).toEqual('loud worth brick talk moral institution resign');
    });
});
